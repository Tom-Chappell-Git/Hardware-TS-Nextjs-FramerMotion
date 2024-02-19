'use client'

//? This is the code for the GPUs page

import { motion } from "framer-motion"
import Head from "next/head"
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

import Navbar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar";
import GpuProductCard from '../components/gpuCards';

import nvidiaGpus from '../productinfos/nvidiagpus.json';


export default function GPUs() {

  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    
    <main>

      <Head>
        <title>GPUs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1}}
      >
          {isMobile ? <MobileNavbar /> : <Navbar />}

        <h1 className="page-title">GPUs</h1>    
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1}}
      >
      
           {/* NVIDIA GPUS CARDS */}

           <div className="container mx-auto p-4 py-10">
          <h2 className="text-3xl font-bold mb-6 font-mono">Nvidia GPUs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {nvidiaGpus.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <GpuProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
          
        
        </motion.div>
    </main>
  );
}
