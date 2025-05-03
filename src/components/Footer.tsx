
import React from "react";
import { Building2 } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2 group">
              <div className="bg-street-purple rounded-lg p-1.5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl text-gradient">Stack Horizon</span>
            </a>
            <p className="text-gray-400 text-sm">
              Sviluppo e hosting con stile urban e affidabilità street. Il web non è mai stato così fresh.
            </p>
            <div className="flex space-x-4 pt-2">
              {["Twitter", "Instagram", "TikTok", "GitHub"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors text-sm"
                  aria-label={social}
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 relative inline-block">
              Servizi
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-street-purple"></span>
            </h4>
            <ul className="space-y-2 text-gray-400">
              {["Sviluppo Web", "Cloud Hosting", "API Integration", "Domini", "Supporto 24/7"].map((item) => (
                <li key={item} className="transform hover:translate-x-2 transition-transform">
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 relative inline-block">
              Crew
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-street-orange"></span>
            </h4>
            <ul className="space-y-2 text-gray-400">
              {["Chi Siamo", "Il Team", "Il Blog", "News", "Contatti"].map((item) => (
                <li key={item} className="transform hover:translate-x-2 transition-transform">
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 relative inline-block">
              Legal
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-street-blue"></span>
            </h4>
            <ul className="space-y-2 text-gray-400">
              {["Privacy", "Cookies", "Termini", "Licenze", "Settings"].map((item) => (
                <li key={item} className="transform hover:translate-x-2 transition-transform">
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} Stack Horizon. Tutti i diritti sono troppo street per essere violati.
          </p>
          <div className="flex space-x-6">
            {["Privacy", "Termini", "Cookies", "FAQ"].map((link) => (
              <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors text-sm relative group">
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-street-purple group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
