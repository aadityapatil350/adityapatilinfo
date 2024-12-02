'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Renewalytics',
    period: '2024 - Present',
    achievements: [
      'Built the core infrastructure of a startup specializing in forecasting solutions.',
      'Developed the main website and dashboard using Next.js, integrated with both MySQL and MongoDB databases via Prisma.',
      'Implemented full custom authentication with role-based access control (RBAC).',
      'Set up and managed staging and production environments, including CI/CD pipelines and deployment on DigitalOcean.',
      'Handled server maintenance and ensured system uptime and scalability.',
      'Optimized database queries and front-end performance to improve user experience and data retrieval speed.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Climate Connect Digital',
    period: '2021 - 2024',
    achievements: [
      'Developed and maintained web applications using PHP Laravel framework with robust front-end implementations using JavaScript, Bootstrap, HTML, and CSS.',
      'Containerized applications using Docker to enhance scalability and streamline development workflows.',
      'Integrated various APIs and payment gateways to expand application functionality.',
      'Collaborated in an Agile environment with cross-functional teams, including product managers and stakeholders, to deliver software solutions sprint-wise.',
      'Mentored junior developers, conducted code reviews, and enforced best practices in software development.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Climate Connect Digital',
    period: '2020 - 2021',
    achievements: [
      'Assisted in the development and maintenance of web applications using PHP Laravel framework.',
      'Worked on front-end development using HTML, CSS, JavaScript, and Bootstrap to create responsive user interfaces.',
      'Collaborated with senior developers to troubleshoot and debug code, enhancing problem-solving skills.',
      'Gained experience in Git for version control and Docker for application containerization.',
      'Demonstrated a strong work ethic and eagerness to learn, contributing to team success.',
      'Actively participated in sprint planning, daily stand-ups, and retrospective meetings in an Agile environment.',
    ],
  },
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
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold font-heading text-center mb-12"
        >
          Work Experience
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}