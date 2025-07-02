import React from 'react';
import { motion } from 'framer-motion';

export function EnvelopeExterior() {
  const envelopes = [
    { src: '/exterior_Note2-R5SAB2XF.jpg', alt: 'Handwritten envelope exterior 1' },
    { src: '/exterior_Note3-6GED4QJE.jpg', alt: 'Handwritten envelope exterior 2' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {envelopes.map((envelope, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={envelope.src}
            alt={envelope.alt}
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
            <p className="text-white text-sm font-medium">
              
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}