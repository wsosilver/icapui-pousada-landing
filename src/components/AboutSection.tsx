import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-4 bg-gradient-elegant">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8">
            Tradição & <span className="font-bold">Amor</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Nossa pequena pousada, além de brisa e maresia, perfuma o horizonte com 
              elegância e hospitalidade, criando o retrato perfeito para momentos de 
              tranquilidade em meio à natureza preservada de Icapuí.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="shadow-soft border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-light text-foreground mb-4">
                <span className="font-bold">Ambiente</span> Rústico
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Acomodações aconchegantes que preservam o charme tradicional 
                do litoral cearense, com todo conforto moderno.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-light text-foreground mb-4">
                <span className="font-bold">Vista</span> Privilegiada
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Localização única de frente para o mar, oferecendo vistas 
                deslumbrantes do oceano e das falésias coloridas.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-light text-foreground mb-4">
                <span className="font-bold">Culinária</span> Regional
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Restaurante com pratos tradicionais preparados com 
                ingredientes frescos e sabores autênticos da região.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}