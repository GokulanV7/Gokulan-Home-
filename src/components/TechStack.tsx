
import React from 'react';
import { cn } from '@/lib/utils';
import ParallaxSection from './ParallaxSection';

interface TechItemProps {
  name: string;
  icon: string;
  proficiency: number;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon, proficiency }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:bg-purple-900/30 transition-all duration-300 hover:scale-105">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold mb-1">{name}</h3>
      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
        <div 
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

interface TechStackProps {
  className?: string;
}

const TechStack: React.FC<TechStackProps> = ({ className }) => {
  const technologies = [
    { name: 'Flutter', icon: '📱', proficiency: 95 },
    { name: 'Python', icon: '🐍', proficiency: 90 },
    { name: 'Machine Learning', icon: '🧠', proficiency: 85 },
    { name: 'React', icon: '⚛️', proficiency: 80 },
    { name: 'MongoDB', icon: '🍃', proficiency: 85 },
    { name: 'SQL', icon: '💾', proficiency: 80 },
    { name: 'FastAPI', icon: '⚡', proficiency: 85 },
    { name: 'Flask', icon: '🌶️', proficiency: 80 },
    { name: 'MCP Agent', icon: '🤖', proficiency: 75 },
  ];

  return (
    <div className={cn("w-full", className)}>
      <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <ParallaxSection key={tech.name} speed={0.03 + (index * 0.01)}>
            <TechItem {...tech} />
          </ParallaxSection>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
