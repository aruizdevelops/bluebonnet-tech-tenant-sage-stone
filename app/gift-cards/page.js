'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Paper,
  TextField,
  Chip,
} from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonalizeIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import { TenantProvider, CoreThemeProvider } from '@bluebonnet-tech/core';
import tenantConfig from '../../src/config/tenant';
import { LanguageProvider } from '../../src/i18n/LanguageContext';
import { useTranslation } from '../../src/i18n/useTranslation';
import { PageLayout, PageHero } from '../../src/components/shared';
import { ANALYTICS_EVENTS } from '../../src/constants/analytics';

const DENOMINATIONS = [50, 100, 150, 250];

const STEPS = [
  { titleKey: 'pages.giftCards.step1.title', descKey: 'pages.giftCards.step1.description', Icon: ShoppingCartIcon },
  { titleKey: 'pages.giftCards.step2.title', descKey: 'pages.giftCards.step2.description', Icon: PersonalizeIcon },
  { titleKey: 'pages.giftCards.step3.title', descKey: 'pages.giftCards.step3.description', Icon: SendIcon },
];

function GiftCardsPage() {
  const { t } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');

  useEffect(() => {
    // Analytics: gift_card_interest
    // trackEvent(ANALYTICS_EVENTS.GIFT_CARD_INTEREST, { page: 'gift_cards' });
  }, []);

  const handleDenominationClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <PageLayout>
      <PageHero
        title={t('pages.giftCards.title')}
        subtitle={t('pages.giftCards.subtitle')}
        breadcrumbKey="breadcrumb.giftCards"
      />

      <Container sx={{ py: { xs: 4, md: 6 } }}>
        {/* Gift Card Presentation */}
        <Box
          sx={{
            mb: 8,
            py: { xs: 6, md: 8 },
            px: { xs: 3, md: 6 },
            textAlign: 'center',
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(184, 151, 126, 0.08) 0%, rgba(212, 160, 160, 0.08) 100%)',
            border: '1px solid',
            borderColor: 'divider',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <CardGiftcardIcon
            sx={{
              fontSize: 64,
              color: 'secondary.main',
              mb: 3,
              opacity: 0.9,
            }}
          />
          <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
            {t('pages.giftCards.presentationTitle')}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', mb: 3, lineHeight: 1.8 }}
          >
            {t('pages.giftCards.presentationSubtitle')}
          </Typography>

          {/* Elegant gift card mockup */}
          <Paper
            elevation={0}
            sx={{
              maxWidth: 420,
              mx: 'auto',
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #5E7A52 0%, #7C9A6E 40%, #9BB68E 100%)',
              color: '#FFFFFF',
              textAlign: 'left',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 120,
                height: 120,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.08)',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 700,
                mb: 4,
                letterSpacing: '-0.01em',
              }}
            >
              Sage & Stone Wellness
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 0.5 }}>
              {t('pages.giftCards.presentationTitle')}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              ${selectedAmount || customAmount || '100'}
            </Typography>
          </Paper>
        </Box>

        {/* Denomination Selection */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 600, mb: 4, textAlign: 'center' }}
          >
            {t('pages.giftCards.denominationsTitle')}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center',
              mb: 3,
            }}
          >
            {DENOMINATIONS.map((amount) => (
              <Chip
                key={amount}
                label={`$${amount}`}
                onClick={() => handleDenominationClick(amount)}
                sx={{
                  px: 3,
                  py: 3,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  borderRadius: 28,
                  bgcolor: selectedAmount === amount ? 'primary.main' : 'transparent',
                  color: selectedAmount === amount ? 'primary.contrastText' : 'text.primary',
                  border: '2px solid',
                  borderColor: selectedAmount === amount ? 'primary.main' : 'divider',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: selectedAmount === amount ? 'primary.dark' : 'rgba(124, 154, 110, 0.08)',
                  },
                }}
              />
            ))}
          </Box>

          <Box sx={{ maxWidth: 300, mx: 'auto', textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {t('pages.giftCards.customAmount')}
            </Typography>
            <TextField
              size="small"
              placeholder={t('pages.giftCards.customPlaceholder')}
              value={customAmount}
              onChange={handleCustomAmountChange}
              type="number"
              inputProps={{ min: 25 }}
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': { borderRadius: 28, textAlign: 'center' },
              }}
            />
          </Box>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => {
                // Analytics: gift_card_interest with amount
                // trackEvent(ANALYTICS_EVENTS.GIFT_CARD_INTEREST, { amount: selectedAmount || customAmount });
              }}
            >
              {t('pages.giftCards.purchaseCta')}
            </Button>
          </Box>
        </Box>

        {/* How It Works */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 600, mb: 5, textAlign: 'center' }}
          >
            {t('pages.giftCards.howItWorks')}
          </Typography>

          <Grid container spacing={4}>
            {STEPS.map((step, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={step.titleKey}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      position: 'relative',
                    }}
                  >
                    <step.Icon sx={{ fontSize: 32 }} />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -4,
                        right: -4,
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: 'secondary.main',
                        color: 'secondary.contrastText',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                      }}
                    >
                      {index + 1}
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {t(step.titleKey)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {t(step.descKey)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* No Expiration Note */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            textAlign: 'center',
            bgcolor: 'rgba(124, 154, 110, 0.06)',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 3,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 500, color: 'text.secondary' }}>
            {t('pages.giftCards.noExpiration')}
          </Typography>
        </Paper>
      </Container>
    </PageLayout>
  );
}

export default function GiftCardsPageWrapper() {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
        <LanguageProvider>
          <GiftCardsPage />
        </LanguageProvider>
      </CoreThemeProvider>
    </TenantProvider>
  );
}
