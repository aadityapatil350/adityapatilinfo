'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Layout, Server, Database, Cloud, Lock, Globe, Rocket, ChartBar } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Creating robust server-side applications and RESTful APIs using Node.js and Python.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Designing and implementing efficient database solutions with MongoDB, PostgreSQL, and modern ORMs.',
  },
  {
    icon: Code2,
    title: 'API Integration',
    description: 'Seamlessly integrating third-party APIs and services into your applications.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Deploying and managing applications on cloud platforms like AWS, Google Cloud, and Digital Ocean.',
  },
  {
    icon: Lock,
    title: 'Security Implementation',
    description: 'Implementing robust security measures and best practices to protect your applications.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Crafting scalable and performant web applications tailored to your business needs.',
  },
  {
    icon: Rocket,
    title: 'Automation Solutions',
    description: 'Designing workflows and scripts to automate repetitive tasks and optimize productivity.',
  },
  {
    icon: ChartBar,
    title: 'Data Analytics',
    description: 'Analyzing and visualizing data to provide actionable insights for decision-making.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl font-bold font-heading text-center mb-12">
          Services Provided
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}