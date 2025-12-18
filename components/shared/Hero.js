import React from 'react';
import styles from './Hero.module.css';

import Link from 'next/link';

export default function Hero({ title, subtitle }) {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>
                {subtitle}
            </p>

        </section>
    );
}
