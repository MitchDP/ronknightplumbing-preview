import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Three Generations of <span className="text-primary">Trusted Service</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Since 1972, Ron Knight Plumbing has been Albany's go-to plumbing company. 
            As a third-generation, family-owned business, we understand the importance of 
            reliability, professionalism, and quality workmanship in every job we do.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 shadow-lg border-0 bg-card">
            <CardContent className="p-0">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">50+ Years</h3>
              <p className="text-muted-foreground text-sm">Of reliable service in the Willamette Valley</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 shadow-lg border-0 bg-card">
            <CardContent className="p-0">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Family Owned</h3>
              <p className="text-muted-foreground text-sm">Third-generation plumbing experts</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 shadow-lg border-0 bg-card">
            <CardContent className="p-0">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Licensed & Insured</h3>
              <p className="text-muted-foreground text-sm">Fully certified and protected</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 shadow-lg border-0 bg-card">
            <CardContent className="p-0">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Local Experts</h3>
              <p className="text-muted-foreground text-sm">Deep roots in Albany and surrounding areas</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge variant="secondary" className="text-sm px-4 py-2">Modern Plumbing Techniques</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Quick Response Times</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Credit Cards Accepted</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">No Mess Left Behind</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;