
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-street-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-street-orange/20 rounded-full filter blur-3xl"></div>
        
        {/* Street art elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/4 w-20 h-20 border-4 border-white rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border-4 border-dashed border-white rounded-full"></div>
          <div className="absolute top-2/3 left-1/3 w-16 h-16 border-4 border-white"></div>
          
          {/* Spray paint effect */}
          {Array.from({length: 30}).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-2 h-2 rounded-full bg-white/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `scale(${Math.random() * 2 + 0.5})`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="opacity-0 animate-fade-in">
              <p className="inline-block px-3 py-1 rounded-full bg-street-orange/10 border border-street-orange/20 text-street-orange mb-4">CONTATTI</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
                Fatti <span className="text-gradient">Sentire</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-street-orange via-street-purple to-transparent"></span>
              </h2>
              <p className="text-gray-300 max-w-lg">
                Pronto a portare il tuo brand al livello successivo? Scrivici e scopri come possiamo dare stile urban alla tua presenza online.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="glass p-6 rounded-xl hover:bg-white/20 transition-colors transform rotate-1 hover:rotate-0 hover:translate-y-[-5px]">
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-street-purple">crew@stackhorizon.it</p>
              </div>
              <div className="glass p-6 rounded-xl hover:bg-white/20 transition-colors transform -rotate-1 hover:rotate-0 hover:translate-y-[-5px]">
                <h3 className="text-xl font-bold mb-2">Telefono</h3>
                <p className="text-street-orange">+39 123 456 7890</p>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-4">Studio</h3>
              <address className="not-italic text-gray-300">
                Via del Graffiti, 42<br />
                20100 Milano<br />
                Italia
              </address>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl opacity-0 animate-fade-in transform rotate-1 hover:rotate-0 transition-transform" style={{ animationDelay: "0.3s" }}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Come ti Chiami?
                </label>
                <Input
                  id="name"
                  placeholder="Il tuo nome qui"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-street-purple focus:ring-street-purple/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  La tua Mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@esempio.it"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-street-purple focus:ring-street-purple/50"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Di cosa vuoi parlare?
                </label>
                <Input
                  id="subject"
                  placeholder="L'argomento del messaggio"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-street-purple focus:ring-street-purple/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Scrivi il tuo Messaggio
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Spara qui la tua idea..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-street-purple focus:ring-street-purple/50"
                />
              </div>
              
              <Button className="w-full bg-gradient-street hover:bg-street-purple/80 transform hover:translate-y-[-3px] transition-all">
                Mandaci il Messaggio
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
