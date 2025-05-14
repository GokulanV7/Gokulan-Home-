
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
    
    let startScrollPosition = section.offsetTop - window.innerHeight;
    
    const handleScroll = () => {
      if (!section) return;
      
      const scrollPosition = window.scrollY;
      const offset = (scrollPosition - startScrollPosition) * speed;
      
      if (scrollPosition >= startScrollPosition) {
        section.style.transform = `translateY(${offset}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return (
    <div ref={sectionRef} className={cn("parallax-element transition-transform duration-300", className)}>
      {children}
    </div>
  );
};

export default ParallaxSection;
