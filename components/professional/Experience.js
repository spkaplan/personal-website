import React, { useState, useEffect } from 'react';
import styles from './Experience.module.css';

export default function Experience({ jobs = [] }) {
    return (
        <section id="experience" className={styles.section}>
            <h2 className={styles.title}>Professional Experience</h2>

            {jobs.map((role) => (
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
