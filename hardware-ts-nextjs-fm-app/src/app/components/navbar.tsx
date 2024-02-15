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
                <div className="relative group w-full">
                    <Link href="/benchmarks" className="hover:text-cyan-200">Info</Link>
                    <div className="absolute left-0  hidden group-hover:block bg-black text-white shadow-md border-white border-2 rounded-md">
                        <ul className="mx-6 ">
                            <li><Link href="/" className="hover:text-cyan-200">Home</Link></li>
                            <li><Link href="/cpubreakdown" className="hover:text-cyan-200">Cpu Breakdown</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="relative group w-full">
                    <Link href="/benchmarks" className="hover:text-cyan-200">Hardware</Link>
                    <div className="absolute left-0  hidden group-hover:block bg-black text-white shadow-md border-white border-2 rounded-md">
                        <ul className="mx-6">
                            <li><Link href="/cpus" className="hover:text-cyan-200">CPUs</Link></li>
                            <li><Link href="/gpus" className="hover:text-cyan-200">GPUs</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="relative group ">
                    <Link href="/benchmarks" className="hover:text-cyan-200">Benchmarks</Link>
                    <div className="absolute left-0 hidden group-hover:block bg-black text-white shadow-md border-white border-2 rounded-md">
                        <ul className="px-6">
                            <li><Link href="/benchmarks" className="hover:text-cyan-200">Blender</Link></li>
                            <li><Link href="/gaming" className="hover:text-cyan-200">Gaming</Link></li>
                        </ul>
                    </div>
                </div>
            </motion.nav>
        </>
    );
}

export default Navbar;
