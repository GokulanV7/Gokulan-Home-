
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.1,
  className 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const initialOffset = window.scrollY + section.getBoundingClientRect().top;
    
    const handleScroll = () => {
      if (!section) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementTop = section.getBoundingClientRect().top;
      const elementHeight = section.getBoundingClientRect().height;
      
      // Only apply parallax when in view
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const offset = (scrollPosition - initialOffset) * speed;
        section.style.transform = `translateY(${offset}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initialize position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return (
    <div ref={sectionRef} className={cn("transition-transform duration-300", className)}>
      {children}
    </div>
  );
};

export default ParallaxSection;
