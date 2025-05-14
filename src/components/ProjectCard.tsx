
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import ParallaxSection from './ParallaxSection';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  image = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80", 
  link,
  className 
}) => {
  return (
    <ParallaxSection speed={0.05}>
      <Card className="overflow-hidden bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
        </div>
        
        <CardHeader>
          <CardTitle className="text-gradient">{title}</CardTitle>
          <CardDescription className="text-gray-400">{description}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-1 text-xs rounded-full bg-purple-900/30 text-purple-300 border border-purple-700/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        
        {link && (
          <CardFooter>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-400 hover:text-purple-300 underline text-sm"
            >
              View Project →
            </a>
          </CardFooter>
        )}
      </Card>
    </ParallaxSection>
  );
};

export default ProjectCard;
