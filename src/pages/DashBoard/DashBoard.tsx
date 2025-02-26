import React from 'react';
import { motion } from 'framer-motion';

const DashBoard = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-900 to-emerald-500 relative overflow-hidden'>
      {/* Background Images */}
      <img src='https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg' alt='background' className='absolute top-0 left-0 w-full h-full object-cover opacity-20' />
      
      {/* Animated Title */}
      <motion.h1 
        className='text-center text-[3rem] sm:text-[4rem] md:text-[5rem] font-serif text-white shadow-lg relative'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        GREEN SHADOW
      </motion.h1>
      

    </div>
  );
};

export default DashBoard;
