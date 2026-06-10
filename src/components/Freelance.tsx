'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Globe, TrendingUp } from 'lucide-react';
import styles from './Freelance.module.css';

export default function Freelance() {
  return (
    <section id="freelance" className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>// EXPERIENCE</span>
          <h2 className="heading-font">Freelance Work</h2>
        </motion.div>

        {/* Sub-section A: Web Development */}
        <motion.div 
          className={styles.subSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.subHeader}>
            <Globe className={styles.icon} size={24} />
            <h3 className="heading-font">Web Development</h3>
          </div>
          
          <div className={styles.grid3}>
            {/* Card 1 */}
            <div className={`${styles.webCard} glass-panel`}>
              <span className={styles.tagMono}>WEB DEV</span>
              <h4 className="heading-font">Academically Online</h4>
              <p>Ed-tech platform — designed and developed full frontend and deployment pipeline.</p>
              <a href="https://academicallyonline.com" target="_blank" rel="noopener noreferrer" className={styles.cyanLink}>
                Visit <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 2 */}
            <div className={`${styles.webCard} glass-panel`}>
              <span className={styles.tagMono}>WEB DEV</span>
              <h4 className="heading-font">Downtown Store</h4>
              <p>E-commerce storefront — built responsive UI, product catalog, and checkout flow.</p>
              <a href="https://downtownstore.in" target="_blank" rel="noopener noreferrer" className={styles.cyanLink}>
                Visit <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 3 */}
            <div className={`${styles.webCard} glass-panel`}>
              <span className={styles.tagMono}>WEB DEV</span>
              <h4 className="heading-font">Jyotish Joshi</h4>
              <p>Personal brand website — custom CMS integration and SEO-optimised pages.</p>
              <a href="https://jyotishjoshi.com" target="_blank" rel="noopener noreferrer" className={styles.cyanLink}>
                Visit <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Sub-section B: Digital Marketing — Real Estate */}
        <motion.div 
          className={styles.subSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.subHeader}>
            <TrendingUp className={styles.iconLime} size={24} />
            <h3 className="heading-font">Digital Marketing &middot; Real Estate</h3>
          </div>

          <div className={styles.timelineList}>
            {/* Entry 1 */}
            <div className={`${styles.timelineCard} glass-panel`}>
              <div className={styles.cardHeader}>
                <h4 className="heading-font">Biznest, Aurangabad</h4>
              </div>
              <p>Service apartment brand. Managed end-to-end social media presence and Google Business Profile, driving organic discovery and booking inquiries through consistent content and review management.</p>
              <div className={styles.tags}>
                <span>Social Media</span>
                <span>GBP</span>
                <span>Content Strategy</span>
              </div>
            </div>

            {/* Entry 2 */}
            <div className={`${styles.timelineCard} glass-panel`}>
              <div className={styles.cardHeader}>
                <h4 className="heading-font">Creative Homes, Pune</h4>
              </div>
              <p>Service apartment operator. Maximised occupancy through multi-channel marketing: social media campaigns, Google Ads, Google Business optimisation, and listing management on Airbnb, Booking.com, and Agoda.</p>
              <div className={styles.tags}>
                <span>Google Ads</span>
                <span>Airbnb</span>
                <span>Booking.com</span>
                <span>Agoda</span>
                <span>Social Media</span>
              </div>
            </div>

            {/* Entry 3 */}
            <div className={`${styles.timelineCard} glass-panel`}>
              <div className={styles.cardHeader}>
                <h4 className="heading-font">Home Assist Pune</h4>
              </div>
              <p>Property management consultancy for flat owners. Assisted 20+ individual property owners in onboarding their listings onto Airbnb, Booking.com, MakeMyTrip Stays, and other short-term rental platforms — optimising pricing, photography briefs, and listing copy to maximise occupancy rates and nightly revenue.</p>
              <div className={styles.tags}>
                <span>Airbnb</span>
                <span>Booking.com</span>
                <span>MakeMyTrip</span>
                <span>Revenue Optimisation</span>
                <span>20+ Owners</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
