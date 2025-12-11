import React, { useState } from 'react';
import SplitLayout from '../components/SplitLayout';
import PersonalContent from '../components/PersonalContent';
import ProfessionalContent from '../components/ProfessionalContent';
import ContactModal from '../components/ContactModal';

export default function Home() {
    const [mode, setMode] = useState('neutral');
    const [showContact, setShowContact] = useState(false);

    return (
        <>
            <SplitLayout mode={mode} onModeChange={setMode}>
                {mode === 'personal' && <PersonalContent onContactClick={() => setShowContact(true)} />}
                {mode === 'professional' && <ProfessionalContent onContactClick={() => setShowContact(true)} />}
            </SplitLayout>
            <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
        </>
    );
}
