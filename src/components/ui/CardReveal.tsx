import React from 'react';
import { motion } from 'framer-motion';

export function CardReveal() {
  return (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src="/Card2-GN4LI4X6.webp"
        alt="Handwritten card being pulled from envelope"
        className="w-full h-auto rounded-lg shadow-xl"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeOut"
        }}
        whileHover={{
          y: -10,
          transition: { duration: 0.3 }
        }}
      />
      <motion.div
        className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        Pull to reveal!
      </motion.div>
    </motion.div>
  );
}