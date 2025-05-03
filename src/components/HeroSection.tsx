
import React from "react";
import { Button } from "@/components/ui/button";
import { CarFront, Flag, Zap, Sparkles } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-street-purple/40 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-12 w-72 h-72 bg-street-orange/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-street-cyan/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-street-neon/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-street-red/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        
        {/* Street patterns */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-10">
          <div className="absolute bottom-12 left-0 w-full h-2 bg-white"></div>
          <div className="absolute bottom-12 left-10 w-10 h-2 bg-street-orange"></div>
          <div className="absolute bottom-12 left-30 w-10 h-2 bg-street-orange"></div>
          <div className="absolute bottom-12 left-50 w-10 h-2 bg-street-orange"></div>
          <div className="absolute bottom-12 left-70 w-10 h-2 bg-street-orange"></div>
          <div className="absolute bottom-12 left-90 w-10 h-2 bg-street-orange"></div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-20 right-10 w-40 h-40 border border-street-purple/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 border border-street-yellow/30 rotate-45 animate-pulse-slow"></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-1/3 right-0 w-1/4 h-0.5 bg-gradient-to-r from-transparent to-street-neon/50 -rotate-45"></div>
        <div className="absolute bottom-1/3 left-0 w-1/4 h-0.5 bg-gradient-to-r from-street-red/50 to-transparent rotate-45"></div>
      </div>

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <p className="flex items-center gap-2 text-street-orange font-medium mb-4 opacity-0 animate-fade-in animate-item">
              <span className="inline-block w-10 h-0.5 bg-street-orange"></span>
              Sviluppo e Hosting con Stile Urbano
              <Zap className="h-4 w-4 text-street-yellow animate-pulse" />
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight opacity-0 animate-fade-in animate-item">
              <span className="block">Stack Horizon</span>
              <div className="relative inline-flex flex-col">
                <span className="text-gradient">Sviluppo & Hosting</span>
                <div className="absolute -bottom-1 left-0 w-full">
                  <div className="h-2 bg-street-purple/50 skew-x-12 -z-10"></div>
                  <div className="h-0.5 bg-street-neon/70 skew-x-12 translate-y-1"></div>
                </div>
              </div>
              <span className="absolute -ml-8 text-6xl text-street-neon opacity-30 animate-pulse-slow">*</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-lg opacity-0 animate-fade-in animate-item">
              Coding fresco e hosting potente. <span className="text-street-purple">Veloci come un rapper</span>, 
              affidabili come le strade della tua città. <span className="text-street-orange">Tocca a te brillare!</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animate-item">
            <Button size="lg" className="bg-street-purple hover:bg-street-purple/80 text-white rounded-xl rotate-1 transform transition-transform hover:rotate-0 hover:scale-105 group relative overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-street-purple via-street-neon to-street-purple bg-[length:200%_100%] animate-gradient-x opacity-50 group-hover:opacity-70"></span>
              <span className="relative z-10 flex items-center gap-2">
                Fai il Salto con Noi
                <Sparkles className="h-4 w-4 animate-pulse" />
              </span>
            </Button>
            <Button size="lg" variant="outline" className="border-street-orange text-street-orange hover:bg-street-orange/10 rounded-xl -rotate-1 transform transition-transform hover:rotate-0">
              Scopri i Piani Hosting
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-8 pt-6 opacity-0 animate-fade-in animate-item">
            <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
              <div className="glass w-12 h-12 rounded-xl flex items-center justify-center shrink-0 rotate-3 ripple">
                <CarFront className="h-6 w-6 text-street-orange" />
              </div>
              <div>
                <p className="font-bold">Sviluppo Veloce</p>
                <p className="text-gray-400 text-sm">Setup rapido e creativo</p>
              </div>
            </div>
            <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
              <div className="glass w-12 h-12 rounded-xl flex items-center justify-center shrink-0 -rotate-3 ripple">
                <Flag className="h-6 w-6 text-street-purple" />
              </div>
              <div>
                <p className="font-bold">Network Globale</p>
                <p className="text-gray-400 text-sm">Presenza edge worldwide</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative h-[500px] opacity-0 animate-fade-in animate-item">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Main image box */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 glass rounded-2xl p-1 rotate-6 animate-float">
                <div className="h-full w-full bg-street-purple/30 rounded-xl overflow-hidden">
                  <div className="h-6 w-full bg-street-dark flex items-center gap-1 px-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="p-4">
                    <div className="h-3 w-3/4 bg-white/20 rounded mb-2"></div>
                    <div className="h-3 w-full bg-white/20 rounded mb-2"></div>
                    <div className="h-3 w-2/3 bg-white/20 rounded mb-6"></div>
                    <div className="h-20 w-full bg-street-purple/30 rounded mb-4 relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-white/50">
                        &lt;code&gt;
                      </div>
                    </div>
                    <div className="h-3 w-full bg-white/20 rounded mb-2"></div>
                    <div className="h-3 w-4/5 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-12 w-32 h-32 glass rounded-xl p-1 -rotate-12 animate-float" style={{ animationDelay: "1s" }}>
                <div className="h-full w-full bg-street-orange/30 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-white/70 rotate-12 font-bold">&lt;style/&gt;</div>
                </div>
              </div>
              
              <div className="absolute bottom-12 left-6 w-48 h-20 glass rounded-xl p-1 rotate-3 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="h-full w-full bg-street-blue/30 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-white/70">stackhorizon.it</div>
                </div>
              </div>
              
              {/* New street elements */}
              <div className="absolute top-1/3 right-0 w-16 h-16 glass-neon rounded-full p-1 animate-bounce" style={{ animationDelay: "0.7s" }}>
                <div className="h-full w-full bg-street-neon/20 rounded-full flex items-center justify-center">
                  <span className="text-street-neon font-bold text-xs">GO!</span>
                </div>
              </div>
              
              <div className="absolute bottom-36 right-20 w-20 h-6 glass-dark rounded-md transform -rotate-12 animate-pulse">
                <div className="h-1 w-full bg-street-purple/50"></div>
              </div>
              
              {/* Additional street elements */}
              <div className="absolute top-20 left-12 w-10 h-10 glass-red rounded-lg transform rotate-45 animate-spin-slow">
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-street-red -rotate-45">X</span>
                </div>
              </div>
              
              <div className="absolute bottom-32 left-32 w-24 h-4 glass-yellow rounded-sm animate-pulse-slow">
                <div className="h-full w-2/3 bg-street-yellow/30"></div>
              </div>
              
              <div className="absolute top-40 right-40 flex space-x-1">
                <div className="w-2 h-8 bg-street-purple/40 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
                <div className="w-2 h-12 bg-street-pink/40 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                <div className="w-2 h-6 bg-street-orange/40 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-10 bg-street-neon/40 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scendi Giù Bro</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-street-purple to-transparent"></div>
        <div className="w-4 h-4 border-b-2 border-r-2 border-street-purple transform rotate-45 opacity-60 animate-bounce"></div>
      </div>
      
      {/* Marquee text at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-8 flex items-center bg-black/20 backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="mx-4 text-sm text-street-neon">STACK HORIZON</span>
          <span className="mx-4 text-sm text-street-orange">WEB DEVELOPMENT</span>
          <span className="mx-4 text-sm text-street-purple">HOSTING</span>
          <span className="mx-4 text-sm text-street-red">DESIGN</span>
          <span className="mx-4 text-sm text-street-yellow">PERFORMANCE</span>
          <span className="mx-4 text-sm text-street-neon">STACK HORIZON</span>
          <span className="mx-4 text-sm text-street-orange">WEB DEVELOPMENT</span>
          <span className="mx-4 text-sm text-street-purple">HOSTING</span>
          <span className="mx-4 text-sm text-street-red">DESIGN</span>
          <span className="mx-4 text-sm text-street-yellow">PERFORMANCE</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
