// src/components/FloatingCTA.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa'; // Example icon

const FloatingCTA: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      // e.g., show the floating button after user scrolls 200px
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.button
      className="fixed bottom-4 right-4 bg-ls-red text-white p-4 rounded-full shadow-lg 
                 flex items-center justify-center text-xl z-50
                 hover:bg-ls-blue transition-colors"
      animate={{ scale: show ? 1 : 0, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      onClick={() => alert('Floating CTA clicked!')}
    >
      <FaRocket />
    </motion.button>
  );
};

export default FloatingCTA;
