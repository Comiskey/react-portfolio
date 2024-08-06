import React from "react";
import styles from "./Leadership.module.css";
import leadershipData from "../../data/leadership.json";
import { getImageUrl } from "../../utils";

export const Leadership = () => {
    return (
        <section className={styles.container} id="leadership">
            <h2 className={styles.title}>Leadership</h2>
            <ul className={styles.leadershipItems}>
                {leadershipData.map((item, index) => (
                    <li key={index} className={styles.leadershipItem}>
                        <img
                            src={getImageUrl(item.icon)}
                            alt={`${item.title} icon`}
                            className={styles.leadershipIcon}
                        />
                        <div className={styles.details}>
                            <h3>{item.title}</h3>
                            <p className={styles.role}>{item.role}</p>
                            <p className={styles.date}>{item.years}</p>
                            <hr className={styles.separator} />
                            <p>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};
