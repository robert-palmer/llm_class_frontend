"use client"; // Make this a Client Component


import Image from "next/image";
import SearchBar from "./components/SearchBar";
import BigTextArea from "./components/BigTextArea";
import FetchTextData from "./components/FetchData";
import { Main } from "next/document";
import SearchComponent from "./components/SearchComponent";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <SearchBar /> */}
        {/* <Main /> */}
        {/* <FetchTextData /> */}
        <SearchComponent />
      </main>
    
    </div>
  );
}
