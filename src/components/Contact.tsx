import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent!",
      description: "We'll contact you within 1 hour during business hours.",
    });
  };
  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to solve your plumbing needs? Contact us today for a free estimate 
            or emergency service. We're here to help!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Request Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name *</Label>
                  <Input id="name" placeholder="Your full name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone *</Label>
                  <Input id="phone" placeholder="(541) 000-0000" className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="service" className="text-foreground">Service Needed *</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency Plumbing</SelectItem>
                    <SelectItem value="drain">Drain Cleaning</SelectItem>
                    <SelectItem value="faucet">Faucet Installation/Repair</SelectItem>
                    <SelectItem value="leak">Leak Detection/Repair</SelectItem>
                    <SelectItem value="shower">Shower Installation</SelectItem>
                    <SelectItem value="water-heater">Water Heater Service</SelectItem>
                    <SelectItem value="disposal">Garbage Disposal</SelectItem>
                    <SelectItem value="gas">Gas Line Service</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe your plumbing issue or service needs..."
                  rows={4}
                  className="mt-1"
                />
              </div>
              
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6">
                  Send Request
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll contact you within 1 hour during business hours.
                </p>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Call Us Now</h3>
                    <p className="text-2xl font-bold text-primary mb-1">(541) 928-7279</p>
                    <p className="text-muted-foreground">Same-day service available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="text-lg text-foreground mb-1">ronknightplumbing@gmail.com</p>
                    <p className="text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Visit Our Office</h3>
                    <p className="text-foreground mb-1">2845 Pacific Blvd SW</p>
                    <p className="text-foreground mb-2">Albany, OR 97321</p>
                    <p className="text-muted-foreground">Serving the entire Willamette Valley</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                    <div className="space-y-1 text-foreground">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                    <p className="text-muted-foreground mt-2">Emergency service available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="mt-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="bg-muted h-64 lg:h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Find Us in Albany</h3>
                  <p className="text-muted-foreground">2845 Pacific Blvd SW, Albany, OR 97321</p>
                  <Button asChild variant="outline" className="mt-4">
                    <a href="https://maps.google.com/?q=2845+Pacific+Blvd+SW,+Albany,+OR+97321" target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;