import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const MobileNavbar: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    const navbarClassName = !expanded ? "navbar-mobile w-full left-0 top-0 fixed" : "duration-1000 h-full w-full left-0 top-0 fixed bg-black/90 z-50";

    return (
        <>
            <motion.nav className=""
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 60}}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 1 }}
            >
                <section className={navbarClassName} onClick={handleClick}  >
                    <>

                    {!expanded ? <motion.nav 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 40}}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 1 }}
                        
                    className="text-center py-2 cursor-pointer ">Navigate</motion.nav> : <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 60}}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 1 }}
                    
                    className="text-center text-2xl py-12 mx-4 flex flex-col"
                    >
                        <button className="absolute top-5 right-5 hover:text-orange-400 duration-500 hover:font-bold " 
                        onClick={handleClick} 
                        
                        aria-label="Close">X</button>

                    </motion.nav>}
                    {expanded ? 
                    <section className="flex flex-col text-center">
                        <Link href="/" className="hover:text-orange-400 duration-500 hover:underline hover:tracking-wider hover:font-semibold" >Home</Link>
                        <Link href="/cpubreakdown" className="hover:text-orange-400 duration-500 hover:underline hover:tracking-wider hover:font-semibold">CPU Breakdown</Link>
                        <Link href="/cpus" className="hover:text-orange-400 duration-500 hover:underline hover:tracking-wider hover:font-semibold">CPUs</Link>
                        <Link href="/gpus" className="hover:text-orange-400 duration-500 hover:underline hover:tracking-wider hover:font-semibold">GPUs</Link>
                        <Link href="/benchmarks" className="hover:text-orange-400 duration-500 hover:underline hover:tracking-wider hover:font-semibold">3D Benchmarks</Link>
                        <Link href="/gaming" className="hover:text-orange-400 duration-500 hover:underline hover:tracking-wider hover:font-semibold">Gaming Benchmarks</Link>
                    </section>
                    : ""}
                
                    </>
                </section>
            </motion.nav>
        </>
    );
}

export default MobileNavbar;
