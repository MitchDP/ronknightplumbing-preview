import { Button } from "@/components/ui/button";
import { Shield, Star, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold">Licensed & Insured</span>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Albany's Trusted <br />
            <span className="text-primary">Plumbing Experts</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Third-generation, family-owned plumbing company serving the Willamette Valley 
            for over 55 years. Professional, reliable service you can count on.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
              <Phone className="h-5 w-5 mr-2" />
              Call (541) 928-7279
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              Request Service
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary fill-current" />
              <span className="text-muted-foreground">Same-Day Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary fill-current" />
              <span className="text-muted-foreground">No Job Too Small</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary fill-current" />
              <span className="text-muted-foreground">Family Owned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;