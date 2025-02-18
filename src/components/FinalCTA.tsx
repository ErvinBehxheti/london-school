// src/components/FinalCTA.tsx

import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section className="w-full bg-ls-blue text-white py-12 px-4 text-center">
      <motion.h2
        className="text-2xl font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Ready to Elevate Your Skills?
      </motion.h2>
      <motion.p
        className="mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Enroll now or contact us to learn more about our courses!
      </motion.p>
      <motion.button
        className="bg-white text-ls-blue font-semibold px-6 py-3 rounded-full shadow-lg mt-6 hover:bg-gray-100
                   transition-colors"
        whileHover={{ scale: 1.05 }}
        onClick={() => alert('Enroll Now clicked!')}
      >
        Enroll Now
      </motion.button>
    </section>
  );
};

export default FinalCTA;
