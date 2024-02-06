'use client'

import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

import Navbar from "../components/navbar";
import gamingData from '../productinfos/gaming.json';

type Game = {
    "game title": string;
    "average frame-rate": number;
    "gpu": string;
    "cpu": string;
    "cpu_price": number;
    "gpu_price": number;
};

const Gaming: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [highlightedRow, setHighlightedRow] = useState<number | null>(null);

    const updatedTable: Game[] = gamingData;

    return (
        <>
            <Head>
                <title>Gaming</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="grid grid-cols-2 lg:grid-cols-2 gap-4">

                <section className="mr-4">
                    <Navbar />
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex justify-left items-center mt-24"></div>
                            <div className="w-full flex justify-center items-center">
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-4xl font-bold text-white mb-4">Game Benchmarks</h1>
                                    <div className="w-full flex justify-center items-center">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="w-full p-2 border-2 border-gray-300 rounded-md"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
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
                                                {updatedTable.map((game: Game, index: number) => (
                                                    <tr
                                                        key={index}
                                                        className={`${highlightedRow === index ? 'bg-gray-700' : ''}`}
                                                        onMouseEnter={() => setHighlightedRow(index)}
                                                        onMouseLeave={() => setHighlightedRow(null)}
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
                        </motion.div>
                    </section>
                    
                </main>
            </>
        );
};

export default Gaming;
