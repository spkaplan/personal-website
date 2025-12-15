import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';

export default function Projects({ projects = [] }) {
    return (
        <section id="projects" className={styles.section}>
            <h2 className={styles.title}>Featured Projects</h2>
            <div className={styles.grid}>
                {/* 3. MAP: Loop through the array and render a Card for each item */}
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <h3 className={styles.cardTitle}>{project.title}</h3>
                        <p className={styles.cardDesc}>{project.description}</p>
                        <div className={styles.tags}>
                            {project.tags.map(tag => (
                                <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
