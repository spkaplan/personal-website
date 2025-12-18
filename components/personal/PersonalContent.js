import React from 'react';
import Hero from '../shared/Hero';
import Workshop from './Workshop';
import Bookshelf from './Bookshelf';
import Adventures from './Adventures';
import Homestead from './Homestead';
import Footer from '../shared/Footer';
import { personalData } from '../../data/personal';

export default function PersonalContent({ onContactClick }) {
    const { hero, workshop, bookshelf, adventures, homestead } = personalData;

    return (
        <>
            <Hero
                title={hero.title}
                subtitle={hero.subtitle}
            />
            <Workshop title={workshop.title} description={workshop.description} />
            <Bookshelf title={bookshelf.title} description={bookshelf.description} />
            <Adventures title={adventures.title} description={adventures.description} />
            <Homestead title={homestead.title} description={homestead.description} />
            <Footer />
        </>
    );
}
