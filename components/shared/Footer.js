import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>
                &copy; {new Date().getFullYear()} Sam's Portfolio. Built with Next.js & React.
            </p>
        </footer>
    );
}
