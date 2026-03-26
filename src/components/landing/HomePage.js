'use client';

import { Box } from '@mui/material';
import { useTranslation } from '../../i18n/useTranslation';
import Navigation from './Navigation';
import Hero from './Hero';
import ServiceHighlights from './ServiceHighlights';
import AboutPreview from './AboutPreview';
import WhyChooseUs from './WhyChooseUs';
import ProcessSteps from './ProcessSteps';
import SpecialsPreview from './SpecialsPreview';
import TestimonialsSection from './TestimonialsSection';
import MembershipPreview from './MembershipPreview';
import FaqSection from './FaqSection';
import ContactInfo from './ContactInfo';
import CtaBanner from './CtaBanner';
import Footer from './Footer';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Skip to main content link */}
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          '&:focus': {
            position: 'fixed',
            top: 16,
            left: 16,
            width: 'auto',
            height: 'auto',
            zIndex: 9999,
            bgcolor: 'background.paper',
            color: 'text.primary',
            p: 2,
            borderRadius: 1,
            boxShadow: 4,
          },
        }}
      >
        {t('a11y.skipToContent')}
      </Box>

      <Navigation />

      <main id="main-content">
        <Hero />
        <ServiceHighlights />
        <AboutPreview />
        <WhyChooseUs />
        <ProcessSteps />
        <SpecialsPreview />
        <TestimonialsSection />
        <MembershipPreview />
        <FaqSection />
        <ContactInfo />
        <CtaBanner />
      </main>

      <Footer />
    </>
  );
}
