import React from 'react';
import SplitLayout from '../components/SplitLayout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Professional() {
    return (
        <SplitLayout mode="professional">
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
        </SplitLayout>
    );
}
