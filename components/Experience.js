import React, { useState, useEffect } from 'react';
import styles from './Experience.module.css';

export default function Experience() {
    const [experience, setExperience] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchExperience() {
            try {
                const response = await fetch('/api/experience');
                const data = await response.json();
                setExperience(data);
            } catch (error) {
                console.error("Failed to fetch experience:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchExperience();
    }, []);

    if (loading) {
        return <div className={styles.section}><p style={{ textAlign: 'center' }}>Loading experience...</p></div>;
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Professional Experience</h2>

            {experience.map((role) => (
                <div key={role.id} className={styles.companyBlock}>
                    <h3 className={styles.companyName}>{role.company}</h3>

                    <div className={styles.role}>
                        <div className={styles.roleTitle}>{role.role}</div>
                        <div className={styles.roleMeta}>{role.period}</div>
                        <p className={styles.roleDesc}>{role.description}</p>

                        {role.achievements && (
                            <ul className={styles.achievements}>
                                {role.achievements.map((item, idx) => (
                                    <li key={idx} className={styles.achievement}>{item}</li>
                                ))}
                            </ul>
                        )}

                        {role.techStack && (
                            <div className={styles.techStack}>
                                {role.techStack.map((tech, idx) => (
                                    <span key={idx} className={styles.techTag}>{tech}</span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
}
