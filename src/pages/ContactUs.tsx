// src/pages/ContactPage.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import NavBar from '../components/HomePage/NavBar';
import Footer from '../components/HomePage/Footer';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>London School | Contact Us</title>
        <meta
          name="description"
          content="Get in touch with London School to learn about discounts, special events, and our premium learning environment in Mitrovica, Kosova."
        />
      </Helmet>

      <NavBar />

      {/* Hero Section */}
      <section
        className="relative w-full min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/assets/images/contact-hero.jpg')" }} // Replace with a real image
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            We're Here to Help
          </h1>
          <p className="text-lg sm:text-xl">
            Reach out to discover exciting discounts, learn about our vibrant learning environment,
            and explore how London School can elevate your skills.
          </p>
        </div>
      </section>

      {/* Contact / Environment Info */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-ls-red mb-4 text-center">
            Experience Our Learning Environment
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            At London School, we combine premium facilities with a fun, Apple-inspired atmosphere. 
            From modern classrooms and cutting-edge tech labs to cozy student lounges, 
            every corner is crafted to spark curiosity and collaboration.
            Drop by to see us in action—or contact us below for special seasonal discounts 
            and early-bird offers on our courses!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <motion.div
            className="bg-white rounded-lg shadow p-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-ls-blue mb-3">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> Rr Afrim Zhitia, Mitrovicë 40000
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> +383 49 236 888
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> +383 49 236 888
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#facebook"
                className="text-gray-500 hover:text-ls-red transition-colors"
              >
                Facebook
              </a>
              <a
                href="#instagram"
                className="text-gray-500 hover:text-ls-red transition-colors"
              >
                Instagram
              </a>
              <a
                href="#youtube"
                className="text-gray-500 hover:text-ls-red transition-colors"
              >
                YouTube
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              We're here Monday to Friday, 8 AM to 6 PM. 
              Weekend visits by appointment only!
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-lg shadow p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-ls-blue mb-3">
              Send Us a Message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // handle form logic, or forward to a serverless function
                alert("Form submitted!");
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded px-3 py-2
                             focus:outline-none focus:ring-2 focus:ring-ls-blue"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded px-3 py-2
                             focus:outline-none focus:ring-2 focus:ring-ls-blue"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border border-gray-300 rounded px-3 py-2
                             focus:outline-none focus:ring-2 focus:ring-ls-blue"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border border-gray-300 rounded px-3 py-2
                             focus:outline-none focus:ring-2 focus:ring-ls-blue"
                  placeholder="Ask about our discounts, environment, or anything else!"
                />
              </div>
              <button
                type="submit"
                className="bg-ls-red text-white px-6 py-2 rounded-full
                           hover:bg-ls-blue transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Final CTA for visiting or calling */}
      <section className="w-full bg-ls-blue text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-bold">Come Say Hello!</h2>
        <p className="mt-2 max-w-xl mx-auto">
          Our doors are open for you to visit our campus, chat with our 
          friendly staff, and see firsthand why London School is the perfect place 
          to learn and grow.
        </p>
        <p className="mt-2 font-medium">
          Call: +383 49 236 888 | Email: info@londonschoolkosova.org
        </p>
        <a
          href="/enroll"
          className="inline-block mt-6 bg-white text-ls-blue font-semibold px-6 py-3 
                     rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          Enroll Now
        </a>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
