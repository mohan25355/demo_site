import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, Battery, Zap, Home, Building2, Droplets, Lamp, Gauge, Car, CheckCircle, ArrowRight } from "lucide-react";
import residentialSolar from "@/assets/residential-solar.jpg";
import commercialSolar from "@/assets/commercial-solar.jpg";
import solarWaterHeater from "@/assets/solar-water-heater.jpg";

const services = [
  {
    id: "on-grid",
    icon: Sun,
    title: "On-Grid Solar Systems",
    description: "Grid-connected solar power systems that reduce your electricity bills through net metering.",
    benefits: [
      "Zero electricity bills with net metering",
      "No battery required - lower maintenance",
      "Government subsidies up to 40%",
      "ROI in 3-4 years",
      "25-year panel warranty",
    ],
    useCases: "Homes, offices, and commercial establishments with reliable grid supply",
    image: "/img/on.jpeg",
  },
  {
    id: "off-grid",
    icon: Battery,
    title: "Off-Grid Solar Systems",
    description: "Independent solar power systems with battery storage for areas without reliable grid access.",
    benefits: [
      "Complete energy independence",
      "Works in remote locations",
      "Battery backup for 24/7 power",
      "No electricity bills",
      "Ideal for rural areas",
    ],
    useCases: "Remote homes, farmhouses, agricultural operations, and areas with poor grid connectivity",
    image: "/img/off.jpeg",
  },
  {
    id: "hybrid",
    icon: Zap,
    title: "Hybrid Solar Systems",
    description: "Best of both worlds - grid-connected system with battery backup for uninterrupted power.",
    benefits: [
      "Continuous power during outages",
      "Net metering benefits",
      "Battery backup storage",
      "Smart energy management",
      "Flexible usage options",
    ],
    useCases: "Hospitals, data centers, homes, and businesses requiring uninterrupted power",
    image: "/img/hybrid.jpeg",
  },
  {
    id: "residential",
    icon: Home,
    title: "Residential Solar Solutions",
    description: "Complete home solar packages tailored for Indian households - from 1kW to 10kW.",
    benefits: [
      "Customized to your roof space",
      "Reduce bills by up to 90%",
      "Increase property value",
      "Low maintenance systems",
      "Easy EMI options available",
    ],
    useCases: "Individual houses, villas, apartments, and housing societies",
    image: residentialSolar,
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial & Industrial Solar",
    description: "Large-scale solar installations for businesses, factories, and industrial units.",
    benefits: [
      "Significant cost savings",
      "Accelerated depreciation benefits",
      "Enhanced brand image",
      "Stable energy costs",
      "CSR and sustainability goals",
    ],
    useCases: "Factories, warehouses, IT parks, shopping malls, and corporate offices",
    image: commercialSolar,
  },
  {
    id: "water-heater",
    icon: Droplets,
    title: "Solar Water Heaters",
    description: "Energy-efficient solar thermal systems for hot water needs in homes and commercial spaces.",
    benefits: [
      "80% savings on water heating",
      "Works even on cloudy days",
      "Low maintenance",
      "10+ years lifespan",
      "Electric backup included",
    ],
    useCases: "Homes, hotels, hostels, hospitals, and industrial hot water needs",
    image: solarWaterHeater,
  },
  {
    id: "street-lights",
    icon: Lamp,
    title: "Solar Street Lights",
    description: "Autonomous solar-powered LED street lighting solutions for public spaces.",
    benefits: [
      "Zero electricity cost",
      "Automatic dusk-to-dawn operation",
      "Low maintenance",
      "Easy installation",
      "Weather resistant",
    ],
    useCases: "Roads, highways, parks, campuses, residential colonies, and public spaces",
    image: "/img/light.jpeg",
  },
  {
    id: "pumps",
    icon: Gauge,
    title: "Solar Water Pumps",
    description: "Solar-powered pumping solutions for agriculture and irrigation needs.",
    benefits: [
      "No diesel or electricity costs",
      "Government subsidies available",
      "Low maintenance",
      "Reliable water supply",
      "5-year comprehensive warranty",
    ],
    useCases: "Farms, agricultural irrigation, community water supply, and drinking water",
    image: "/img/pump.jpeg",
  },
  {
    id: "ev-charging",
    icon: Car,
    title: "EV Charging Solutions",
    description: "Solar-powered electric vehicle charging stations for homes and commercial spaces.",
    benefits: [
      "Green charging from solar",
      "Reduce EV running costs",
      "Multiple charging options",
      "Smart app integration",
      "Scalable solutions",
    ],
    useCases: "Homes with EVs, parking lots, corporate offices, and public charging stations",
    image: "/img/ev.jpeg",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Complete Solar Solutions
            </h1>
            <p className="text-muted-foreground text-lg">
              From residential rooftops to industrial power plants, we offer comprehensive 
              solar energy solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-2">Ideal For:</h4>
                    <p className="text-muted-foreground">{service.useCases}</p>
                  </div>

                  <Button asChild>
                    <Link to="/contact">
                      Get Quote for {service.title.split(" ")[0]}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-xl w-full"
                    />
                  ) : (
                    <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            description="Simple, transparent process from inquiry to installation"
          />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Consultation", description: "Share your requirements, we assess your site and energy needs" },
              { step: "02", title: "Custom Proposal", description: "Get a detailed proposal with system design and pricing" },
              { step: "03", title: "Installation", description: "Our certified team installs your system in 7-15 days" },
              { step: "04", title: "After-Sales Support", description: "Enjoy lifetime support and system monitoring" },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-card p-8 rounded-2xl border border-border h-full">
                  <span className="font-heading text-5xl font-bold text-primary/20">{item.step}</span>
                  <h4 className="font-heading text-xl font-semibold text-foreground mt-4 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-primary z-10">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;
