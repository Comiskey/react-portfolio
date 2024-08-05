import React from 'react';
import styles from './Experience.module.css';
import history from "../../data/experience.json";
import { getImageUrl } from '../../utils';

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => (
                        <li key={id} className={styles.historyItem}>
                            <img
                                src={getImageUrl(historyItem.imageSrc)}
                                alt={`${historyItem.organisation} Logo`}
                            />
                            <div className={styles.historyItemDetails}>
                                <h3 className={styles.organisation}>
                                    {historyItem.organisation}
                                </h3>
                                <h4 className={styles.role}>
                                    {historyItem.role}
                                </h4>
                                <p>
                                    {`${historyItem.startDate} - ${historyItem.endDate}`}
                                </p>
                                <ul>
                                    {historyItem.experiences.map((experience, experienceId) => (
                                        <li key={experienceId}>{experience}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
