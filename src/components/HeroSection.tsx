
import React from "react";
import { Button } from "@/components/ui/button";
import { CarFront, Flag } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-street-purple/40 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-12 w-72 h-72 bg-street-orange/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-street-cyan/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        
        {/* Street patterns */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-10">
          <div className="absolute bottom-12 left-0 w-full h-2 bg-white"></div>
          <div className="absolute bottom-12 left-10 w-10 h-2 bg-street-orange"></div>
          <div className="absolute bottom-12 left-30 w-10 h-2 bg-street-orange"></div>
          <div className="absolute bottom-12 left-50 w-10 h-2 bg-street-orange"></div>
          <div className="absolute bottom-12 left-70 w-10 h-2 bg-street-orange"></div>
          <div className="absolute bottom-12 left-90 w-10 h-2 bg-street-orange"></div>
        </div>
      </div>

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <p className="flex items-center gap-2 text-street-orange font-medium mb-4 opacity-0 animate-fade-in animate-item">
              <span className="inline-block w-10 h-0.5 bg-street-orange"></span>
              Sviluppo e Hosting con Stile Urbano
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight opacity-0 animate-fade-in animate-item">
              <span className="block">Stack Horizon</span>
              <span className="relative">
                <span className="text-gradient">Sviluppo & Hosting</span>
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-street-purple/50 skew-x-12 -z-10"></span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-lg opacity-0 animate-fade-in animate-item">
              Coding fresco e hosting potente. Veloci come un rapper, affidabili come le strade della tua città. Tocca a te brillare!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animate-item">
            <Button size="lg" className="bg-street-purple hover:bg-street-purple/80 text-white rounded-xl rotate-1 transform transition-transform hover:rotate-0 hover:scale-105">
              Fai il Salto con Noi
            </Button>
            <Button size="lg" variant="outline" className="border-street-orange text-street-orange hover:bg-street-orange/10 rounded-xl -rotate-1 transform transition-transform hover:rotate-0">
              Scopri i Piani Hosting
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-8 pt-6 opacity-0 animate-fade-in animate-item">
            <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
              <div className="glass w-12 h-12 rounded-xl flex items-center justify-center shrink-0 rotate-3">
                <CarFront className="h-6 w-6 text-street-orange" />
              </div>
              <div>
                <p className="font-bold">Sviluppo Veloce</p>
                <p className="text-gray-400 text-sm">Setup rapido e creativo</p>
              </div>
            </div>
            <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
              <div className="glass w-12 h-12 rounded-xl flex items-center justify-center shrink-0 -rotate-3">
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
                    <div className="h-20 w-full bg-street-purple/30 rounded mb-4"></div>
                    <div className="h-3 w-full bg-white/20 rounded mb-2"></div>
                    <div className="h-3 w-4/5 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-12 w-32 h-32 glass rounded-xl p-1 -rotate-12 animate-float" style={{ animationDelay: "1s" }}>
                <div className="h-full w-full bg-street-orange/30 rounded-lg"></div>
              </div>
              
              <div className="absolute bottom-12 left-6 w-48 h-20 glass rounded-xl p-1 rotate-3 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="h-full w-full bg-street-blue/30 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-white/70">stackhorizon.it</div>
                </div>
              </div>
              
              {/* New street elements */}
              <div className="absolute top-1/3 right-0 w-16 h-16 glass rounded-full p-1 animate-bounce" style={{ animationDelay: "0.7s" }}>
                <div className="h-full w-full bg-street-pink/40 rounded-full"></div>
              </div>
              
              <div className="absolute bottom-36 right-20 w-20 h-6 glass-dark rounded-md transform -rotate-12 animate-pulse">
                <div className="h-1 w-full bg-street-purple/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scendi Giù Bro</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-street-purple to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
