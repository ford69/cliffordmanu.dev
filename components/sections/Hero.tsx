"use client";

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, ExternalLink } from 'lucide-react';

const Hero = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const texts = ["Full Stack Developer", "React Specialist", "Node.js Expert", "UI/UX Enthusiast"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentText.substring(0, charIndex - 1);
        }
        charIndex--;
        typingSpeed = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentText.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 150;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        // Pause at the end of typing
        isDeleting = true;
        typingSpeed = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const typingTimeout = setTimeout(type, 1000);
    
    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="block">Hi, I'm</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Clifford Kwaku Kyereme Manu
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8">
            <span ref={typingRef} className="inline-block min-h-[1.5em]"></span>
            <span className="animate-blink">|</span>
          </h2>
          
          <p className="max-w-2xl text-muted-foreground mb-10 text-lg">
            Building scalable web and mobile applications with modern technologies.
            Specialized in seamless API integrations, responsive design, and engaging user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
              <a href="#projects">View My Work</a>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-indigo-600/50 hover:bg-indigo-900/20 transition-all duration-300">
              <a href="https://github.com/ford69" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </Button>
          </div>
          
          <a 
            href="#about"
            className="animate-bounce p-2 rounded-full bg-muted/20 hover:bg-muted/40 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;