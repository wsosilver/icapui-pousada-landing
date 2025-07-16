import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Utensils, Bed } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Acomodações e Experiências</h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa pousada rústica e aconchegante está situada de frente para o mar, proporcionando 
              uma experiência autêntica do litoral cearense. Aqui você encontra o equilíbrio perfeito 
              entre o contato com a natureza preservada e o conforto necessário para dias inesquecíveis.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desfrute de longas caminhadas na praia, relaxe em redes coloridas sob a sombra dos 
              coqueiros, e saboreie a culinária regional preparada com ingredientes frescos da região. 
              Nosso restaurante oferece pratos tradicionais e frutos do mar sempre frescos, em um 
              ambiente familiar que celebra os sabores do Ceará.
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
                    <h3 className="text-xl font-semibold text-foreground">De Frente Para o Mar</h3>
                    <p className="text-muted-foreground">Vista privilegiada do oceano em todas as acomodações</p>
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
                    <h3 className="text-xl font-semibold text-foreground">Sabores Autênticos</h3>
                    <p className="text-muted-foreground">Culinária regional com ingredientes frescos locais</p>
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
                    <h3 className="text-xl font-semibold text-foreground">Ambiente Rústico</h3>
                    <p className="text-muted-foreground">Acomodações aconchegantes em meio à natureza</p>
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