'use client';

import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import PlaceholderSection from '../../../src/admin/components/PlaceholderSection';

export default function PromotionsPage() {
  const { t } = useTranslation();

  return (
    <PageContainer title={t('admin.promotions.title')} subtitle={t('admin.promotions.subtitle')}>
      <MockDataBanner />
      <PlaceholderSection
        title={t('admin.promotions.sectionTitle')}
        description={t('admin.promotions.sectionDescription')}
        features={[
          t('admin.promotions.feature1'),
          t('admin.promotions.feature2'),
          t('admin.promotions.feature3'),
          t('admin.promotions.feature4'),
          t('admin.promotions.feature5'),
        ]}
      />
    </PageContainer>
  );
}
