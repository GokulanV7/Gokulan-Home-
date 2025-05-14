
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  className?: string;
  reverse?: boolean;
  intensity?: 'light' | 'medium' | 'strong';
  easing?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.1,
  direction = 'vertical',
  className,
  reverse = false,
  intensity = 'medium',
  easing = true
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateValue, setTranslateValue] = useState({ x: 0, y: 0 });
  
  // Calculate speed factor based on intensity
  const getSpeedFactor = () => {
    switch(intensity) {
      case 'light': return speed * 0.5;
      case 'strong': return speed * 2;
      default: return speed;
    }
  };

  const speedFactor = getSpeedFactor() * (reverse ? -1 : 1);
  
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
      
      // Only apply parallax when in view or near view for smoother transitions
      if (elementTop < windowHeight + 100 && elementTop + elementHeight > -100) {
        const offset = (scrollPosition - initialOffset) * speedFactor;
        
        const newX = direction === 'horizontal' ? offset : 0;
        const newY = direction === 'vertical' ? offset : 0;
        
        setTranslateValue({ x: newX, y: newY });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initialize position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speedFactor, direction]);
  
  const transformStyle = {
    transform: `translate(${translateValue.x}px, ${translateValue.y}px)`,
    transition: easing ? 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)' : 'none',
  };
  
  return (
    <div 
      ref={sectionRef} 
      className={cn("will-change-transform", className)}
      style={transformStyle}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
