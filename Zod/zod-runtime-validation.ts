import { z } from "zod";
import { fromZodError } from "zod-validation-error"; // Note: requires 'npm install zod-validation-error'

// ----------------------------------------------------------------------------
// 1. THE MAGIC TRICK: z.infer (Schema to TS Type)
// ----------------------------------------------------------------------------
// Step 1: Define runtime validation schema once
const UserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  age: z.number().positive(),
  isProgrammer: z.boolean().default(true),
  hobby: z.enum(["programming", "weightlifting", "guitar"])
});

// Step 2: Extract compile-time TypeScript type automatically
type User = z.infer<typeof UserSchema>;

// ----------------------------------------------------------------------------
// 2. PRIMITIVE TYPES & MODIFIERS
// ----------------------------------------------------------------------------
const DataSchema = z.object({
  name: z.string(),                     // Standard required string
  age: z.number(),                      // Standard required number
  birthday: z.date(),                   // Standard required date
  
  optionalField: z.string().optional(), // String or undefined
  nullableField: z.number().nullable(), // Number or null
  nullishField: z.boolean().nullish(),  // Boolean, null, or undefined
  
  score: z.number().default(100),       // Defaults to 100 if missing
  randomId: z.string().default(() => crypto.randomUUID()), // Evaluates function if missing
});

// ----------------------------------------------------------------------------
// 3. PARSING: parse vs safeParse
// ----------------------------------------------------------------------------
const incomingData = { username: "Ky", age: 25 }; // Invalid: username too short

// Method A: parse (Aggressive - Throws error if invalid. Good for APIs)
try {
  const validData = UserSchema.parse(incomingData); // Execution STOPS and throws ZodError here
} catch (error) {
  console.error("Validation failed! Execution stopped.");
}

// Method B: safeParse (Safe - Returns success boolean. Good for React forms)
const result = UserSchema.safeParse(incomingData);

if (!result.success) {
  console.log(result.error.format()); // Contains all validation errors safely
} else {
  console.log("Success! Welcome,", result.data.username); // result.data is 100% typed
}

// ----------------------------------------------------------------------------
// 4. ADVANCED OBJECT MANIPULATIONS
// ----------------------------------------------------------------------------
const BaseUserSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
});

// Create new schemas dynamically from existing ones
const UpdateUserSchema = BaseUserSchema.partial(); // Makes ALL fields optional (Great for PATCH APIs)
const PublicProfileSchema = BaseUserSchema.pick({ id: true, username: true }); // Keeps ONLY specific fields
const SecureUserSchema = BaseUserSchema.omit({ password: true }); // Drops ONLY specific fields
const AdminSchema = BaseUserSchema.extend({ role: z.literal("admin") }); // Adds new fields

// Unknown Key Handling (Default: Zod strips unknown keys out of the payload)
const StrictSchema = BaseUserSchema.strict(); // Throws error if unknown payload keys exist
const LooseSchema = BaseUserSchema.passthrough(); // Keeps unknown keys instead of stripping them

// ----------------------------------------------------------------------------
// 5. ARRAYS, TUPLES, AND SETS
// ----------------------------------------------------------------------------
const FriendsSchema = z.array(z.string()).nonempty("Must have at least one friend");
const CoordinateSchema = z.tuple([z.number(), z.number(), z.number()]); // Fixed length/type: [x,y,z]
const UniqueIDsSchema = z.set(z.number()); // Array where every value MUST be unique

// ----------------------------------------------------------------------------
// 6. CUSTOM VALIDATION LOGIC (.refine)
// ----------------------------------------------------------------------------
// Adds complex conditional logic to a schema
const CompanyEmailSchema = z.string().email().refine((val) => {
  return val.endsWith("@mycompany.com");
}, {
  message: "Email must be a valid @mycompany.com address",
});

type CompanyEmail = z.infer<typeof CompanyEmailSchema>;

// ----------------------------------------------------------------------------
// 7. FORMATTED ERROR MESSAGES
// ----------------------------------------------------------------------------
// Inline custom messages
// Basic number schema with a minimum value. Customizing low-level "required_error"
// / "invalid_type_error" options can vary between zod versions, so keep this form
// for broader compatibility.
const AgeSchema = z.number().min(18, { message: "You must be at least 18" });

// Using external library (zod-validation-error) to flatten giant Zod objects
const ageResult = AgeSchema.safeParse("twenty");

if (!ageResult.success) {
  const readableError = fromZodError(ageResult.error);
  console.log(readableError.message); 
  // Outputs clean string: "Validation error: Expected number, received string"
}