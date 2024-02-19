'use client'

//! This is the code for the CPUs page

import * as React from 'react';
import { motion } from "framer-motion"
import Head from "next/head"

import Navbar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar";
import { useMediaQuery } from "@mui/material";
import ProductCard from '../components/productCard';
import ryzenProducts from '../productinfos/ryzen.json'
import trProducts from '../productinfos/threadripper.json';


// display the CPUs page with the Ryzen and Threadripper CPUs in a grid format with the ProductCard component for each CPU.
export default function CPUs() {

  const isMobile = useMediaQuery("(max-width: 640px)");


  return (
<>

    
    <main>
      <Head>
        <title>CPUs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1}}
      >
{isMobile ? <MobileNavbar /> : <Navbar />}

        <h1 className="page-title">CPUs</h1>    
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1}}
      >
      
        <div className="container mx-auto p-4 py-20">
          <h2 id='cpus' className="text-3xl font-bold mb-6 font-mono">Ryzen CPUs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ryzenProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              > 
               {/* ProductCard component for each CPU in the ryzenProducts array. */}
                <ProductCard product={product} /> 
              </motion.div>
            ))}
          </div>
        </div>
          
        <div className="container mx-auto p-4 py-10">
          <h2 className="text-3xl font-bold mb-6 font-mono">Threadripper CPUs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {trProducts.map((product, index) => ( // ProductCard component for each CPU in the trProducts array.
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                 {/* ProductCard component for each CPU in the trProducts array. */}
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
        </motion.div>
    </main>
    </>
  );
}
