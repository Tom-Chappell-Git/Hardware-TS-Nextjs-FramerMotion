'use client'

// Import React and any other necessary dependencies
import { motion } from "framer-motion"
import Head from "next/head"

import Navbar from "../components/navbar";
import Search from "../components/search";
import benchmarksJson from '../productinfos/blender.json';


// Define the component
const Benchmarks: React.FC = () => {


  // Render the component
  return (
<>

    <Head>
      <title>Benchmarks</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />

    <Search />

    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1}}
      >
      <div className="mt-20">
        <table className="border-2">
          <thead className="border-2">
            <tr className="border-2 ">
              {benchmarksJson.header.map((headerItem, index) => (
                <th className=" pr-4" key={index}>{headerItem}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {benchmarksJson.body.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
    </>
  );
};

// Export the component
export default Benchmarks;
