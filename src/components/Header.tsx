import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/1ddcf023-2e28-462a-9a44-8614680a0998.png" 
            alt="Ron Knight Plumbing Logo" 
            className="h-12 w-auto"
          />
          <div>
            <h1 className="text-xl font-bold font-old-english text-primary">Ron Knight Plumbing</h1>
            <p className="text-sm text-muted-foreground">Family Owned Since 1972</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Reviews</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="font-semibold text-foreground">(541) 928-7279</p>
              <p className="text-sm text-muted-foreground">Mon-Fri: 8am-5pm</p>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
        
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-6 mt-6">
                <nav className="flex flex-col space-y-4">
                  <a 
                    href="#about" 
                    className="text-foreground hover:text-primary transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </a>
                  <a 
                    href="#services" 
                    className="text-foreground hover:text-primary transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </a>
                  <a 
                    href="#reviews" 
                    className="text-foreground hover:text-primary transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Reviews
                  </a>
                  <a 
                    href="#contact" 
                    className="text-foreground hover:text-primary transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                </nav>
                
                <div className="border-t pt-6">
                  <div className="text-center mb-4">
                    <p className="font-semibold text-foreground">(541) 928-7279</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 8am-5pm</p>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;