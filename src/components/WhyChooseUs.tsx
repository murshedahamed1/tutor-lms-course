import { Video, Clock, Infinity, Users, Gift, Headphones } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Video,
    title: "Expert-Led Video Courses",
    description: "Learn from industry professionals who have real-world experience and proven results.",
  },
  {
    icon: Clock,
    title: "Learn at Your Own Pace",
    description: "Access course materials anytime, anywhere. No deadlines, no pressure.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    description: "Once enrolled, you get permanent access to all course content and future updates.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a thriving community of like-minded learners and network with successful students.",
  },
  {
    icon: Gift,
    title: "Exclusive Bonuses",
    description: "Get access to premium toolkits, templates, and resources worth thousands of dollars.",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Get your questions answered quickly with our dedicated student support team.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="secondary" className="mb-4 text-primary font-medium">
              Why Choose Xenlogy
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Platform Built for
              <span className="text-gradient"> Your Success</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're not just another online course platform. We're your partner in building a 
              sustainable digital income. Here's what makes us different.
            </p>

            {/* Feature highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.slice(0, 4).map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats/Visual */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-card">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-muted rounded-2xl">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-gradient mb-2">
                    10K+
                  </div>
                  <p className="text-muted-foreground font-medium">Students Enrolled</p>
                </div>
                <div className="text-center p-6 bg-muted rounded-2xl">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-gradient mb-2">
                    4.9
                  </div>
                  <p className="text-muted-foreground font-medium">Average Rating</p>
                </div>
                <div className="text-center p-6 bg-muted rounded-2xl">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-gradient mb-2">
                    50+
                  </div>
                  <p className="text-muted-foreground font-medium">Expert Courses</p>
                </div>
                <div className="text-center p-6 bg-muted rounded-2xl">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-gradient mb-2">
                    95%
                  </div>
                  <p className="text-muted-foreground font-medium">Success Rate</p>
                </div>
              </div>

              {/* Additional features */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  {features.slice(4).map((feature) => (
                    <div key={feature.title} className="flex items-center gap-2">
                      <feature.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
