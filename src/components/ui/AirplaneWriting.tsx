import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

export function AirplaneWriting() {
  // Path 1: Top-left to bottom-right diagonal
  const path1 = {
    x: [-50, 100, 250, 400, 550],
    y: [100, 175, 250, 325, 400],
    rotate: [60, 60, 60, 60, 60]
  };

  // Path 2: Bottom-left to top-right diagonal  
  const path2 = {
    x: [-50, 100, 250, 400, 550],
    y: [300, 225, 150, 75, 0],
    rotate: [30, 30, 30, 30, 30]
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <img 
        src="/handwryn_dashed_line.webp" 
        alt="Handwritten lines"
        className="absolute inset-0 w-full h-full object-contain"
      />
      
      {/* Airplane following first diagonal */}
      <motion.img
        src="/airplane.png"
        alt="Paper airplane"
        className="absolute w-16 h-16 z-10"
        initial={{ x: path1.x[0], y: path1.y[0], rotate: path1.rotate[0] }}
        animate={path1}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2
        }}
      />

      {/* Second airplane following second diagonal */}
      <motion.img
        src="/airplane.png"
        alt="Paper airplane"
        className="absolute w-16 h-16 z-10"
        initial={{ x: path2.x[0], y: path2.y[0], rotate: path2.rotate[0] }}
        animate={path2}
        transition={{
          duration: 6,
          delay: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2
        }}
      />
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1
        }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}