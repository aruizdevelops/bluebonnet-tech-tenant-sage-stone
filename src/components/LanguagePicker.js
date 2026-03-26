'use client';

import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useLanguage } from '../i18n/LanguageContext';

export default function LanguagePicker({ size = 'small', sx = {} }) {
  const { language, setLanguage } = useLanguage();

  return (
    <ToggleButtonGroup
      value={language}
      exclusive
      onChange={(_, val) => { if (val) setLanguage(val); }}
      size={size}
      sx={{
        '& .MuiToggleButton-root': {
          px: 1.5,
          py: 0.25,
          fontSize: '0.75rem',
          fontWeight: 600,
          lineHeight: 1.5,
          textTransform: 'none',
          border: '1px solid',
          borderColor: 'divider',
          '&.Mui-selected': {
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          },
        },
        ...sx,
      }}
    >
      <ToggleButton value="en">EN</ToggleButton>
      <ToggleButton value="es">ES</ToggleButton>
    </ToggleButtonGroup>
  );
}
