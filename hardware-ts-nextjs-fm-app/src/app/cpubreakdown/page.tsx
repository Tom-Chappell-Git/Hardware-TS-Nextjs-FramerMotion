'use client';

//! This is the code for the CPU Breakdown page


import { motion } from "framer-motion";

import Navbar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar";
import { useMediaQuery } from "@mui/material";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CpuBreakdown: React.FC = () => {
   
    const isMobile = useMediaQuery("(max-width: 640px)");


    return (
        <>
        
        {isMobile ? <MobileNavbar /> : <Navbar />}


            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className=" w-full mx-auto p-4 "
            >
                <article className="">
                    <h1 className="page-title">CPU Breakdown</h1>

                    <p className="py-8">The CPU, or central processing unit, is the primary component of a computer responsible for executing instructions and performing calculations. It is often referred to as the &quot;brain&quot; of the computer and plays a crucial role in overall system performance.</p>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className="text-xl font-bold text-white bg-black"
                        >
                        Cores:
                        </AccordionSummary>
                        <AccordionDetails
                        className="bg-black text-white">
                        Cores: The number of cores in a CPU represents the number of independent processing units. Each core can handle separate tasks simultaneously, improving overall performance and multitasking capabilities.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        className="text-xl font-bold text-white bg-black"
                        >
                        Threads:
                        </AccordionSummary>
                        <AccordionDetails
                        className="bg-black text-white">
                        Threads: Threads refer to the number of simultaneous execution paths within a CPU core. Each thread can handle a separate set of instructions, allowing for parallel processing and improved performance in multithreaded applications.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        className="text-xl font-bold text-white bg-black"
                        >
                        Base Clock:
                        </AccordionSummary>
                        <AccordionDetails
                        className="bg-black text-white">
                        Frequency: CPU frequency, measured in GHz (gigahertz), represents the speed at which the CPU can execute instructions. A higher frequency generally indicates faster processing capabilities.

                        Base clock refers to the minimum guaranteed frequency at which the processor operates under normal conditions
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                        className="text-xl font-bold text-white bg-black"
                        >
                        Boost Clock:
                        </AccordionSummary>
                        <AccordionDetails
                        className="bg-black text-white">
                        Boost clock represents the maximum frequency at which the processor can operate under optimal conditions. It allows the CPU to temporarily increase its speed to handle demanding tasks.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5-content"
                        id="panel5-header"
                        className="text-xl font-bold text-white bg-black"
                        >
                        Cache:
                        </AccordionSummary>
                        <AccordionDetails
                        className="bg-black text-white">
                        Cache: CPU cache is a small, high-speed memory that stores frequently accessed data. It helps reduce the time it takes to access data from the main memory, improving overall performance.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel5-content"
                        id="panel5-header"
                        className="text-xl font-bold text-white bg-black"
                        >
                        TDP:
                        </AccordionSummary>
                        <AccordionDetails
                        className="bg-black text-white">
                        TDP (Thermal Design Power): TDP represents the maximum amount of heat generated by a CPU under normal operating conditions. It is an important factor to consider for system cooling and power supply.
                        </AccordionDetails>
                    </Accordion>
                </article>

            </motion.section>
        </>
            );      
        };
        

export default CpuBreakdown;
