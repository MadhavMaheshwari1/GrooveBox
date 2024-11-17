import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { UserContext } from '../Contexts/UserContext';

const Home = () => {

  return (
    <motion.div
      className="max-w-[1880px] mx-auto lg:px-[130px] px-[30px] md:py-[140px] py-[120px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    >
      <div className="">
        <div className="flex text-white gap-4 text-2xl overflow-x-hidden relative rounded-xl">
          <button className="py-2 px-3 glass rounded-xl flex w-[130px] justify-center items-center whitespace-nowrap">Romance</button>
          <button className="py-2 px-3 glass rounded-xl flex w-[130px] justify-center items-center whitespace-nowrap">Chill</button>
          <button className="py-2 px-3 glass rounded-xl flex w-[130px] justify-center items-center whitespace-nowrap">Party</button>
          <button className="py-2 px-3 glass rounded-xl flex w-[130px] justify-center items-center whitespace-nowrap">Sad</button>
          <button className="py-2 px-3 glass rounded-xl flex w-[180px] justify-center items-center whitespace-nowrap">Work Out</button>
          <button className="py-2 px-3 glass rounded-xl flex w-[130px] justify-center items-center whitespace-nowrap">Sleep</button>
          <button className="py-2 px-3 glass rounded-xl flex w-[130px] justify-center items-center whitespace-nowrap">Soul</button>
          <button className="py-2 px-3 glass rounded-xl flex w-[130px] justify-center items-center whitespace-nowrap">Study</button>
          <button className="py-2 px-3 glass rounded-xl flex w-[130px] justify-center items-center whitespace-nowrap">Pop</button>
          <button className="py-2 px-3 glass rounded-xl flex w-[130px] justify-center items-center whitespace-nowrap">Metalcore</button>
          <button className="py-2 px-3 glass rounded-xl flex w-[130px] justify-center items-center whitespace-nowrap">Kids</button>
          <button className="py-2 px-3 glass rounded-xl flex w-[130px] justify-center items-center whitespace-nowrap">Acoustic</button>
          <button className="py-2 px-3 glass rounded-xl flex w-[130px] justify-center items-center whitespace-nowrap">Club</button>
          <button className="py-2 px-3 glass rounded-xl flex w-[130px] justify-center items-center whitespace-nowrap">Groove</button>
          <div className="absolute w-[40px] h-[40px] right-0 z-50 rounded-full bg-cyan-500 filter blur-lg"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
