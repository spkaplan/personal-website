import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';

export default function ProfessionalContent() {
    return (
        <>
            <Header />
            <Hero
                title="Engineering Director & Technical Leader"
                subtitle="Building high-performance teams and scalable infrastructure. Specializing in Operational Excellence, Distributed Systems, and Servant Leadership."
                ctaText="Contact Me"
                ctaLink="mailto:sam@example.com"
            />
            <About
                title="Professional Profile"
                description="I am an Engineering Director with over 8 years of experience building critical infrastructure at scale (Salesforce, Expedia). I believe in Servant Leadership and Extreme Ownership—empowering teams to deliver fault-tolerant, high-throughput systems while fostering a culture of psychological safety and continuous improvement."
            />
            <Experience />
            <Projects />
            <Footer />
        </>
    );
}
