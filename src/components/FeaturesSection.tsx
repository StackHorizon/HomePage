
import React from "react";
import { SignpostBig, TrafficCone, Flag } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <SignpostBig className="h-8 w-8 text-street-purple" />,
      title: "Infrastruttura Street",
      description: "Costruita sulle tecnologie più fresche del blocco, con performance al livello dei migliori sound system.",
    },
    {
      icon: <TrafficCone className="h-8 w-8 text-street-orange" />,
      title: "Sicurezza al Top",
      description: "Protocolli di sicurezza che fanno da bodyguard alla tua app. Nessuno passa senza permesso.",
    },
    {
      icon: <Flag className="h-8 w-8 text-street-blue" />,
      title: "Visibilità Worldwide",
      description: "Espandi il tuo territorio con un solo click. Fai vedere chi sei in tutto il globo.",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-street-purple to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-street-orange to-transparent"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <React.Fragment key={i}>
              <div 
                className="absolute h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" 
                style={{ top: `${(i + 1) * 5}%` }}></div>
              <div 
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-gray-500 to-transparent" 
                style={{ left: `${(i + 1) * 5}%` }}></div>
            </React.Fragment>
          ))}
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-street-purple/30 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 border border-street-orange/30 rounded-full"></div>
        <div className="absolute top-2/3 right-1/2 w-24 h-24 border border-street-blue/30 rotate-45"></div>
      </div>
      
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="glass px-8 py-16 rounded-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-street-purple/20 rounded-bl-full -z-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-street-orange/10 rounded-tr-full -z-10"></div>
            
            <div className="text-center mb-12">
              <p className="inline-block px-3 py-1 rounded-full bg-street-orange/10 border border-street-orange/20 text-street-orange mb-4">CARATTERISTICHE</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in relative inline-block">
                Le Nostre <span className="text-gradient-orange">Features</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-street-orange via-street-purple to-transparent"></span>
              </h2>
              <p className="text-gray-300 md:text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Costruiti con attitudine street e tecnologia che spacca
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="opacity-0 animate-fade-in hover:translate-y-[-5px] transition-transform duration-300" 
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="glass h-16 w-16 rounded-xl flex items-center justify-center mb-6 mx-auto transform rotate-3 hover:rotate-6 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-400 text-center">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-8 text-center">
              <div className="opacity-0 animate-fade-in transform hover:scale-105 transition-transform" style={{ animationDelay: "0.5s" }}>
                <h4 className="text-4xl font-bold text-street-purple mb-2">99.9%</h4>
                <p className="text-gray-400">Uptime Garantito</p>
              </div>
              <div className="opacity-0 animate-fade-in transform hover:scale-105 transition-transform" style={{ animationDelay: "0.6s" }}>
                <h4 className="text-4xl font-bold text-street-orange mb-2">24/7</h4>
                <p className="text-gray-400">Supporto Non-Stop</p>
              </div>
              <div className="opacity-0 animate-fade-in transform hover:scale-105 transition-transform" style={{ animationDelay: "0.7s" }}>
                <h4 className="text-4xl font-bold text-street-blue mb-2">50+</h4>
                <p className="text-gray-400">Location Globali</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
