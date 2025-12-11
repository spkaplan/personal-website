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

            {experience.map((company) => (
                <div key={company.id} className={styles.companyBlock}>
                    <h3 className={styles.companyName}>{company.company}</h3>

                    {company.roles.map((role, index) => (
                        <div key={index} className={styles.role}>
                            <div className={styles.roleTitle}>{role.title}</div>
                            <div className={styles.roleMeta}>{role.duration} | {role.location}</div>
                            <p className={styles.roleDesc}>{role.description}</p>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
}
