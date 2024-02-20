import { motion } from 'framer-motion';
import React, { useState } from 'react';


import Tooltip from '@mui/material/Tooltip'; // Tooltip is a component from Material-UI.


// delete?
const Search2: React.FC = () => {

     // Define the state for the search term and set the initial value to an empty string 
  const [searchTerm2, setSearchTerm2] = useState<string>('');
  

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-left items-center mt-24">
          <div className="w-full flex justify-center items-center">
            <Tooltip title="search" placement='bottom'>
            <input
              className="text-black font-semibold / border-2 border-white rounded-lg w-full / pl-2 py-1"
              type="text"
              placeholder="Search for a CPU or GPU"
              value={searchTerm2}
              onChange={(e) => setSearchTerm2(e.target.value)}
            />
            </Tooltip>
          </div>
        </div>
      </motion.div>
    )
};



export default Search2;