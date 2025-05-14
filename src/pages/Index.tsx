
import { useEffect, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { useParallaxElements } from '@/utils/parallaxUtils';

const Index = () => {
  const cleanupRef = useRef<() => void>();
  
  useEffect(() => {
    // Initialize parallax effects after component mounts
    // Allow some time for the DOM to fully load
    const initTimeout = setTimeout(() => {
      cleanupRef.current = useParallaxElements();
    }, 300);
    
    return () => {
      clearTimeout(initTimeout);
      // Clean up parallax effects
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <TechStack />
        </div>
      </section>
      
      <ProjectsSection />
      
      <ContactSection />
      
      <footer className="py-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Gokulan | Flutter Developer & ML Specialist
        </div>
      </footer>
    </div>
  );
};

export default Index;
