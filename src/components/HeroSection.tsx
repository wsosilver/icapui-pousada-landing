import { Button } from '@/components/ui/button';
import { ImageCarousel } from './ImageCarousel';

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sand-beige/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a Pousada
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            A nossa pousada oferece um ambiente rústico e aconchegante, de frente para o mar, onde você 
            pode relaxar e aproveitar a natureza preservada. Caminhe pela praia, descanse em uma rede à 
            sombra dos coqueiros e conheça a comunidade local.
          </p>
          <Button 
            variant="tropical" 
            size="xl" 
            onClick={scrollToContact}
            className="mb-12"
          >
            Reserve Agora
          </Button>
        </div>

        <ImageCarousel />

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground italic">
            "Um refúgio onde o mar encontra a hospitalidade cearense"
          </p>
        </div>
      </div>
    </section>
  );
}