'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <motion.div 
          className={`${styles.contactCard} glass-panel`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.content}>
            <h2 className={`${styles.title} heading-font`}>Let's Build Something Great</h2>
            <p className={styles.subtitle}>
              Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className={styles.contactLinks}>
              <a href="mailto:ahmed.maazin7@gmail.com" className={styles.linkItem}>
                <div className={styles.iconWrapper}><Mail size={24} /></div>
                <span>ahmed.maazin7@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/maazinahmed" target="_blank" rel="noreferrer" className={styles.linkItem}>
                <div className={styles.iconWrapper}><FaLinkedin size={24} /></div>
                <span>linkedin.com/in/maazinahmed</span>
              </a>
              <a href="https://github.com/Maazin-Ahmed" target="_blank" rel="noreferrer" className={styles.linkItem}>
                <div className={styles.iconWrapper}><FaGithub size={24} /></div>
                <span>github.com/Maazin-Ahmed</span>
              </a>
            </div>
          </div>
        </motion.div>
        
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Maazin Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
