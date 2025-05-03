
import React from "react";
import { SignpostBig, TrafficCone, Flag } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <SignpostBig className="h-8 w-8 text-street-purple" />,
      title: "Urban Infrastructure",
      description: "Built on the latest technology stack with city-grade reliability and performance.",
    },
    {
      icon: <TrafficCone className="h-8 w-8 text-street-orange" />,
      title: "Street Smart Security",
      description: "Advanced security protocols protecting your applications from all threats.",
    },
    {
      icon: <Flag className="h-8 w-8 text-street-blue" />,
      title: "Global Reach",
      description: "Deploy to multiple regions with a single click for worldwide access.",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-street-purple to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-street-orange to-transparent"></div>
        
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} 
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" 
            style={{ top: `${(i + 1) * 10}%` }}></div>
        ))}
      </div>
      
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="glass px-8 py-16 rounded-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in">
                Street <span className="text-gradient-orange">Features</span>
              </h2>
              <p className="text-gray-300 md:text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Built with urban resilience and cutting-edge technology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="opacity-0 animate-fade-in" 
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="glass h-16 w-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-400 text-center">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-8 text-center">
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <h4 className="text-4xl font-bold text-street-purple mb-2">99.9%</h4>
                <p className="text-gray-400">Uptime Guarantee</p>
              </div>
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <h4 className="text-4xl font-bold text-street-orange mb-2">24/7</h4>
                <p className="text-gray-400">Technical Support</p>
              </div>
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                <h4 className="text-4xl font-bold text-street-blue mb-2">50+</h4>
                <p className="text-gray-400">Global Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
