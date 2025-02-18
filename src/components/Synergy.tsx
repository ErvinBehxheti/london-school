// src/components/Synergy.tsx

import React from 'react';
import { motion } from 'framer-motion';

const Synergy: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4 text-center">
      <motion.h2
        className="text-2xl font-bold text-ls-blue mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        London School &amp; Logiscool: A Synergized Experience
      </motion.h2>

      <motion.p
        className="text-gray-700 text-base sm:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We combine London School’s premium language training with Logiscool’s fun
        &amp; interactive tech approach, creating the perfect blend of learning
        for students of all ages. Our campus is literally next door—just
        0.5 meters away—ensuring a seamless collaboration that helps students excel.
      </motion.p>
    </section>
  );
};

export default Synergy;
