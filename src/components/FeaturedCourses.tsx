import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaBeer } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import english from "../illustrations/english.svg";
import german from "../illustrations/german.svg";
import programming from "../illustrations/programming.svg";

const FeaturedCourses: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <motion.h2
        className="text-2xl font-bold text-ls-red mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore Our Main Courses
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* ENGLISH CARD */}
        <EnglishCard />

        {/* GERMAN CARD */}
        <GermanCard />

        {/* JAVASCRIPT CARD */}
        <JavaScriptCard />
      </div>
    </section>
  );
};

export default FeaturedCourses;

/* --- 1) English Card --- */
const EnglishCard: React.FC = () => {
  return (
    <motion.div
      className="relative bg-white rounded-2xl shadow p-6 hover:shadow-2xl 
                 transition-shadow overflow-hidden flex flex-col"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", damping: 6, stiffness: 180 }}
    >
      {/* Some playful background or angled shape */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-ls-red/10 rounded-full pointer-events-none" />

      {/* “Hello” sticker bubble in the top-left corner */}
      <div
        className="absolute bottom-3 left-3 bg-ls-red text-white font-bold text-sm 
                      px-3 py-1 rounded-full flex items-center shadow-md"
      >
        <FaRegSmile className="mr-1 z-10" />
        Hello!
      </div>

      <h3 className="text-xl font-semibold text-ls-blue mb-2 z-10">English</h3>
      <p className="text-gray-600 z-10">
        Gain fluency with our interactive English program.
      </p>

      {/* Illustration at bottom-right corner (or you can move it top-right) */}
      <motion.img
        src={english}
        alt="English"
        className="z-[0] pointer-events-none"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

/* --- 2) German Card --- */
const GermanCard: React.FC = () => {
  return (
    <motion.div
      className="relative bg-white rounded-2xl shadow p-6 hover:shadow-2xl 
                 transition-shadow overflow-hidden flex flex-col min-h-auto"
      whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
      transition={{ type: "spring", damping: 6, stiffness: 180 }}
    >
      {/* Subtle background pattern or shape (with brand color) */}
      <div className="absolute inset-0 bg-ls-blue/5 pointer-events-none" />

      {/* Possibly a small React Icon or something playful */}
      <div className="absolute top-3 right-3 text-ls-blue text-xl">
        <FaBeer /> {/* Just an example icon; pick something more relevant */}
      </div>

      <h3 className="text-xl font-semibold text-ls-blue mb-2 ">German</h3>
      <p className="text-gray-600 grow">Dive into German language and culture.</p>

      {/* German SVG in the bottom-left corner, lightly angled */}
      <motion.img
        src={german}
        alt="German"
        className="pointer-events-none
                   opacity-90"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

/* --- 3) JavaScript Card (Typewriter) --- */
const JavaScriptCard: React.FC = () => {
  // Typewriter for the code snippet
  const [text] = useTypewriter({
    words: [
      'console.log("Hello, London School!");',
      'alert("Learning JavaScript is fun!");',
      'document.write("Time to code!");',
    ],
    loop: true,
    delaySpeed: 1800,
    typeSpeed: 60,
    deleteSpeed: 40,
  });

  return (
    <motion.div
      className="relative bg-white rounded-2xl shadow p-6 hover:shadow-2xl 
                 transition-shadow overflow-hidden flex flex-col justify-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", damping: 6, stiffness: 180 }}
    >
      {/* Slight background accent for JS card */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 bg-yellow-400/20 
                     rounded-full pointer-events-none"
      />

      <h3 className="text-xl font-semibold text-ls-blue mb-2">Programming</h3>
      <p className="text-gray-600 mb-2 grow">
        Kickstart your tech journey with hands-on coding challenges.
      </p>

      {/* Typewriter snippet */}
      <div className="bg-gray-800 text-lime-400 font-mono p-3 rounded-lg shadow-inner text-sm mb-2">
        {text}
        <Cursor cursorColor="#f8f8f8" />
      </div>

      {/* JS SVG in the center or top-right? Let’s do bottom-right. */}
      <motion.img
        src={programming}
        alt="programming"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};
