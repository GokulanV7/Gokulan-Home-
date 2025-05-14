
import React, { useEffect, useRef } from 'react';
import ProfilePhoto from './ProfilePhoto';
import ParallaxSection from './ParallaxSection';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll('.parallax-mouse');
      const container = containerRef.current.getBoundingClientRect();
      
      const mouseX = e.clientX - container.left;
      const mouseY = e.clientY - container.top;
      
      const centerX = container.width / 2;
      const centerY = container.height / 2;
      
      elements.forEach((element, i) => {
        const depth = parseFloat((element as HTMLElement).dataset.depth || '0.05');
        const moveX = (mouseX - centerX) * depth;
        const moveY = (mouseY - centerY) * depth;
        
        (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-black"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10 max-w-6xl mx-auto px-4">
        <ParallaxSection className="flex flex-col items-center md:items-start" speed={0.05}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-gradient">Gokulan</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
          <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-300">
            Flutter Developer & ML Specialist
          </h2>
          <p className="text-gray-400 max-w-lg mb-6 text-center md:text-left">
            Passionate about building cross-platform mobile applications with clean UI and efficient 
            backend integration. Experienced in Machine Learning and integrating AI models into real-world applications.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-purple-500 rounded-full text-purple-400 font-medium hover:bg-purple-500/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </ParallaxSection>
        
        <ParallaxSection className="flex justify-center" speed={0.1}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 blur-3xl parallax-mouse" data-depth="0.02"></div>
            <ProfilePhoto 
              src="/placeholder.svg" 
              alt="Gokulan" 
              className="parallax-mouse z-10" 
            />
            <div className="absolute -z-10 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl -bottom-10 -right-10 parallax-mouse" data-depth="0.05"></div>
          </div>
        </ParallaxSection>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 mb-2">Scroll Down</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-purple-400"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl parallax-mouse" data-depth="0.03"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-pink-500/10 blur-3xl parallax-mouse" data-depth="0.02"></div>
    </div>
  );
};

export default HeroSection;
