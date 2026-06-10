'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.content}>
            <h2 className={`${styles.sectionTitle} heading-font`}>About Me</h2>
            <div className={styles.textContent}>
              <p>
                Full Stack Developer with experience designing complete systems from frontend interfaces to backend services, cloud deployment, caching layers, database architecture and AI-powered workflows.
              </p>
              <p>
                Experienced across React, Next.js, Python, Node.js, PostgreSQL, MongoDB, Redis and AWS infrastructure.
              </p>
              <p>
                Oracle Cloud Certified with a strong interest in scalable SaaS products, developer tools, automation and sports intelligence platforms.
              </p>
            </div>
            
            <div className={styles.statsContainer}>
              {[
                { label: 'Projects Built', value: '10+' },
                { label: 'APIs Developed', value: '25+' },
                { label: 'Cloud Deployments', value: '20+' },
                { label: 'Technologies Used', value: '15+' },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  className={`${styles.statCard} glass-panel`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <h3 className="heading-font text-gradient">{stat.value}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
