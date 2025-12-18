import React from 'react';
import styles from './PersonalSection.module.css';

export default function Homestead({ title, description }) {
    return (
        <section id="homestead" className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
        </section>
    );
}
