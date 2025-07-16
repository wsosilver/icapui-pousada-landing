import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bed, Bath, Wifi, AirVent, Coffee, Star } from 'lucide-react';

export function AccommodationsSection() {
  return (
    <section id="acomodacoes" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8">
            Seu refúgio <span className="font-bold">Paradisíaco</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Suíte Master */}
          <Card className="shadow-elegant border-0 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-gradient-hero relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <h3 className="text-xl font-bold">Suíte Master Frente Mar</h3>
                <p className="text-sm opacity-90">com Banheira</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Bed className="h-4 w-4" />
                  <span>King Size</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bath className="h-4 w-4" />
                  <span>Banheira</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Wifi className="h-4 w-4" />
                  <span>Wi-Fi</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Nossa suíte premium com vista privilegiada para o mar e banheira para momentos relaxantes.
              </p>
              <Button variant="outline" className="w-full">
                Conheça os Detalhes
              </Button>
            </CardContent>
          </Card>

          {/* Suíte Premium */}
          <Card className="shadow-elegant border-0 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-gradient-hero relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-bold">Suíte Premium Frente Mar</h3>
                <p className="text-sm opacity-90">com Varanda</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Bed className="h-4 w-4" />
                  <span>Queen Size</span>
                </div>
                <div className="flex items-center space-x-1">
                  <AirVent className="h-4 w-4" />
                  <span>Ar-condicionado</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Coffee className="h-4 w-4" />
                  <span>Varanda</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Suíte confortável com varanda privativa e vista deslumbrante para o oceano.
              </p>
              <Button variant="outline" className="w-full">
                Conheça os Detalhes
              </Button>
            </CardContent>
          </Card>

          {/* Vila Frente Mar */}
          <Card className="shadow-elegant border-0 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-gradient-hero relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-bold">Vila Frente Mar</h3>
                <p className="text-sm opacity-90">Ideal para Famílias</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Bed className="h-4 w-4" />
                  <span>2 Quartos</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bath className="h-4 w-4" />
                  <span>2 Banheiros</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Coffee className="h-4 w-4" />
                  <span>Cozinha</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Vila completa para famílias com espaço amplo e toda infraestrutura necessária.
              </p>
              <Button variant="outline" className="w-full">
                Conheça os Detalhes
              </Button>
            </CardContent>
          </Card>

          {/* Classic */}
          <Card className="shadow-elegant border-0 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-gradient-hero relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-bold">Classic</h3>
                <p className="text-sm opacity-90">Aconchegante</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Bed className="h-4 w-4" />
                  <span>Double</span>
                </div>
                <div className="flex items-center space-x-1">
                  <AirVent className="h-4 w-4" />
                  <span>Ar-condicionado</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Wifi className="h-4 w-4" />
                  <span>Wi-Fi</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Quarto aconchegante com todo conforto necessário para uma estadia perfeita.
              </p>
              <Button variant="outline" className="w-full">
                Conheça os Detalhes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}