import React from 'react';
import styles from './ContactModal.module.css';

export default function ContactModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>
                <h2 className={styles.title}>Get in Touch</h2>

                <div className={styles.links}>
                    <a href="mailto:sam@example.com" className={styles.link}>
                        Email Me
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        LinkedIn
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
