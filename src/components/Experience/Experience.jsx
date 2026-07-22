import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import styles from './Experience.module.css';
import history from "../../data/experience.json";
import { getImageUrl } from '../../utils';

const renderMathText = (text) => {
    const tokens = text.split(/(\$\$.*?\$\$|\$.*?\$)/g).filter(Boolean);

    return tokens.map((token, index) => {
        if (token.startsWith('$$') && token.endsWith('$$')) {
            const expression = token.slice(2, -2);
            return (
                <span
                    key={index}
                    dangerouslySetInnerHTML={{
                        __html: katex.renderToString(expression, {
                            throwOnError: false,
                            displayMode: true,
                        }),
                    }}
                />
            );
        }

        if (token.startsWith('$') && token.endsWith('$')) {
            const expression = token.slice(1, -1);
            return (
                <span
                    key={index}
                    dangerouslySetInnerHTML={{
                        __html: katex.renderToString(expression, {
                            throwOnError: false,
                            displayMode: false,
                        }),
                    }}
                />
            );
        }

        return <React.Fragment key={index}>{token}</React.Fragment>;
    });
};

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
                                        <li key={experienceId}>{renderMathText(experience)}</li>
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
