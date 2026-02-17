import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Solar panels installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl">
          
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div >Smart Solar Today</div>{" "}
            <span className="text-secondary">Sustainable Tomorrow</span>
          </h1>
          
          <p className="text-background/90 text-lg md:text-xl mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Complete solar solutions for homes, businesses, and entrepreneurs. 
            Save up to 90% on electricity bills with India's leading solar EPC company.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
        
          </div>

          {/* Trust Indicators */}
         
        </div>
      </div>

     
    </section>
  );
}
