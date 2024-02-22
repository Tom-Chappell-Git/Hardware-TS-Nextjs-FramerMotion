'use client'

// Import React and any other necessary dependencies
import { motion } from "framer-motion"
import Head from "next/head"
import { useState } from "react"
import Link from "next/link"

import Navbar from "../components/navbar";
import benchmarksJson from '../productinfos/blender.json';
import MobileNavbar from "../components/mobileNavbar";

import { useMediaQuery } from "@mui/material";
import { Tooltip } from "@mui/material";




// Define the component
const Benchmarks: React.FC = () => {

  const isMobile = useMediaQuery("(max-width: 640px)");



  // Define the state for the search term and set the initial value to an empty string 
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchTerm2, setSearchTerm2] = useState<string>('');
  const [highlightedRow, setHighlightedRow] = useState<number | null>(null);
  const [highlightedRow2, setHighlightedRow2] = useState<number | null>(null);
  

  // Define the filtered data for table 1
  const updatedTable = benchmarksJson.body.filter((item) =>
    searchTerm === ''
      ? true
      : (item as string[]).some((cell) =>
          cell && typeof cell === 'string' && cell.toLowerCase().includes(searchTerm.toLowerCase())
        )
  );

  // Define the filtered data for table 2
  const updatedTable2 = benchmarksJson.body.filter((item) =>
    searchTerm2 === ''
      ? true
      : (item as string[]).some((cell) =>
          cell && typeof cell === 'string' && cell.toLowerCase().includes(searchTerm2.toLowerCase())
        )
  );

  // Render the component
  return (
    <>
      <Head>
        <title>3D Benchmarks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Provide grid layout with two columns on large screens, 1 on small and med */}
      <main className="wrapper">

      <motion.h1 className="page-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1}}
        >3D Benchmarks</motion.h1>

      <section className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 md:gap-0 sm:gap-0 bench3d benchxsm">

        <section className="mr-4 grid-cols-1 ">

        {isMobile ? <MobileNavbar /> : <Navbar />}

          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-left items-center mt-24">
              <div className="w-full flex justify-center items-center">
                <Tooltip title="Search for a CPU or GPU by typing into the input field" arrow>
                <label  htmlFor="searchInput" aria-label="Search for a CPU or GPU by typing into the input field one"
                        className="w-full"
                >
                  <input
                    id="searchInput"
                    className="text-black font-semibold / border-2 border-white rounded-lg w-full pl-2 py-1"
                    type="text"
                    placeholder="Search for a CPU or GPU"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </label>
                </Tooltip>
              </div>
            </div>
          </motion.div>
        
        
        {/*  Render the table 1 and the comparison section if a row is highlighted in both tables  */}
          {highlightedRow !== null && highlightedRow2 !== null && (() => {
            // Calculate the percentage increase in the median score between the two highlighted rows 
            const firstTableSelected = highlightedRow !== null && highlightedRow2 !== null && highlightedRow < highlightedRow2;

            const percentageIncrease = firstTableSelected
              ? ((Number(updatedTable[highlightedRow][1]) - Number(updatedTable2[highlightedRow2][1])) / Number(updatedTable2[highlightedRow2][1])) * 100
              : ((Number(updatedTable2[highlightedRow2][1]) - Number(updatedTable[highlightedRow][1])) / Number(updatedTable[highlightedRow][1])) * 100;
            return (
              <div className="mt-4">
                <h2 className="underline">Comparison:</h2>
                
                {/* If the percentage increase is greater than 0, render the text in green, else render it in red */}
                {percentageIncrease > 0 ? (
                  <p style={{ color: '#42f542' }}>{updatedTable[highlightedRow][0]} has a {percentageIncrease.toFixed(2)}% higher Median Score</p>
                ) : (
                  <p style={{ color: '#ff0011' }}>{updatedTable[highlightedRow][0]} has a {Math.abs(percentageIncrease).toFixed(2)}% lower Median Score</p>
                )}
              </div>
            );
          })()}

          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="mt-10">
              <Tooltip title="Select a device from each table to compare" arrow>
              <table className="border-2 w-full mx-auto">
                <thead>
                  <tr> 
                    {benchmarksJson.header.map((headerItem, index) => ( // Map over the header array and render a table header for each item 
                      <th className=" p-2" key={index}>{headerItem}</th>  // Render the header item and set the key to the index of the item in the array
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {benchmarksJson.body
                    .filter((item) =>
                      searchTerm === ''
                        ? true
                        : (item as string[]).some((cell) => // Filter the data based on the search term
                          cell && typeof cell === 'string' && cell.toLowerCase().includes(searchTerm.toLowerCase()) // Check if the cell contains the search term and return true if it does 
                        )
                    )
                    .map((row, rowIndex) => ( // Map over the filtered data and render a table row for each item
                      <motion.tr
                        key={rowIndex}
                        onClick={() => setHighlightedRow(rowIndex)} // Set the highlightedRow state to the current index when the table row is clicked
                        initial={{ backgroundColor: 'transparent' }}
                        animate={{
                          backgroundColor: highlightedRow === rowIndex ? '#4A5568' : 'transparent', // Set the background color of the table row to gray if the row is highlighted, else set it to transparent
                        }}

                        className={'hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer'}
                      >
                        {row.map((cell, cellIndex) => (
                          <td className="pt-2 pl-2 border-t-2 border-white/70" key={cellIndex}>{cell}</td>
                        ))}
                      </motion.tr>
                    ))}
                </tbody>
              </table>
              </Tooltip>
            </div>

                          {/* Link to the Blender website where the stats came from */}
            <article className="col-span-2 text-white underline text-xs ">
            <Link href="https://opendata.blender.org/">Benchmark data taken from Blender.org</Link>
          </article>
          
          </motion.article>
        </section>


{/* ------------------- Table 2 ----------------- */}
        <section> 
          
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-left items-center mt-24">
              <div className="w-full flex justify-center items-center">
              <Tooltip title="Search for a CPU or GPU by typing into the input field" arrow>
              <label  htmlFor="searchInput" aria-label="Search for a CPU or GPU by typing into the input field two"
                      className="w-full"
                >
                  <input
                  
                    id="searchInput"
                    className="text-black font-semibold / border-2 border-white rounded-lg w-full / pl-2 py-1"
                    type="text"
                    placeholder="Search for a CPU or GPU"
                  value={searchTerm2}
                  onChange={(e) => setSearchTerm2(e.target.value)} // Update the search term state when the input value changes 
                />
              </label>
              </Tooltip>
              </div>
            </div>
          </motion.article>

          {/* Render the table 2 and the comparison section if a row is highlighted in both tables */}
          {highlightedRow !== null && highlightedRow2 !== null && (() => { // If a row is highlighted in both tables, render the comparison section
           
           // Calculate the percentage increase in the median score between the two highlighted rows 
            const firstTableSelected = highlightedRow !== null && highlightedRow2 !== null && highlightedRow2 < highlightedRow;

            const percentageIncrease = firstTableSelected
            
              ? (highlightedRow < highlightedRow2
                ? ((Number(updatedTable[highlightedRow][1]) - Number(updatedTable2[highlightedRow2][1])) / Math.abs(Number(updatedTable2[highlightedRow2][1]))) * 100
                : ((Number(updatedTable2[highlightedRow2][1]) - Number(updatedTable[highlightedRow][1])) / Math.abs(Number(updatedTable[highlightedRow][1]))) * 100)
              : 0;

            return ( // Render the comparison section 
              
              <div className="mt-4">
                <h2 className="underline">Comparison:</h2>

                {/* If the percentage increase is greater than 0, render the text in green, else render it in red */}
                {percentageIncrease > 0 ? (
                  <p style={{ color: '#ff0011' }}>{updatedTable2[highlightedRow2][0]} has a {percentageIncrease.toFixed(2)}% lower Median Score</p>
                ) : (
                  <p style={{ color: '#42f542' }}>{updatedTable2[highlightedRow2][0]} has a {Math.abs(percentageIncrease).toFixed(2)}% higher Median Score</p>
                )}

              </div>
            );
          })()}

          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <section className="mt-10">
            <Tooltip title="Select a device from each table to compare" arrow>
              <table className="border-2 w-full mx-auto">
                <thead>
                  <tr>
                    {benchmarksJson.header.map((headerItem, index) => ( // Map over the header array and render a table header for each item
                      <th className=" p-2" key={index}>{headerItem}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="cursor-pointer">
                  {benchmarksJson.body
                    .filter((item) => // Filter the data based on the search term 
                      searchTerm2 === ''
                        ? true
                        : (item as string[]).some((cell) =>
                          cell && typeof cell === 'string' && cell.toLowerCase().includes(searchTerm2.toLowerCase()) // Check if the cell contains the search term and return true if it does
                        )
                    )
                    .map((row, rowIndex) => (
                      <motion.tr
                        key={rowIndex}
                        onClick={() => setHighlightedRow2(rowIndex)} // Set the highlightedRow state to the current index when the table row is clicked
                        initial={{ backgroundColor: 'transparent' }}
                        animate={{
                          backgroundColor: highlightedRow2 === rowIndex ? '#4A5568' : 'transparent',
                        }}

                        className={'hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer'}
                      >
                        {row.map((cell, cellIndex) => ( // Map over the filtered data and render a table row for each item
                          <td className="pt-2 pl-2 border-t-2 border-white/70" key={cellIndex}>{cell}</td>
                        ))}
                      </motion.tr>
                    ))}
                </tbody>
              </table>
              </Tooltip>
            </section>
                        {/* Link to the Blender website where the stats came from */}
            <article className="col-span-2 text-white underline text-xs ">
            <Link href="https://opendata.blender.org/">Benchmark data taken from Blender.org</Link>
          </article>

          </motion.article>
        </section>

      </section>
      </main>
    </>
  );
};

// Export the component
export default Benchmarks;
