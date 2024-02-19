'use client'

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

import Navbar from "./components/navbar";
import MobileNavbar from "./components/mobileNavbar";
import ProductCard from './components/productCard';
import GpuProductCard from './components/gpuCards';

import ryzenProducts from './productinfos/ryzen.json';
import trProducts from './productinfos/threadripper.json';
import nvidiaGpus from './productinfos/nvidiagpus.json';


interface GpuProduct {
  id: string;
  name: string;
  architecture: string;
  memory: string;
  coreClock: string;
  boostClock: string;
  powerConsumption: string;
}

interface Threadripper {
id: string;
model: string;
cores: string; 
threads: string; 
base_clock: string; 
boost_clock: string; 
cache: string;
tdp: string;
architecture: string;     
}

interface Ryzen {
id: string;
model: string;
cores: string;
threads: string;
base_clock: string;
boost_clock: string;
cache: string;
tdp: string;
architecture: string;
}


export default function Home(): JSX.Element {

  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <main>
      <Head>
        <title>Benchware</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1}}
      >
        {isMobile ? <MobileNavbar /> : <Navbar />}

        <h1 className="page-title">Browse</h1>    
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1}}
      >
        {/* RYZEN CPUS CARDS */}
        <div className="container mx-auto p-4 py-20">
          <h2 id='cpus' className="text-3xl font-bold mb-6 font-mono">Ryzen CPUs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ryzenProducts.map((product: Ryzen, index: number) => (
            <motion.div
              key={Number(product.id)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: index * 0.3 }}
            >
              <ProductCard product={{...product, id: String(product.id)}} />
            </motion.div>
        ))}
          </div>
        </div>
          
        {/* THREADRIPPER CPUS CARDS */}
        <div className="container mx-auto p-4 py-10">
          <h2 className="text-3xl font-bold mb-6 font-mono">Threadripper CPUs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trProducts.map((product: Threadripper, index: number ) => ( // ProductCard component for each CPU in the trProducts array.
          <motion.div
              key={Number(product.id)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: index * 0.3 }}
            >
              <ProductCard product={{...product, id: String(product.id)}} /> 
            </motion.div>
        ))}
          </div>
        </div>

            

        {/* NVIDIA GPUS CARDS */}
        <div className="container mx-auto p-4 py-10">
          <h2 className="text-3xl font-bold mb-6 font-mono">Nvidia GPUs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
          {nvidiaGpus.map((product: GpuProduct, index: number) => ( // ProductCard component for each CPU in the trProducts array.
            <motion.div
              key={index} // If there's no unique id, use index as a last resort
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: index * 0.3 }}
            >
              <GpuProductCard product={{...product, id: String(product.id)}} />
            </motion.div>
          ))}
          </div>
        </div>

      </motion.div>
    </main>
  );
}
