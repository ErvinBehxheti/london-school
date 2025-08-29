// src/pages/CoursesPage.tsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../components/HomePage/NavBar";
import Footer from "../components/HomePage/Footer";

interface MainCourse {
  id: number;
  title: string;
  summary: string;
  image: string;
  extras?: string;
  whatYouLearn?: string[];
  whyChoose?: string[];
}

const coursesData: MainCourse[] = [
  {
    id: 1,
    title: "English",
    summary:
      "Become fluent in English through immersive classes, camps, and traveling opportunities. Ideal for multiple age groups.",
    image: "/assets/images/english-hero.jpg",

    extras:
      "Also offering traveling camps to the UK & US, plus specialized exam prep courses!",
    whatYouLearn: [
      "Confident speaking and presentation skills",
      "Enhanced reading and writing for real-world scenarios",
      "Cultural exposure through international camps and exchanges",
    ],
    whyChoose: [
      "Professional native-level instructors",
      "Immersive learning environment",
      "Flexible schedules, small group sizes",
    ],
  },
  {
    id: 2,
    title: "German",
    summary:
      "Experience authentic German language and culture. We cater to kids, teens, and advanced learners.",
    image: "/assets/images/german-hero.jpg",
    extras:
      "We partner with German cultural institutes for potential study trips in Berlin, Munich, etc.",
    whatYouLearn: [
      "Solid grammar foundations",
      "Conversational confidence",
      "Cultural appreciation and real-world applications",
    ],
    whyChoose: [
      "Qualified, enthusiastic native-German teachers",
      "Opportunities for international pen-pal exchanges",
      "Interactive workshops and field trips",
    ],
  },
  {
    id: 3,
    title: "Programming",
    summary:
      "Master JavaScript, or explore Logiscool certificates for Python, Blox, and more. Tech courses for young innovators.",
    image: "/assets/images/programming-hero.jpg",
    extras:
      "Students receive recognized certificates from Logiscool upon completion. Perfect for future tech enthusiasts.",
    whatYouLearn: [
      "Core programming concepts (loops, functions, data types)",
      "Team-based projects and hackathon experiences",
      "Confidence in problem-solving and creativity in code",
    ],
    whyChoose: [
      "Hands-on mentorship from seasoned programmers",
      "Partnership with Logiscool for recognized certifications",
      "Cutting-edge curriculum in a fun, interactive environment",
    ],
  },
];

const CoursesPage: React.FC = () => {
  // Track expanded course to show more details
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  // Toggle main course details
  const toggleCourse = (id: number) => {
    setExpandedCourse((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Helmet for SEO & Proper Title */}
      <Helmet>
        <title>London School | Courses</title>
        <meta
          name="description"
          content="Explore premium English, German, and Programming courses at London School in Mitrovica, Kosova. Sub-courses, traveling camps, and Logiscool certificates available."
        />
      </Helmet>

      <NavBar />

      {/* Hero Section */}
      <section
        className="relative w-full min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `url('/assets/images/courses-hero.jpg')`, // update image
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            Explore Our Courses
          </h1>
          <p className="text-lg sm:text-xl">
            From premium language classes to tech certifications, find the
            perfect path for your growth and success at London School.
          </p>
        </div>
      </section>

      {/* Main Course List */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-ls-red mb-8 text-center">
          Our Main Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              {/* Course Banner */}
              <div
                className="h-48 bg-center bg-cover rounded-t-lg"
                style={{ backgroundImage: `url(${course.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-ls-blue mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-700 mb-4">{course.summary}</p>
                <button
                  className="bg-ls-red text-white px-4 py-2 rounded-full hover:bg-ls-blue transition-colors"
                  onClick={() => toggleCourse(course.id)}
                >
                  {expandedCourse === course.id
                    ? "Hide Details"
                    : "View Details"}
                </button>
              </div>

              <AnimatePresence>
                {expandedCourse === course.id && (
                  <motion.div
                    className="bg-gray-50 px-6 pb-6 pt-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Additional Info */}
                    <div className="mt-2 text-sm text-gray-600 mb-2">
                      <strong>Additional Info: </strong>
                      {course.extras}
                    </div>

                    {/* "What You'll Learn" */}
                    {course.whatYouLearn && course.whatYouLearn.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-ls-blue">
                          What You’ll Learn
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 mt-1">
                          {course.whatYouLearn.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* "Why Choose" */}
                    {course.whyChoose && course.whyChoose.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-ls-blue">
                          Why Choose This Course
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 mt-1">
                          {course.whyChoose.map((reason, idx) => (
                            <li key={idx}>{reason}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-ls-blue text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-bold">Ready to Elevate Your Skills?</h2>
        <p className="mt-2">
          Enroll in any of our courses or contact us to learn more. We’re here
          to help you excel!
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

export default CoursesPage;
