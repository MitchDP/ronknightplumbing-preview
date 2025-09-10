import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, CreditCard, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/1ddcf023-2e28-462a-9a44-8614680a0998.png" 
                alt="Ron Knight Plumbing Logo" 
                className="h-10 w-auto filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">Ron Knight Plumbing</h3>
                <p className="text-sm opacity-80">Family Owned Since 1965</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Third-generation, family-owned plumbing company serving Albany, Oregon, 
              and the surrounding Willamette Valley for over 55 years. Professional, 
              reliable service you can trust.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                <Shield className="h-3 w-3 mr-1" />
                Licensed & Insured
              </Badge>
              <Badge variant="secondary" className="bg-background/10 text-background border-background/20">
                <CreditCard className="h-3 w-3 mr-1" />
                Credit Cards Accepted
              </Badge>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <p className="font-semibold">(541) 928-7279</p>
                  <p className="text-sm opacity-80">Emergency Available 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <p>ronknightplumbing@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <div>
                  <p>2845 Pacific Blvd SW</p>
                  <p>Albany, OR 97321</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>• Emergency Plumbing</li>
              <li>• Drain Cleaning</li>
              <li>• Leak Detection & Repair</li>
              <li>• Water Heater Services</li>
              <li>• Faucet Installation</li>
              <li>• Gas Line Services</li>
              <li>• Garbage Disposal</li>
              <li>• Shower Installation</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-background/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-background/80">
              © 2024 Ron Knight Plumbing. All rights reserved.
            </p>
            <p className="text-sm text-background/60 mt-1">
              Serving Albany, Corvallis, Salem, and the entire Willamette Valley since 1965.
            </p>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-background/80">
            <a href="#about" className="hover:text-background transition-colors">About</a>
            <a href="#services" className="hover:text-background transition-colors">Services</a>
            <a href="#reviews" className="hover:text-background transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-background transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-background/60">
            Website: ronknightplumbing.com | Licensed, Bonded & Insured Plumbing Contractor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;