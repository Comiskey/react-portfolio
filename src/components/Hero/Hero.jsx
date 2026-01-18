import React, { useState, useEffect } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "Hello, I'm Evan.";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 125); // Adjust speed as needed

        return () => clearInterval(interval);
    }, []);

    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{displayedText}<span className={styles.cursor}>|</span></h1>
            <p className={styles.description}>
            I am a mechanical engineering graduate student @ MIT focusing in precision machine design and flexure systems.
            Scroll on to see some of my featured projects and other info!

            </p>
            <a href = "mailto:comiskey@mit.edu" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt="Hero Image of Me" className={styles.heroImg}/>
    </section>;
};
