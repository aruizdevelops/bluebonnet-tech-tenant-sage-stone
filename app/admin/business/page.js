'use client';

import { Box, Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import { useAdminData } from '../../../src/admin/hooks/useAdminData';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import PlaceholderSection from '../../../src/admin/components/PlaceholderSection';

export default function BusinessPage() {
  const { t } = useTranslation();
  const { businessInfo } = useAdminData();

  return (
    <PageContainer title={t('admin.business.title')} subtitle={t('admin.business.subtitle')}>
      <MockDataBanner message={t('admin.business.mockBanner')} />

      {businessInfo && (
        <Card sx={{ mb: 4 }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              {t('admin.business.generalInfo')}
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box>
                    <Typography variant="caption" color="text.secondary">{t('admin.business.businessName')}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{businessInfo.name}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmailIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">{t('admin.business.email')}</Typography>
                      <Typography variant="body2">{businessInfo.email}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PhoneIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">{t('admin.business.phone')}</Typography>
                      <Typography variant="body2">{businessInfo.phone}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LanguageIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">{t('admin.business.website')}</Typography>
                      <Typography variant="body2">{businessInfo.website}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <LocationOnIcon sx={{ fontSize: 18, color: 'text.secondary', mt: 0.3 }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">{t('admin.business.address')}</Typography>
                      <Typography variant="body2">{businessInfo.address}</Typography>
                      <Typography variant="body2">{businessInfo.suite}</Typography>
                      <Typography variant="body2">{businessInfo.city}, {businessInfo.state} {businessInfo.zip}</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary">{t('admin.business.about')}</Typography>
                    <Typography variant="body2">{businessInfo.about}</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTimeIcon sx={{ fontSize: 20 }} />
                {t('admin.business.hoursOfOperation')}
              </Box>
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {businessInfo.hours && businessInfo.hours.map((h) => (
                <Box key={h.days} sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 400 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>{h.days}</Typography>
                  <Typography variant="body2" color="text.secondary">{h.open} - {h.close}</Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      )}

      <PlaceholderSection
        title={t('admin.business.editSectionTitle')}
        description={t('admin.business.editSectionDescription')}
        features={[
          t('admin.business.editFeature1'),
          t('admin.business.editFeature2'),
          t('admin.business.editFeature3'),
          t('admin.business.editFeature4'),
          t('admin.business.editFeature5'),
        ]}
      />
    </PageContainer>
  );
}
