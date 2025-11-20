import Header from "@/components/Header";
import Programs from "@/components/Programs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Star} from "lucide-react";
import { Link } from "react-router-dom";

const ProgramsPage = () => {
  const testimonials = [
    {
      name: "Ana Berisha",
      program: "English TOEFL",
      score: "105/120",
      quote: "London School's TOEFL preparation helped me achieve my dream score and get into university abroad!",
      rating: 5
    },
    {
      name: "Arsim Kabashi",
      program: "Programming",
      achievement: "React Developer",
      quote: "The programming course gave me real-world skills. I'm now working as a frontend developer!",
      rating: 5
    },
    {
      name: "Petrit Kutllovci",
      program: "German Language",
      achievement: "B2 Certified",
      quote: "Excellent teachers and method. I can now confidently communicate in German for business.",
      rating: 5
    }
  ];

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
              Our Programs
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Comprehensive courses designed to unlock your potential in languages and technology.
            </p>
          </div>
        </div>
      </section>

      <Programs />
      
      {/* Success Stories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Success Stories
            </Badge>
            <h2 className="font-heading font-bold text-4xl mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real achievements from real students who transformed their futures with London School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="premium-card border-0 animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{testimonial.program}</Badge>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="font-heading text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    {testimonial.score || testimonial.achievement}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Classes */}
    </main>
  );
};

export default ProgramsPage;