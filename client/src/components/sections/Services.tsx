import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Scissors, Ruler, Sprout } from "lucide-react";

const services = [
  {
    title: "Classic Cut",
    price: "$30",
    description: "Traditional haircut with precision trimming and styling",
    icon: Scissors,
  },
  {
    title: "Fade & Design",
    price: "$40",
    description: "Custom fade with optional design work and line-up",
    icon: Ruler,
  },
  {
    title: "Full Service",
    price: "$50",
    description: "Complete package including wash, cut, and premium styling",
    icon: Sprout,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#a39e87]">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium grooming services tailored to your style. Each service includes
            a consultation to ensure we achieve your desired look.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-gray-900 border-gray-800 hover:border-primary transition-colors"
            >
              <CardHeader className="text-center">
                <service.icon className="w-12 h-12 mx-auto text-[#a39e87] mb-4" />
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-2xl font-bold text-primary">{service.price}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}