'use client';

import { useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';
import { TenantProvider, CoreThemeProvider } from '@bluebonnet-tech/core';
import tenantConfig from '../../src/config/tenant';
import { LanguageProvider } from '../../src/i18n/LanguageContext';
import { useTranslation } from '../../src/i18n/useTranslation';
import { PageLayout, PageHero } from '../../src/components/shared';
import { ANALYTICS_EVENTS } from '../../src/constants/analytics';

/**
 * Membership tier data using the en.json keys directly since
 * the memberships.js constants use different key patterns.
 */
const TIERS = [
  {
    id: 'essential',
    titleKey: 'memberships.essential.title',
    priceKey: 'memberships.essential.price',
    descriptionKey: 'memberships.essential.description',
    popular: false,
  },
  {
    id: 'elevated',
    titleKey: 'memberships.elevated.title',
    priceKey: 'memberships.elevated.price',
    descriptionKey: 'memberships.elevated.description',
    popular: true,
  },
  {
    id: 'luxe',
    titleKey: 'memberships.luxe.title',
    priceKey: 'memberships.luxe.price',
    descriptionKey: 'memberships.luxe.description',
    popular: false,
  },
];

const FAQ_ITEMS = [
  { qKey: 'pages.memberships.faq1.question', aKey: 'pages.memberships.faq1.answer' },
  { qKey: 'pages.memberships.faq2.question', aKey: 'pages.memberships.faq2.answer' },
  { qKey: 'pages.memberships.faq3.question', aKey: 'pages.memberships.faq3.answer' },
];

function MembershipsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Analytics: membership_interest
    // trackEvent(ANALYTICS_EVENTS.MEMBERSHIP_INTEREST, { page: 'memberships' });
  }, []);

  return (
    <PageLayout>
      <PageHero
        title={t('pages.memberships.title')}
        subtitle={t('pages.memberships.subtitle')}
        breadcrumbKey="breadcrumb.memberships"
      />

      <Container sx={{ py: { xs: 4, md: 6 } }}>
        {/* Tier Cards */}
        <Grid container spacing={4} alignItems="stretch" sx={{ mb: 8 }}>
          {TIERS.map((tier) => (
            <Grid size={{ xs: 12, md: 4 }} key={tier.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  border: tier.popular ? '2px solid' : '1px solid',
                  borderColor: tier.popular ? 'primary.main' : 'divider',
                  transform: tier.popular ? { md: 'scale(1.05)' } : 'none',
                  zIndex: tier.popular ? 1 : 0,
                  boxShadow: tier.popular
                    ? '0 12px 40px rgba(124, 154, 110, 0.2)'
                    : undefined,
                }}
              >
                {tier.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(135deg, #7C9A6E 0%, #9BB68E 100%)',
                      color: '#FFFFFF',
                      textAlign: 'center',
                      py: 0.75,
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      borderRadius: '14px 14px 0 0',
                    }}
                  >
                    <StarIcon sx={{ fontSize: 14, mr: 0.5, verticalAlign: 'text-bottom' }} />
                    {t('pages.memberships.popular')}
                  </Box>
                )}

                <CardContent
                  sx={{
                    flexGrow: 1,
                    p: { xs: 3, md: 4 },
                    pt: tier.popular ? { xs: 6, md: 7 } : { xs: 3, md: 4 },
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    {t(tier.titleKey)}
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.dark',
                      mb: 2,
                    }}
                  >
                    {t(tier.priceKey)}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.7, minHeight: 60 }}
                  >
                    {t(tier.descriptionKey)}
                  </Typography>
                </CardContent>

                <CardActions sx={{ px: { xs: 3, md: 4 }, pb: { xs: 3, md: 4 }, pt: 0 }}>
                  <Button
                    variant={tier.popular ? 'contained' : 'outlined'}
                    color="primary"
                    fullWidth
                    size="large"
                    component={Link}
                    href="/contact"
                    onClick={() => {
                      // Analytics: membership_interest with tier
                      // trackEvent(ANALYTICS_EVENTS.MEMBERSHIP_INTEREST, { tier: tier.id });
                    }}
                  >
                    {t('pages.memberships.joinNow')}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* FAQ Section */}
        <Box sx={{ mb: 8, maxWidth: 700, mx: 'auto' }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 600, mb: 4, textAlign: 'center' }}
          >
            {t('pages.memberships.faqTitle')}
          </Typography>
          {FAQ_ITEMS.map((item, index) => (
            <Accordion
              key={index}
              elevation={0}
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
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {t(item.aKey)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* CTA */}
        <Box
          sx={{
            py: 6,
            px: 4,
            textAlign: 'center',
            borderRadius: 4,
            background: 'linear-gradient(135deg, #7C9A6E 0%, #9BB68E 100%)',
            color: '#FFFFFF',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1.5 }}>
            {t('pages.memberships.ctaTitle')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.85)', maxWidth: 500, mx: 'auto' }}>
            {t('pages.memberships.ctaSubtitle')}
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/contact"
            sx={{
              bgcolor: '#FFFFFF',
              color: 'primary.dark',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
            }}
          >
            {t('pages.memberships.joinNow')}
          </Button>
        </Box>
      </Container>
    </PageLayout>
  );
}

export default function MembershipsPageWrapper() {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
        <LanguageProvider>
          <MembershipsPage />
        </LanguageProvider>
      </CoreThemeProvider>
    </TenantProvider>
  );
}
