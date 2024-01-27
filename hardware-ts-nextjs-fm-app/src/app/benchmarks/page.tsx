'use client'

// Import React and any other necessary dependencies
import { motion } from "framer-motion"
import Head from "next/head"
import { useState } from "react"

import Navbar from "../components/navbar";
// import Search from "../components/search";
import benchmarksJson from '../productinfos/blender.json';


// Define the component
const Benchmarks: React.FC = () => {

  // Define the state for the search term and set the initial value to an empty string 
  const [searchTerm, setSearchTerm] = useState<string>('');


  // Render the component
  return (
    <>
      <Head>
        <title>Benchmarks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid lg:grid-cols-2">

          <section>
            {/* <Navbar /> */}
          <Navbar />
          </section>

          <section>

          {/* <Search bar /> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-left items-center mt-24">
              <div className="w-1/2 flex justify-center items-center">
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
                      <th className=" pr-4" key={index}>{headerItem}</th>
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
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td className="pt-2 pl-2 border-t-2 border-white/70" key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            
          </motion.div>
          </section>

          <section>
            
          </section>

       </main>
      </>
  );
};

// Export the component
export default Benchmarks;
