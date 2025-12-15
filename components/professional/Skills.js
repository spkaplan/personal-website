import React from 'react';
import styles from './Skills.module.css';

export default function Skills({ categories = [] }) {
    return (
        <section id="skills" className={styles.skillsSection}>
            <h2 className={styles.title}>Technical Expertise</h2>
            <div className={styles.categoryGrid}>
                {categories.map((category, index) => (
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
