'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const inputVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent!',
      description: 'Thank you for your message. I\'ll get back to you soon.',
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
<section id="contact" className="py-20 bg-secondary/20">
  <div className="container px-4">
    <div className="flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold font-heading text-center mb-6"
      >
        Get in Touch
      </motion.h2>
      <div className="flex space-x-6 mt-3">
        <Link
          href="https://github.com/aadityapatil350"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/aditya-patil-206b321a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
        <Link
          href="mailto:aadityapatil350@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="h-5 w-5" />
        </Link>
      </div>
    </div>
  </div>
</section>
  );
}