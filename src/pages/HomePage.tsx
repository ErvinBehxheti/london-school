// src/pages/HomePage.tsx

import React from "react";
import NavBar from "../components/HomePage/NavBar";
import Synergy from "../components/HomePage/Synergy";
import FeaturedCourses from "../components/HomePage/FeaturedCourses";
import Testimonials from "../components/HomePage/Testimonials";
import Footer from "../components/HomePage/Footer";
import { Helmet } from "react-helmet-async";
import TeamSlider from "../components/HomePage/MeetOutTeam";
import HeroWithPhoto from "../components/HomePage/Hero";

const HomePage: React.FC = () => {
  // Example data you might keep in a config or environment variables
  const phoneNumber = "+383 49 236 888";
  const websiteUrl = "https://www.londonks.vercel.app"; // your real domain
  const fbUrl = "https://www.facebook.com/londonschoolks";
  const instaUrl = "https://www.instagram.com/london__school";
  
  // You can tweak your keywords for better ranking
  const keywords = [
    "London School",
    "Logiscool",
    "Logiscool Kosova",
    "Mitrovica",
    "Mitrovice",
    "Kosova",
    "Kosovo",
    "Private School Mitrovica",
    "English courses",
    "German courses",
    "JavaScript courses",
    "Python courses",
    "Scratch",
    "Blox",
    "Kurse gjuhësore",
    "Kurse anglisht",
    "Kurse gjermanisht",
    "Language school in Kosova",
    "Premium language education",
    "Tech education for kids",
    "Logiscool partnership",
    "Youthful Apple-inspired design"
  ].join(", ");

  // JSON-LD structured data: EducationalOrganization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "London School",
    "url": websiteUrl,
    "logo": `https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/278569029_1173833543435250_5518496834054466765_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EYvP-VAoJNgQ7kNvgE-RYy3&_nc_oc=AdhGf_aOQzDwyfemydXn7kYlD-fANrfi1noqDzYzoxak_KOQT4juVI08PAuYnRGnteM&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=AS_M7GlSenm70iqNTkf7nZT&oh=00_AYCo3qvCMenyH6XiVN8CF3lpFdVPJLKiZIJGpkVUDpgBZQ&oe=67B99AC3`,
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": phoneNumber,
      "contactType": "customer service"
    }],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rr Afrim Zhitia, Mitrovicë 40000",
      "addressLocality": "Mitrovica",
      "addressCountry": "Kosova"
    },
    "sameAs": [
      fbUrl,
      instaUrl
      // You can add Twitter, LinkedIn, YouTube, etc.
    ]
  };

  return (
    <>
        <Helmet>
          {/* Primary Meta Tags */}
          <title>London School | Home</title>
          <meta
            name="description"
            content="London School in Mitrovica, Kosova offers premium language (English & German) and tech (JavaScript) courses for kids and teens. Partnered with Logiscool to provide modern, engaging learning experiences."
          />
          <meta name="keywords" content={keywords} />
          <meta name="author" content="London School" />
          <link rel="canonical" href={websiteUrl} />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={websiteUrl} />
          <meta property="og:title" content="London School - Premium Language & Tech Education" />
          <meta 
            property="og:description" 
            content="Unlock your potential at London School in Mitrovica, Kosova. Specialized in English, German, and JavaScript courses for young learners!"
          />
          <meta
            property="og:image"
            content={`${websiteUrl}/photos/hero-background.jpg`} 
            /* Replace with an actual banner image URL */
          />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={websiteUrl} />
          <meta name="twitter:title" content="London School - Premium Courses" />
          <meta
            name="twitter:description"
            content="Discover English, German, and JavaScript courses at London School in Mitrovica. Experience modern, playful, Apple-inspired learning!"
          />
          <meta
            name="twitter:image"
            content={`${websiteUrl}/assets/images/og-image.jpg`}
          />

          {/* Structured Data (JSON-LD) */}
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>

      {/* Reusable Nav Component with i18n language switch */}
      <NavBar />

      <div className="pt-16 w-full overflow-x-hidden">
        <HeroWithPhoto />
        <Synergy />
        <FeaturedCourses />
        <Testimonials />
        <TeamSlider />
        <Footer />
      </div>      
    </>
  );
};

export default HomePage;
