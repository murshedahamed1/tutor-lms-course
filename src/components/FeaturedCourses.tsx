import { Star, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: 1,
    title: "AI DigiProfit Income Engine",
    description: "Build AI-powered WordPress eCommerce stores and scale to $20K/month with secret traffic sources.",
    image: "/placeholder.svg",
    rating: 5.0,
    reviews: 127,
    students: 2847,
    duration: "10 Modules",
    price: "$497",
    originalPrice: "$997",
    badge: "Bestseller",
    badgeColor: "bg-primary",
  },
  {
    id: 2,
    title: "ChatGPT Mastery for Business",
    description: "Leverage AI to automate content creation, customer service, and marketing for your business.",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 89,
    students: 1923,
    duration: "8 Modules",
    price: "$297",
    originalPrice: "$597",
    badge: "Popular",
    badgeColor: "bg-accent",
  },
  {
    id: 3,
    title: "Passive Income Automation",
    description: "Set up automated income streams that work for you 24/7 using proven digital strategies.",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 156,
    students: 3241,
    duration: "12 Modules",
    price: "$397",
    originalPrice: "$797",
    badge: "New",
    badgeColor: "bg-foreground",
  },
];

const FeaturedCourses = () => {
  return (
    <section id="courses" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4 text-primary font-medium">
            Featured Courses
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transform Your Skills with
            <span className="text-gradient"> Expert-Led Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our most popular courses designed to help you build real income-generating skills.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Image */}
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 left-4 ${course.badgeColor} text-primary-foreground`}>
                  {course.badge}
                </Badge>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Course Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium text-foreground">{course.rating}</span>
                    <span>({course.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-2xl text-foreground">
                      {course.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {course.originalPrice}
                    </span>
                  </div>
                  <Button size="sm" className="gradient-primary text-primary-foreground font-semibold shadow-soft">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-semibold gap-2 group">
            View All Courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
