import { Link } from "react-router-dom";
import { ArrowRight, Award, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import installationTeam from "@/assets/installation-team.jpg";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
  },
  {
    icon: Shield,
    title: "Certified Experts",
  },
  {
    icon: Clock,
    title: "Quick Installation",
  },
  {
    icon: Users,
    title: "24/7 Support",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={installationTeam}
              alt="Solar installation team at work"
              className="rounded-2xl shadow-xl w-full"
            />
            
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              badge="About Us"
              title="India's Trusted Solar Energy Partner"
              centered={false}
            />
            <p className="text-muted-foreground text-lg mb-6">
              PRIYA AGENCIES is a next-generation solar solutions company driven by innovation, efficiency, and quality. Founded this year with a bold vision, we are committed to delivering high-performance solar panels designed for maximum output, durability, and long-term reliability.
          
            </p>
            <p className="text-muted-foreground mb-8">
          Though newly established, our focus is clear — to provide advanced, energy-efficient solar solutions that empower homes and businesses to reduce electricity costs and embrace clean, sustainable power.

We combine modern technology, strict quality standards, and customer-first service to ensure every installation performs at its peak.
Our mission is simple: 
To power India with smarter, stronger, and more efficient solar energy solutions.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
