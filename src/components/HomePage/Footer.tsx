// src/components/Footer.tsx

import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: School info */}
        <div>
          <h3 className="font-bold text-white text-lg">London School</h3>
          <p className="text-sm mt-2">
            Rr Afrim Zhitia, Mitrovicë 40000 <br />
            +383 49 236 888 <br />
            <a href="mailto:londonschooloffice@gmail.com">londonschooloffice@gmail.com</a>
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link to="/courses" className="hover:underline">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
            <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social */}
        <div>
          <h4 className="font-semibold text-white mb-2">Follow Us</h4>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.facebook.com/londonschoolks"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/london__school/"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Map or Additional Info */}
        <div>
          <h4 className="font-semibold text-white mb-2">Visit Us</h4>
          <div className="bg-gray-800 h-24 flex items-center justify-center text-sm relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1263.0268132319577!2d20.867940852642143!3d42.888506800595025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135345be74d29c69%3A0xd1d95ee51e5bafba!2sLondon%20School!5e0!3m2!1sen!2s!4v1739837284245!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} London School - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
