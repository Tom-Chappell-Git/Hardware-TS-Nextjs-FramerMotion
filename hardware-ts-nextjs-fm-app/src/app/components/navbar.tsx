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
                <Link href="/cpus">CPUs</Link>
                <Link href="/gpus">GPUs</Link>
                <Link href="/benchmarks">Benchmarks</Link>
            </motion.nav>
        </>
    );
}

export default Navbar;
