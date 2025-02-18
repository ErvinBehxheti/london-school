// src/pages/FAQPage.tsx

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '../components/HomePage/NavBar';
import Footer from '../components/HomePage/Footer';

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "1. Does London School offer any discounts or scholarships?",
    answer: "Absolutely! We periodically provide early-bird discounts, sibling discounts, and scholarship opportunities for exceptional students. Feel free to reach out to learn more."
  },
  {
    question: "2. What age range do you accept for the language courses?",
    answer: "We cater to learners from around age 6 up through late teens. Each course is carefully crafted for a specific age group to ensure the best learning experience."
  },
  {
    question: "3. Can I switch courses if I realize another program suits me better?",
    answer: "Yes, we’re flexible! If within the first few classes you feel another course matches your goals, let us know, and we’ll help you transition smoothly."
  },
  {
    question: "4. Is London School certified or recognized by any authorities?",
    answer: "We uphold strict quality standards and partner with Logiscool, plus recognized language institutions in the UK and Germany. Certificates from our advanced courses are widely respected."
  },
  {
    question: "5. How do I register for an upcoming term or session?",
    answer: "You can register online via our website’s ‘Enroll Now’ button, or contact us directly by phone or email. We’ll guide you every step of the way."
  },
  {
    question: "6. What if I can’t attend all classes due to scheduling conflicts?",
    answer: "We understand life gets busy. Our staff is more than happy to accommodate make-up sessions or offer alternative scheduling solutions. We want you here!"
  },
  {
    question: "7. Do you offer any campus visits or trial classes?",
    answer: "Absolutely! We encourage prospective students and parents to visit our campus or join a trial session. We’ll happily show you around and let you experience a class."
  },
];

const FAQPage: React.FC = () => {
  // Track which Q is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  // Filter FAQ items by search term (optional feature)
  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>London School | Frequently Asked Questions</title>
        <meta
          name="description"
          content="Got questions? We have answers! Explore our FAQ to learn more about discounts, scheduling, certifications, and our welcoming environment at London School."
        />
      </Helmet>

      <NavBar />

      {/* Hero Section */}
      <section
        className="relative w-full min-h-[40vh] flex items-center justify-center
                   bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/assets/images/faq-hero.jpg')" }} // Replace image
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            We Want You Here
          </h1>
          <p className="text-lg sm:text-xl">
            Have questions? Check out our FAQ below. We're eager to help and make your journey at London School a breeze.
          </p>
        </div>
      </section>

      {/* Search Bar (Optional) */}
      <section className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-ls-red">FAQs at Your Fingertips</h2>
          <p className="text-gray-600 mt-1">
            Type a keyword to quickly find answers.
          </p>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            className="w-full max-w-md border border-gray-300 rounded px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-ls-blue text-sm"
            placeholder="Search (e.g., discount, schedule, certificate)..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto pb-12 px-4">
        {filteredFAQs.length === 0 && (
          <div className="text-center text-gray-600 py-6">
            No results found. Try different keywords or scroll below.
          </div>
        )}

        {filteredFAQs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => handleToggle(index)}
              className="w-full bg-ls-blue text-white font-semibold px-4 py-3 
                         text-left rounded-t-md outline-none focus:ring-2 
                         focus:ring-offset-2 focus:ring-ls-red flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span className="ml-2">{expandedIndex === index ? '-' : '+'}</span>
            </button>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  className="border border-ls-blue border-t-0 rounded-b-md px-4 py-3"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>

      {/* Final CTA */}
      <section className="w-full bg-ls-red text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-bold">Still Have Questions?</h2>
        <p className="mt-2 max-w-md mx-auto">
          We’d love to hear from you! Our friendly staff is ready to help you 
          with anything from enrollments and discounts to scheduling 
          and special accommodations.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 bg-white text-ls-red font-semibold px-6 py-3 
                     rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
};

export default FAQPage;
