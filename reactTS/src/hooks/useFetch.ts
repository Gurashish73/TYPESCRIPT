import {useEffect, useState} from "react"

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });
//useEffect to make fetch request
    useEffect(() => {
        let isMounted = true;
        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json() as Promise<T>;
            })
            .then((data) => {
                if (isMounted) {
                    setState({ data, loading: false, error: null });
                }
            })
            .catch((error) => {
                if (isMounted) {
                    setState({ data: null, loading: false, error: error.message });
                }
            });

        return () => {
            isMounted = false;
        };
    }, [url]);

    return state;
}
