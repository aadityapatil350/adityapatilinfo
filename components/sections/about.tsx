'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold font-heading text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg">
              Hi, I'm Aditya Patil, a passionate Full Stack Developer with 3+ years
              of experience creating robust and scalable web applications.
            </p>
            <p className="text-lg text-muted-foreground">
              I specialize in building modern web applications using React,
              Next.js, Node.js, and various other cutting-edge technologies.
              My goal is to create efficient, scalable, and user-friendly
              solutions that solve real-world problems.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <Layout className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating beautiful, responsive user interfaces with React and
                    modern CSS frameworks.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <Code2 className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Backend</h3>
                  <p className="text-sm text-muted-foreground">
                    Building robust APIs and server-side applications with Node.js
                    and Python.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <Database className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Database</h3>
                  <p className="text-sm text-muted-foreground">
                    Designing and implementing efficient database solutions with
                    MongoDB, PostgreSQL, and Prisma.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}