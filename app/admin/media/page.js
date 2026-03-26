'use client';

import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import PlaceholderSection from '../../../src/admin/components/PlaceholderSection';

export default function MediaPage() {
  const { t } = useTranslation();

  return (
    <PageContainer title={t('admin.media.title')} subtitle={t('admin.media.subtitle')}>
      <MockDataBanner message={t('admin.media.mockBanner')} />
      <PlaceholderSection
        title="Media Library"
        description="Upload and manage images for your services, specials, and marketing content."
        features={[
          'Upload and organize service photos',
          'Image gallery with drag-and-drop reordering',
          'Assign images to services and specials',
          'Image optimization and resizing',
          'Alt text and metadata management',
          'Bulk upload and delete operations',
        ]}
      />
    </PageContainer>
  );
}
