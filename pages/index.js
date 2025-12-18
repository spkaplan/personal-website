import React, { useState } from 'react';
import SplitLayout from '../components/shared/SplitLayout';
import PersonalContent from '../components/personal/PersonalContent';
import ProfessionalContent from '../components/professional/ProfessionalContent';
import ContactModal from '../components/shared/ContactModal';
import Header from '../components/shared/Header';
import { personalData } from '../data/personal';
import { professionalData } from '../data/professional';

export default function Home() {
    const [mode, setMode] = useState('neutral');
    const [showContact, setShowContact] = useState(false);

    const handleModeChange = (newMode) => {
        setMode(newMode);
    };

    const handleContactClick = () => {
        setShowContact(true);
    };

    return (
        <>
            {/* Render Header globally if not in neutral mode */}
            {mode === 'personal' && (
                <Header navItems={personalData.navItems} onContactClick={handleContactClick} />
            )}
            {mode === 'professional' && (
                <Header navItems={professionalData.navItems} onContactClick={handleContactClick} />
            )}

            <SplitLayout
                mode={mode}
                onModeChange={handleModeChange}
                personalLanding={personalData.landing}
                professionalLanding={professionalData.landing}
                personalBg={personalData.landingImage}
                professionalBg={professionalData.landingImage}
            >
                {mode === 'personal' && <PersonalContent onContactClick={handleContactClick} />}
                {mode === 'professional' && <ProfessionalContent onContactClick={handleContactClick} />}
            </SplitLayout>

            <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
        </>
    );
}
