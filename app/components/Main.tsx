"use client"; // Make this a Client Component

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ResultsDisplay from "./ResultsDisplay";

interface FetchedData {
    introduction: string,
    fundemental_analysis: string,
    technical_analysis: string,
    economic_analysis: string,
    conclusion: string,
}


const ParentComponent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [data, setData] = useState<FetchedData | null>(null);

    return (
        <div>
            <h1>Search Application</h1>
            {/* Pass down search state management to the SearchBar */}
            <SearchBar setSearchTerm={setSearchTerm} setData={setData} />
            {/* Pass the fetched data to ResultsDisplay */}
            <ResultsDisplay data={data} />
        </div>
    );
};

export default ParentComponent;

