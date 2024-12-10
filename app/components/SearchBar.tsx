"use client"; // This ensures the component is rendered on the client

import { FC, useState } from "react";
import axios from "axios";


interface FetchedData {
    introduction: string,
    fundemental_analysis: string,
    technical_analysis: string,
    economic_analysis: string,
    conclusion: string,
}
interface SearchBarProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setData: React.Dispatch<React.SetStateAction<FetchedData | null>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm, setData }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    const handleSearch = async () => {
        if (!inputValue.trim()) {
            setError("Please enter a search term.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const link = `http://127.0.0.1:8000/get_company_info/${inputValue}`
            const response = await axios.get<FetchedData>(link);
            setData(response.data); // Update data in the parent component
            setSearchTerm(inputValue); // Update the search term
        } catch (err) {
            setError("Failed to fetch search results.");
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="flex items-center border rounded-lg p-2 shadow-md bg-white">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
        className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg text-gray-700"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        disabled={loading}     
      >
        {loading ? "Searching..." : "Search Company"}

      </button>
    </div>
  );
};

export default SearchBar;
