import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactSection() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    window.open('https://wa.me/5585999999999?text=Olá! Gostaria de fazer uma reserva na Pousada do Francisco.', '_blank');
  };

  return (
    <section className="py-16 px-4 bg-gradient-beach">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Faça Sua Reserva</h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e garante já sua estadia em um dos destinos mais belos do Ceará.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="shadow-card-tropical border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-ocean p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Telefone</h3>
                    <p className="text-muted-foreground">(85) 9 9999-9999</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card-tropical border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-ocean p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">E-mail</h3>
                    <p className="text-muted-foreground">contato@pousadadofrancisco.com.br</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card-tropical border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-ocean p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Endereço</h3>
                    <p className="text-muted-foreground">Icapuí - CE, Brasil</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card-tropical border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-ocean p-3 rounded-full">
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

          <div className="text-center space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-tropical">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Pronto para sua próxima aventura?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Entre em contato conosco pelo WhatsApp e faça sua reserva de forma rápida e prática.
              </p>
              <Button 
                variant="tropical" 
                size="xl" 
                onClick={handleWhatsAppClick}
                className="text-xl font-semibold"
              >
                Entrar em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}