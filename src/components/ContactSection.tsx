
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
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-gray-300 max-w-lg">
                Ready to bring your digital presence to the streets? Contact us for development and hosting solutions with urban style.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="glass p-6 rounded-xl hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-street-purple">contact@streetdev.com</p>
              </div>
              <div className="glass p-6 rounded-xl hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-street-orange">+1 (234) 567-8900</p>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-4">Office Location</h3>
              <address className="not-italic text-gray-300">
                123 Urban Avenue<br />
                Street District, SD 12345<br />
                United States
              </address>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              
              <Button className="w-full bg-gradient-street hover:bg-street-purple/80">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
