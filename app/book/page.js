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
  Paper,
  Chip,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from 'next/link';
import { TenantProvider, CoreThemeProvider } from '@bluebonnet-tech/core';
import tenantConfig from '../../src/config/tenant';
import { LanguageProvider } from '../../src/i18n/LanguageContext';
import { useTranslation } from '../../src/i18n/useTranslation';
import { PageLayout, PageHero } from '../../src/components/shared';
import { getFeaturedServices, getActiveServices, SERVICE_CATEGORIES } from '../../src/constants/services';
import { ANALYTICS_EVENTS } from '../../src/constants/analytics';

const CONTACT_PHONE = '(512) 555-0189';
const CONTACT_TEXT = '(512) 555-0190';

function BookPage() {
  const { t } = useTranslation();
  const featuredServices = getFeaturedServices();

  useEffect(() => {
    // Analytics: booking_start
    // trackEvent(ANALYTICS_EVENTS.BOOKING_START, { page: 'book' });
  }, []);

  return (
    <PageLayout>
      <PageHero
        title={t('pages.book.title')}
        subtitle={t('pages.book.subtitle')}
        breadcrumbKey="breadcrumb.book"
      />

      <Container sx={{ py: { xs: 4, md: 6 } }}>
        {/* Booking Widget Placeholder */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            mb: 8,
            textAlign: 'center',
            borderRadius: 4,
            border: '2px dashed',
            borderColor: 'primary.light',
            background: 'linear-gradient(135deg, rgba(124, 154, 110, 0.04) 0%, rgba(184, 151, 126, 0.04) 100%)',
          }}
        >
          <EventIcon sx={{ fontSize: 56, color: 'primary.main', mb: 2, opacity: 0.8 }} />
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1.5 }}>
            {t('pages.book.widgetTitle')}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 500, mx: 'auto', lineHeight: 1.7 }}
          >
            {t('pages.book.widgetMessage')}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<PhoneIcon />}
              href="tel:+15125550189"
              onClick={() => {
                // Analytics: phone_click
                // trackEvent(ANALYTICS_EVENTS.PHONE_CLICK, { source: 'booking_widget' });
              }}
            >
              {t('pages.book.widgetCallCta')}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<SmsIcon />}
              href="sms:+15125550190"
              onClick={() => {
                // Analytics: text_click
                // trackEvent(ANALYTICS_EVENTS.TEXT_CLICK, { source: 'booking_widget' });
              }}
            >
              {t('pages.book.widgetTextCta')}
            </Button>
          </Box>
        </Paper>

        {/* Service Quick-Select */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
            {t('pages.book.quickSelect')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            {t('pages.book.quickSelectSubtitle')}
          </Typography>

          <Grid container spacing={3}>
            {featuredServices.map((service) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
                <Card
                  component={Link}
                  href={`/services/${service.slug}`}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': { transform: 'translateY(-4px)' },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    {service.consultationRequired && (
                      <Chip
                        label={t('pages.services.consultationRequired')}
                        size="small"
                        variant="outlined"
                        color="warning"
                        sx={{ fontWeight: 500, fontSize: '0.7rem', mb: 1.5 }}
                      />
                    )}
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {t(service.nameKey)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                      {t(service.descriptionKey)}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <AccessTimeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="caption" color="text.secondary">
                          {t(service.durationKey)}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'secondary.dark' }}>
                        {t(service.priceLabelKey)}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ px: 3, pb: 2.5, pt: 0 }}>
                    <Button
                      variant={service.consultationRequired ? 'outlined' : 'contained'}
                      color="primary"
                      size="small"
                      fullWidth
                      {...(service.consultationRequired
                        ? { component: Link, href: '/contact' }
                        : { href: 'tel:+15125550189' })}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {service.consultationRequired
                        ? t('pages.services.requestConsultation')
                        : t('pages.services.bookNow')}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="outlined" color="primary" component={Link} href="/services">
              {t('services.viewAll')}
            </Button>
          </Box>
        </Box>

        {/* Contact Alternatives */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(184, 151, 126, 0.08) 0%, rgba(212, 160, 160, 0.08) 100%)',
            border: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            {t('pages.book.contactAlternatives')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 550, mx: 'auto' }}>
            {t('pages.book.contactAlternativesSubtitle')}
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            <Grid size={{ xs: 12, sm: 5 }}>
              <Card sx={{ textAlign: 'center', p: 3 }}>
                <PhoneIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {t('pages.contact.phoneLabel')}
                </Typography>
                <Typography
                  variant="body1"
                  component="a"
                  href="tel:+15125550189"
                  sx={{
                    color: 'primary.dark',
                    fontWeight: 500,
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {CONTACT_PHONE}
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 5 }}>
              <Card sx={{ textAlign: 'center', p: 3 }}>
                <SmsIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {t('pages.contact.textLabel')}
                </Typography>
                <Typography
                  variant="body1"
                  component="a"
                  href="sms:+15125550190"
                  sx={{
                    color: 'primary.dark',
                    fontWeight: 500,
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {CONTACT_TEXT}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </PageLayout>
  );
}

export default function BookPageWrapper() {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
        <LanguageProvider>
          <BookPage />
        </LanguageProvider>
      </CoreThemeProvider>
    </TenantProvider>
  );
}
