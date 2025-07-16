import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Utensils, Bed } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Sobre Nós</h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Pousada e Restaurante do Francisco oferece uma experiência única em Icapuí, 
              combinando a hospitalidade cearense com o conforto que você merece. Localizada 
              estrategicamente próxima às mais belas praias da região, nossa pousada é o 
              ponto de partida perfeito para explorar as maravilhas naturais do litoral.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nosso restaurante serve pratos tradicionais da culinária regional, preparados 
              com ingredientes frescos e muito amor. Experimente nossos pratos à base de 
              frutos do mar, sempre frescos, e desfrute de sabores autênticos em um ambiente 
              acolhedor com vista para o mar.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card-tropical border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-ocean p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Localização Privilegiada</h3>
                    <p className="text-muted-foreground">Próximo às melhores praias de Icapuí</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card-tropical border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-ocean p-3 rounded-full">
                    <Utensils className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Gastronomia Regional</h3>
                    <p className="text-muted-foreground">Pratos tradicionais com frutos do mar frescos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card-tropical border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-ocean p-3 rounded-full">
                    <Bed className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Acomodações Confortáveis</h3>
                    <p className="text-muted-foreground">Quartos aconchegantes com todo conforto</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}