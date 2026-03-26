'use client';

import { useEffect } from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from '../../i18n/useTranslation';
import { getHero } from '../../constants/content';
import { ANALYTICS_EVENTS } from '../../constants/analytics';

export default function Hero() {
  const { t } = useTranslation();
  const content = getHero(t);

  useEffect(() => {
    // [Analytics] Track hero page view
    console.log('[Analytics]', ANALYTICS_EVENTS.PAGE_VIEW, { section: 'hero' });
  }, []);

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        minHeight: { xs: '90vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: (theme) =>
          `linear-gradient(145deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 70%, ${theme.palette.secondary.dark} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.10) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(212,160,160,0.12) 0%, transparent 40%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: (theme) =>
            `linear-gradient(to top, ${theme.palette.background.default} 0%, transparent 100%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack alignItems="center" textAlign="center" spacing={3}>
          <Typography
            variant="overline"
            component="p"
            sx={{
              color: 'rgba(255,255,255,0.80)',
              letterSpacing: '0.18em',
              fontSize: '0.8rem',
            }}
          >
            {content.overline}
          </Typography>

          <Typography
            variant="h1"
            component="h1"
            sx={{ color: '#FFFFFF' }}
          >
            {content.headline}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.82)',
              maxWidth: 560,
              mx: 'auto',
              fontSize: '1.15rem',
            }}
          >
            {content.subtitle}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ pt: 2 }}
          >
            <Button
              variant="contained"
              size="large"
              href="#book"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F0EB 100%)',
                color: (theme) => theme.palette.primary.dark,
                fontWeight: 700,
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                '&:hover': {
                  background: '#FFFFFF',
                  boxShadow: '0 6px 28px rgba(0,0,0,0.20)',
                },
              }}
            >
              {content.primaryCta}
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#services"
              sx={{
                borderColor: 'rgba(255,255,255,0.5)',
                color: '#FFFFFF',
                '&:hover': {
                  borderColor: '#FFFFFF',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                },
              }}
            >
              {content.secondaryCta}
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 24, md: 40 },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'scrollBounce 2s ease-in-out infinite',
          '@keyframes scrollBounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(8px)' },
          },
        }}
      >
        <KeyboardArrowDownIcon
          sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 32 }}
        />
      </Box>
    </Box>
  );
}
