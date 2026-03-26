'use client';

import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import PlaceholderSection from '../../../src/admin/components/PlaceholderSection';

export default function StaffPage() {
  const { t } = useTranslation();

  return (
    <PageContainer title={t('admin.nav.staff')} subtitle={t('admin.staff.subtitle')}>
      <MockDataBanner />
      <PlaceholderSection
        title={t('admin.staff.sectionTitle')}
        description={t('admin.staff.sectionDescription')}
        features={[
          t('admin.staff.feature1'),
          t('admin.staff.feature2'),
          t('admin.staff.feature3'),
          t('admin.staff.feature4'),
          t('admin.staff.feature5'),
          t('admin.staff.feature6'),
        ]}
      />
    </PageContainer>
  );
}
