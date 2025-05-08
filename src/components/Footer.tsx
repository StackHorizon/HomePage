import React from "react";
import {Building2, Star, Sparkles, Zap} from "lucide-react";
import {Link} from "react-router-dom";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/10 relative">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-street-purple/10 filter blur-3xl"></div>
                <div
                    className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-street-orange/10 filter blur-3xl"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 grid-pattern opacity-20"></div>

                {/* Abstract shapes */}
                <div className="absolute top-10 right-10 w-20 h-20 border border-street-neon/20 rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-16 h-16 border border-white/10 rotate-45"></div>
            </div>

            <div className="container">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <a href="/" className="flex items-center gap-2 group">
                            <div
                                className="bg-street-purple rounded-lg p-1.5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 relative">
                                <Building2 className="h-5 w-5"/>
                                <span
                                    className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-street-neon"></span>
                            </div>
                            <span className="font-bold text-xl text-gradient">Stack Horizon</span>
                        </a>
                        <p className="text-gray-400 text-sm">
                            Sviluppo e hosting con stile e affidabilità. Il web non è mai stato così facile.
                        </p>

                        {/* New badge */}
                        <div
                            className="inline-block px-3 py-1 rounded-full bg-street-neon/10 border border-street-neon/20 text-street-neon text-xs flex items-center gap-1">
                            <Sparkles className="h-3 w-3"/>
                            <span>Dal 2024</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 relative inline-block">
                            Servizi
                            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-street-purple"></span>
                            <Star className="inline-block ml-2 h-3 w-3 text-street-purple"/>
                        </h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="transform hover:translate-x-2 transition-transform">
                                <a href="#services"
                                   className="hover:text-white transition-colors flex items-center gap-1">
                                    <span className="w-1 h-1 rounded-full bg-street-purple/50"></span>
                                    Servizi
                                </a>
                            </li>
                            <li className="transform hover:translate-x-2 transition-transform">
                                <a href="#features"
                                   className="hover:text-white transition-colors flex items-center gap-1">
                                    <span className="w-1 h-1 rounded-full bg-street-purple/50"></span>
                                    Features
                                </a>
                            </li>
                            <li className="transform hover:translate-x-2 transition-transform">
                                <a href="#projects"
                                   className="hover:text-white transition-colors flex items-center gap-1">
                                    <span className="w-1 h-1 rounded-full bg-street-purple/50"></span>
                                    Progetti
                                </a>
                            </li>
                            <li className="transform hover:translate-x-2 transition-transform">
                                <a href="#contact"
                                   className="hover:text-white transition-colors flex items-center gap-1">
                                    <span className="w-1 h-1 rounded-full bg-street-purple/50"></span>
                                    Contatti
                                </a>
                            </li>
                        </ul>

                        {/* New feature badge */}
                        <div className="mt-4 inline-flex items-center">
                                            <span
                                                className="text-xs bg-street-orange/20 text-street-orange px-2 py-0.5 rounded-full flex items-center gap-1">
                                                <Zap className="h-3 w-3"/>
                                                NEW
                                            </span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 relative inline-block">
                            Info
                            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-street-blue"></span>
                            <Star className="inline-block ml-2 h-3 w-3 text-street-blue"/>
                        </h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="transform hover:translate-x-2 transition-transform">
                                <Link to="/privacy"
                                      onClick={() => {
                                          setTimeout(() => {
                                              window.scrollTo(0, 0);
                                          }, 100);
                                      }}
                                      className="hover:text-white transition-colors flex items-center gap-1">
                                    <span className="w-1 h-1 rounded-full bg-street-blue/50"></span>
                                    Privacy
                                </Link>
                            </li>
                            <li className="transform hover:translate-x-2 transition-transform">
                                <a href="#contact"
                                   className="hover:text-white transition-colors flex items-center gap-1">
                                    <span className="w-1 h-1 rounded-full bg-street-blue/50"></span>
                                    Contattaci
                                </a>
                            </li>
                            <li className="transform hover:translate-x-2 transition-transform">
                                <a href="mailto:stackhorizon@gmail.com"
                                   className="hover:text-white transition-colors flex items-center gap-1">
                                    <span className="w-1 h-1 rounded-full bg-street-blue/50"></span>
                                    Email
                                </a>
                            </li>
                        </ul>

                        {/* Updated badge */}
                        <div className="mt-4 inline-flex items-center">
                                            <span
                                                className="text-xs bg-street-blue/20 text-street-blue px-2 py-0.5 rounded-full">
                                                Ultimo update: 05/2025
                                            </span>
                        </div>
                    </div>
                </div>

                <div
                    className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400 relative">
                        <span className="absolute -left-4 top-0 text-street-orange">©</span>
                        {currentYear} Stack Horizon. Tutti i diritti sono riservati.
                    </p>
                    <div className="flex space-x-6">
                        <Link
                            to="/privacy"
                            className="text-gray-400 hover:text-white transition-colors text-sm relative group"
                            onClick={() => {
                                setTimeout(() => {
                                    window.scrollTo(0, 0);
                                }, 100);
                            }}
                        >
                            Privacy
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-street-purple group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <a href="#contact"
                           className="text-gray-400 hover:text-white transition-colors text-sm relative group">
                            Contatti
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-street-purple group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </div>
                </div>

                {/* Decorative line */}
                <div
                    className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-street-purple/30 to-transparent"></div>
            </div>
        </footer>
    );
};

export default Footer;