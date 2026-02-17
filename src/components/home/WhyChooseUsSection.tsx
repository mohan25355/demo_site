import { CheckCircle, ThumbsUp, Zap, IndianRupee, Leaf, HeadphonesIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    icon: CheckCircle,
    title: "Government Approved",
    description: "MNRE empaneled vendor with all required certifications and approvals for subsidy benefits.",
  },
  {
    icon: Zap,
    title: "High Efficiency Panels",
    description: "We use only Tier-1 solar panels ensuring maximum power generation and long lifespan.",
  },
  {
    icon: IndianRupee,
    title: "Best Price Guarantee",
    description: "Competitive pricing with flexible EMI options. Get the best value for your investment.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description: "Reduce your carbon footprint and contribute to a sustainable future for India.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Assurance",
    description: "25-year performance warranty on panels and 5-year comprehensive workmanship warranty.",
  },
  {
    icon: HeadphonesIcon,
    title: "Lifetime Support",
    description: "Free maintenance guidance, monitoring support, and quick issue resolution.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Why Choose Us"
          title="Your Trusted Solar Partner"
          description="Experience the difference with India's most reliable solar EPC company"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="bg-card p-8 rounded-2xl shadow hover-lift border border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
