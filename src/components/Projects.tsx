'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';

const projects = [
  {
    title: "PrepQ AI Interview Prep",
    tagline: "AI-Powered Interview Preparation Platform",
    problem: "Job seekers often prepare for interviews using generic resources that fail to adapt to company-specific roles and interview patterns.",
    solution: "Built an AI-powered interview preparation platform that generates personalised preparation plans, mock interviews, and role-specific interview guidance using AI.",
    tech: ["FastAPI", "React", "Next.js", "PostgreSQL", "Redis", "AWS EC2", "Grok API"],
    architecture: "Frontend (Next.js) → API Layer (FastAPI) → Redis Cache & Rate Limiting → PostgreSQL → AI Services (Grok API)",
    challenges: ["AI response latency", "Rate limiting expensive AI calls", "Session persistence", "Streaming AI responses", "Deployment across cloud infrastructure"],
    results: ["Reduced manual interview preparation effort", "Dynamic AI-generated preparation plans", "Scalable backend architecture", "Real-time interview assistance"],
    demo: "https://prepq.vercel.app/",
    github: "https://github.com/Maazin-Ahmed/PrepQ-Ai-Interview-Prep"
  },
  {
    title: "FIFA NEXUS 2026",
    tagline: "The Ultimate Next-Gen Sports Intelligence Platform",
    problem: "Sports fans often need multiple platforms to track teams, players, fixtures, standings and analytics.",
    solution: "Created a unified sports intelligence platform combining live football data, player insights, tournament analytics and World Cup intelligence into one system.",
    tech: ["Flask", "Next.js", "PostgreSQL", "Redis", "Football API", "ESPN API", "Grok API"],
    architecture: "Next.js Frontend → Flask Backend → Redis Cache Layer → PostgreSQL → APIs (Football/ESPN/Grok)",
    challenges: ["Multiple API integrations", "Real-time data synchronization", "Rate limit handling", "Large data processing", "Cache invalidation"],
    results: ["Real-time World Cup insights", "Unified player/team intelligence", "Fast data retrieval through caching", "Scalable analytics architecture"],
    demo: "https://fifanexus.vercel.app/",
    github: "https://github.com/Maazin-Ahmed/FIFA-NEXUS-26"
  },
  {
    title: "Job Portal System",
    tagline: "Modern Recruitment Management Platform",
    problem: "Recruiters and job seekers struggle with fragmented hiring workflows.",
    solution: "Built a full-stack recruitment platform supporting job posting, applications, authentication and candidate management.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT Authentication"],
    architecture: "React Frontend → Express API → Node.js → MongoDB",
    challenges: ["Authentication", "Role management", "Pagination", "Query optimization"],
    results: ["Streamlined hiring workflow", "Faster job application process", "Role-based access control"],
    github: "https://github.com/Maazin-Ahmed/Job-Portal-System"
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <motion.h2 
          className={`${styles.sectionTitle} heading-font`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className={`${styles.projectCard} glass-panel`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className={styles.cardHeader}>
                <h3 className={`${styles.projectTitle} heading-font`}>{project.title}</h3>
                <p className={styles.tagline}>{project.tagline}</p>
                <div className={styles.links}>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className={styles.link} aria-label="Live Demo">
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className={styles.link} aria-label="GitHub">
                      <FaGithub size={20} /> Code
                    </a>
                  )}
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.section}>
                  <h4>Problem & Solution</h4>
                  <p><strong>Problem:</strong> {project.problem}</p>
                  <p><strong>Solution:</strong> {project.solution}</p>
                </div>
                
                <div className={styles.section}>
                  <h4>Tech Stack & Architecture</h4>
                  <div className={styles.techList}>
                    {project.tech.map(t => <span key={t} className={styles.techItem}>{t}</span>)}
                  </div>
                  <div className={styles.architectureBox}>
                    <code>{project.architecture}</code>
                  </div>
                </div>
                
                <div className={styles.twoColumn}>
                  <div className={styles.section}>
                    <h4>Challenges</h4>
                    <ul className={styles.list}>
                      {project.challenges.map(c => <li key={c}>{c}</li>)}
                    </ul>
                  </div>
                  <div className={styles.section}>
                    <h4>Results</h4>
                    <ul className={styles.list}>
                      {project.results.map(r => <li key={r}>{r}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
