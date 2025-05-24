"use client";

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projectsData } from '@/lib/data';

const Projects = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleNext = () => {
    setActiveProject((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setActiveProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const ProjectCard = ({ project, index }: any) => (
    <motion.div
      key={project.title}
      variants={fadeInUp}
      className={`bg-card rounded-xl overflow-hidden border border-border group transition-all duration-500 ${index === activeProject ? 'scale-100 opacity-100' : 'scale-95 opacity-40'
        }`}
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2 my-3">
          {project.technologies.map((tech: string) => (
            <Badge key={tech} className="bg-accent hover:bg-accent/80">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {project.github && (
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                <span>Code</span>
              </a>
            </Button>
          )}

          {project.demo && (
            <Button asChild size="sm" className="gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">

          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Featured Projects
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A collection of my recent work showcasing my skills and expertise in web development.
            </p>
          </motion.div>

          <div className="flex gap-8 flex-col">
            <div className="relative">
              <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 px-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-black/50 backdrop-blur-sm border-border/50 hover:bg-black/80"
                  onClick={handlePrev}
                >
                  <ChevronLeft size={24} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-black/50 backdrop-blur-sm border-border/50 hover:bg-black/80"
                  onClick={handleNext}
                >
                  <ChevronRight size={24} />
                </Button>
              </div>

              <div className="overflow-hidden">
                <div className="transition-opacity duration-500 ease-in-out">
                  <ProjectCard project={projectsData[activeProject]} index={activeProject} />
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${index === activeProject
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 w-6'
                      : 'bg-gray-700'
                    }`}
                  onClick={() => setActiveProject(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;