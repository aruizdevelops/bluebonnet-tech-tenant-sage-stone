'use client';

import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import PlaceholderSection from '../../../src/admin/components/PlaceholderSection';

export default function SettingsPage() {
  const { t } = useTranslation();

  return (
    <PageContainer title={t('admin.settings.title')} subtitle={t('admin.settings.subtitle')}>
      <MockDataBanner />
      <PlaceholderSection
        title={t('admin.settings.sectionTitle')}
        description={t('admin.settings.sectionDescription')}
        features={[
          t('admin.settings.feature1'),
          t('admin.settings.feature2'),
          t('admin.settings.feature3'),
          t('admin.settings.feature4'),
          t('admin.settings.feature5'),
          t('admin.settings.feature6'),
        ]}
      />
    </PageContainer>
  );
}
