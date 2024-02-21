'use client'

import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

import Navbar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar";
import gamingData from '../productinfos/gaming.json';
import { useMediaQuery } from "@mui/material";

type Game = {
    "game title": string;
    "average frame-rate": number;
    "gpu": string;
    "cpu": string;
    "cpu_price": number;
    "gpu_price": number;
};



const Gaming: React.FC = () => {

    const isMobile = useMediaQuery("(max-width: 640px)");

    // create state for the search term and highlighted row
    const [searchTerm, setSearchTerm] = useState<string>('');

    // const [searchTerm2, setSearchTerm2] = useState<string>('');
    const [highlightedRow, setHighlightedRow] = useState<number | null>(null);

    // assign the gamingData to a new variable to avoid mutating the original data array
    const updatedTable: Game[] = gamingData;

    return (
        
        <>

            <Head>
                <title>Gaming</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

        <main className="wrapper">

            {/* Probide grid layout with two columns on large screens, 1 on small and med */}
            <section className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 bench-gaming gamingxsm`}>

                <section className="mr-4 grid-span-1">
                   
                   {/* Import the navbar component to be rendered here */}
                   {isMobile ? <MobileNavbar /> : <Navbar />}
                    
                    {/* Use framer motion to animate the content */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Create a container to hold the content */}
                        <div className="flex justify-left items-center mt-24"></div>
                            <div className="w-full flex justify-center items-center">
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-4xl font-bold text-white mb-4">Game Benchmarks</h1>
                                    <div className="w-full flex justify-center items-center">
                                        <label  htmlFor="search" aria-label="search input for gaming benchmarks"
                                                className="w-full" >
                                        <input
                                            id="search"
                                            type="text"
                                            placeholder="Search"
                                            className="w-full p-2 border-2 border-gray-300 rounded-md text-black"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)} // Update the search term state when the input value changes
                                        />
                                        </label>
                                    </div>

                                    {/* Create a table to display the gaming data */}
                                    <div className="w-full flex justify-center items-center">
                                        <table className="w-3/4 mt-8">
                                            <thead>
                                                <tr>
                                                    <th className="p-2 border-2 border-gray-300 text-center">Game Title</th>
                                                    <th className="p-2 border-2 border-gray-300 text-center">Average Frame-rate</th>
                                                    <th className="p-2 border-2 border-gray-300 text-center">GPU</th>
                                                    <th className="p-2 border-2 border-gray-300 text-center">CPU</th>
                                                    <th className="p-2 border-2 border-gray-300 text-center">CPU Price</th>
                                                    <th className="p-2 border-2 border-gray-300 text-center">GPU Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* Map over the updatedTable array and render a table row for each game */}
                                                {updatedTable.map((game: Game, index: number) => (
                                                    <tr
                                                        key={index}
                                                        className={`${highlightedRow === index ? 'bg-gray-700' : ''}`}
                                                        onMouseEnter={() => setHighlightedRow(index)} // Set the highlightedRow state to the current index when the mouse enters the table row
                                                        onMouseLeave={() => setHighlightedRow(null)} // Set the highlightedRow state to null when the mouse leaves the table row
                                                        >
                                                        <td className="p-2 border-2 border-gray-300 text-center">{game["game title"]}</td>
                                                        <td className="p-2 border-2 border-gray-300 text-center">{game["average frame-rate"]}</td>
                                                        <td className="p-2 border-2 border-gray-300 text-center">{game["gpu"]}</td>
                                                        <td className="p-2 border-2 border-gray-300 text-center">{game["cpu"]}</td>
                                                        <td className="p-2 border-2 border-gray-300 text-center">{game["cpu_price"]}</td>
                                                        <td className="p-2 border-2 border-gray-300 text-center">{game["gpu_price"]}</td>
                                                    </tr>
                                              
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    </section>

                    <section className="mr-4 grid-span-2">

                        <h2 className="my-36 mx-10">Game Data</h2>

                    </section>
                    
                </section>
                
            </main>
            </>
        );
};

export default Gaming;
