import React, { useState } from 'react';
import SplitLayout from '../components/SplitLayout';
import PersonalContent from '../components/PersonalContent';
import ProfessionalContent from '../components/ProfessionalContent';

export default function Home() {
    const [mode, setMode] = useState('neutral');

    return (
        <SplitLayout mode={mode} onModeChange={setMode}>
            {mode === 'personal' && <PersonalContent />}
            {mode === 'professional' && <ProfessionalContent />}
        </SplitLayout>
    );
}
