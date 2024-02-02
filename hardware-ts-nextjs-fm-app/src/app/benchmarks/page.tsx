'use client'

// Import React and any other necessary dependencies
import { motion } from "framer-motion"
import Head from "next/head"
import { useState } from "react"

import Navbar from "../components/navbar";
// import Search from "../components/search";
import benchmarksJson from '../productinfos/blender.json';
import { FaPercent } from "react-icons/fa";



// Define the component
const Benchmarks: React.FC = () => {

  // Define the state for the search term and set the initial value to an empty string 
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchTerm2, setSearchTerm2] = useState<string>('');
  const [highlightedRow, setHighlightedRow] = useState<number | null>(null);
  const [highlightedRow2, setHighlightedRow2] = useState<number | null>(null);


  // Render the component
  return (
    <>
      <Head>
        <title>Benchmarks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid lg:grid-cols-2 gap-4">

          <section>
            {/* <Navbar /> */}
          <Navbar />
      


          {/* <Search bar /> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-left items-center mt-24">
              
              <div className="w-full flex justify-center items-center">
                <input
                  className="text-black font-semibold / border-2 border-white rounded-lg w-full / pl-2 py-1"
                  type="text"
                  placeholder="Search for a CPU or GPU"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </motion.div>

          {
            highlightedRow !== null && highlightedRow2 !== null && (() => {
              const percentageIncrease = ((Number(benchmarksJson.body[highlightedRow][1]) - Number(benchmarksJson.body[highlightedRow2][1])) / Number(benchmarksJson.body[highlightedRow2][1])) * 100;
              return (
                <div className="mt-4">
                  <h2 className="underline">Comparison:</h2>

                  {percentageIncrease > 0 ? (
                    <p style={{ color: 'green' }}>highlightedRow has a {percentageIncrease.toFixed(2)}% higher Median Score</p>
                  ) : (
                    <p style={{ color: 'red' }}>highlightedRow2 has a {Math.abs(percentageIncrease).toFixed(2)}% higher Median Score</p>
                  )}
                </div>
              );
            })()}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="mt-20">
              <table className="border-2 w-full mx-auto">
                <thead>
                  <tr>
                    {benchmarksJson.header.map((headerItem, index) => (
                      <th className=" p-2" key={index}>{headerItem}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {benchmarksJson.body
                    .filter((item) =>
                      searchTerm === ''
                        ? true
                        : (item as string[]).some((cell) =>
                            cell && typeof cell === 'string' && cell.toLowerCase().includes(searchTerm.toLowerCase())
                          )
                    )
                    .map((row, rowIndex) => (
                      <motion.tr
                        key={rowIndex}
                        onClick={() => setHighlightedRow(rowIndex)}
                        initial={{ backgroundColor: 'transparent' }}
                        animate={{
                          backgroundColor: highlightedRow === rowIndex ? '#4A5568' : 'transparent',
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
            </div>
            
          </motion.div>
          </section>

          <section>
          {/* <Search bar /> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-left items-center mt-24">
              <div className="w-full flex justify-center items-center">
                <input
                  className="text-black font-semibold / border-2 border-white rounded-lg w-full / pl-2 py-1"
                  type="text"
                  placeholder="Search for a CPU or GPU"
                  value={searchTerm2}
                  onChange={(e) => setSearchTerm2(e.target.value)}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="mt-20">
              <table className="border-2 w-full mx-auto">
                <thead>
                  <tr>
                    {benchmarksJson.header.map((headerItem, index) => (
                      <th className=" p-2" key={index}>{headerItem}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="cursor-pointer">
                  {benchmarksJson.body
                    .filter((item) =>
                      searchTerm2 === ''
                        ? true
                        : (item as string[]).some((cell) =>
                            cell && typeof cell === 'string' && cell.toLowerCase().includes(searchTerm2.toLowerCase())
                          )
                    )
                    .map((row, rowIndex) => (
                      <motion.tr
                        key={rowIndex}
                        onClick={() => setHighlightedRow2(rowIndex)}
                        initial={{ backgroundColor: 'transparent' }}
                        animate={{
                          backgroundColor: highlightedRow2 === rowIndex ? '#4A5568' : 'transparent',
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
            </div>
            </motion.div>
          </section>

       </main>
      </>
  );
};

// Export the component
export default Benchmarks;


// Pseudocode for comparison function:
// make the cell of the table clickable
// when clicked, the cell will be highlighted

// the cell will be compared to the other cell
// if the cell is greater than the other cell, the cell will be highlighted green with an arrow pointing up
// if the cell is less than the other cell, the cell will be highlighted red with an arrow pointing down

// ------------------------------

// 