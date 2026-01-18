import React, {useState, useEffect} from 'react';
import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils/';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const titleElement = element.querySelector('h2');
            if (titleElement) {
                const titlePosition = titleElement.getBoundingClientRect().top + window.scrollY;
                const navbarHeight = 80; // Approximate navbar height with padding
                window.scrollTo({
                    top: titlePosition - navbarHeight,
                    behavior: 'smooth'
                });
            }
        }
    };

    return <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <a className={styles.title} href="/">
            <img src="/EC Gear Logo.png" alt="Gear Logo" className={styles.logo} />
        </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
                src={
                    menuOpen 
                        ? getImageUrl('nav/closeIcon.png')
                        : getImageUrl('nav/menuIcon.png')
                } 
                alt="menu-button" 
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}> 
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
                </li>
                <li>
                    <a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a>
                </li>
                <li>
                    <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
                </li>
                <li>
                    <a href="#leadership" onClick={(e) => handleNavClick(e, 'leadership')}>Leadership</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>;
};