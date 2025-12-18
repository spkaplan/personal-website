import React from 'react';
import styles from './PersonalSection.module.css';

export default function Adventures({ title, description }) {
    return (
        <section id="adventures" className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
        </section>
    );
}
