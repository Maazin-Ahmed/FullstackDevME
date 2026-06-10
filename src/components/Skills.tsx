'use client';

import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS EC2", "Docker", "Git", "CI/CD", "Oracle Cloud"]
  },
  {
    title: "AI & Integrations",
    skills: ["Grok API", "API Integrations", "Authentication Systems", "Real-Time Data Systems"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`${styles.title} heading-font`}>Technical Arsenal</h2>
          <p className={styles.subtitle}>Comprehensive toolset for building end-to-end applications.</p>
        </motion.div>
        
        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className={`${styles.skillCard} glass-panel`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="heading-font">{category.title}</h3>
              <div className={styles.skillTags}>
                {category.skills.map(skill => (
                  <span key={skill} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
