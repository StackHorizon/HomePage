
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
              <div className="bg-street-purple rounded-lg p-1.5 transition-all duration-300 group-hover:rotate-6">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl text-gradient">Stack Horizon</span>
            </a>
            <p className="text-gray-400 text-sm">
              Sviluppo e hosting con stile urbano e affidabilità stradale.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Servizi</h4>
            <ul className="space-y-2 text-gray-400">
              {["Sviluppo Web", "Cloud Hosting", "Integrazione API", "Servizi Domini", "Supporto"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Azienda</h4>
            <ul className="space-y-2 text-gray-400">
              {["Chi Siamo", "Carriera", "Blog", "Press", "Contatti"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Legale</h4>
            <ul className="space-y-2 text-gray-400">
              {["Termini", "Privacy", "Cookies", "Licenze", "Impostazioni"].map((item) => (
                <li key={item}>
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
            © {currentYear} Stack Horizon. Tutti i diritti riservati.
          </p>
          <div className="flex space-x-6">
            {["Twitter", "Facebook", "Instagram", "Github"].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
