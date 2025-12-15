import React from 'react';
import styles from '../shared/About.module.css'; // Reuse About styles for consistency

export default function Hobbies({ title, description }) {
    return (
        <section id="hobbies" className={styles.about}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
        </section>
    );
}
