import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Pamela W.",
      content: "We were very impressed with the efficiency, quality, and value of the services we received from Ron Knight Plumbing. They were friendly and helpful regarding our kitchen sink leak. The plumber arrived on time, explained the repair clearly, and made sure everything was working perfectly before leaving. We highly recommend them and will use them again when the need arises."
    },
    {
      name: "Pat Wilcox",
      content: "Ron Knight Plumbing rocks! This is a third-generation, family-owned company and it really shows in how they treat their customers. They are responsive, professional, and never leave a mess behind. I've used them for several plumbing jobs around my house and every time they've been punctual, efficient, and fair with pricing. I totally recommend this company—it's really nice when a repair person actually calls you back right away, shows up on time, and finishes the job right. Kudos to the whole staff!"
    },
    {
      name: "Willardx Tanner",
      content: "Quick and efficient plumbing service. When a pipe burst behind my toilet and flooded the master bedroom, I called Ron Knight Plumbing in a panic. George answered the phone, calmed me down, and had a plumber at my house within the hour. Justin was professional, knowledgeable, and had everything fixed in no time. The whole staff was reassuring and friendly during a stressful situation. Great job, and I've found my go-to plumbers from now on."
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 text-primary fill-current" />
            ))}
            <span className="text-lg font-semibold text-foreground ml-2">5.0 Stars</span>
          </div>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - see what Albany residents have to say about our service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{review.content}"
                </blockquote>
                <cite className="text-foreground font-semibold not-italic">— {review.name}</cite>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-primary/10 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Experience the Ron Knight Difference
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join hundreds of satisfied customers who trust Ron Knight Plumbing for all their plumbing needs. 
              Professional service, fair pricing, and quality workmanship guaranteed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">55+</div>
                <div className="text-sm text-muted-foreground">Years in Business</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3rd</div>
                <div className="text-sm text-muted-foreground">Generation Family Owned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;