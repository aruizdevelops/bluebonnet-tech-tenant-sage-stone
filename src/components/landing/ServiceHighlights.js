'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from '../../i18n/useTranslation';
import { getServiceCategories } from '../../constants/content';
import { getFeaturedServices } from '../../constants/services';
import { ANALYTICS_EVENTS } from '../../constants/analytics';

const CATEGORY_ICONS = {
  Spa: SpaIcon,
  AutoAwesome: AutoAwesomeIcon,
};

export default function ServiceHighlights() {
  const { t } = useTranslation();
  const content = getServiceCategories(t);
  const featuredServices = getFeaturedServices();

  const handleServiceClick = (serviceId) => {
    // [Analytics] Track service view
    console.log('[Analytics]', ANALYTICS_EVENTS.SERVICE_VIEW, { serviceId });
  };

  return (
    <Box
      component="section"
      id="services"
      sx={{ py: { xs: 10, md: 14 } }}
    >
      <Container>
        <Stack alignItems="center" textAlign="center" spacing={2} sx={{ mb: 8 }}>
          <Typography
            variant="overline"
            component="p"
            sx={{ color: 'primary.main', letterSpacing: '0.15em' }}
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

        {/* Category Cards */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {content.items.map((category) => {
            const IconComponent = CATEGORY_ICONS[category.icon];
            return (
              <Grid size={{ xs: 12, md: 6 }} key={category.title}>
                <Card
                  sx={{
                    height: '100%',
                    p: 1,
                    position: 'relative',
                    overflow: 'visible',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(45, 41, 38, 0.10)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: (theme) =>
                          `linear-gradient(135deg, ${theme.palette.primary.main}26 0%, ${theme.palette.primary.light}14 100%)`,
                        mb: 2.5,
                      }}
                    >
                      {IconComponent && (
                        <IconComponent sx={{ color: 'primary.main', fontSize: 28 }} />
                      )}
                    </Box>
                    <Typography variant="h4" component="h3" gutterBottom>
                      {category.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
                      {category.description}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {category.subcategories.map((sub) => (
                        <Chip
                          key={sub}
                          label={sub}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: 'primary.main',
                            color: 'primary.dark',
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Featured Services */}
        <Typography
          variant="h5"
          component="h3"
          sx={{ textAlign: 'center', mb: 4, color: 'text.primary' }}
        >
          {t('services.featuredTitle')}
        </Typography>

        <Grid container spacing={3}>
          {featuredServices.map((service) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={service.id}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 28px rgba(45, 41, 38, 0.08)',
                  },
                }}
                onClick={() => handleServiceClick(service.id)}
              >
                <CardContent sx={{ p: 2.5 }}>
                  <Typography variant="h6" component="h4" gutterBottom sx={{ fontSize: '1rem' }}>
                    {t(service.nameKey)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1.5, minHeight: 40 }}
                  >
                    {t(service.descriptionKey)}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: 'secondary.dark', fontWeight: 600 }}
                  >
                    {t(service.durationKey)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="#services-all"
            endIcon={<ArrowForwardIcon />}
          >
            {t('services.viewAll')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
