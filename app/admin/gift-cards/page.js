'use client';

import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import PlaceholderSection from '../../../src/admin/components/PlaceholderSection';

export default function GiftCardsPage() {
  const { t } = useTranslation();

  return (
    <PageContainer title={t('admin.nav.giftCards')} subtitle={t('admin.giftCards.subtitle')}>
      <MockDataBanner />
      <PlaceholderSection
        title={t('admin.giftCards.sectionTitle')}
        description={t('admin.giftCards.sectionDescription')}
        features={[
          t('admin.giftCards.feature1'),
          t('admin.giftCards.feature2'),
          t('admin.giftCards.feature3'),
          t('admin.giftCards.feature4'),
          t('admin.giftCards.feature5'),
          t('admin.giftCards.feature6'),
        ]}
      />
    </PageContainer>
  );
}
