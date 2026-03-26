'use client';

import { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { TenantProvider, CoreThemeProvider } from '@bluebonnet-tech/core';
import tenantConfig from '../../src/config/tenant';
import { LanguageProvider } from '../../src/i18n/LanguageContext';
import { useTranslation } from '../../src/i18n/useTranslation';
import { PageLayout, PageHero } from '../../src/components/shared';
import { ANALYTICS_EVENTS } from '../../src/constants/analytics';

const FAQ_SECTIONS = [
  {
    titleKey: 'pages.faq.generalTitle',
    items: [
      { qKey: 'pages.faq.general1.question', aKey: 'pages.faq.general1.answer' },
      { qKey: 'pages.faq.general2.question', aKey: 'pages.faq.general2.answer' },
      { qKey: 'pages.faq.general3.question', aKey: 'pages.faq.general3.answer' },
    ],
  },
  {
    titleKey: 'pages.faq.treatmentsTitle',
    items: [
      { qKey: 'pages.faq.treatments1.question', aKey: 'pages.faq.treatments1.answer' },
      { qKey: 'pages.faq.treatments2.question', aKey: 'pages.faq.treatments2.answer' },
      { qKey: 'pages.faq.treatments3.question', aKey: 'pages.faq.treatments3.answer' },
    ],
  },
  {
    titleKey: 'pages.faq.bookingTitle',
    items: [
      { qKey: 'pages.faq.booking1.question', aKey: 'pages.faq.booking1.answer' },
      { qKey: 'pages.faq.booking2.question', aKey: 'pages.faq.booking2.answer' },
    ],
  },
  {
    titleKey: 'pages.faq.aftercareTitle',
    items: [
      { qKey: 'pages.faq.aftercare1.question', aKey: 'pages.faq.aftercare1.answer' },
      { qKey: 'pages.faq.aftercare2.question', aKey: 'pages.faq.aftercare2.answer' },
    ],
  },
];

function FaqPage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Analytics: page view
    // trackEvent(ANALYTICS_EVENTS.PAGE_VIEW, { page: 'faq' });
  }, []);

  const handleAccordionChange = (questionKey) => (_, isExpanded) => {
    if (isExpanded) {
      // Analytics: faq_expand
      // trackEvent(ANALYTICS_EVENTS.FAQ_EXPAND, { question: questionKey });
    }
  };

  return (
    <PageLayout>
      <PageHero
        title={t('pages.faq.title')}
        subtitle={t('pages.faq.subtitle')}
        breadcrumbKey="breadcrumb.faq"
      />

      <Container sx={{ py: { xs: 4, md: 6 }, maxWidth: 'md' }} maxWidth="md">
        {FAQ_SECTIONS.map((section) => (
          <Box key={section.titleKey} sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: 'primary.dark',
                borderBottom: '2px solid',
                borderColor: 'primary.light',
                pb: 1,
                display: 'inline-block',
              }}
            >
              {t(section.titleKey)}
            </Typography>

            {section.items.map((item) => (
              <Accordion
                key={item.qKey}
                elevation={0}
                onChange={handleAccordionChange(item.qKey)}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '12px !important',
                  mb: 2,
                  '&::before': { display: 'none' },
                  '&.Mui-expanded': { mb: 2 },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    '& .MuiAccordionSummary-content': { my: 2 },
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {t(item.qKey)}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {t(item.aKey)}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}

        {/* Still Have Questions CTA */}
        <Box
          sx={{
            py: 5,
            px: 4,
            textAlign: 'center',
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(124, 154, 110, 0.08) 0%, rgba(184, 151, 126, 0.08) 100%)',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            {t('pages.faq.stillHaveQuestions')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {t('pages.faq.stillHaveQuestionsSubtitle')}
          </Typography>
          <Button variant="contained" color="primary" size="large" component={Link} href="/contact">
            {t('pages.faq.contactUs')}
          </Button>
        </Box>
      </Container>
    </PageLayout>
  );
}

export default function FaqPageWrapper() {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
        <LanguageProvider>
          <FaqPage />
        </LanguageProvider>
      </CoreThemeProvider>
    </TenantProvider>
  );
}
