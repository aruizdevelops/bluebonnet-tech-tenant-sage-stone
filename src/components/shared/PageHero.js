'use client';

import { Box, Container, Typography, Breadcrumbs, Link as MuiLink } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from 'next/link';
import { useTranslation } from '../../i18n/useTranslation';

export default function PageHero({ title, subtitle, breadcrumbKey }) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #5E7A52 0%, #7C9A6E 40%, #9BB68E 100%)',
        color: '#FFFFFF',
        py: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" sx={{ color: 'rgba(255,255,255,0.6)' }} />}
          sx={{ mb: 2 }}
        >
          <MuiLink
            component={Link}
            href="/"
            underline="hover"
            sx={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: '0.875rem',
              '&:hover': { color: '#FFFFFF' },
            }}
          >
            {t('breadcrumb.home')}
          </MuiLink>
          <Typography
            sx={{
              color: '#FFFFFF',
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
          >
            {breadcrumbKey ? t(breadcrumbKey) : title}
          </Typography>
        </Breadcrumbs>

        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: subtitle ? 2 : 0,
            maxWidth: 700,
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 600,
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
