import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { Hero } from './components/hero/Hero';
import { TechMarquee } from './components/hero/TechMarquee';
import { SystemStatusBar } from './components/hero/SystemStatusBar';
import { BigStatement } from './components/sections/BigStatement';
import { ServiceArsenal } from './components/sections/ServiceArsenal';
import { QuoteEngine } from './components/sections/QuoteEngine';
import { BudgetEngine } from './components/sections/BudgetEngine';
import { EngineeringPrinciples } from './components/sections/EngineeringPrinciples';
import { DeviceShowcase } from './components/sections/DeviceShowcase';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
import { SocialProof } from './components/sections/SocialProof';
import { BlogSection } from './components/sections/BlogSection';
import { FAQAccordion } from './components/sections/FAQAccordion';
import { ProjectIntake } from './components/sections/ProjectIntake';
import { ClientTestimonials } from './components/sections/ClientTestimonials';
import { AuditModal } from './components/modals/AuditModal';
import { BlueprintModal } from './components/modals/BlueprintModal';
import { PortfolioItem } from './types';

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [selectedBlueprint, setSelectedBlueprint] = useState<PortfolioItem | null>(null);
  const [intakeService, setIntakeService] = useState('eCommerce Store (From R1,999)');
  const [intakeNotes, setIntakeNotes] = useState('');

  const handleStartProject = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setIntakeService(serviceName);
    setIntakeNotes(`Selected service from Digital Arsenal: ${serviceName}`);
    handleStartProject();
  };

  const handleExactQuote = (estimateSummary: string) => {
    setIntakeNotes(`Configured in Calculator: ${estimateSummary}`);
    handleStartProject();
  };

  const handleBudgetBuild = (budgetStr: string, recommendation: string) => {
    setIntakeNotes(`Configured from Budget Allocation Matrix: Target Budget ${budgetStr} for ${recommendation}`);
    handleStartProject();
  };

  const handleRequestSimilar = (title: string) => {
    setIntakeNotes(`Interested in building a high-performance system similar to: ${title}`);
    handleStartProject();
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-[#050507] text-gray-100 font-sans selection:bg-[#00E5FF] selection:text-black">
          {/* Sticky Cyberpunk Header Navigation */}
          <Header
            onOpenAudit={() => setAuditModalOpen(true)}
            onOpenQuoteWizard={handleStartProject}
          />

          <main>
            {/* Hero Section */}
            <Hero
              onStartProject={handleStartProject}
              onOpenAudit={() => setAuditModalOpen(true)}
            />

            {/* Horizontal Infinite-Scroll Tech Stack Animation */}
            <TechMarquee />

            {/* Cyber Status Strip */}
            <SystemStatusBar />

            {/* 01 / Big Statement & The Problem */}
            <BigStatement />

            {/* 02 / Digital Arsenal (6 Core Services) */}
            <ServiceArsenal onSelectService={handleSelectService} />

            {/* 03 / Interactive Project Quote Engine */}
            <QuoteEngine onOpenExactQuote={handleExactQuote} />

            {/* Budget Allocation Matrix */}
            <BudgetEngine onSelectBudgetBuild={handleBudgetBuild} />

            {/* 04 / Engineering Principles */}
            <EngineeringPrinciples />

            {/* Responsive Device Stage */}
            <DeviceShowcase />

            {/* 05 / Selected Deployments Portfolio */}
            <PortfolioSection onSelectProject={(p) => setSelectedBlueprint(p)} />

            {/* 06 / Case Studies (Deep Dives into Digital Revenue) */}
            <CaseStudiesSection onRequestSimilar={handleRequestSimilar} />

            {/* 07 / Social Proof & South African Ecosystem */}
            <SocialProof />

            {/* 08 / Tactical Intelligence & Playbooks */}
            <BlogSection />

            {/* 09 / Frequently Asked Questions Accordion */}
            <FAQAccordion />

            {/* 10 / System Initialization & Project Intake Form */}
            <ProjectIntake
              initialService={intakeService}
              initialNotes={intakeNotes}
            />

            {/* 11 / Real-World Client Testimonials & Partner Telemetry */}
            <ClientTestimonials
              onStartProject={handleStartProject}
              onOpenAudit={() => setAuditModalOpen(true)}
            />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating WhatsApp Quick Comms */}
          <WhatsAppButton />

          {/* Diagnostic Free Website Audit Modal */}
          <AuditModal
            isOpen={auditModalOpen}
            onClose={() => setAuditModalOpen(false)}
          />

          {/* Technical Architecture Blueprint Modal */}
          <BlueprintModal
            project={selectedBlueprint}
            onClose={() => setSelectedBlueprint(null)}
            onRequestBuild={(title) => {
              setSelectedBlueprint(null);
              handleRequestSimilar(title);
            }}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
