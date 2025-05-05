import React from "react";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ExternalLink, Star, Tag, Flame, Sparkles} from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    technologies: string[];
    featured?: boolean;
    category?: string;
    link: string;
    delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     title,
                                                     description,
                                                     imageSrc,
                                                     technologies,
                                                     featured = false,
                                                     category = "Web",
                                                     link,
                                                     delay = 0
                                                 }) => {
    const animationDelay = `${delay * 0.1}s`;
    const rotateValue = (delay % 2 === 0) ? 'rotate-1' : '-rotate-1';

    return (
        <Card
            className={`glass overflow-hidden opacity-0 animate-fade-in ${rotateValue} hover:rotate-0 transition-all duration-300 relative`}
            style={{animationDelay}}>
            {featured && (
                <div
                    className="absolute top-4 right-4 z-30 bg-street-orange/90 text-white text-xs py-1 px-2 rounded-md flex items-center gap-1 animate-pulse">
                    <Flame className="h-3 w-3"/>
                    <span>HOT</span>
                </div>
            )}

            <div
                className="absolute top-4 left-4 z-30 bg-black/60 backdrop-blur-sm text-white text-xs py-1 px-2 rounded-md flex items-center gap-1">
                <Tag className="h-3 w-3"/>
                <span>{category}</span>
            </div>

            <div className="relative aspect-video w-full overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-street-dark/80 z-10"></div>
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Decorative elements */}
                <div
                    className="absolute top-0 left-0 w-full h-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-1/3 left-1/4 w-20 h-0.5 bg-street-neon/50 -rotate-45"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-16 h-0.5 bg-street-purple/50 rotate-45"></div>
                </div>
            </div>

            <div className="p-6 relative">
                {/* Diagonal line decoration */}
                <div className="absolute -top-2 -right-2 w-12 h-12">
                    <div className="w-full h-0.5 bg-street-orange/50 rotate-45 translate-y-6"></div>
                </div>

                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    {title}
                    {featured && <Star className="h-4 w-4 text-street-yellow fill-street-yellow"/>}
                </h3>

                <p className="text-gray-400 mb-4">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className={`text-xs bg-white/10 rounded-full px-3 py-1 text-white/70 hover:bg-white/20 transition-colors ${
                                index === 0 ? "bg-street-purple/30" : ""
                            }`}
                        >
              {tech}
            </span>
                    ))}
                </div>

                <Button asChild variant="ghost"
                        className="text-street-purple hover:bg-street-purple/10 flex items-center gap-2 group relative">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="z-10">
                        Da un'occhiata al Progetto
                        <ExternalLink
                            className="h-4 w-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                    </a>
                </Button>

                {/* Bottom line with colors */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 flex">
                    <div className="w-1/5 h-full bg-street-purple"></div>
                    <div className="w-1/5 h-full bg-street-pink"></div>
                    <div className="w-1/5 h-full bg-street-orange"></div>
                    <div className="w-1/5 h-full bg-street-yellow"></div>
                    <div className="w-1/5 h-full bg-street-neon"></div>
                </div>
            </div>
        </Card>
    );
};

const ProjectsSection: React.FC = () => {
    const projects = [
        {
            title: "AI Animation",
            description: "Una applicazione pratica ad algoritmi di AI per lo sviluppo video, utilizzato al Comicon",
            imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
            technologies: ["PyTorch", "Python"],
            featured: true,
            category: "AI project",
            link: "#"
        },
        {
            title: "Var magicBox Project",
            description: "Un potente mezzo, plug and play, per la creazione del VAR in piccola scala",
            imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475",
            technologies: ["Node.js", "OpenCV.js", "Fluent-ffmpeg"],
            category: "Sport",
            link: "#"
        },
        {
            title: "YANSA",
            description: "Piattaforma social per condivisione di appunti, la cultura non è mai stata così libera",
            imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
            technologies: ["Node.js", "Maria DB", "EditorJs", "Express"],
            featured: true,
            category: "Social",
            link: "#"
        },
        {
            title: "GitChat",
            description: "Social Web per programmatori: parla con il tuo team, programma e integra github in una unica piattaforma",
            imageSrc: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
            technologies: ["Node.js", "Socket.io", "MariaDB", "GSAP", "Bootstrap"],
            category: "Social",
            link: "#"
        },
    ];

    return (
        <section id="projects" className="py-20 relative">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div
                    className="absolute top-40 -right-20 w-64 h-64 rounded-full bg-street-blue/20 filter blur-3xl"></div>
                <div
                    className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-street-pink/20 filter blur-3xl"></div>
                <div
                    className="absolute center top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-street-neon/5 filter blur-3xl"></div>

                {/* Brick pattern overlay */}
                <div className="absolute inset-0 brick-pattern opacity-30"></div>

                {/* Street graphics */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    {Array.from({length: 15}).map((_, i) => (
                        <div key={i} className="absolute h-10 w-10 border-2 border-white rounded-sm"
                             style={{
                                 top: `${Math.random() * 100}%`,
                                 left: `${Math.random() * 100}%`,
                                 transform: `rotate(${Math.random() * 360}deg)`
                             }}></div>
                    ))}
                    {Array.from({length: 8}).map((_, i) => (
                        <div key={`line-${i}`} className="absolute h-20 w-2 bg-white/30"
                             style={{
                                 top: `${Math.random() * 100}%`,
                                 left: `${Math.random() * 100}%`,
                                 transform: `rotate(${Math.random() * 90}deg)`
                             }}></div>
                    ))}
                </div>

                {/* Additional decorative elements */}
                <div
                    className="absolute top-20 left-20 w-32 h-32 border-2 border-dashed border-street-orange/20 rounded-full animate-spin-slow"></div>
                <div
                    className="absolute bottom-40 right-40 w-24 h-24 border border-street-neon/30 rotate-45 animate-pulse-slow"></div>
            </div>

            <div className="container">
                <div className="text-center mb-16 opacity-0 animate-fade-in">
                    <div className="flex flex-col items-center gap-2 mb-8">
                        <div className="inline-flex items-center gap-2 mb-5">
                            <Sparkles className="h-4 w-4 text-street-yellow"/>
                            <p className="inline-block px-3 py-1 rounded-full bg-street-purple/10 border border-street-purple/20 text-street-purple">PROGETTI</p>
                            <Sparkles className="h-4 w-4 text-street-yellow"/>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
                            I Nostri <span className="text-gradient">Progetti</span>
                            <span
                                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-street-purple via-street-blue to-transparent"></span>
                            <span className="absolute -top-6 -right-6 text-5xl text-street-orange/10 font-bold">*</span>
                        </h2>
                    </div>

                    <p className="text-gray-400 md:text-lg max-w-2xl mx-auto">
                        Soluzioni per i clienti o nostre idee<br/>
                        <span className="text-street-orange">Sviluppate</span> con tecnologie all'avanguardia e design
                        <span className="text-street-neon"> curato</span>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                            delay={index}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center opacity-0 animate-fade-in" style={{animationDelay: "0.4s"}}>
                    <Button size="lg"
                            className="bg-street-purple hover:bg-street-purple/80 text-white transform rotate-1 hover:rotate-0 hover:scale-105 transition-all group">
                        <span className="relative z-10">Visualizza Tutti i Progetti</span>
                        <span
                            className="absolute inset-0 bg-gradient-to-r from-street-purple to-street-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"></span>
                    </Button>
                </div>

                {/* Project counter */}
                <div className="mt-10 flex justify-center gap-8 text-center">
                    <div className="glass px-5 py-3 rounded-lg">
                        <p className="text-2xl font-bold text-street-orange">20+</p>
                        <p className="text-xs text-gray-400">Progetti</p>
                    </div>
                    <div className="glass px-5 py-3 rounded-lg">
                        <p className="text-2xl font-bold text-street-purple">15+</p>
                        <p className="text-xs text-gray-400">Clienti</p>
                    </div>
                    <div className="glass px-5 py-3 rounded-lg">
                        <p className="text-2xl font-bold text-street-neon">100%</p>
                        <p className="text-xs text-gray-400">Soddisfazione</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
