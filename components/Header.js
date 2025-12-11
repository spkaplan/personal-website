import React from 'react';
import styles from './Header.module.css';

export default function Header({ onContactClick }) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Sam's Portfolio</div>
            <nav className={styles.nav}>
                <a href="/" className={styles.navLink}>Home</a>
                <button onClick={onContactClick} className={styles.navLink} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit', fontFamily: 'inherit' }}>Contact</button>
            </nav>
        </header>
    );
}
