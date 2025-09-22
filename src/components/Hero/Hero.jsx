import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Evan</h1>
            <p className={styles.description}>
            I am a Master's Student in Mechanical Engineering at MIT, focusing in precision machine design.
            I am currently working on my thesis: developing novel manufacturing techniques for exotic materials.
            I thrive in team settings, and hope to apply my skills in tackling real-world precision engineering challenges.

            </p>
            <a href = "mailto:comiskey@mit.edu" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt="Hero Image of Me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;
};
