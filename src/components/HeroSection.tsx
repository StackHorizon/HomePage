
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CarFront, Flag, Zap, Sparkles, Code, RotateCcw, Hexagon } from "lucide-react";

const HeroSection: React.FC = () => {
  const codeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (codeRef.current) {
      const codeLines = [
        '<div class="future">',
        '  <h1>Stack Horizon</h1>',
        '  <p>Sviluppo creativo</p>',
        '  <button>Inizia</button>',
        '</div>'
      ];
      
      let lineIndex = 0;
      let charIndex = 0;
      let currentText = '';
      let isDeleting = false;
      
      const typeCode = () => {
        if (!codeRef.current) return;
        
        const currentLine = codeLines[lineIndex];
        
        if (isDeleting) {
          currentText = currentLine.substring(0, charIndex - 1);
          charIndex--;
        } else {
          currentText = currentLine.substring(0, charIndex + 1);
          charIndex++;
        }
        
        codeRef.current.innerHTML = currentText;
        
        let typeSpeed = isDeleting ? 30 : 60;
        
        if (!isDeleting && charIndex === currentLine.length) {
          typeSpeed = 1000;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          lineIndex++;
          if (lineIndex === codeLines.length) lineIndex = 0;
          typeSpeed = 500;
        }
        
        setTimeout(typeCode, typeSpeed);
      };
      
      typeCode();
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-street-purple/40 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-12 w-72 h-72 bg-street-orange/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-street-cyan/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-street-neon/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-street-red/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        
        {/* Street patterns */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-10">
          <div className="absolute bottom-12 left-0 w-full h-2 bg-white"></div>
          <div className="absolute bottom-12 left-10 w-10 h-2 bg-street-orange"></div>
          <div className="absolute bottom-12 left-30 w-10 h-2 bg-street-orange"></div>
          <div className="absolute bottom-12 left-50 w-10 h-2 bg-street-orange"></div>
          <div className="absolute bottom-12 left-70 w-10 h-2 bg-street-orange"></div>
          <div className="absolute bottom-12 left-90 w-10 h-2 bg-street-orange"></div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-20 right-10 w-40 h-40 border border-street-purple/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 border border-street-yellow/30 rotate-45 animate-pulse-slow"></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-1/3 right-0 w-1/4 h-0.5 bg-gradient-to-r from-transparent to-street-neon/50 -rotate-45"></div>
        <div className="absolute bottom-1/3 left-0 w-1/4 h-0.5 bg-gradient-to-r from-street-red/50 to-transparent rotate-45"></div>
        
        {/* Additional abstract elements */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border-4 border-street-neon/30 animate-street-skew"></div>
        <div className="absolute bottom-1/5 left-1/4 w-10 h-10 bg-street-purple/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-2/3 right-1/3 flex space-x-2">
          <div className="w-1 h-20 bg-street-orange/30 rounded-full animate-bounce" style={{ animationDelay: '0.1s', animationDuration: '2s' }}></div>
          <div className="w-1 h-16 bg-street-purple/30 rounded-full animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '2.2s' }}></div>
          <div className="w-1 h-24 bg-street-neon/30 rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '1.8s' }}></div>
        </div>
      </div>

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <p className="flex items-center gap-2 text-street-orange font-medium mb-4 opacity-0 animate-fade-in animate-item">
              <span className="inline-block w-10 h-0.5 bg-street-orange"></span>
              Sviluppo e Progettazione con Stile Urbano
              <Zap className="h-4 w-4 text-street-yellow animate-pulse" />
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight opacity-0 animate-fade-in animate-item">
              <span className="block text-gradient" style={{ fontSize: '5.5rem', letterSpacing: '-1px' }}>Stack Horizon</span>
              <span className="text-2xl sm:text-3xl md:text-4xl text-street-cyan/90 block mt-2">Sviluppo & Progettazione</span>
              <span className="absolute -ml-8 text-6xl text-street-neon opacity-30 animate-pulse-slow">*</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-lg opacity-0 animate-fade-in animate-item">
              <span className="text-street-purple">Non frenare le tue idee:</span> Pensa di meno, 
              <span className="text-street-orange"> Sogna di più.</span> Rendiamo reale ciò che immagini.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animate-item">
            <Button size="lg" className="bg-street-purple hover:bg-street-purple/80 text-white rounded-xl rotate-1 transform transition-transform hover:rotate-0 hover:scale-105 group relative overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-street-purple via-street-neon to-street-purple bg-[length:200%_100%] animate-gradient-x opacity-50 group-hover:opacity-70"></span>
              <span className="relative z-10 flex items-center gap-2">
                Fai il Salto con Noi
                <Sparkles className="h-4 w-4 animate-pulse" />
              </span>
            </Button>
            <Button size="lg" variant="outline" className="border-street-orange text-street-orange hover:bg-street-orange/10 rounded-xl -rotate-1 transform transition-transform hover:rotate-0">
              Scopri le Nostre Soluzioni
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-8 pt-6 opacity-0 animate-fade-in animate-item">
            <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
              <div className="glass w-12 h-12 rounded-xl flex items-center justify-center shrink-0 rotate-3 ripple">
                <CarFront className="h-6 w-6 text-street-orange" />
              </div>
              <div>
                <p className="font-bold">Sviluppo Veloce</p>
                <p className="text-gray-400 text-sm">Setup rapido e creativo</p>
              </div>
            </div>
            <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
              <div className="glass w-12 h-12 rounded-xl flex items-center justify-center shrink-0 -rotate-3 ripple">
                <Flag className="h-6 w-6 text-street-purple" />
              </div>
              <div>
                <p className="font-bold">Network Globale</p>
                <p className="text-gray-400 text-sm">Presenza edge worldwide</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative h-[500px] opacity-0 animate-fade-in animate-item">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Main image box - Code editor */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-64 glass rounded-2xl p-1 rotate-6 animate-float">
                <div className="h-full w-full bg-street-dark/80 rounded-xl overflow-hidden">
                  <div className="h-6 w-full bg-street-dark flex items-center gap-1 px-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="text-xs text-gray-500 ml-2">index.html</div>
                  </div>
                  <div className="p-4 font-mono text-sm overflow-hidden h-[calc(100%-24px)]">
                    <div 
                      ref={codeRef}
                      className="text-street-purple"
                    >
                      &lt;div class="future"&gt;
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Spinning code block */}
              <div className="absolute top-16 right-0 w-24 h-24 glass-dark rounded-lg p-1 animate-spin-slow" style={{ animationDuration: '15s' }}>
                <div className="h-full w-full flex items-center justify-center">
                  <Code className="text-street-neon h-10 w-10" />
                </div>
              </div>
              
              {/* Rotating arrow */}
              <div className="absolute bottom-20 right-0 w-16 h-16 glass rounded-full p-1 animate-spin-slow" style={{ animationDuration: '8s' }}>
                <div className="h-full w-full bg-street-orange/20 rounded-full flex items-center justify-center">
                  <RotateCcw className="text-street-orange h-8 w-8" />
                </div>
              </div>
              
              {/* Hexagon */}
              <div className="absolute bottom-40 left-0 w-20 h-20 glass-dark p-1 animate-float-rotate" style={{ animationDuration: '10s' }}>
                <div className="h-full w-full flex items-center justify-center">
                  <Hexagon className="text-street-purple h-12 w-12" />
                </div>
              </div>
              
              {/* Animated terminal window */}
              <div className="absolute top-0 left-16 w-56 h-32 glass-dark rounded-lg p-1 -rotate-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="h-full w-full bg-street-dark/80 rounded-lg overflow-hidden">
                  <div className="h-5 w-full bg-black/40 flex items-center px-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="text-[10px] text-gray-400 ml-2">Terminal</div>
                  </div>
                  <div className="p-2 font-mono text-xs">
                    <p className="text-green-400">$ npm start</p>
                    <p className="text-gray-400">Starting development server...</p>
                    <p className="text-white">Server running at http://localhost:3000</p>
                    <p className="flex items-center">
                      <span className="text-street-purple mr-1">$</span> 
                      <span className="h-3 w-2 bg-white/70 animate-pulse"></span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Colorful blocks */}
              <div className="absolute bottom-0 left-32 flex space-x-3">
                <div className="w-10 h-10 bg-street-purple/40 rounded-lg animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
                <div className="w-10 h-10 bg-street-orange/40 rounded-lg animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '2.2s' }}></div>
                <div className="w-10 h-10 bg-street-neon/40 rounded-lg animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '1.8s' }}></div>
              </div>
              
              {/* Equalizer bars */}
              <div className="absolute top-1/4 right-12 flex space-x-1 h-16 items-end">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 bg-gradient-to-t from-street-purple to-street-neon rounded-t-sm animate-bounce" 
                    style={{ 
                      height: `${Math.max(20, Math.min(100, 30 + Math.random() * 70))}%`,
                      animationDuration: `${0.8 + Math.random() * 0.6}s`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scendi Giù</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-street-purple to-transparent"></div>
        <div className="w-4 h-4 border-b-2 border-r-2 border-street-purple transform rotate-45 opacity-60 animate-bounce"></div>
      </div>
    </section>
  );
};

export default HeroSection;
