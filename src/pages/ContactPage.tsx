import Header from "@/components/Header";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import JobOpenings from "@/components/JobOpenings";
import { useEffect } from "react";

const ContactPage = () => {

    useEffect(() => {
      window.scrollTo({top: 0, behavior: "smooth"})
    }, [])

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to start your learning journey? Get in touch with our team and discover how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      <JobOpenings />

      <Contact />
      
      {/* Map/Location Section */}
    </main>
  );
};

export default ContactPage;