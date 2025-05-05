import React, {useState, useEffect} from "react";
import {Button} from "@/components/ui/button";
import {Building2, Menu, X, Zap, Sparkles} from "lucide-react";

const Header: React.FC = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Calcola una percentuale di scroll più graduale (0-100)
            const newScrollPercentage = Math.min(100, (window.scrollY / 100) * 100);
            setScrollPercentage(newScrollPercentage);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Determina se l'header è in modalità scrollata (per alcune funzionalità)
    const isScrolled = scrollPercentage > 10;

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300`}
            style={{
                backdropFilter: `blur(${8 + scrollPercentage * 0.08}px)`,
                backgroundColor: `rgba(10, 10, 20, ${0.3 + scrollPercentage * 0.004})`,
                boxShadow: scrollPercentage > 5 ? `0 4px 30px rgba(0, 0, 0, ${0.1 + scrollPercentage * 0.002})` : 'none',
                padding: `${Math.max(0.5, 1 - scrollPercentage * 0.005)}rem 0`,
                borderBottom: scrollPercentage > 10 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
            }}
        >
            <div className="container flex items-center justify-between">
                <a href="/" className="flex items-center gap-2 group">
                    <div
                        className="bg-street-purple rounded-lg p-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 relative">
                        <Building2 className="h-6 w-6"/>
                        <div
                            className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-street-neon animate-pulse"></div>
                    </div>
                    <span className="font-bold text-xl text-gradient whitespace-nowrap relative">
                      Stack Horizon
                      <Sparkles className="absolute -top-1 -right-6 h-3 w-3 text-street-yellow"/>
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex space-x-6">
                        {[
                            {name: "Servizi", id: "services"},
                            {name: "Features", id: "features"},
                            {name: "Progetti", id: "projects"},
                        ].map((item, i) => (
                            <a
                                key={item.name}
                                href={`#${item.id}`}
                                className="font-medium transition-colors hover:text-street-purple relative group overflow-hidden"
                            >
                                {item.name}
                                <span
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-street-purple transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </a>
                        ))}
                    </nav>

                    <Button
                        className="bg-street-orange hover:bg-street-orange/80 transform hover:scale-105 transition-all duration-300 flex items-center gap-1 relative group overflow-hidden"
                        onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
                        }}
                    >
                        <span className="relative z-10">Inizia Ora</span>
                        <Zap className="h-4 w-4 relative z-10"/>
                        <span
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-street-orange via-street-red to-street-orange bg-size-200 group-hover:bg-right-bottom transition-all duration-500 opacity-0 group-hover:opacity-100"></span>
                    </Button>
                </div>

                <button
                    className="block md:hidden relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6"/>
                    ) : (
                        <Menu className="h-6 w-6"/>
                    )}
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-street-orange"></span>
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full" style={{
                    backdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(10, 10, 20, 0.8)',
                }}>
                    <div className="container py-4 flex flex-col space-y-4">
                        {[
                            {name: "Servizi", id: "services"},
                            {name: "Features", id: "features"},
                            {name: "Progetti", id: "projects"},
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={`#${item.id}`}
                                className="font-medium transition-colors hover:text-street-purple py-2 border-b border-white/10 flex items-center justify-between group"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                                <span
                                    className="w-4 h-4 rounded-full bg-street-purple/20 flex items-center justify-center group-hover:bg-street-purple/40 transition-colors">
                            <span className="w-1 h-1 bg-street-purple rounded-full"></span>
                          </span>
                            </a>
                        ))}

                        <Button
                            className="bg-street-orange hover:bg-street-orange/80 w-full mt-4 flex items-center justify-center gap-2"
                            onClick={() => {
                                document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
                                setIsMenuOpen(false);
                            }}
                        >
                            Inizia Ora
                            <Zap className="h-4 w-4"/>
                        </Button>
                    </div>
                </div>
            )}

            {/* Decorative glowing line */}
            <div
                className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-street-purple/50 to-transparent transition-opacity duration-300"
                style={{opacity: Math.min(1, scrollPercentage / 20)}}
            ></div>
        </header>
    );
};

export default Header;