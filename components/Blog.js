import React from 'react';
import styles from './About.module.css'; // Reuse About styles for consistency

export default function Blog() {
    return (
        <section id="blog" className={styles.about}>
            <h2 className={styles.title}>Latest Thoughts</h2>
            <div className={styles.description}>
                <p>Coming soon: Deep dives into distributed systems, team leadership, and my journey in tech.</p>
            </div>
        </section>
    );
}
