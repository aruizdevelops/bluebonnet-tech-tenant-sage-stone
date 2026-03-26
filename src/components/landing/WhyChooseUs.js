'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import TuneIcon from '@mui/icons-material/Tune';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useTranslation } from '../../i18n/useTranslation';
import { getBenefits } from '../../constants/content';

const ICON_MAP = {
  Verified: VerifiedIcon,
  Tune: TuneIcon,
  AutoAwesome: AutoAwesomeIcon,
  TrendingUp: TrendingUpIcon,
};

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const content = getBenefits(t);

  return (
    <Box component="section" id="benefits" sx={{ py: { xs: 10, md: 14 } }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            component="p"
            sx={{ color: 'primary.main', mb: 2, letterSpacing: '0.15em' }}
          >
            {content.overline}
          </Typography>
          <Typography variant="h2" component="h2">
            {content.headline}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {content.items.map((benefit) => {
            const IconComponent = ICON_MAP[benefit.icon];
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={benefit.title}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 1,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(45, 41, 38, 0.10)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: (theme) =>
                          `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.secondary.light}20 100%)`,
                        mx: 'auto',
                        mb: 2.5,
                      }}
                    >
                      {IconComponent && (
                        <IconComponent
                          sx={{ color: 'primary.main', fontSize: 30 }}
                        />
                      )}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
