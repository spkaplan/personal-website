import React from 'react';
import styles from './SplitLayout.module.css';

export default function SplitLayout({ mode, onModeChange, children }) {
    // mode can be: 'neutral', 'personal', 'professional'

    return (
        <div className={`${styles.container} ${styles[mode]}`}>

            {/* LEFT SIDE: PERSONAL */}
            {mode === 'personal' ? (
                // ACTIVE STATE: Render the full page content
                <div className={`${styles.split} ${styles.left}`}>
                    <div className={styles.content}>
                        <div className={styles.fullContent}>
                            {children}
                        </div>
                    </div>
                </div>
            ) : (
                // INACTIVE STATE: Render the Teaser (Clickable)
                <div
                    className={`${styles.split} ${styles.left}`}
                    onClick={() => onModeChange('personal')}
                >
                    {mode === 'neutral' ? (
                        <div className={styles.gatewayContent}>
                            <h1 className={styles.gatewayTitle}>The Person</h1>
                            <p className={styles.gatewaySubtitle}>Hiker. Sci-Fi Reader. Lifelong Learner.</p>
                            <button className={styles.button}>Enter Personal Site</button>
                        </div>
                    ) : (
                        <div className={styles.teaser}>
                            <h2 className={styles.teaserTitle}>Personal</h2>
                        </div>
                    )}
                </div>
            )}

            {/* RIGHT SIDE: PROFESSIONAL */}
            {mode === 'professional' ? (
                // ACTIVE STATE: Render the full page content
                <div className={`${styles.split} ${styles.right}`}>
                    <div className={styles.content}>
                        <div className={styles.fullContent}>
                            {children}
                        </div>
                    </div>
                </div>
            ) : (
                // INACTIVE STATE: Render the Teaser (Clickable)
                <div
                    className={`${styles.split} ${styles.right}`}
                    onClick={() => onModeChange('professional')}
                >
                    {mode === 'neutral' ? (
                        <div className={styles.gatewayContent}>
                            <h1 className={styles.gatewayTitle}>The Professional</h1>
                            <p className={styles.gatewaySubtitle}>Director. Leader. Builder.</p>
                            <button className={styles.button}>Enter Professional Site</button>
                        </div>
                    ) : (
                        <div className={styles.teaser}>
                            <h2 className={styles.teaserTitle}>Professional</h2>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}
