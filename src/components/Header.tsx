
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
          <div className="bg-street-purple rounded-lg p-2 transition-all duration-300 group-hover:rotate-6">
            <Building2 className="h-6 w-6" />
          </div>
          <span className="font-bold text-xl text-gradient">StreetDev</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex space-x-6">
            {["Services", "Features", "Hosting", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium transition-colors hover:text-street-purple"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <Button className="bg-street-orange hover:bg-street-orange/80">
            Get Started
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
            {["Services", "Features", "Hosting", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium transition-colors hover:text-street-purple py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            
            <Button className="bg-street-orange hover:bg-street-orange/80 w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
