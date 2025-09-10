import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wrench, 
  Droplet, 
  Search, 
  ShowerHead, 
  Flame, 
  Zap, 
  Trash2, 
  Fuel,
  Phone
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Drain Cleaning",
      description: "Professional drain cleaning to restore proper flow and prevent clogs."
    },
    {
      icon: <Droplet className="h-8 w-8 text-primary" />,
      title: "Faucet Installation & Repair", 
      description: "Expert installation and repair of all types of faucets and fixtures."
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Leak Detection & Pipe Repair",
      description: "Advanced leak detection and comprehensive pipe repair services."
    },
    {
      icon: <ShowerHead className="h-8 w-8 text-primary" />,
      title: "Shower Installation",
      description: "Complete shower installation and renovation services."
    },
    {
      icon: <Flame className="h-8 w-8 text-primary" />,
      title: "Water Heater Services",
      description: "Installation, repair, and maintenance of all water heater types."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Hot Water Recirculation",
      description: "Efficient hot water recirculation systems for instant hot water."
    },
    {
      icon: <Trash2 className="h-8 w-8 text-primary" />,
      title: "Garbage Disposal Services",
      description: "Installation, repair, and replacement of garbage disposal units."
    },
    {
      icon: <Fuel className="h-8 w-8 text-primary" />,
      title: "Gas Line Services",
      description: "Safe and professional gas line installation and repair."
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Emergency Plumbing",
      description: "Same-day emergency service for urgent plumbing issues."
    }
  ];

  return (
    <section id="services" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Professional <span className="text-primary">Plumbing Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine maintenance to emergency repairs, we provide comprehensive 
            plumbing solutions for homes and businesses throughout Albany and the Willamette Valley.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardHeader className="text-center pb-4">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-primary/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">Need Emergency Service?</h3>
            <p className="text-muted-foreground mb-4">
              Same-day service available for urgent plumbing issues. Call us now!
            </p>
            <p className="text-2xl font-bold text-primary">(541) 928-7279</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;