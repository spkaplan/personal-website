import React from 'react';
import styles from './Skills.module.css';

export default function Skills() {
    const skillCategories = [
        {
            title: "Leadership & Strategy",
            skills: ["Engineering Management", "Technical Strategy", "Team Building", "Agile/Scrum", "Mentorship", "Hiring"]
        },
        {
            title: "System Architecture",
            skills: ["Distributed Systems", "Microservices", "Cloud Native", "AWS/Azure", "System Design", "Scalability"]
        },
        {
            title: "Frontend Development",
            skills: ["React", "Next.js", "JavaScript/TypeScript", "CSS/Sass", "UI/UX Design", "Performance Optimization"]
        },
        {
            title: "Backend & DevOps",
            skills: ["Node.js", "Python", "Go", "Docker", "Kubernetes", "CI/CD Pipelines"]
        }
    ];

    return (
        <section id="skills" className={styles.skillsSection}>
            <h2 className={styles.title}>Technical Expertise</h2>
            <div className={styles.categoryGrid}>
                {skillCategories.map((category, index) => (
                    <div key={index} className={styles.categoryCard}>
                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                        <div className={styles.skillList}>
                            {category.skills.map((skill, idx) => (
                                <span key={idx} className={styles.skillTag}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
