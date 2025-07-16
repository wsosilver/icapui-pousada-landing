import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Utensils, Waves, Heart, Camera, Sun, MapPin } from 'lucide-react';

export function ExperiencesSection() {
  return (
    <section id="experiencias" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            O esplendor do nosso <span className="font-bold">horizonte</span>
          </h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-muted-foreground mb-6">
              Elixir para os <span className="font-bold">Sentidos</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Desfrute de experiências encantadoras aqui e em nossos arredores.
            </p>
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Sabores */}
          <Card className="shadow-soft border-0 hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-light text-foreground mb-2">
                  Explore novos <span className="font-bold">Sabores</span>
                </h4>
                <p className="text-muted-foreground mb-6">
                  Culinária regional com ingredientes frescos e sabores autênticos do litoral cearense.
                </p>
                <Button variant="outline" size="sm">
                  Ver Mais
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Paladar */}
          <Card className="shadow-soft border-0 hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Waves className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-light text-foreground mb-2">
                  Refresque o <span className="font-bold">Paladar</span>
                </h4>
                <p className="text-muted-foreground mb-6">
                  Drinks tropicais e bebidas refrescantes com vista para o mar de Icapuí.
                </p>
                <Button variant="outline" size="sm">
                  Descobrir
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Icapuí Original */}
          <Card className="shadow-soft border-0 hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-light text-foreground mb-2">
                  Viva a beleza do <span className="font-bold">Icapuí Original</span>
                </h4>
                <p className="text-muted-foreground mb-6">
                  Explore falésias coloridas, praias preservadas e a cultura local autêntica.
                </p>
                <Button variant="outline" size="sm">
                  Explorar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Romance */}
          <Card className="shadow-soft border-0 hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-light text-foreground mb-2">
                  Se entregue à <span className="font-bold">Lua de Mel dos Sonhos</span>
                </h4>
                <p className="text-muted-foreground mb-6">
                  Pacote romântico especial com pétalas de rosas e massagens relaxantes.
                </p>
                <Button variant="outline" size="sm">
                  Reservar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Detalhes */}
          <Card className="shadow-soft border-0 hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-light text-foreground mb-2">
                  Apaixone-se pelos <span className="font-bold">Detalhes</span>
                </h4>
                <p className="text-muted-foreground mb-6">
                  Momentos especiais como café da manhã flutuante e surpresas personalizadas.
                </p>
                <Button variant="outline" size="sm">
                  Conhecer
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Relaxamento */}
          <Card className="shadow-soft border-0 hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-light text-foreground mb-2">
                  Relaxe, a <span className="font-bold">Casa é Sua</span>
                </h4>
                <p className="text-muted-foreground mb-6">
                  Ambiente acolhedor onde você se sente em casa, com toda privacidade e conforto.
                </p>
                <Button variant="outline" size="sm">
                  Sentir-se em Casa
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Adventure Section */}
        <div className="bg-gradient-elegant rounded-2xl p-12 text-center shadow-elegant">
          <h3 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            <span className="font-bold">Sentiero</span> - Aventure-se pela península
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Programa especial de exploração das belezas naturais e culturais de Icapuí e região.
          </p>
          <Button 
            variant="default" 
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-button"
          >
            Conheça o Programa
          </Button>
        </div>
      </div>
    </section>
  );
}