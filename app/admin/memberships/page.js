'use client';

import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import PlaceholderSection from '../../../src/admin/components/PlaceholderSection';

export default function MembershipsPage() {
  const { t } = useTranslation();

  return (
    <PageContainer title={t('admin.nav.memberships')} subtitle={t('admin.memberships.subtitle')}>
      <MockDataBanner />
      <PlaceholderSection
        title={t('admin.memberships.sectionTitle')}
        description={t('admin.memberships.sectionDescription')}
        features={[
          t('admin.memberships.feature1'),
          t('admin.memberships.feature2'),
          t('admin.memberships.feature3'),
          t('admin.memberships.feature4'),
          t('admin.memberships.feature5'),
        ]}
      />
    </PageContainer>
  );
}
