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
                <Link href="/">Home</Link>

                <div className="relative group">
                    <Link href="/benchmarks">Hardware</Link>
                    <div className="absolute left-0  hidden group-hover:block bg-black text-white shadow-md rounded-md">
                        <ul className="mx-6">
                            <li><Link href="/cpus" className="">CPUs</Link></li>
                            <li><Link href="/gpus" className="">GPUs</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="relative group ">
                    <Link href="/benchmarks">Benchmarks</Link>
                    <div className="absolute left-0 hidden group-hover:block bg-black text-white shadow-md rounded-md">
                        <ul className="px-6">
                            <li><Link href="/benchmarks" className="">Blender</Link></li>
                            <li><Link href="/gaming" className="">Gaming</Link></li>
                        </ul>
                    </div>
                </div>
            </motion.nav>
        </>
    );
}

export default Navbar;
