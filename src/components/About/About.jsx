import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.aboutContainer}>
                <div className={styles.imageSection}>
                    <img 
                        src={getImageUrl('hero/heroImagePink.png')} 
                        alt="Profile" 
                        className={styles.profileImage}
                    />
                </div>
                <div className={styles.contentSection}>
                    <h1 className={styles.title}>About Me</h1>
                    <p className={styles.description}>
                        Hi, I'm Evan Comiskey -- a mechanical engineering graduate researcher @ MIT.
                    </p>
                    <p className={styles.description}>
                        I conduct research to advance precision machine design theory in the <a href="https://culpepper.mit.edu/" target="_blank" rel="noopener noreferrer" className={styles.link}>MIT Culpepper Lab</a>,
                        working with data center builders and precision time-piece manufacturers to push the boundaries of accuracy 
                        and affordability in mesoscale machines.
                        I hold a B.S. in Mechanical Engineering from MIT ’25, and I'm interested in tackling
                        real-world problems through applied precision engineering and innovation.
                    </p>
                    <p className={styles.description}>
                        Outside of engineering, I spend my time weightlifting, cooking, watching football (I'm a former NCAA D3 defensive end), and making watches.
                    </p>
                    <div className={styles.contactInfo}>
                        <h2 className={styles.contactTitle}>Let's connect</h2>
                        <ul className={styles.contactLinks}>
                            <li>
                                <a href="mailto:your-email@example.com">Email</a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
