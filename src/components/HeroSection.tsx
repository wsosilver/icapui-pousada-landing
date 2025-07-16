import { Button } from '@/components/ui/button';
import { ImageCarousel } from './ImageCarousel';

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-elegant pt-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-8 leading-tight">
            Descubra a <span className="font-bold">Pousada do Francisco</span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-8">
              Experiências <span className="font-bold">Sob Medida</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Muito além da hospedagem, somos o ponto de encontro de experiências singulares. 
              Inspirados na beleza natural de Icapuí, fazemos da elegância e do aconchego 
              o cenário ideal para que você se sinta em sua casa de praia.
            </p>
            
            <p className="text-lg text-muted-foreground italic mb-12">
              Uma experiência discreta e personalizada te espera em nossa pousada.
            </p>
          </div>

          <Button 
            variant="default" 
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 shadow-button text-lg px-8 py-4"
          >
            Reserve Sua Experiência
          </Button>
        </div>

        <div className="mt-16">
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
}