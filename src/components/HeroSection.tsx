
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfilePhoto from './ProfilePhoto';
import ParallaxSection from './ParallaxSection';
import { createMouseParallaxEffect } from '@/utils/parallaxUtils';
import { useTheme } from './ThemeProvider';
import { FileText, Mail, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const cleanup = createMouseParallaxEffect(container);
    
    return () => {
      cleanup();
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      data-parallax-container
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'}`}
    >
      <div className={`absolute inset-0 ${theme === 'dark' ? 
        'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-black' : 
        'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-gray-100 to-white'}`}>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxSection className="flex flex-col items-center md:items-start" speed={0.05} direction="vertical" intensity="light">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white text-gradient' : 'text-gray-900 text-gradient-light'}`}>
            Gokulan
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
          <h2 className={`text-xl md:text-2xl font-medium mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Flutter Developer | ML Enthusiast | Backend Engineer
          </h2>
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-lg mb-6 text-center md:text-left`}>
            Passionate about building cross-platform mobile applications with clean UI and efficient 
            backend integration. Experienced in Machine Learning and integrating AI models into real-world applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contact" 
              className={`px-6 py-3 ${theme === 'dark' ? 
                'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 
                'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'} 
                rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2`}
            >
              <Mail size={18} />
              Contact Me
            </Link>
            <Link 
              to="/about" 
              className={`px-6 py-3 border ${theme === 'dark' ? 
                'border-purple-500 text-purple-400 hover:bg-purple-500/10' : 
                'border-purple-600 text-purple-600 hover:bg-purple-600/10'} 
                rounded-full font-medium transition-all duration-300 flex items-center gap-2`}
            >
              <FileText size={18} />
              View Resume
            </Link>
          </div>
        </ParallaxSection>
        
        <ParallaxSection className="flex justify-center" speed={0.1} direction="vertical" reverse>
          <div className="relative">
            <div 
              className={`absolute -inset-4 rounded-full ${theme === 'dark' ? 
                'bg-gradient-to-r from-purple-600 to-pink-600' : 
                'bg-gradient-to-r from-purple-500 to-pink-500'} opacity-30 blur-3xl`} 
              data-parallax-mouse data-depth="0.02" data-direction="both"
            ></div>
            <ProfilePhoto 
              src="/placeholder.svg" 
              alt="Gokulan" 
              className="z-10" 
              data-parallax-mouse data-depth="0.01" data-direction="both"
              themeAware
            />
            <div 
              className={`absolute -z-10 w-72 h-72 rounded-full ${theme === 'dark' ? 
                'bg-purple-500/20' : 
                'bg-purple-300/30'} blur-3xl -bottom-10 -right-10`} 
              data-parallax-mouse data-depth="0.05" data-direction="both" data-inverse="true"
            ></div>
          </div>
        </ParallaxSection>
      </div>
      
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>Scroll Down</span>
        <ArrowDown className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
      </div>
      
      {/* Enhanced decorative elements with parallax */}
      <div 
        className={`absolute top-20 left-20 w-40 h-40 rounded-full ${theme === 'dark' ? 
          'bg-purple-500/10' : 
          'bg-purple-300/20'} blur-3xl`} 
        data-parallax-mouse data-depth="0.03" data-direction="horizontal"
      ></div>
      <div 
        className={`absolute bottom-20 right-20 w-60 h-60 rounded-full ${theme === 'dark' ? 
          'bg-pink-500/10' : 
          'bg-pink-300/20'} blur-3xl`} 
        data-parallax-mouse data-depth="0.02" data-direction="vertical" data-inverse="true"
      ></div>
      <div 
        className={`absolute top-1/4 right-1/4 w-20 h-20 rounded-full ${theme === 'dark' ? 
          'bg-blue-500/10' : 
          'bg-blue-300/20'} blur-2xl hidden md:block`} 
        data-parallax-mouse data-depth="0.04" data-direction="both"
      ></div>
      <div 
        className={`absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full ${theme === 'dark' ? 
          'bg-green-500/5' : 
          'bg-green-300/10'} blur-2xl hidden md:block`} 
        data-parallax-mouse data-depth="0.025" data-direction="both" data-inverse="true"
      ></div>
    </div>
  );
};

export default HeroSection;
