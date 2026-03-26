'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Link,
  IconButton,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useTranslation } from '../../i18n/useTranslation';
import { getFooter } from '../../constants/content';
import LanguagePicker from '../LanguagePicker';

const SOCIAL_ICONS = [
  { label: 'Instagram', icon: InstagramIcon, href: '#' },
  { label: 'Facebook', icon: FacebookIcon, href: '#' },
];

export default function Footer() {
  const { t } = useTranslation();
  const content = getFooter(t);

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              component="p"
              sx={{
                fontWeight: 700,
                mb: 1.5,
                fontFamily: '"Playfair Display", Georgia, serif',
              }}
            >
              {content.brand}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: 280 }}
            >
              {content.tagline}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              {SOCIAL_ICONS.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <IconButton
                    key={social.label}
                    size="small"
                    aria-label={social.label}
                    component="a"
                    href={social.href}
                    sx={{
                      color: 'text.secondary',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    <SocialIcon fontSize="small" />
                  </IconButton>
                );
              })}
            </Stack>
            <LanguagePicker />
          </Grid>

          {content.columns.map((column) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={column.title}>
              <Typography
                variant="overline"
                component="p"
                sx={{
                  color: 'text.primary',
                  mb: 2,
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                }}
              >
                {column.title}
              </Typography>
              <Stack spacing={1.5}>
                {column.links.map((link) =>
                  link.href ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      underline="none"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                        transition: 'color 200ms',
                        '&:hover': { color: 'primary.main' },
                      }}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Typography
                      key={link.label}
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                      }}
                    >
                      {link.label}
                    </Typography>
                  ),
                )}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: 2,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            {content.copyright}
          </Typography>
          <Stack direction="row" spacing={3}>
            {content.legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                underline="none"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.75rem',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
