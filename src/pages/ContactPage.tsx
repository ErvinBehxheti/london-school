import Header from "@/components/Header";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import JobOpenings from "@/components/JobOpenings";

const ContactPage = () => {
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl mb-4">Visit Our Campus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Mitrovica, our modern campus provides the perfect environment for learning and growth.
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-3xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="font-heading font-bold text-2xl mb-4">London School Campus</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Mitrovica, Kosovo<br />
              Modern facilities with state-of-the-art classrooms and technology
            </p>
            <Button className="premium-button text-white font-semibold">
              Get Directions
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;