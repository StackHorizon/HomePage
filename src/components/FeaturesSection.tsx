
import React from "react";
import { SignpostBig, TrafficCone, Flag, Sparkles, Zap } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <SignpostBig className="h-8 w-8 text-street-purple" />,
      title: "Infrastruttura Street",
      description: "Costruita sulle tecnologie più fresche del blocco, con performance al livello dei migliori sound system.",
      accent: <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-street-purple/20 animate-pulse"></div>
    },
    {
      icon: <TrafficCone className="h-8 w-8 text-street-orange" />,
      title: "Sicurezza al Top",
      description: "Protocolli di sicurezza che fanno da bodyguard alla tua app. Nessuno passa senza permesso.",
      accent: <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full border border-street-orange/40 animate-pulse-slow"></div>
    },
    {
      icon: <Flag className="h-8 w-8 text-street-blue" />,
      title: "Visibilità Worldwide",
      description: "Espandi il tuo territorio con un solo click. Fai vedere chi sei in tutto il globo.",
      accent: <div className="absolute top-2 -right-2 w-8 h-8 border border-dashed border-street-blue/30 rounded-full animate-spin-slow"></div>
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
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-street-purple/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 border border-street-orange/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-2/3 right-1/2 w-24 h-24 border border-street-blue/30 rotate-45 animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 border-2 border-street-neon/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border-2 border-street-red/20 rotate-45 animate-float-rotate"></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-1/3 right-0 w-1/4 h-0.5 bg-gradient-to-r from-transparent to-street-neon/20 -rotate-45"></div>
        <div className="absolute bottom-1/3 left-0 w-1/4 h-0.5 bg-gradient-to-r from-street-red/20 to-transparent rotate-45"></div>
      </div>
      
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="glass px-8 py-16 rounded-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-street-purple/20 rounded-bl-full -z-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-street-orange/10 rounded-tr-full -z-10"></div>
            <div className="absolute -top-10 -left-10 w-20 h-20 border border-dashed border-street-neon/30 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 border-2 border-street-red/20 rotate-45"></div>
            
            {/* Glowing dots */}
            <div className="absolute top-1/4 right-10 w-2 h-2 bg-street-neon rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 left-10 w-2 h-2 bg-street-orange rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-street-purple rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="h-4 w-4 text-street-neon" />
                <p className="inline-block px-3 py-1 rounded-full bg-street-orange/10 border border-street-orange/20 text-street-orange">CARATTERISTICHE</p>
                <Zap className="h-4 w-4 text-street-neon" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in relative inline-block">
                Le Nostre <span className="text-gradient-orange">Features</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-street-orange via-street-purple to-transparent"></span>
                <span className="absolute -top-8 -right-8 text-6xl text-street-orange/10 font-bold rotate-12">*</span>
              </h2>
              
              <p className="text-gray-300 md:text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <span className="text-street-neon">Costruiti con attitudine street</span> e tecnologia che spacca
              </p>
              
              {/* Animated underline */}
              <div className="h-px w-20 bg-gradient-to-r from-street-orange to-street-purple mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="opacity-0 animate-fade-in hover:translate-y-[-5px] transition-transform duration-300 relative" 
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  {feature.accent}
                  
                  <div className="glass h-16 w-16 rounded-xl flex items-center justify-center mb-6 mx-auto transform rotate-3 hover:rotate-6 transition-transform relative group">
                    {feature.icon}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-center flex items-center justify-center gap-2">
                    {feature.title}
                    <Sparkles className="h-3 w-3 text-street-yellow" />
                  </h3>
                  
                  <p className="text-gray-400 text-center relative">
                    {feature.description}
                    
                    {/* Bottom decorative line */}
                    <span className="block w-12 h-0.5 bg-gradient-to-r from-transparent via-street-orange/50 to-transparent mx-auto mt-4"></span>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-8 text-center relative">
              {/* Diagonal decorative lines */}
              <div className="absolute top-0 left-1/4 w-0.5 h-8 bg-street-purple/30 -rotate-45"></div>
              <div className="absolute top-0 right-1/4 w-0.5 h-8 bg-street-orange/30 rotate-45"></div>
            
              <div className="opacity-0 animate-fade-in transform hover:scale-105 transition-transform glass-dark p-5 rounded-lg" style={{ animationDelay: "0.5s" }}>
                <div className="relative">
                  <h4 className="text-4xl font-bold text-street-purple mb-2 neon-pulse">99.9%</h4>
                  <span className="absolute -top-1 -right-1 text-xs text-street-neon">+</span>
                </div>
                <p className="text-gray-400">Uptime Garantito</p>
                <div className="mt-2 w-full h-1 bg-gradient-to-r from-transparent via-street-purple to-transparent"></div>
              </div>
              
              <div className="opacity-0 animate-fade-in transform hover:scale-105 transition-transform glass-dark p-5 rounded-lg" style={{ animationDelay: "0.6s" }}>
                <h4 className="text-4xl font-bold text-street-orange mb-2">24/7</h4>
                <p className="text-gray-400">Supporto Non-Stop</p>
                <div className="mt-2 w-full h-1 bg-gradient-to-r from-transparent via-street-orange to-transparent"></div>
              </div>
              
              <div className="opacity-0 animate-fade-in transform hover:scale-105 transition-transform glass-dark p-5 rounded-lg" style={{ animationDelay: "0.7s" }}>
                <div className="relative">
                  <h4 className="text-4xl font-bold text-street-blue mb-2">50+</h4>
                  <span className="absolute -top-1 -right-1 text-xs text-street-neon">+</span>
                </div>
                <p className="text-gray-400">Location Globali</p>
                <div className="mt-2 w-full h-1 bg-gradient-to-r from-transparent via-street-blue to-transparent"></div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-8 left-0 w-12 h-12 border border-dashed border-white/10 rounded-full -translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border border-white/10 rotate-45 translate-x-8 translate-y-8"></div>
            </div>
            
            {/* Extra street-style decoration */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-street-neon/50 font-mono tracking-widest">
              STACK_HORIZON_2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
