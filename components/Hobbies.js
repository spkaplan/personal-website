import React from 'react';
import styles from './About.module.css'; // Reuse About styles for consistency

export default function Hobbies() {
    return (
        <section id="hobbies" className={styles.about}>
            <h2 className={styles.title}>Beyond Code</h2>
            <div className={styles.description}>
                <p>Hiking, Sci-Fi reading list, and amateur photography content coming soon.</p>
            </div>
        </section>
    );
}
