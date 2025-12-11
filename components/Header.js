import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Sam's Portfolio</div>
            <nav className={styles.nav}>
                <a href="/" className={styles.navLink}>Home</a>
                <a href="/personal" className={styles.navLink}>Personal</a>
                <a href="/professional" className={styles.navLink}>Professional</a>
                <a href="#" className={styles.navLink}>Contact</a>
            </nav>
        </header>
    );
}
