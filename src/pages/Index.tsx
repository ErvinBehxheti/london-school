import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import Programs from "@/components/Programs";
import ActivitiesScroll from "@/components/ActivitiesScroll";
import TechFestFeature from "@/components/TechFestFeature";
import TeamSpotlight from "@/components/TeamSpotlight";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import GalleryPreview from "@/components/GalleryPreview";
import ContactCTA from "@/components/ContactCTA";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <AboutIntro />
      <Programs />
      <ActivitiesScroll />
      <TechFestFeature />
      <TeamSpotlight />
      <Testimonials />
      <Partners />
      <GalleryPreview />
      <ContactCTA />
    </main>
  );
};

export default Index;
