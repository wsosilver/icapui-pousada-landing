import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactSection() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    window.open('https://wa.me/5585999999999?text=Olá! Gostaria de fazer uma reserva na Pousada do Francisco.', '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-elegant">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8">
            Momentos para levar <span className="font-bold">na Memória</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conecte-se conosco e reserve uma experiência única em meio às belezas de Icapuí.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-soft border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-hero p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Telefone</h3>
                    <p className="text-muted-foreground">(85) 9 9999-9999</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-hero p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">E-mail</h3>
                    <p className="text-muted-foreground">contato@pousadadofrancisco.com.br</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-hero p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Localização</h3>
                    <p className="text-muted-foreground">Icapuí - CE, Brasil</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-hero p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Atendimento</h3>
                    <p className="text-muted-foreground">Todos os dias, 24 horas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
              <h3 className="text-3xl font-light text-foreground mb-4">
                Sua experiência <span className="font-bold">inesquecível</span> começa aqui
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Entre em contato conosco e descubra por que somos o destino perfeito 
                para quem busca tranquilidade e beleza natural.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-button text-lg px-8 py-4"
              >
                Reserve Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}