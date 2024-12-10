import React, { useState } from "react";
import axios from "axios";
import ResultsDisplay from "./ResultsDisplay";


interface FetchedData {
    json_dict: {
        introduction: string,
        fundemental_analysis: string,
        technical_analysis: string,
        economic_analysis: string,
        conclusion: string
    }
}

const SearchComponent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [data, setData] = useState<FetchedData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            setError("Please enter a search term.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const link = `http://127.0.0.1:8000/get_company_info/${searchTerm}`

            const response = await axios.get<FetchedData>(link);
            console.log(response.data);
            const usableData = response.data.json_dict;
            setData(response.data); // Update the fetched data
        } catch (err) {
            setError("Failed to fetch search results. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div >
            <strong><h1>Investor Summary Search</h1></strong>
            <br></br>
            <div className="flex items-center border rounded-lg p-2 shadow-md bg-white">
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Enter search term"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg text-gray-700"

                />
                <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"

                >
                    {loading ? "Searching..." : "Search Company"}
                </button>
            </div>

            {/* Error Message */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Display Results */}
            <br />
            {data && (
                <ResultsDisplay data={data.json_dict} />  // Pass the fetched data to ResultsDisplay
            )}
            <br></br>
            {loading && <p>Loading a detailed company overview</p>}
        </div>
    );
};

export default SearchComponent;