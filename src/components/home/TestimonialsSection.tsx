import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    name: "Rajesh Kumar",
   
    content: "SolarPower India installed a 5kW system at my home. The team was professional, and I'm now saving ₹4,000 every month on electricity bills. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
   
    content: "We installed 100kW solar for our factory. The ROI has been excellent - payback in just 3.5 years. Great after-sales support from the team.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    content: "Joined as a franchise partner last year. The training and support from SolarPower India helped me build a successful solar business. Best decision ever!",
    rating: 5,
  },
  {
    name: "Dr. Sunita Reddy",
    content: "50kW solar installation at our hospital. Reliable power even during outages with the hybrid system. Exceptional quality and service.",
    rating: 5,
  },
  {
    name: "Mohammed Ali",
    content: "Our office runs 100% on solar now. The installation was smooth, and the monitoring app helps us track energy generation in real-time.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Testimonials"
          title="What Our Customers Say"
          description="Join thousands of satisfied customers who trust SolarPower India"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg relative">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />
            
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonials[currentIndex].rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
              "{testimonials[currentIndex].content}"
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading font-semibold text-foreground text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role}  {testimonials[currentIndex].location}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-primary-foreground" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "gradient-primary" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
