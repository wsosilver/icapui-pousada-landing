import { Button } from '@/components/ui/button';

export function Header() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-foreground">
          Pousada do Francisco
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
          <a href="#experiencias" className="text-muted-foreground hover:text-foreground transition-colors">
            Experiências
          </a>
          <a href="#acomodacoes" className="text-muted-foreground hover:text-foreground transition-colors">
            Acomodações
          </a>
        </nav>

        <Button 
          variant="default" 
          onClick={scrollToContact}
          className="bg-primary hover:bg-primary/90 shadow-button"
        >
          Reserve Agora
        </Button>
      </div>
    </header>
  );
}