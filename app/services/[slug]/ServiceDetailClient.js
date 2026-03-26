'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
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
  Divider,
  Paper,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CategoryIcon from '@mui/icons-material/Category';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import { TenantProvider, CoreThemeProvider } from '@bluebonnet-tech/core';
import tenantConfig from '../../../src/config/tenant';
import { LanguageProvider } from '../../../src/i18n/LanguageContext';
import { useTranslation } from '../../../src/i18n/useTranslation';
import { PageLayout, PageHero } from '../../../src/components/shared';
import { getServiceBySlug, getServicesByCategory } from '../../../src/constants/services';
import { ANALYTICS_EVENTS } from '../../../src/constants/analytics';

const CATEGORY_LABEL_MAP = {
  'massage': 'services.categories.massage',
  'body-treatments': 'services.categories.bodyTreatments',
  'facials': 'services.categories.facials',
  'injectables': 'services.categories.injectables',
  'skin-treatments': 'services.categories.skinTreatments',
  'head-spa': 'services.categories.headSpa',
  'packages': 'services.categories.packages',
};

function ServiceDetailPage() {
  const { t } = useTranslation();
  const params = useParams();
  const service = getServiceBySlug(params.slug);

  useEffect(() => {
    if (service) {
      // Analytics: service_view with slug
      // trackEvent(ANALYTICS_EVENTS.SERVICE_VIEW, { service: service.slug });
    }
  }, [service]);

  if (!service) {
    return (
      <PageLayout>
        <PageHero
          title={t('pages.services.notFound')}
          breadcrumbKey="breadcrumb.services"
        />
        <Container sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
            {t('pages.services.notFoundMessage')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            href="/services"
            startIcon={<ArrowBackIcon />}
          >
            {t('pages.services.backToServices')}
          </Button>
        </Container>
      </PageLayout>
    );
  }

  const relatedServices = getServicesByCategory(service.category)
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  const getCategoryLabel = (categoryId) => {
    return t(CATEGORY_LABEL_MAP[categoryId] || categoryId);
  };

  return (
    <PageLayout>
      <PageHero
        title={t(service.nameKey)}
        subtitle={t(service.descriptionKey)}
        breadcrumbKey="breadcrumb.services"
      />

      <Container sx={{ py: { xs: 4, md: 6 } }}>
        <Box sx={{ mb: 2 }}>
          <Button
            component={Link}
            href="/services"
            startIcon={<ArrowBackIcon />}
            sx={{ color: 'text.secondary', textTransform: 'none', mb: 3 }}
          >
            {t('pages.services.backToServices')}
          </Button>
        </Box>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: 600, mb: 3 }}
            >
              {t(service.nameKey)}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, lineHeight: 1.8 }}
            >
              {t(service.fullDescriptionKey)}
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography
              variant="h5"
              component="h3"
              sx={{ fontWeight: 600, mb: 2 }}
            >
              {t('pages.services.whatToExpect')}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, lineHeight: 1.8 }}
            >
              {t('pages.services.whatToExpectDescription')}
            </Typography>

            {service.consultationRequired && (
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mb: 4,
                  bgcolor: 'warning.main',
                  color: 'warning.contrastText',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(212, 160, 84, 0.1) 0%, rgba(212, 160, 84, 0.05) 100%)',
                  border: '1px solid',
                  borderColor: 'warning.main',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'warning.dark', mb: 0.5 }}>
                  {t('pages.services.consultationRequired')}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {t('booking.note')}
                </Typography>
              </Paper>
            )}
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                position: { md: 'sticky' },
                top: { md: 100 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: 'secondary.dark',
                  mb: 2,
                }}
              >
                {t(service.priceLabelKey)}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <AccessTimeIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                <Box>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                    {t('pages.services.duration')}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {t(service.durationKey)}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <CategoryIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                <Box>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                    {t('pages.services.category')}
                  </Typography>
                  <Chip
                    label={getCategoryLabel(service.category)}
                    size="small"
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      fontWeight: 500,
                    }}
                  />
                </Box>
              </Box>

              <Button
                variant="contained"
                color={service.consultationRequired ? 'secondary' : 'primary'}
                fullWidth
                size="large"
                component={Link}
                href={service.consultationRequired ? '/contact' : '/book'}
                sx={{ mb: 1.5 }}
              >
                {service.consultationRequired
                  ? t('pages.services.requestConsultation')
                  : t('pages.services.bookNow')}
              </Button>

              {!service.consultationRequired && (
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  component={Link}
                  href="/contact"
                >
                  {t('pages.services.requestConsultation')}
                </Button>
              )}
            </Paper>
          </Grid>
        </Grid>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <Divider sx={{ mb: 4 }} />
            <Typography
              variant="h4"
              component="h3"
              sx={{ fontWeight: 600, mb: 4 }}
            >
              {t('pages.services.relatedServices')}
            </Typography>
            <Grid container spacing={3}>
              {relatedServices.map((related) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={related.id}>
                  <Card
                    component={Link}
                    href={`/services/${related.slug}`}
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
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {t(related.nameKey)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {t(related.descriptionKey)}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="caption" color="text.secondary">
                          {t(related.durationKey)}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'secondary.dark' }}>
                          {t(related.priceLabelKey)}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions sx={{ px: 3, pb: 2.5, pt: 0 }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        fullWidth
                        component={Link}
                        href={`/services/${related.slug}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t('services.learnMore')}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Booking CTA */}
        <Box
          sx={{
            mt: 8,
            py: 6,
            px: 4,
            textAlign: 'center',
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(124, 154, 110, 0.08) 0%, rgba(184, 151, 126, 0.08) 100%)',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1.5 }}>
            {t('pages.services.readyToBook')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 500, mx: 'auto' }}>
            {t('pages.services.readyToBookSubtitle')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" color="primary" size="large" component={Link} href="/book">
              {t('pages.services.bookNow')}
            </Button>
            <Button variant="outlined" color="primary" size="large" component={Link} href="/contact">
              {t('pages.services.requestConsultation')}
            </Button>
          </Box>
        </Box>
      </Container>
    </PageLayout>
  );
}

export default function ServiceDetailClient() {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
        <LanguageProvider>
          <ServiceDetailPage />
        </LanguageProvider>
      </CoreThemeProvider>
    </TenantProvider>
  );
}
