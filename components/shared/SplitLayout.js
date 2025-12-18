import React from 'react';
import styles from './SplitLayout.module.css';

export default function SplitLayout({ mode, onModeChange, personalLanding, professionalLanding, personalBg, professionalBg, children }) {
    // mode: 'neutral' | 'personal' | 'professional'

    return (
        <div className={`${styles.container} ${styles[mode]} ${styles.reveal}`}>

            {/* LEFT SIDE: PERSONAL */}
            {mode === 'personal' ? (
                // ACTIVE STATE
                <div className={`${styles.split} ${styles.left}`}>
                    <div className={styles.content}>
                        <div className={styles.fullContent}>
                            {children}
                        </div>
                    </div>
                </div>
            ) : (
                // INACTIVE / TEASER STATE
                <div
                    className={`${styles.split} ${styles.left}`}
                    onClick={() => onModeChange('personal')}
                >
                    {/* EFFECT BACKGROUND */}
                    <div className={styles.revealBg} style={{ backgroundImage: `url('${personalBg}')` }} />

                    {mode === 'neutral' ? (
                        <div className={styles.gatewayContent}>
                            <h1 className={styles.gatewayTitle}>{personalLanding.gatewayTitle}</h1>
                            <p className={styles.gatewaySubtitle}>{personalLanding.gatewaySubtitle}</p>
                            <button className={styles.button}>{personalLanding.ctaText}</button>
                        </div>
                    ) : (
                        <div className={styles.teaser}>
                            <h2 className={styles.teaserTitle}>{personalLanding.teaserTitle}</h2>
                        </div>
                    )}
                </div>
            )}

            {/* RIGHT SIDE: PROFESSIONAL */}
            {mode === 'professional' ? (
                // ACTIVE STATE
                <div className={`${styles.split} ${styles.right}`}>
                    <div className={styles.content}>
                        <div className={styles.fullContent}>
                            {children}
                        </div>
                    </div>
                </div>
            ) : (
                // INACTIVE / TEASER STATE
                <div
                    className={`${styles.split} ${styles.right}`}
                    onClick={() => onModeChange('professional')}
                >
                    {/* EFFECT BACKGROUND */}
                    <div className={styles.revealBg} style={{ backgroundImage: `url('${professionalBg}')` }} />

                    {mode === 'neutral' ? (
                        <div className={styles.gatewayContent}>
                            <h1 className={styles.gatewayTitle}>{professionalLanding.gatewayTitle}</h1>
                            <p className={styles.gatewaySubtitle}>{professionalLanding.gatewaySubtitle}</p>
                            <button className={styles.button}>{professionalLanding.ctaText}</button>
                        </div>
                    ) : (
                        <div className={styles.teaser}>
                            <h2 className={styles.teaserTitle}>{professionalLanding.teaserTitle}</h2>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}
