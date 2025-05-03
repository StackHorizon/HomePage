
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

  return (
    <Card className="glass overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay }}>
      <div className="relative aspect-video w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-street-dark/80 z-10"></div>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-white/10 rounded-full px-3 py-1 text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>
        <Button asChild variant="ghost" className="text-street-purple hover:bg-street-purple/10 flex items-center gap-2">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Visualizza Progetto
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </Button>
      </div>
    </Card>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Portfolio E-Commerce",
      description: "Una piattaforma di e-commerce scalabile con design responsive e performance ottimizzate.",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "App Gestione Finanze",
      description: "App per la gestione delle finanze personali con dashboard analitici e reportistica avanzata.",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Sistema CRM Aziendale",
      description: "Sistema di gestione delle relazioni con i clienti personalizzato per piccole e medie imprese.",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Angular", "Django", "PostgreSQL", "Docker"],
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 -right-20 w-64 h-64 rounded-full bg-street-blue/10 filter blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-street-pink/10 filter blur-3xl"></div>
      </div>

      <div className="container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            I Nostri <span className="text-gradient">Progetti</span>
          </h2>
          <p className="text-gray-400 md:text-lg max-w-2xl mx-auto">
            Soluzioni innovative e progetti su misura che abbiamo sviluppato per i nostri clienti.
            Tecnologie all'avanguardia con design urbano.
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
          <Button size="lg" className="bg-street-purple hover:bg-street-purple/80 text-white">
            Visualizza Tutti i Progetti
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
