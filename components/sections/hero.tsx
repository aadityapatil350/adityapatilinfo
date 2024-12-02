'use client';

import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 py-32 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading">
              Hi, I'm{' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-primary inline-block"
              >
                Aditya Patil
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              Full Stack Developer | 3+ Years of Experience
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg text-muted-foreground"
            >
              Building robust and scalable web applications with modern technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex space-x-4"
            >
              <Button asChild>
                <a href="mailto:aadityapatil350@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Hire Me
                </a>
              </Button>
              {/* <Button variant="outline" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button> */}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-square"
          >
           <Image
              src="/aditya.jpg" // Corrected path
              alt="Aditya Patil"
              fill
              className="object-cover rounded-full"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}