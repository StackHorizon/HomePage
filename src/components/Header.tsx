
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Building2, Menu, X, Zap, Sparkles } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-2" : "py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="bg-street-purple rounded-lg p-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 relative">
            <Building2 className="h-6 w-6" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-street-neon animate-pulse"></div>
          </div>
          <span className="font-bold text-xl text-gradient relative">
            Stack Horizon
            <Sparkles className="absolute -top-1 -right-6 h-3 w-3 text-street-yellow" />
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex space-x-6">
            {[
              { name: "Servizi", id: "services" }, 
              { name: "Features", id: "features" }, 
              { name: "Progetti", id: "projects" }, 
              { name: "Contatti", id: "contact" }
            ].map((item, i) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className="font-medium transition-colors hover:text-street-purple relative group overflow-hidden"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-street-purple transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            ))}
          </nav>
          
          <Button className="bg-street-orange hover:bg-street-orange/80 transform hover:scale-105 transition-all duration-300 flex items-center gap-1 relative group overflow-hidden">
            <span className="relative z-10">Inizia Ora</span>
            <Zap className="h-4 w-4 relative z-10" />
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-street-orange via-street-red to-street-orange bg-size-200 group-hover:bg-right-bottom transition-all duration-500 opacity-0 group-hover:opacity-100"></span>
          </Button>
        </div>
        
        <button 
          className="block md:hidden relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-street-orange"></span>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-dark absolute top-full left-0 w-full">
          <div className="container py-4 flex flex-col space-y-4">
            {[
              { name: "Servizi", id: "services" }, 
              { name: "Features", id: "features" }, 
              { name: "Progetti", id: "projects" }, 
              { name: "Contatti", id: "contact" }
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className="font-medium transition-colors hover:text-street-purple py-2 border-b border-white/10 flex items-center justify-between group"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <span className="w-4 h-4 rounded-full bg-street-purple/20 flex items-center justify-center group-hover:bg-street-purple/40 transition-colors">
                  <span className="w-1 h-1 bg-street-purple rounded-full"></span>
                </span>
              </a>
            ))}
            
            <Button className="bg-street-orange hover:bg-street-orange/80 w-full mt-4 flex items-center justify-center gap-2">
              Inizia Ora
              <Zap className="h-4 w-4" />
            </Button>
            
            {/* Social links */}
            <div className="flex items-center justify-center gap-3 pt-2 border-t border-white/10">
              {['IG', 'FB', 'TW'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Decorative glowing line */}
      <div className={`absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-street-purple/50 to-transparent transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>
    </header>
  );
};

export default Header;
