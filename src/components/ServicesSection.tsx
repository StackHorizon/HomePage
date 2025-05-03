
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Car, MapPin, SignpostBig, BusFront, Sparkles, Zap } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  accentIcon?: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  color,
  accentIcon,
  delay = 0
}) => {
  const animationDelay = `${delay * 0.1}s`;
  const rotateValue = (delay % 2 === 0) ? 'rotate-1' : '-rotate-1';

  return (
    <Card className={`glass border-${color}/30 group overflow-hidden opacity-0 animate-fade-in ${rotateValue} hover:rotate-0 transition-all duration-300`} 
          style={{ animationDelay }}>
      <div className="p-6 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-street-purple/10 rounded-bl-3xl -z-10"></div>
        
        {/* Corner accent */}
        {accentIcon && (
          <div className="absolute top-2 right-2 text-street-yellow/70 animate-pulse">
            {accentIcon}
          </div>
        )}
        
        {/* Decorative dots */}
        <div className="absolute bottom-2 right-2 flex space-x-1">
          <div className={`w-1 h-1 rounded-full bg-${color}/60`}></div>
          <div className={`w-1 h-1 rounded-full bg-${color}/40`}></div>
          <div className={`w-1 h-1 rounded-full bg-${color}/20`}></div>
        </div>
        
        <div className={`w-14 h-14 rounded-xl bg-${color}/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative`}>
          <div className={`text-${color}`}>{icon}</div>
          
          {/* Radial gradient overlay */}
          <div className={`absolute inset-0 rounded-xl bg-gradient-radial from-${color}/30 to-transparent opacity-60`}></div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 flex items-center">
          {title}
          <div className="ml-2 w-6 h-0.5 bg-gradient-to-r from-transparent to-street-neon/50"></div>
        </h3>
        
        <p className="text-gray-400 mb-6 relative">
          {description}
        </p>
        
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
      color: "street-purple",
      accentIcon: <Sparkles className="h-4 w-4" />
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Hosting Velocissimo",
      description: "Server ultra-rapidi per non farti mai attendere. Scatta come un drag-racer.",
      color: "street-orange",
      accentIcon: <Zap className="h-4 w-4" />
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
    {
      icon: <Zap className="h-6 w-6" />,
      title: "SEO Street-Smart",
      description: "Ottimizzazione per i motori di ricerca con tecniche street. Sali in cima alle classifiche.",
      color: "street-neon"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-street-purple/20 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-street-orange/20 filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-street-neon/10 filter blur-3xl animate-pulse-slow"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern"></div>
        
        {/* Dots pattern overlay */}
        <div className="absolute inset-0 dots-pattern"></div>
        
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
        
        {/* Abstract design elements */}
        <div className="absolute top-20 right-40 w-20 h-20 border-2 border-street-neon/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 border border-dashed border-street-red/20 rounded-full"></div>
        <div className="absolute top-1/3 left-1/2 w-24 h-24 border-2 border-street-orange/10 rotate-45"></div>
      </div>

      <div className="container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-street-purple"></span>
            <p className="inline-block px-4 py-1 rounded-full bg-street-purple/10 border border-street-purple/20 text-street-purple">
              I NOSTRI SERVIZI
            </p>
            <span className="w-10 h-0.5 bg-street-purple"></span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
            I Nostri <span className="text-gradient">Servizi</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-street-purple via-street-orange to-transparent"></span>
          </h2>
          
          <p className="text-gray-400 md:text-lg max-w-2xl mx-auto relative">
            Servizi street-smart di sviluppo e hosting con un tocco urban.
            <span className="text-street-neon">Costruiti per velocità</span>, stile e 
            <span className="text-street-orange"> massima efficacia</span>.
            <span className="absolute -left-6 -top-6 text-4xl text-street-purple opacity-20 font-bold">"</span>
            <span className="absolute -right-6 -bottom-6 text-4xl text-street-purple opacity-20 font-bold">"</span>
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
        
        <div className="mt-16 flex justify-center">
          <div className="glass px-6 py-3 rounded-xl text-sm text-street-neon">
            <span className="mr-2">✓</span> Prossimamente altri servizi street-style <span className="ml-2 animate-pulse">|</span>
          </div>
        </div>
      </div>
      
      {/* Diagonal line decorations */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-street-purple to-transparent"></div>
      <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-street-orange to-transparent"></div>
    </section>
  );
};

export default ServicesSection;
