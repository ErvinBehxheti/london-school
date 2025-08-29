// src/components/HeroWithPhoto.tsx

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroWithPhoto: React.FC = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, 300]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden poppins-bold">
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/photos/hero-background.jpg')`,
          y: backgroundY, // Parallax effect
        }}
      />

      {/* Gradient Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-screen px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-shadow-lg leading-tight">
          Welcome to <span className="text-ls-red">London School</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl font-medium opacity-90 mt-4">
          Experience premium courses and modern learning in Mitrovica, Kosova
        </p>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute w-full bottom-0">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
        >
          <path
            fill="#ffffff"
            d="M0,256L60,234.7C120,213,240,171,360,181.3C480,192,600,256,720,256C840,256,960,192,1080,186.7C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroWithPhoto;
