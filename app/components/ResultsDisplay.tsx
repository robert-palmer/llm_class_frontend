"use client"; // Make this a Client Component


import React from "react";

interface FetchedData {
    introduction: string,
    fundemental_analysis: string,
    technical_analysis: string,
    economic_analysis: string,
    conclusion: string,
}
interface ResultsDisplayProps {
    data: FetchedData | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ data }) => {
    return (
        <div>

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

export default ResultsDisplay;
