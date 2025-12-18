import React from 'react';
import Hero from '../shared/Hero';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import { professionalData } from '../../data/professional';

export default function ProfessionalContent({ onContactClick }) {
    const { hero, experience, skills, projects } = professionalData;

    return (
        <>
            <Hero
                title={hero.title}
                subtitle={hero.subtitle}
            />
            <Experience jobs={experience} />
            <Skills categories={skills} />
            <Projects projects={projects} />
        </>
    );
}
