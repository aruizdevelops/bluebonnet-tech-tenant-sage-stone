'use client';

import { Alert, AlertTitle } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useTranslation } from '../../i18n/useTranslation';

export default function MockDataBanner({ message }) {
  const { t } = useTranslation();
  return (
    <Alert
      severity="info"
      icon={<InfoOutlinedIcon />}
      sx={{
        mb: 3,
        bgcolor: 'rgba(124, 154, 110, 0.08)',
        color: 'text.primary',
        border: '1px solid',
        borderColor: 'rgba(124, 154, 110, 0.25)',
        '& .MuiAlert-icon': { color: 'primary.main' },
      }}
    >
      <AlertTitle sx={{ fontWeight: 600 }}>{t('admin.mockData.title')}</AlertTitle>
      {message || t('admin.mockData.defaultMessage')}
    </Alert>
  );
}
