'use client';

import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import AnalyticsSummary from '../../../src/admin/components/AnalyticsSummary';
import PlaceholderSection from '../../../src/admin/components/PlaceholderSection';
import { getAnalytics } from '../../../src/admin/services/analyticsService';

export default function AnalyticsPage() {
  const { t } = useTranslation();
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getAnalytics().then((result) => {
      if (!cancelled && result.success) {
        setAnalytics(result.data);
      }
      if (!cancelled) setLoading(false);
    });
    return () => { cancelled = true; };
  }, []);

  return (
    <PageContainer title={t('admin.nav.analytics')} subtitle={t('admin.analytics.subtitle')}>
      <MockDataBanner message={t('admin.analytics.mockBanner')} />

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ mb: 4 }}>
          <AnalyticsSummary analytics={analytics} />
        </Box>
      )}

      <PlaceholderSection
        title={t('admin.analytics.sectionTitle')}
        description={t('admin.analytics.sectionDescription')}
        features={[
          t('admin.analytics.feature1'),
          t('admin.analytics.feature2'),
          t('admin.analytics.feature3'),
          t('admin.analytics.feature4'),
          t('admin.analytics.feature5'),
          t('admin.analytics.feature6'),
        ]}
      />
    </PageContainer>
  );
}
