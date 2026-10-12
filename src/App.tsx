import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SizesSection } from './components/SizesSection';
import { ProcessSection } from './components/ProcessSection';
import { NationalCoverageSection } from './components/NationalCoverageSection';
import { WasteGuidelinesSection } from './components/WasteGuidelinesSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MobileStickyBar } from './components/MobileStickyBar';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [privacyModalTab, setPrivacyModalTab] = useState<'privacy' | 'terms'>('privacy');

  const handleOpenPrivacyModal = (tab: 'privacy' | 'terms') => {
    setPrivacyModalTab(tab);
    setPrivacyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0e1013] text-neutral-100 selection:bg-[#f97316] selection:text-white flex flex-col font-sans pb-16 sm:pb-0">
      
      {/* 1. Header with direct WhatsApp CTA */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section (Full-bleed desktop with integrated photo, mobile photo first ~260px, 3 benefits strip) */}
        <Hero />

        {/* 3. Sizes Section (6 visual cards 3m³-10m³, zero prices, direct WhatsApp cotação) */}
        <SizesSection />

        {/* 4. Operational Process in 3 Steps */}
        <ProcessSection />

        {/* 5. Nationwide Coverage Section with skip yard photo and partner network narrative */}
        <NationalCoverageSection />

        {/* 6. Waste Guidelines (Permitted vs Prohibited & Safety) */}
        <WasteGuidelinesSection />

        {/* 7. Institutional About & Real Registered Company Dossier */}
        <AboutSection />

        {/* 8. FAQ Accordion (Direct answers, zero prices) */}
        <FaqSection />
      </main>

      {/* 9. Footer with real credentials, navigation and privacy links */}
      <Footer onOpenPrivacyModal={handleOpenPrivacyModal} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Mobile-Only Sticky CTA Bar (<15% viewport height) */}
      <MobileStickyBar />

      {/* Legal Privacy & Terms Modal */}
      {privacyModalOpen && (
        <PrivacyTermsModal
          initialTab={privacyModalTab}
          onClose={() => setPrivacyModalOpen(false)}
        />
      )}
    </div>
  );
}
