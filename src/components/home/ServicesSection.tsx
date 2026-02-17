import { Link } from "react-router-dom";
import { ArrowRight, Sun, Battery, Zap, Home, Building2, Droplets, Lamp, Gauge, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    icon: Sun,
    title: "On-Grid Solar",
    description: "Connected to utility grid with net metering. Ideal for reducing electricity bills.",
    href: "/services#on-grid",
  },
  {
    icon: Battery,
    title: "Off-Grid Solar",
    description: "Independent power system with battery storage for areas without grid access.",
    href: "/services#off-grid",
  },
  {
    icon: Zap,
    title: "Hybrid Solar",
    description: "Best of both worlds - grid connected with battery backup for uninterrupted power.",
    href: "/services#hybrid",
  },
  {
    icon: Home,
    title: "Residential Solar",
    description: "Complete home solar solutions tailored for Indian households.",
    href: "/services#residential",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description: "Large-scale installations for businesses, factories, and industries.",
    href: "/services#commercial",
  },
  {
    icon: Droplets,
    title: "Solar Water Heater",
    description: "Energy-efficient water heating solutions for homes and hotels.",
    href: "/services#water-heater",
  },
  {
    icon: Lamp,
    title: "Solar Street Lights",
    description: "Autonomous outdoor lighting for streets, parks, and campuses.",
    href: "/services#street-lights",
  },
  {
    icon: Gauge,
    title: "Solar Pumps",
    description: "Agriculture and irrigation pumps powered by solar energy.",
    href: "/services#pumps",
  },
  {
    icon: Car,
    title: "EV Charging",
    description: "Solar-powered electric vehicle charging stations.",
    href: "/services#ev-charging",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Our Services"
          title="Complete Solar Solutions"
          description="From residential to industrial, we offer comprehensive solar energy services"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:gradient-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
