'use client';

import { Box, Container, Typography, Grid, Stack, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from '../../i18n/useTranslation';
import { getProcess } from '../../constants/content';
import { ANALYTICS_EVENTS } from '../../constants/analytics';

export default function ProcessSteps() {
  const { t } = useTranslation();
  const content = getProcess(t);

  const handleCtaClick = () => {
    // [Analytics] Track consultation request from process section
    console.log('[Analytics]', ANALYTICS_EVENTS.CONSULTATION_REQUEST, { source: 'process_steps' });
  };

  return (
    <Box
      component="section"
      id="process"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            component="p"
            sx={{ color: 'primary.main', mb: 2, letterSpacing: '0.15em' }}
          >
            {content.overline}
          </Typography>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            {content.headline}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            {content.subtitle}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {content.steps.map((step, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={step.number}>
              <Stack spacing={2} sx={{ textAlign: 'center', position: 'relative' }}>
                {/* Connector line for desktop */}
                {index < content.steps.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      position: 'absolute',
                      top: 32,
                      left: '60%',
                      width: '80%',
                      height: 1,
                      background: (theme) =>
                        `linear-gradient(90deg, ${theme.palette.primary.main}40 0%, ${theme.palette.secondary.main}40 100%)`,
                    }}
                  />
                )}
                <Typography
                  variant="h2"
                  component="span"
                  sx={{
                    fontWeight: 800,
                    background: (theme) =>
                      `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: 0.85,
                  }}
                >
                  {step.number}
                </Typography>
                <Typography variant="h4" component="h3">
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="#book"
            endIcon={<ArrowForwardIcon />}
            onClick={handleCtaClick}
          >
            {t('process.cta')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
