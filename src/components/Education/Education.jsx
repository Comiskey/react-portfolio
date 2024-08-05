import React from "react";
import styles from "./Education.module.css";
import educationData from "../../data/education.json";

export const Education = () => {
    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>Education</h2>
            <ul className={styles.educationItems}>
                {educationData.map((item, index) => (
                    <li key={index} className={styles.educationItem}>
                        <div className={styles.institution}>
                            <h3>{item.institution}</h3>
                            <p>{item.years}</p>
                        </div>
                        <hr className={styles.separator} />
                        <div className={styles.degree}>
                            <h3>{item.degree}</h3>
                            {item.details.map((detail, detailIndex) => (
                                <p key={detailIndex}>
                                    <strong>{detail.label}</strong> {detail.value}
                                </p>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};
