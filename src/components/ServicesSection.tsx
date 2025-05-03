
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Car, MapPin, SignpostBig, BusFront } from "lucide-react";

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
  const rotateValue = (delay % 2 === 0) ? 'rotate-1' : '-rotate-1';

  return (
    <Card className={`glass border-${color}/30 group overflow-hidden opacity-0 animate-fade-in ${rotateValue} hover:rotate-0 transition-all duration-300`} 
          style={{ animationDelay }}>
      <div className="p-6 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-street-purple/10 rounded-bl-3xl -z-10"></div>
        <div className={`w-14 h-14 rounded-xl bg-${color}/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
          <div className={`text-${color}`}>{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <Button variant="ghost" className={`text-${color} hover:bg-${color}/10 p-0 flex items-center gap-2 group-hover:pl-2 transition-all duration-300`}>
          Scopri di più
          <span className="w-4 h-0.5 bg-current transition-all group-hover:w-6 group-hover:translate-x-1"></span>
        </Button>
      </div>
      <div className={`h-1.5 bg-${color}/70 w-1/2 group-hover:w-full transition-all duration-500`}></div>
    </Card>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Sviluppo Web",
      description: "Siti web con stile urban ed estetica street. Fatti notare con il nostro tocco fresco.",
      color: "street-purple"
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Hosting Velocissimo",
      description: "Server ultra-rapidi per non farti mai attendere. Scatta come un drag-racer.",
      color: "street-orange"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Integrazione API",
      description: "Connessioni API fluide come un freestyle. Fai parlare i tuoi sistemi senza intoppi.",
      color: "street-blue"
    },
    {
      icon: <SignpostBig className="h-6 w-6" />,
      title: "Gestione Domini",
      description: "Conquista il tuo spazio nel web con domini di impatto. Il tuo nome, la tua reputazione.",
      color: "street-pink"
    },
    {
      icon: <BusFront className="h-6 w-6" />,
      title: "Cloud su Misura",
      description: "Soluzioni cloud scalabili per aziende in crescita. L'elasticità che ti serve.",
      color: "street-cyan"
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-street-purple/20 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-street-orange/20 filter blur-3xl"></div>
        
        {/* Street pattern */}
        <div className="absolute w-full h-full opacity-5">
          <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
          <div className="absolute top-20 left-0 w-full h-0.5 bg-white"></div>
          <div className="absolute top-40 left-0 w-full h-0.5 bg-white"></div>
          <div className="absolute top-60 left-0 w-full h-0.5 bg-white"></div>
          <div className="absolute top-80 left-0 w-full h-0.5 bg-white"></div>
          <div className="absolute bottom-20 left-0 w-full h-1 bg-white"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white"></div>
        </div>
      </div>

      <div className="container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <p className="inline-block px-4 py-1 rounded-full bg-street-purple/10 border border-street-purple/20 text-street-purple mb-4">I NOSTRI SERVIZI</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
            I Nostri <span className="text-gradient">Servizi</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-street-purple via-street-orange to-transparent"></span>
          </h2>
          <p className="text-gray-400 md:text-lg max-w-2xl mx-auto">
            Servizi street-smart di sviluppo e hosting con un tocco urban.
            Costruiti per velocità, stile e massima efficacia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
