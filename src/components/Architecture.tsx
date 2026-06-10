'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import styles from './Architecture.module.css';

const steps = [
  "Problem Discovery",
  "System Design",
  "Backend Architecture",
  "Database Design",
  "Frontend Experience",
  "Cloud Deployment",
  "Monitoring & Optimization"
];

export default function Architecture() {
  return (
    <section className={styles.archSection}>
      <div className="container">
        <div className={styles.wrapper}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`${styles.title} heading-font`}>How I Build Products</h2>
            <p className={styles.subtitle}>A systematic approach to engineering scalable applications.</p>
          </motion.div>
          
          <div className={styles.flowContainer}>
            {steps.map((step, index) => (
              <div key={step} className={styles.stepWrapper}>
                <motion.div 
                  className={`${styles.stepCard} glass-panel`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
                >
                  <span className={styles.stepNumber}>0{index + 1}</span>
                  <h3 className="heading-font">{step}</h3>
                </motion.div>
                
                {index < steps.length - 1 && (
                  <motion.div 
                    className={styles.arrow}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, duration: 0.3 }}
                  >
                    <ArrowDown size={24} color="var(--text-muted)" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
