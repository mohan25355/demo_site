import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-secondary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-background rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-background rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
              Ready to Go Solar?
            </h2>
            <p className="text-secondary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Get a free consultation and custom solar proposal for your home or business.
              Our experts will help you find the perfect solution.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-background text-secondary hover:bg-background/90">
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20">
                <a href="tel:+917358897955">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 917358897955
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
