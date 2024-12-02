'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Imaginate',
    description: 'An AI-powered image generator SaaS offering a variety of advanced image generation features, ideal for creative professionals and businesses.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'OpenAI API', 'Stripe'],
    liveUrl: 'https://imaginate.pro',
    githubUrl: 'https://github.com/aadityapatil350/imaginate',
  },
  {
    title: 'Quick-News',
    description: 'A clone of the Inshorts application that provides bite-sized news updates in a visually appealing format.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '', // Not hosted
    githubUrl: 'https://github.com/aadityapatil350/Quick-News',
  },
  {
    title: 'Water Packaging Template',
    description: 'A template designed for a local water packaging business to showcase their products and services.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://water-packaging-demo.netlify.app/',
    githubUrl: '', // Not available on GitHub
  },
  {
    title: '10Sports Business Website',
    description: 'A website for a local sports club business featuring booking and service details.',
    technologies: ['React', 'Tailwind CSS', 'Netlify'],
    liveUrl: 'https://willowy-cupcake-962a67.netlify.app',
    githubUrl: 'https://github.com/aadityapatil350/10sportsbusiness',
  },
  {
    title: 'Portfolio (Three.js)',
    description: 'A portfolio website showcasing interactive 3D visuals and animations built with Three.js.',
    technologies: ['Three.js', 'JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://aditya-patil-x.netlify.app/', // Not hosted
    githubUrl: 'https://github.com/aadityapatil350/portfolio-aditya-threejs',
  },
  {
    title: '2D Game Character Controller',
    description: 'A 2D game character controller developed in C# using the Unity engine, featuring smooth movement and animation mechanics.',
    technologies: ['C#', 'Unity', '2D Animation'],
    liveUrl: '', // Not hosted
    githubUrl: 'https://github.com/aadityapatil350/portfolio-aditya-threejs',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3
    }
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold font-heading text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}