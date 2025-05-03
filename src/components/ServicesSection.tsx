
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Car, Road, SignpostBig, BusFront } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  color,
  delay = 0
}) => {
  const animationDelay = `${delay * 0.1}s`;

  return (
    <Card className={`glass border-${color}/30 group overflow-hidden opacity-0 animate-fade-in`} 
          style={{ animationDelay }}>
      <div className="p-6">
        <div className={`w-12 h-12 rounded-xl bg-${color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
          <div className={`text-${color}`}>{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <Button variant="ghost" className={`text-${color} hover:bg-${color}/10 p-0 flex items-center gap-2`}>
          Learn More
          <span className="w-4 h-0.5 bg-current transition-all group-hover:w-6"></span>
        </Button>
      </div>
      <div className={`h-1 bg-${color}/50`}></div>
    </Card>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Website Development",
      description: "Custom websites built with street style and urban aesthetics.",
      color: "street-purple"
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Fast Hosting",
      description: "Lightning-fast hosting services with global edge presence.",
      color: "street-orange"
    },
    {
      icon: <Road className="h-6 w-6" />,
      title: "API Integration",
      description: "Seamless API connections with your existing infrastructure.",
      color: "street-blue"
    },
    {
      icon: <SignpostBig className="h-6 w-6" />,
      title: "Domain Services",
      description: "Register and manage your domain with our urban platform.",
      color: "street-pink"
    },
    {
      icon: <BusFront className="h-6 w-6" />,
      title: "Cloud Solutions",
      description: "Scalable cloud services for growing businesses.",
      color: "street-cyan"
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-street-purple/10 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-street-orange/10 filter blur-3xl"></div>
      </div>

      <div className="container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 md:text-lg max-w-2xl mx-auto">
            Premium development and hosting services with an urban edge.
            Built for speed, reliability and style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              delay={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
