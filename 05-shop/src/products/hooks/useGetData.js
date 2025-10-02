import { useEffect, useState } from 'react';
const BASE_URL = "https://fakestoreapi.com";
export default function useGetData(endpoint) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const getData = async (endpoint) => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch(BASE_URL + endpoint);
            if (!res.ok) throw new Error("Network Error");
            const parsedData = await res.json();
            setData(parsedData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getData(endpoint);
    }, [endpoint]);

    return { data, loading, error };
}
