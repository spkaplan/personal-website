import React from 'react';
import Header from '../shared/Header';
import Hero from '../shared/Hero';
import About from '../shared/About';
import Blog from './Blog';
import Hobbies from './Hobbies';
import Footer from '../shared/Footer';

import { personalData } from '../../data/personal';

export default function PersonalContent({ onContactClick }) {
    const { hero, about, blog, hobbies, navItems } = personalData;

    return (
        <>
            <Header navItems={navItems} onContactClick={onContactClick} />
            <Hero
                title={hero.title}
                subtitle={hero.subtitle}
                ctaText={hero.ctaText}
                ctaLink={hero.ctaLink}
            />
            <About
                title={about.title}
                description={about.description}
            />
            <Blog title={blog.title} description={blog.description} />
            <Hobbies title={hobbies.title} description={hobbies.description} />
            <Footer />
        </>
    );
}
