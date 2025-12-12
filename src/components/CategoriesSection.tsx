import { Bot, ShoppingCart, Megaphone, Wallet, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    icon: Bot,
    name: "AI & Automation",
    description: "Master AI tools like ChatGPT to automate your business",
    courses: 12,
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: ShoppingCart,
    name: "eCommerce",
    description: "Build and scale profitable online stores",
    courses: 8,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Megaphone,
    name: "Digital Marketing",
    description: "Drive traffic and convert visitors into customers",
    courses: 15,
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Wallet,
    name: "Passive Income",
    description: "Create automated income streams that work 24/7",
    courses: 10,
    color: "from-green-500 to-emerald-500",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4 text-primary font-medium">
            Browse Categories
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Find the Perfect Course
            <span className="text-gradient"> for You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our diverse range of categories and find the skills that match your goals.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-hover transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-medium text-muted-foreground">
                    {category.courses} Courses
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
