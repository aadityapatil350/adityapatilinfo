'use client';

import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'MongoDB', level: 85 },
  { name: 'PostgreSQL', level: 80 },
  { name: 'Docker', level: 70 },
  { name: 'AWS', level: 65 },
];

export function Skills() {
  const [animatedSkills] = useState(skills);

  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold font-heading text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {animatedSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-sm text-muted-foreground"
                >
                  {skill.level}%
                </motion.span>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="origin-left"
              >
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}