'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from '../../i18n/useTranslation';
import { getCta } from '../../constants/content';
import { ANALYTICS_EVENTS } from '../../constants/analytics';

export default function CtaBanner() {
  const { t } = useTranslation();
  const content = getCta(t);

  const handleCtaClick = () => {
    // [Analytics] Track booking start from CTA banner
    console.log('[Analytics]', ANALYTICS_EVENTS.BOOKING_START, { source: 'cta_banner' });
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack alignItems="center" textAlign="center" spacing={3}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ color: '#FFFFFF' }}
          >
            {content.headline}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,255,255,0.82)' }}
          >
            {content.subtitle}
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="#book"
            endIcon={<ArrowForwardIcon />}
            onClick={handleCtaClick}
            sx={{
              mt: 2,
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
            {content.buttonLabel}
          </Button>
          <Typography
            variant="caption"
            sx={{ color: 'rgba(255,255,255,0.60)' }}
          >
            {content.note}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
