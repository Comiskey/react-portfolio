// ProjectCard.jsx
import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project: { title, imageSrc, description, skills, info } }) => {
  console.log('Info URL:', info); // This line remains

  // Construct the absolute URL
  const absoluteUrl = info.startsWith('http')
    ? info
    : `${window.location.origin}${info}`;

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>{skill}</li>
          ))}
        </ul>
        <div className={styles.links}>
          <a
            href={absoluteUrl} // Use absolute URL here
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};
