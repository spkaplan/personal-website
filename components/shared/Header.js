import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header({ navItems = [], onContactClick }) {
    const [isScrolled, setIsScrolled] = useState(false);
    // Sentinel ref to track scroll position
    const sentinelRef = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If sentinel is NOT intersecting (it scrolled up out of view), we are scrolled
                setIsScrolled(!entry.isIntersecting);
            },
            { threshold: 0, rootMargin: '10px 0px 0px 0px' } // Trigger slightly after scrolling starts
        );

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div ref={sentinelRef} style={{ position: 'absolute', top: 0, height: '1px', width: '100%', pointerEvents: 'none', background: 'transparent' }} />
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
                <nav className={styles.nav}>
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} className={styles.navLink}>
                            {item.label}
                        </a>
                    ))}
                </nav>
                <button onClick={onContactClick} className={styles.contactButton}>
                    Get in Touch
                </button>
            </header>
        </>
    );
}
