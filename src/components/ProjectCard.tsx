'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  metrics?: string;
  github?: string;
  demo?: string;
  index?: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  metrics,
  github,
  demo,
  index = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      {/* Let the card grow naturally with content */}
      <Card className="glass hover:shadow-glow transition-all duration-300 group w-full h-auto flex">
        <div className="p-5 md:p-6 flex flex-col w-full">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <Code className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            <div className="flex space-x-2">
              {github && (
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {demo && (
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Middle: full text, no clamps, no hidden overflow */}
          <div className="mt-4 space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-lg font-semibold text-foreground leading-tight">
              {title}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>

            {metrics && (
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-primary font-medium leading-snug">
                  {metrics}
                </p>
              </div>
            )}
          </div>

          {/* Divider before technologies */}
          <div className="border-t border-border my-4" />

          {/* Bottom chips */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
export { ProjectCard };
