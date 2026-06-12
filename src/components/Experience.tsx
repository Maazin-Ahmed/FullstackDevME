'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.expSection}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.header}>
              <Briefcase className={styles.icon} size={28} />
              <h2 className="heading-font">Experience</h2>
            </div>
            
            <div className={`${styles.card} glass-panel`}>
              <div className={styles.timeline}></div>
              <div className={styles.cardContent}>
                <h3 className="heading-font">Freelance Full Stack Developer</h3>
                <span className={styles.date}>2025 - Present</span>
                <p>Building production-ready applications, AI-powered products, cloud deployments and scalable backend systems for various clients.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.header}>
              <Award className={styles.icon} size={28} />
              <h2 className="heading-font">Certifications</h2>
            </div>
            
            <div className={styles.certsList}>
              <div className={`${styles.certCard} glass-panel`}>
                <div className={styles.certIcon}>Oracle</div>
                <div className={styles.certContent}>
                  <h4>Oracle Cloud Infrastructure 2025 </h4>
                  <p>Certified Architect Associate</p>
                </div>
              </div>
              
              <div className={`${styles.certCard} glass-panel`}>
                <div className={styles.certIcon}>Oracle</div>
                <div className={styles.certContent}>
                  <h4>Oracle Cloud Infrastructure 2025</h4>
                  <p>Certified Foundations Associate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
