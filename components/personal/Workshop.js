import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Workshop.module.css';
import { personalData } from '../../data/personal';

export default function Workshop({ title, description }) {
    const [lightboxProject, setLightboxProject] = useState(null);
    const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    React.useEffect(() => {
        setMounted(true);
        // Handle Escape key to close lightbox
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        };

        if (lightboxProject) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            setMounted(false);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [lightboxProject]);

    const { projects } = personalData.workshop;

    const openLightbox = (project, initialIndex = 0) => {
        setLightboxProject(project);
        setLightboxImageIndex(initialIndex);
    };

    const closeLightbox = () => {
        setLightboxProject(null);
        setLightboxImageIndex(0);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (lightboxProject) {
            setLightboxImageIndex((prev) =>
                prev === lightboxProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (lightboxProject) {
            setLightboxImageIndex((prev) =>
                prev === 0 ? lightboxProject.images.length - 1 : prev - 1
            );
        }
    };

    return (
        <section id="workshop" className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
            </div>

            <div className={styles.gridContainer}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={styles.card}
                        onClick={() => openLightbox(project)}
                    >
                        <img src={project.images[0]} alt={project.title} className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-personal-accent)', marginTop: '0.5rem', display: 'block' }}>
                                {project.images.length} photo{project.images.length !== 1 ? 's' : ''}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal - Portaled to body to escape stacking contexts */}
            {mounted && lightboxProject && createPortal(
                <div className={styles.lightboxOverlay} onClick={closeLightbox}>
                    <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeLightbox}>&times;</button>

                        <img
                            src={lightboxProject.images[lightboxImageIndex]}
                            alt={lightboxProject.title}
                            className={styles.lightboxImage}
                        />

                        <div className={styles.lightboxCaption}>
                            {lightboxProject.title} ({lightboxImageIndex + 1} / {lightboxProject.images.length})
                        </div>

                        {lightboxProject.images.length > 1 && (
                            <>
                                <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevImage}>&#10094;</button>
                                <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextImage}>&#10095;</button>
                            </>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}
