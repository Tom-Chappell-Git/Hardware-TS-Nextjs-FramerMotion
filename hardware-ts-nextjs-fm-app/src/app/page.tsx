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
import intelCpus from './productinfos/intelcpus.json';

import nvidiaGpus from './productinfos/nvidiagpus.json';
import amdGpus from './productinfos/amdgpus.json';
import arcGpus from './productinfos/arcgpus.json';


interface GpuProduct {
  id: string;
  name: string;
  architecture: string;
  memory: string;
  coreClock: string;
  boostClock: string;
  powerConsumption: string;
  price: string;
}

interface CPU {
id: string;
model: string;
cores: string;
threads: string;
base_clock: string;
boost_clock: string;
cache: string;
tdp: string;
architecture: string;
price: string;
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


      {/* AMD CPUs */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1}}
      >
            {/* RYZEN CPUS CARDS */}
        <section className="container mx-auto p-4 py-20">
        <h2 className="text-4xl font-bold mb-6 font-mono">CPUs</h2>
          <div className="border-t border-2 border-white/20"></div>
          <h3 id='cpus' className="text-2xl font-bold mb-6 font-mono">Ryzen CPUs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ryzenProducts.map((product: CPU, index: number) => (
            <motion.div
              key={Number(product.id)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <ProductCard product={{...product, id: String(product.id)}} />
            </motion.div>
        ))}
          </div>
        </section>
          
            {/* THREADRIPPER CPUS CARDS */}
        <section className="container mx-auto p-4 py-10">
          <h3 className="text-2xl font-bold mb-6 font-mono">Threadripper CPUs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trProducts.map((product: CPU, index: number ) => ( // ProductCard component for each CPU in the trProducts array.
          <motion.div
              key={Number(product.id)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <ProductCard product={{...product, id: String(product.id)}} /> 
            </motion.div>
        ))}
          </div>
        </section>

            {/* INTEL CPUS CARDS */}
        <section className="container mx-auto p-4 py-10">
          <h3 className="text-2xl font-bold mb-6 font-mono">Intel CPUs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {intelCpus.map((product: CPU, index: number) => ( // ProductCard component for each CPU in the trProducts array.
            <motion.div
              key={Number(product.id)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <ProductCard product={{...product, id: String(product.id)}} />
            </motion.div>
        ))}
          </div>
        </section>


        

            {/* GPUS */}
        <section>
        <h2 className="text-4xl font-bold ml-2 mt-6 font-mono">GPUs</h2>
            
          {/* NVIDIA GPUS CARDS */}

        <section className="container mx-auto p-4 py-10">
          <h3 className="text-2xl font-bold mb-6 font-mono">Nvidia GPUs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
          {nvidiaGpus.map((product: GpuProduct, index: number) => ( // ProductCard component for each CPU in the trProducts array.
            <motion.div
              key={index} // If there's no unique id, use index as a last resort
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <GpuProductCard product={{...product, id: String(product.id)}} />
            </motion.div>
          ))}
          </div>
        </section>

            {/* AMD GPUS CARDS */}

        <section className="container mx-auto p-4 py-10">
          <h3 className="text-2xl font-bold mb-6 font-mono">AMD GPUs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
          {amdGpus.map((product: GpuProduct, index: number) => ( // ProductCard component for each CPU in the trProducts array.
            <motion.div
              key={index} // If there's no unique id, use index as a last resort
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <GpuProductCard product={{...product, id: String(product.id)}} />
            </motion.div>
          ))}
          </div>
        </section>

            {/* Intel GPUS CARDS */}
        <section className="container mx-auto p-4 py-10">
          <h3 className="text-2xl font-bold mb-6 font-mono">Intel GPUs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
          {arcGpus.map((product: GpuProduct, index: number) => ( // ProductCard component for each CPU in the trProducts array.
            <motion.div
              key={index} // If there's no unique id, use index as a last resort
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <GpuProductCard product={{...product, id: String(product.id)}} />
            </motion.div>
          ))}
          </div>
        </section>
        </section>
      </motion.div>
    </main>
  );
}
