import { motion } from 'framer-motion';
import { useState } from 'react';

import benchmarksJson from '../productinfos/blender.json';

interface Benchmark { // delete?
    keyword: string;
    name: string;
    // Add other properties here if needed
}

// delete?
const Search: React.FC = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="flex justify-left items-center mt-24">
                <div className="w-1/2 flex justify-center items-center">
                    <input
                        className="text-black font-semibold / border-2 border-white rounded-lg w-full / pl-2 py-1"
                        type="text"
                        placeholder="Search for a CPU or GPU"
                    />

                </div>
            </div>
            
        </motion.div>
    );
};



export default Search;