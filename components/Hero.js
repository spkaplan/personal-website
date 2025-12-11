import React from 'react';
import styles from './Hero.module.css';

import Link from 'next/link';

export default function Hero({ title, subtitle, ctaText, ctaLink, onCtaClick }) {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>
                {subtitle}
            </p>
            {onCtaClick ? (
                <button onClick={onCtaClick} className={styles.ctaButton}>{ctaText || "View My Work"}</button>
            ) : (
                <Link href={ctaLink || "#"}>
                    <button className={styles.ctaButton}>{ctaText || "View My Work"}</button>
                </Link>
            )}
        </section>
    );
}
