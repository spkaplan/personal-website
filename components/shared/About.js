import React from 'react';
import styles from './About.module.css';

// 1. PROPS: We accept an object called 'props' as an argument.
// In modern JS, we usually "destructure" it immediately like: function About({ title, description })
// But let's do it the long way first so you see what's happening.

export default function About(props) {
    // 'props' is just an object: { title: "...", description: "..." }

    return (
        <section id="about" className={styles.about}>
            <h2 className={styles.title}>{props.title}</h2>

            {/* We can render the description passed from the parent */}
            <div className={styles.description}>
                {props.description}
            </div>
        </section>
    );
}
