import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProjectDetail.module.css';
import projects from '../../data/projects.json';
import { getImageUrl } from '../../utils/';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.category}>{project.category}</div>
      <h1 className={styles.title}>{project.title}</h1>
      <p className={styles.description}>{project.description}</p>
      {project.thesisLink && (
        <p className={styles.thesisLinkContainer}>
          <a href={project.thesisLink} target="_blank" rel="noopener noreferrer" className={styles.thesisLink}>
            Full thesis available on MIT DSpace
          </a>
        </p>
      )}
      <div className={styles.skills}>
        {project.skills.map((skill, index) => (
          <span key={index} className={styles.skill}>{skill}</span>
        ))}
      </div>
      <img src={getImageUrl(project.imageSrc)} alt={project.title} className={styles.image} />
     
      {project.sections && project.sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          <p className={styles.sectionContent}>{section.content}</p>
          {section.images && section.images.map((img, imgIndex) => (
            <figure key={imgIndex} className={styles.figure}>
              <img src={getImageUrl(img.src)} alt={img.caption} className={styles.sectionImage} />
              <figcaption className={styles.caption}>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
};