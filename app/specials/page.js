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
  Chip,
  TextField,
  Paper,
} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Link from 'next/link';
import { TenantProvider, CoreThemeProvider } from '@bluebonnet-tech/core';
import tenantConfig from '../../src/config/tenant';
import { LanguageProvider } from '../../src/i18n/LanguageContext';
import { useTranslation } from '../../src/i18n/useTranslation';
import { PageLayout, PageHero } from '../../src/components/shared';
import { ANALYTICS_EVENTS } from '../../src/constants/analytics';

function SpecialsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    // Analytics: special_view
    // trackEvent(ANALYTICS_EVENTS.SPECIAL_VIEW, { page: 'specials' });
  }, []);

  return (
    <PageLayout>
      <PageHero
        title={t('pages.specials.title')}
        subtitle={t('pages.specials.subtitle')}
        breadcrumbKey="breadcrumb.specials"
      />

      <Container sx={{ py: { xs: 4, md: 6 } }}>
        {/* New Client Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
            {t('pages.specials.newClientTitle')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            {t('pages.specials.newClientSubtitle')}
          </Typography>

          <Card
            sx={{
              background: 'linear-gradient(135deg, rgba(124, 154, 110, 0.08) 0%, rgba(184, 151, 126, 0.08) 100%)',
              border: '2px solid',
              borderColor: 'primary.light',
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Chip
                  label={t('specials.newGuest.badge')}
                  color="primary"
                  size="small"
                  sx={{ fontWeight: 600 }}
                />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5 }}>
                {t('specials.newGuest.title')}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                {t('specials.newGuest.description')}
              </Typography>
              <Button variant="contained" color="primary" component={Link} href="/book">
                {t('services.bookNow')}
              </Button>
            </CardContent>
          </Card>
        </Box>

        {/* Seasonal Specials */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
            {t('pages.specials.seasonalTitle')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            {t('pages.specials.seasonalSubtitle')}
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <LocalOfferIcon sx={{ color: 'secondary.main' }} />
                    <Chip
                      label={t('specials.spring.badge')}
                      size="small"
                      sx={{
                        bgcolor: 'secondary.main',
                        color: 'secondary.contrastText',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5 }}>
                    {t('specials.spring.title')}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                    {t('specials.spring.description')}
                  </Typography>
                  <Button variant="outlined" color="primary" component={Link} href="/book">
                    {t('services.bookNow')}
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <CardGiftcardIcon sx={{ color: 'primary.main' }} />
                    <Chip
                      label={t('specials.referral.badge')}
                      size="small"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5 }}>
                    {t('specials.referral.title')}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                    {t('specials.referral.description')}
                  </Typography>
                  <Button variant="outlined" color="primary" component={Link} href="/contact">
                    {t('services.learnMore')}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Promo Code Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            mb: 8,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            {t('pages.specials.promoCodeTitle')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {t('pages.specials.promoCodeSubtitle')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              justifyContent: 'center',
              maxWidth: 400,
              mx: 'auto',
            }}
          >
            <TextField
              size="small"
              placeholder={t('pages.specials.promoCodePlaceholder')}
              sx={{
                flexGrow: 1,
                '& .MuiOutlinedInput-root': { borderRadius: 28 },
              }}
            />
            <Button variant="contained" color="primary" sx={{ borderRadius: 28 }}>
              {t('pages.specials.applyCode')}
            </Button>
          </Box>
        </Paper>

        {/* Membership CTA */}
        <Box
          sx={{
            py: 6,
            px: 4,
            textAlign: 'center',
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(184, 151, 126, 0.1) 0%, rgba(212, 160, 160, 0.1) 100%)',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1.5 }}>
            {t('pages.specials.membershipCta')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 550, mx: 'auto' }}>
            {t('pages.specials.membershipCtaSubtitle')}
          </Typography>
          <Button variant="contained" color="secondary" size="large" component={Link} href="/memberships">
            {t('pages.specials.viewMemberships')}
          </Button>
        </Box>
      </Container>
    </PageLayout>
  );
}

export default function SpecialsPageWrapper() {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
        <LanguageProvider>
          <SpecialsPage />
        </LanguageProvider>
      </CoreThemeProvider>
    </TenantProvider>
  );
}
