import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';

export default function Projects() {
    // 1. STATE: Hold the data we fetch
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // 2. EFFECT: Run this when the component loads (like @PostConstruct)
    useEffect(() => {
        // Define an async function to fetch data
        async function fetchProjects() {
            try {
                const response = await fetch('/api/projects'); // Call our own Backend
                const data = await response.json();
                setProjects(data); // Update State -> Triggers Re-render
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []); // Empty dependency array [] means "Run once on mount"

    if (loading) {
        return <div className={styles.section}><p style={{ textAlign: 'center' }}>Loading projects...</p></div>;
    }

    return (
        <section className={styles.section}>
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
