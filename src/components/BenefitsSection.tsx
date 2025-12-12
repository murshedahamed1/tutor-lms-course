import { Bot, TrendingUp, Target, ShoppingCart, Zap, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: Bot,
    title: "AI-Powered Business",
    description: "Learn to leverage ChatGPT and AI tools to automate and scale your digital business.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TrendingUp,
    title: "Scale to $20K/Month",
    description: "Proven strategies to grow your income with step-by-step implementation guides.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Target,
    title: "Secret Traffic Sources",
    description: "Access exclusive traffic methods that most marketers don't know about.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: ShoppingCart,
    title: "WordPress eCommerce",
    description: "Master WordPress and WooCommerce to build profitable online stores.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Zap,
    title: "Fast Implementation",
    description: "Get results quickly with our action-oriented, no-fluff approach to learning.",
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    icon: DollarSign,
    title: "Passive Income Streams",
    description: "Build automated systems that generate income while you sleep.",
    color: "bg-green-500/10 text-green-500",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4 text-primary font-medium">
            What You'll Learn
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills That
            <span className="text-gradient"> Transform Your Future</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our courses are designed to give you practical, actionable skills that translate directly into income.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-card hover:shadow-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
