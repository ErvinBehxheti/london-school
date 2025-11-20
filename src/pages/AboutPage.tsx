import Header from "@/components/Header";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import JobOpenings from "@/components/JobOpenings";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AboutPage = () => {

    useEffect(() => {
      window.scrollTo({top: 0, behavior: "smooth"})
    }, [])

  return (
    <main className="min-h-screen overflow-x-hidden">
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
              About London School
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover our story, values, and commitment to educational excellence in Mitrovica since 2019.
            </p>
          </div>
        </div>
      </section>

      <About />
      <Team />
      <Testimonials />
      <JobOpenings />
      
      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">Ready to Join Our Community?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the London School difference and become part of our success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs">
              <Button size="lg" className="premium-button text-white font-semibold">
                Explore Programs
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;