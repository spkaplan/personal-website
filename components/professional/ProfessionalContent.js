import React from 'react';
import Header from '../shared/Header';
import Hero from '../shared/Hero';
import About from '../shared/About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Footer from '../shared/Footer';

import { professionalData } from '../../data/professional';

export default function ProfessionalContent({ onContactClick }) {
    const { hero, about, experience, skills, projects, navItems } = professionalData;

    return (
        <>
            <Header navItems={navItems} onContactClick={onContactClick} />
            <Hero
                title={hero.title}
                subtitle={hero.subtitle}
                ctaText={hero.ctaText}
                ctaLink={hero.ctaLink}
                onCtaClick={onContactClick}
            />
            <About
                title={about.title}
                description={about.description}
            />
            <Experience jobs={experience} />
            <Skills categories={skills} />
            <Projects projects={projects} />
            <Footer />
        </>
    );
}
