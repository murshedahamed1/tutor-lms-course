import { ArrowRight, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-8 animate-float">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6">
            Ready to Start Your Journey to
            <span className="block text-primary"> Financial Freedom?</span>
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-background/70 max-w-2xl mx-auto mb-8">
            Join over 10,000 students who have already transformed their lives with our 
            proven courses. Your future self will thank you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground font-semibold text-lg px-8 shadow-soft hover:shadow-hover transition-all gap-2 group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-semibold text-lg border-background/20 text-background hover:bg-background/10 hover:text-background"
            >
              View All Courses
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-background/60">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">30-Day Money Back Guarantee</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-background/40 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Lifetime Access</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-background/40 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
