import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { UserContext } from '../Contexts/UserContext';

const Home = () => {

  return (
    <motion.div
      className="max-w-[1880px] mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    >
      <div className="">
      </div>
    </motion.div>
  );
};

export default Home;
