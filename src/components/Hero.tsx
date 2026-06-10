'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Hero.module.css';

const techStack = [
  "React", "Next.js", "Node.js", "FastAPI", "Flask", 
  "MongoDB", "PostgreSQL", "Redis", "AWS", "Docker", "Grok API"
];

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className={styles.greeting}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm Maazin Ahmed
          </motion.h2>
          
          <motion.h1 
            className={`${styles.title} heading-font text-gradient`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Full Stack Developer
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building scalable web applications with React, Next.js, Python, Node.js, PostgreSQL, Redis, Cloud Infrastructure and AI-powered systems.
          </motion.p>
          
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a href="#projects" className={styles.primaryBtn}>
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" className={styles.secondaryBtn} target="_blank">
              <Download size={18} /> Download Resume
            </a>
            <a href="https://github.com/Maazin-Ahmed" className={styles.iconBtn} target="_blank" aria-label="GitHub">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/maazinahmed" className={styles.iconBtn} target="_blank" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
          </motion.div>
          
          <motion.div 
            className={styles.techStack}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {techStack.map((tech, index) => (
              <motion.span 
                key={tech} 
                className={styles.techPill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(0, 229, 168, 0.15)', borderColor: 'var(--primary)' }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
