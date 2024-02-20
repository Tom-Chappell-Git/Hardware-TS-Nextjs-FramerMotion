import Link from "next/link";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {

  
    return (
        <>
            <motion.nav className="navbar"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 60}}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 1 }}
            >

                <Link className="border-r border-l border-orange-400 h-full" href={"/"}>Home</Link>
                <Link className="border-r border-orange-400 h-full" href={"/cpubreakdown"}>CPU Breakdown</Link>
                <Link className="border-r border-orange-400 h-full" href={"/cpus"}>CPUs</Link>
                <Link className="border-r border-orange-400 h-full" href={"/gpus"}>GPUs</Link>
                <Link className="border-r border-orange-400 h-full" href={"/benchmarks"}>3D Benchmarks</Link>
                <Link className="border-r border-orange-400 h-full" href={"/gaming"}>Gaming Benchmarks</Link>
    {/* Try: bg-black/0 box shadow from top fade to bottom */}
            </motion.nav>

        </>
    );
}

export default Navbar;
