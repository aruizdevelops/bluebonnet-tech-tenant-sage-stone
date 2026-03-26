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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from '../../i18n/useTranslation';
import { MEMBERSHIP_TIERS } from '../../constants/memberships';
import { ANALYTICS_EVENTS } from '../../constants/analytics';

export default function MembershipPreview() {
  const { t } = useTranslation();

  const handleMembershipClick = (tierId) => {
    // [Analytics] Track membership interest
    console.log('[Analytics]', ANALYTICS_EVENTS.MEMBERSHIP_INTEREST, { tier: tierId });
  };

  return (
    <Box
      component="section"
      id="memberships"
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
            sx={{ color: 'primary.main', letterSpacing: '0.15em' }}
          >
            {t('memberships.overline')}
          </Typography>
          <Typography variant="h2" component="h2">
            {t('memberships.headline')}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600 }}
          >
            {t('memberships.subtitle')}
          </Typography>
        </Stack>

        <Grid container spacing={4} alignItems="stretch">
          {MEMBERSHIP_TIERS.map((tier) => (
            <Grid size={{ xs: 12, md: 4 }} key={tier.id}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  p: 1,
                  ...(tier.popular && {
                    border: '2px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 8px 40px rgba(124, 154, 110, 0.15)',
                  }),
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: tier.popular
                      ? '0 12px 48px rgba(124, 154, 110, 0.20)'
                      : '0 12px 40px rgba(45, 41, 38, 0.10)',
                  },
                }}
              >
                {tier.popular && (
                  <Chip
                    icon={<StarIcon />}
                    label={t('memberships.mostPopular')}
                    color="primary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontWeight: 600,
                    }}
                  />
                )}
                <CardContent sx={{ p: 3, pt: tier.popular ? 4 : 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {t(tier.nameKey)}
                  </Typography>
                  <Typography
                    variant="h3"
                    component="p"
                    sx={{ mb: 1, color: 'primary.dark' }}
                  >
                    {t(tier.priceKey)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    {t(tier.descriptionKey)}
                  </Typography>

                  <List disablePadding sx={{ mb: 3 }}>
                    {tier.featuresKeys.map((featureKey) => (
                      <ListItem key={featureKey} disablePadding sx={{ mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckIcon sx={{ color: 'primary.main', fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={t(featureKey)}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: 'text.secondary',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    variant={tier.popular ? 'contained' : 'outlined'}
                    color="primary"
                    fullWidth
                    href="#book"
                    onClick={() => handleMembershipClick(tier.id)}
                  >
                    {t('memberships.learnMore')}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="text"
            color="primary"
            href="#memberships-detail"
            endIcon={<ArrowForwardIcon />}
          >
            {t('memberships.compareAll')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
