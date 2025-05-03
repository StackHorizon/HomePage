
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Building2, Menu, X } from "lucide-react";

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
          <div className="bg-street-purple rounded-lg p-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
            <Building2 className="h-6 w-6" />
          </div>
          <span className="font-bold text-xl text-gradient">Stack Horizon</span>
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
          
          <Button className="bg-street-orange hover:bg-street-orange/80 transform hover:scale-105 transition-all duration-300">
            Inizia Ora
          </Button>
        </div>
        
        <button 
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
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
                className="font-medium transition-colors hover:text-street-purple py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <Button className="bg-street-orange hover:bg-street-orange/80 w-full mt-4">
              Inizia Ora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
