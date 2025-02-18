import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursePage';
import FloatingCTA from './components/HomePage/FloatingCTA';
import AboutPage from './pages/AboutUs';
import ContactPage from './pages/ContactUs';
import FAQPage from './pages/FAQ';


const App: React.FC = () => {
  return (
<React.Fragment>
<Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Router>

    <FloatingCTA />
</React.Fragment>
  );
};

export default App;
