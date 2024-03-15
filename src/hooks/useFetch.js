import{ useEffect, useState } from "react";

export const FetchDetails = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const resp = await fetch(url);
                if(!resp.ok){
                    throw new Error(resp.statusText);
                }
                const result = await resp.json();
                setLoading(false);
                setData(result);
                setError("");
            } catch(error){
                setLoading(false);
                setError(error.message);
                
            }
            
        }
        fetchData();
    }, [url])

    return {data, loading, error}
}
