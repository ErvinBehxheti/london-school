// src/pages/AboutPage.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import NavBar from '../components/HomePage/NavBar';
import TeamSlider from '../components/HomePage/MeetOutTeam';
import Footer from '../components/HomePage/Footer';
// If you already have a TeamSlider or a static team component, import it

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>London School | About Us</title>
        <meta
          name="description"
          content="Discover the rich history of London School in Mitrovica, Kosova—our founders’ vision, partnership with Logiscool, and our dedicated team."
        />
      </Helmet>

      <NavBar />

      {/* Hero Section */}
      <section
        className="relative w-full min-h-[50vh] flex items-center justify-center 
                   bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: "url('/assets/images/about-hero.jpg')", // replace with your image
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Our Story
          </h1>
          <p className="text-lg sm:text-xl">
            From humble beginnings to a thriving educational community—learn all about our journey, our founders, and our passionate team.
          </p>
        </div>
      </section>

      {/* History / Timeline Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-ls-red mb-8 text-center">
          Our History
        </h2>
        
        {/* We'll do a timeline using flex or a vertical line, with subtle animations */}
        <div className="relative">
          <div className="border-l-4 border-ls-red absolute h-full top-0 left-8 sm:left-1/2 translate-x-[-50%]" />

          <div className="space-y-8 sm:space-y-12">
            {/* Timeline item 1 */}
            <motion.div
              className="relative flex flex-col sm:flex-row items-start sm:items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-4 h-4 bg-ls-red rounded-full absolute -left-[6px] sm:left-[calc(50%-8px)] top-1" />
              <div className="ml-8 sm:ml-0 sm:pl-8 sm:w-1/2">
                <h3 className="font-semibold text-ls-blue text-lg">
                  2010 - The Beginning
                </h3>
                <p className="text-gray-700 mt-2">
                  London School started as a small language tutoring center in Mitrovica, 
                  founded by two passionate educators determined to bring world-class education to local youth.
                </p>
              </div>
            </motion.div>

            {/* Timeline item 2 */}
            <motion.div
              className="relative flex flex-col sm:flex-row items-start sm:items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-4 h-4 bg-ls-red rounded-full absolute -left-[6px] sm:left-[calc(50%-8px)] top-1" />
              <div className="ml-8 sm:ml-0 sm:pl-8 sm:w-1/2 sm:ml-auto">
                <h3 className="font-semibold text-ls-blue text-lg">
                  2015 - Growth & Expansion
                </h3>
                <p className="text-gray-700 mt-2">
                  Our student base grew rapidly, prompting an expanded curriculum—English, German, and initial tech courses. 
                  We introduced small group classes and immersive learning experiences.
                </p>
              </div>
            </motion.div>

            {/* Timeline item 3 */}
            <motion.div
              className="relative flex flex-col sm:flex-row items-start sm:items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-4 h-4 bg-ls-red rounded-full absolute -left-[6px] sm:left-[calc(50%-8px)] top-1" />
              <div className="ml-8 sm:ml-0 sm:pl-8 sm:w-1/2">
                <h3 className="font-semibold text-ls-blue text-lg">
                  2018 - Partnership with Logiscool
                </h3>
                <p className="text-gray-700 mt-2">
                  Recognizing the power of tech education, we partnered with Logiscool to introduce 
                  cutting-edge coding courses—Python, JavaScript, and Blox—further enhancing our academic offerings.
                </p>
              </div>
            </motion.div>

            {/* Timeline item 4 */}
            <motion.div
              className="relative flex flex-col sm:flex-row items-start sm:items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-4 h-4 bg-ls-red rounded-full absolute -left-[6px] sm:left-[calc(50%-8px)] top-1" />
              <div className="ml-8 sm:ml-0 sm:pl-8 sm:w-1/2 sm:ml-auto">
                <h3 className="font-semibold text-ls-blue text-lg">
                  Today - A Thriving Community
                </h3>
                <p className="text-gray-700 mt-2">
                  London School now boasts hundreds of satisfied students each year, 
                  top-tier instructors, and an Apple-inspired campus in Mitrovica dedicated to modern, 
                  interactive learning.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="max-w-6xl mx-auto py-12 px-4 bg-gray-50">
        <h2 className="text-2xl font-bold text-ls-red mb-8 text-center">Our Founders</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Founder #1 */}
          <motion.div
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center 
                       hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/images/founder1.jpg"
              alt="Founder 1"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-ls-blue mb-1">John Doe</h3>
            <p className="text-sm text-gray-500 mb-2">Co-Founder & Lead Educator</p>
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              John’s vision for a world-class language school in Mitrovica sparked 
              the birth of London School, bringing global standards and immersive programs to local youth.
            </p>
          </motion.div>

          {/* Founder #2 */}
          <motion.div
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center
                       hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/images/founder2.jpg"
              alt="Founder 2"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-ls-blue mb-1">Sarah Smith</h3>
            <p className="text-sm text-gray-500 mb-2">Co-Founder & Curriculum Designer</p>
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              Sarah’s expertise in educational innovation helped shape our 
              Apple-inspired teaching model, ensuring each class is engaging, tech-forward, and impactful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team (reuse your existing TeamSlider or new layout) */}
      <TeamSlider />

      {/* Final CTA / Contact */}
      <section className="w-full bg-ls-blue text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Want to Learn More?</h2>
        <p className="max-w-xl mx-auto">
          Whether you're interested in joining our staff, partnering with us,
          or enrolling your child, we're here to help.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 bg-white text-ls-blue font-semibold px-6 py-3 
                     rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
