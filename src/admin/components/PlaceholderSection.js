'use client';

import { Box, Typography, Paper } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useTranslation } from '../../i18n/useTranslation';

export default function PlaceholderSection({ title, description, features }) {
  const { t } = useTranslation();
  return (
    <Paper
      sx={{
        p: { xs: 4, md: 6 },
        textAlign: 'center',
        border: '2px dashed',
        borderColor: 'divider',
        bgcolor: 'transparent',
      }}
    >
      <ConstructionIcon sx={{ fontSize: 56, color: 'text.secondary', mb: 2, opacity: 0.5 }} />
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 480, mx: 'auto' }}>
        {description || t('admin.placeholder.comingSoon')}
      </Typography>
      {features && features.length > 0 && (
        <Box sx={{ maxWidth: 360, mx: 'auto', textAlign: 'left' }}>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            {t('admin.placeholder.plannedFeatures')}
          </Typography>
          {features.map((feature) => (
            <Typography key={feature} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              &bull; {feature}
            </Typography>
          ))}
        </Box>
      )}
    </Paper>
  );
}
