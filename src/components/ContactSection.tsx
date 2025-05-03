
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-street-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-street-orange/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="opacity-0 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Mettiti in <span className="text-gradient">Contatto</span>
              </h2>
              <p className="text-gray-300 max-w-lg">
                Pronto a portare la tua presenza digitale nelle strade? Contattaci per soluzioni di sviluppo e hosting con stile urbano.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="glass p-6 rounded-xl hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-street-purple">contatti@stackhorizon.it</p>
              </div>
              <div className="glass p-6 rounded-xl hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-2">Telefono</h3>
                <p className="text-street-orange">+39 123 456 7890</p>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-4">Sede Centrale</h3>
              <address className="not-italic text-gray-300">
                Via Urbana, 123<br />
                20100 Milano<br />
                Italia
              </address>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Il Tuo Nome
                </label>
                <Input
                  id="name"
                  placeholder="Mario Rossi"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Indirizzo Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="mario@esempio.it"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Oggetto
                </label>
                <Input
                  id="subject"
                  placeholder="Come possiamo aiutarti?"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Messaggio
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Raccontaci del tuo progetto..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              
              <Button className="w-full bg-gradient-street hover:bg-street-purple/80">
                Invia Messaggio
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
