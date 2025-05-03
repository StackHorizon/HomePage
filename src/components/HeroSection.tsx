
import React from "react";
import { Button } from "@/components/ui/button";
import { CarFront, Flag } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-street-purple/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-street-orange/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-street-cyan/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <p className="flex items-center gap-2 text-street-orange font-medium mb-4 opacity-0 animate-fade-in animate-item">
              <span className="inline-block w-10 h-0.5 bg-street-orange"></span>
              New Way To Build And Host
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight opacity-0 animate-fade-in animate-item">
              <span className="block">Dev & Host</span>
              <span className="text-gradient">Street Style</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-lg opacity-0 animate-fade-in animate-item">
              Next-gen development and hosting with urban flair. Fast, reliable, and bold like the streets.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animate-item">
            <Button size="lg" className="bg-street-purple hover:bg-street-purple/80 text-white rounded-xl">
              Start Building
            </Button>
            <Button size="lg" variant="outline" className="border-street-orange text-street-orange hover:bg-street-orange/10 rounded-xl">
              View Hosting Plans
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-8 pt-6 opacity-0 animate-fade-in animate-item">
            <div className="flex items-center gap-3">
              <div className="glass w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                <CarFront className="h-6 w-6 text-street-orange" />
              </div>
              <div>
                <p className="font-bold">Fast Development</p>
                <p className="text-gray-400 text-sm">Quick street-smart setup</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="glass w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                <Flag className="h-6 w-6 text-street-purple" />
              </div>
              <div>
                <p className="font-bold">Global Hosting</p>
                <p className="text-gray-400 text-sm">Worldwide edge presence</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative h-[500px] opacity-0 animate-fade-in animate-item">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Main image box */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 glass rounded-2xl p-1 rotate-6 animate-float">
                <div className="h-full w-full bg-street-purple/20 rounded-xl overflow-hidden">
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
                <div className="h-full w-full bg-street-orange/20 rounded-lg"></div>
              </div>
              
              <div className="absolute bottom-12 left-6 w-48 h-20 glass rounded-xl p-1 rotate-3 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="h-full w-full bg-street-blue/20 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-white/70">www.streetdev.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-street-purple to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
