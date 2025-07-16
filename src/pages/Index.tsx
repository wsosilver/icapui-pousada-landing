import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ExperiencesSection } from '@/components/ExperiencesSection';
import { AboutSection } from '@/components/AboutSection';
import { AccommodationsSection } from '@/components/AccommodationsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ExperiencesSection />
      <AboutSection />
      <AccommodationsSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
