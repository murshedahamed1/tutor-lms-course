import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "eCommerce Entrepreneur",
    image: "/placeholder.svg",
    rating: 5,
    content: "The AI DigiProfit course completely transformed my business. I went from struggling to make sales to consistently earning $15K/month. The strategies are practical and actionable.",
    highlight: "$15K/month",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Digital Marketer",
    image: "/placeholder.svg",
    rating: 5,
    content: "I've taken dozens of online courses, but Xenlogy's quality is unmatched. The community support alone is worth the investment. I've connected with so many successful entrepreneurs.",
    highlight: "Unmatched Quality",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Former 9-to-5 Employee",
    image: "/placeholder.svg",
    rating: 5,
    content: "Thanks to the passive income course, I was able to quit my job and focus on my online business full-time. The step-by-step approach made it so easy to follow.",
    highlight: "Quit My Job",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "WordPress Developer",
    image: "/placeholder.svg",
    rating: 5,
    content: "The WordPress eCommerce training gave me skills I use every single day. I now build stores for clients and charge premium rates. Best investment I've ever made.",
    highlight: "Premium Rates",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4 text-primary font-medium">
            Student Success Stories
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Join Thousands of
            <span className="text-gradient"> Successful Students</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our students have to say about their transformation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-card hover:shadow-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Highlight Badge */}
              <Badge className="gradient-primary text-primary-foreground mb-6">
                {testimonial.highlight}
              </Badge>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
