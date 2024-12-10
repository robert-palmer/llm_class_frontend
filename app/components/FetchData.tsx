import React, { useState, useEffect } from "react";
import axios from "axios";

interface FetchedData {
    introduction: string,
    fundemental_analysis: string,
    technical_analysis: string,
    economic_analysis: string,
    conclusion: string,
}

const FetchTextData = () => {
    const [data, setData] = useState<FetchedData | null>(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("http://127.0.0.1:8000/get_company_info/aal");
                console.log(response.data);
                setData(response.data.json_dict); // Assuming the API returns a plain text response or JSON with the text
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {/* <h1>Fetched Data:</h1>
            
            <p>{data?.conclusion}</p> */}
            {data && (
                <div>
                    <h1>Summary Report:</h1>
                    <br></br>
                    <strong><h3>Introduction:</h3></strong>
                    <br></br>

                    <p>{data.introduction}</p>
                    <br></br>

                    <strong><h3>Fundemental Analysis:</h3></strong>
                    <br></br>

                    <p>{data.fundemental_analysis}</p>
                    <br></br>

                    <strong><h3>Technical Analysis:</h3></strong>
                    <br></br>

                    <p>{data.technical_analysis}</p>
                    <br></br>

                    <strong><h3>Economic Analysis:</h3></strong>
                    <br></br>

                    <p>{data.economic_analysis}</p>
                    <br></br>

                    <strong><h3>Conclusion:</h3></strong>
                    <br></br>

                    <p>{data.conclusion}</p>
                    <br></br>

                </div>
            )}
        </div>
    );
};

export default FetchTextData;