import React from 'react';
import { motion } from 'framer-motion';

const Library = () => {
  return (
    <motion.div
      className="max-w-[1880px] mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    >
      <div className=' bg-custom-gradient'>Library</div>
    </motion.div>
  )
}

export default Library