'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Stack,
} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from '../../i18n/useTranslation';
import { getSpecials } from '../../constants/content';
import { ANALYTICS_EVENTS } from '../../constants/analytics';

export default function SpecialsPreview() {
  const { t } = useTranslation();
  const content = getSpecials(t);

  const handleSpecialClick = (specialName) => {
    // [Analytics] Track special view
    console.log('[Analytics]', ANALYTICS_EVENTS.SPECIAL_VIEW, { special: specialName });
  };

  // First item is the "hero" new client special
  const heroSpecial = content.items[0];
  const otherSpecials = content.items.slice(1);

  return (
    <Box
      component="section"
      id="specials"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        <Stack alignItems="center" textAlign="center" spacing={2} sx={{ mb: 8 }}>
          <Typography
            variant="overline"
            component="p"
            sx={{ color: 'secondary.dark', letterSpacing: '0.15em' }}
          >
            {content.overline}
          </Typography>
          <Typography variant="h2" component="h2">
            {content.headline}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600 }}
          >
            {content.subtitle}
          </Typography>
        </Stack>

        {/* New Client Hero Special */}
        {heroSpecial && (
          <Card
            sx={{
              mb: 4,
              p: 1,
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.primary.main}0D 0%, ${theme.palette.secondary.light}20 100%)`,
              border: '1px solid',
              borderColor: 'primary.main',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 32px rgba(124, 154, 110, 0.12)',
              },
            }}
            onClick={() => handleSpecialClick(heroSpecial.name)}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems={{ md: 'center' }}
                justifyContent="space-between"
                spacing={2}
              >
                <Box>
                  <Chip
                    icon={<LocalOfferIcon />}
                    label={heroSpecial.badge}
                    color="primary"
                    size="small"
                    sx={{ mb: 1.5 }}
                  />
                  <Typography variant="h4" component="h3" gutterBottom>
                    {heroSpecial.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {heroSpecial.description}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="#book"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ flexShrink: 0 }}
                >
                  {t('specials.claimOffer')}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        )}

        {/* Other Specials */}
        <Grid container spacing={3}>
          {otherSpecials.map((special) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={special.name}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 28px rgba(45, 41, 38, 0.08)',
                  },
                }}
                onClick={() => handleSpecialClick(special.name)}
              >
                <CardContent sx={{ p: 3 }}>
                  <Chip
                    label={special.badge}
                    size="small"
                    sx={{
                      mb: 2,
                      bgcolor: 'secondary.light',
                      color: 'secondary.dark',
                      fontWeight: 600,
                    }}
                  />
                  <Typography variant="h6" component="h4" gutterBottom>
                    {special.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {special.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            color="secondary"
            href="#specials-all"
            endIcon={<ArrowForwardIcon />}
          >
            {t('specials.viewAll')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
