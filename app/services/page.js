'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Tabs,
  Tab,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from 'next/link';
import { TenantProvider, CoreThemeProvider } from '@bluebonnet-tech/core';
import tenantConfig from '../../src/config/tenant';
import { LanguageProvider } from '../../src/i18n/LanguageContext';
import { useTranslation } from '../../src/i18n/useTranslation';
import { PageLayout, PageHero } from '../../src/components/shared';
import { getActiveServices, SERVICE_CATEGORIES } from '../../src/constants/services';
import { ANALYTICS_EVENTS } from '../../src/constants/analytics';

const DAY_SPA_CATEGORIES = ['massage', 'body-treatments', 'head-spa', 'packages'];
const MED_SPA_CATEGORIES = ['facials', 'injectables', 'skin-treatments'];

function ServicesPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const services = getActiveServices();

  useEffect(() => {
    // Analytics: page view
    // trackEvent(ANALYTICS_EVENTS.SERVICE_VIEW, { page: 'services_listing' });
  }, []);

  const filteredServices = (() => {
    if (activeTab === 0) return services;
    if (activeTab === 1) return services.filter((s) => DAY_SPA_CATEGORIES.includes(s.category));
    if (activeTab === 2) return services.filter((s) => MED_SPA_CATEGORIES.includes(s.category));

    const categoryId = SERVICE_CATEGORIES[activeTab - 3]?.id;
    if (categoryId) return services.filter((s) => s.category === categoryId);
    return services;
  })();

  const getCategoryLabel = (categoryId) => {
    const keyMap = {
      'massage': 'services.categories.massage',
      'body-treatments': 'services.categories.bodyTreatments',
      'facials': 'services.categories.facials',
      'injectables': 'services.categories.injectables',
      'skin-treatments': 'services.categories.skinTreatments',
      'head-spa': 'services.categories.headSpa',
      'packages': 'services.categories.packages',
    };
    return t(keyMap[categoryId] || categoryId);
  };

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <PageLayout>
      <PageHero
        title={t('pages.services.title')}
        subtitle={t('pages.services.subtitle')}
        breadcrumbKey="breadcrumb.services"
      />

      <Container sx={{ py: { xs: 4, md: 6 } }}>
        <Box sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.9375rem',
              },
            }}
          >
            <Tab label={t('pages.services.allCategories')} />
            <Tab label={t('pages.services.daySpa')} />
            <Tab label={t('pages.services.medSpa')} />
            {SERVICE_CATEGORIES.map((cat) => (
              <Tab key={cat.id} label={getCategoryLabel(cat.id)} />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={3}>
          {filteredServices.map((service) => (
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
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <Chip
                      label={getCategoryLabel(service.category)}
                      size="small"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        fontWeight: 500,
                        fontSize: '0.75rem',
                      }}
                    />
                    {service.consultationRequired && (
                      <Chip
                        label={t('pages.services.consultationRequired')}
                        size="small"
                        variant="outlined"
                        color="warning"
                        sx={{ fontWeight: 500, fontSize: '0.7rem' }}
                      />
                    )}
                  </Box>

                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {t(service.nameKey)}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.6 }}
                  >
                    {t(service.descriptionKey)}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTimeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary">
                        {t(service.durationKey)}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, color: 'secondary.dark' }}
                    >
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
                    component={Link}
                    href={service.consultationRequired ? '/contact' : '/book'}
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
      </Container>
    </PageLayout>
  );
}

export default function ServicesPageWrapper() {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
        <LanguageProvider>
          <ServicesPage />
        </LanguageProvider>
      </CoreThemeProvider>
    </TenantProvider>
  );
}
