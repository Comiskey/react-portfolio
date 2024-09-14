import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Evan</h1>
            <p className={styles.description}>
            I am a senior in Mechanical Engineering at MIT, focusing in controls and robotics, with an additional concentration in Philosophy.
            I enjoy tackling novel challenges the areas of robotics, precision mechanical design, and additive manufacturing.
            I thrive in team settings, and hope to apply my skill-set to solve important, real-world problems. 
            

            </p>
            <a href = "mailto:comiskey@mit.edu" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt="Hero Image of Me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;
};
