'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  Box,
  Skeleton,
  Typography,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  TenantProvider,
  CoreThemeProvider,
  TopBar,
  Sidebar,
  DRAWER_WIDTH,
} from '@bluebonnet-tech/core';
import tenantConfig from '../../config/tenant';
import { getAdminNavItems } from '../constants/navigation';
import { AdminDataProvider } from '../context/AdminDataContext';
import { checkAdminAuth } from '../services/authService';
import { LanguageProvider } from '../../i18n/LanguageContext';
import { useTranslation } from '../../i18n/useTranslation';
import LanguagePicker from '../../components/LanguagePicker';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

function AdminShellInner({ children }) {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authState, setAuthState] = useState({ checked: false, authenticated: false });
  const { t } = useTranslation();

  const handleMenuToggle = () => setMobileOpen((prev) => !prev);

  useEffect(() => {
    let cancelled = false;
    checkAdminAuth().then((result) => {
      if (!cancelled) {
        setAuthState({ checked: true, authenticated: result.authenticated });
      }
    });
    return () => { cancelled = true; };
  }, []);

  if (!authState.checked) {
    return (
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        <Box sx={{ width: DRAWER_WIDTH, flexShrink: 0, display: { xs: 'none', md: 'block' } }}>
          <Skeleton variant="rectangular" height="100vh" sx={{ bgcolor: 'rgba(0,0,0,0.04)' }} />
        </Box>
        <Box sx={{ flexGrow: 1, p: 4, pt: 12 }}>
          <Skeleton variant="rectangular" height={48} sx={{ mb: 3, borderRadius: 1 }} />
          <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 1 }} />
        </Box>
      </Box>
    );
  }

  if (!authState.authenticated) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Typography variant="h5" color="error">
          {t('admin.common.accessDenied')}
        </Typography>
      </Box>
    );
  }

  return (
    <AdminDataProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        <TopBar onMenuToggle={handleMenuToggle} actions={<LanguagePicker sx={{ mr: 1 }} />} />
        <Sidebar
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? mobileOpen : true}
          onClose={handleMenuToggle}
          navItems={getAdminNavItems(t)}
          activePath={`${basePath}${pathname}`}
          sx={{
            '& .MuiListItemText-primary': {
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            '& .MuiListItemButton-root.Mui-selected': {
              bgcolor: 'rgba(124, 154, 110, 0.12)',
              '&:hover': {
                bgcolor: 'rgba(124, 154, 110, 0.18)',
              },
            },
          }}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minWidth: 0,
            ml: { md: `${DRAWER_WIDTH}px` },
            width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </AdminDataProvider>
  );
}

export default function AdminShell({ children }) {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
        <LanguageProvider>
          <AdminShellInner>{children}</AdminShellInner>
        </LanguageProvider>
      </CoreThemeProvider>
    </TenantProvider>
  );
}
