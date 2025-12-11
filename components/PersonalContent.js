import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Footer from './Footer';

export default function PersonalContent() {
    return (
        <>
            <Header />
            <Hero
                title="Hi, I'm Sam."
                subtitle="I'm a space enthusiast, lifelong learner, and software engineer. Welcome to my digital garden."
                ctaText="Read My Blog"
                ctaLink="#"
            />
            <About
                title="About Me"
                description="When I'm not leading engineering teams, you can find me hiking in the PNW, reading sci-fi, or tinkering with new technologies like Next.js. I believe in continuous learning and staying curious."
            />
            <Footer />
        </>
    );
}
