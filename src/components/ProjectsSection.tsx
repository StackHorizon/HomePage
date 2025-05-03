
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  link: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  technologies,
  link,
  delay = 0 
}) => {
  const animationDelay = `${delay * 0.1}s`;
  const rotateValue = (delay % 2 === 0) ? 'rotate-1' : '-rotate-1';

  return (
    <Card className={`glass overflow-hidden opacity-0 animate-fade-in ${rotateValue} hover:rotate-0 transition-all duration-300`} style={{ animationDelay }}>
      <div className="relative aspect-video w-full overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-street-dark/80 z-10"></div>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 z-20">
          <span className="inline-block px-2 py-1 bg-street-purple/80 rounded-md text-xs font-medium">
            {technologies[0]}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.slice(1).map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-white/10 rounded-full px-3 py-1 text-white/70 hover:bg-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        <Button asChild variant="ghost" className="text-street-purple hover:bg-street-purple/10 flex items-center gap-2 group">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Da un'occhiata al Progetto
            <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </Button>
      </div>
    </Card>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "StreetWear E-Commerce",
      description: "Una piattaforma di e-commerce per brand street con design audace e performance da urlo.",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Next.js", "Supabase", "Tailwind", "Stripe", "Framer Motion"],
      link: "#"
    },
    {
      title: "Beat Maker App",
      description: "App per creare beat musicali con effetti visivi dinamici e comunità di producer integrata.",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      technologies: ["React", "Tone.js", "Firebase", "Three.js", "WebAudio API"],
      link: "#"
    },
    {
      title: "Urban Feed",
      description: "Piattaforma social per artisti di strada e creativi urbani con mappa interattiva degli eventi.",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Vue.js", "MongoDB", "Express", "MapBox", "Socket.io"],
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 -right-20 w-64 h-64 rounded-full bg-street-blue/20 filter blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-street-pink/20 filter blur-3xl"></div>
        
        {/* Street graphics */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          {Array.from({length: 10}).map((_, i) => (
            <div key={i} className="absolute h-10 w-10 border-2 border-white rounded-sm"
                 style={{ 
                   top: `${Math.random() * 100}%`, 
                   left: `${Math.random() * 100}%`,
                   transform: `rotate(${Math.random() * 360}deg)`
                 }}></div>
          ))}
          {Array.from({length: 5}).map((_, i) => (
            <div key={i} className="absolute h-20 w-2 bg-white/30"
                 style={{ 
                   top: `${Math.random() * 100}%`, 
                   left: `${Math.random() * 100}%`,
                   transform: `rotate(${Math.random() * 90}deg)`
                 }}></div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <p className="inline-block px-3 py-1 rounded-full bg-street-purple/10 border border-street-purple/20 text-street-purple mb-4">PROGETTI</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
            I Nostri <span className="text-gradient">Progetti</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-street-purple via-street-blue to-transparent"></span>
          </h2>
          <p className="text-gray-400 md:text-lg max-w-2xl mx-auto">
            Soluzioni creative che abbiamo sviluppato per clienti street-smart.
            Tecnologie all'avanguardia con design che spacca.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              delay={index} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="bg-street-purple hover:bg-street-purple/80 text-white transform rotate-1 hover:rotate-0 hover:scale-105 transition-all">
            Visualizza Tutti i Progetti
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
