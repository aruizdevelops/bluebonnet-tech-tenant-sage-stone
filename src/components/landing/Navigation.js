'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useTranslation } from '../../i18n/useTranslation';
import { NAV_ITEMS, NAV_CTA, NAV_BRAND } from '../../constants/navigation';
import LanguagePicker from '../LanguagePicker';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? 'rgba(250, 248, 245, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(45, 41, 38, 0.08)'
            : '1px solid transparent',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ height: 72 }}>
            <Typography
              variant="h6"
              component="a"
              href="#"
              sx={{
                fontWeight: 700,
                letterSpacing: '-0.01em',
                fontFamily: '"Playfair Display", Georgia, serif',
                color: scrolled ? 'text.primary' : '#FFFFFF',
                textDecoration: 'none',
                flexGrow: { xs: 1, md: 0 },
                mr: { md: 6 },
                transition: 'color 300ms',
              }}
            >
              {NAV_BRAND}
            </Typography>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 0.5,
                flexGrow: 1,
                justifyContent: 'center',
              }}
            >
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.labelKey}
                  href={item.href}
                  onClick={handleNavClick}
                  sx={{
                    color: scrolled ? 'text.secondary' : 'rgba(255,255,255,0.85)',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    px: 2,
                    transition: 'color 300ms',
                    '&:hover': {
                      color: scrolled ? 'text.primary' : '#FFFFFF',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {t(item.labelKey)}
                </Button>
              ))}
            </Box>

            <LanguagePicker
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1.5,
                '& .MuiToggleButton-root': {
                  color: scrolled ? 'text.secondary' : 'rgba(255,255,255,0.85)',
                  borderColor: scrolled ? 'divider' : 'rgba(255,255,255,0.3)',
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    '&:hover': { bgcolor: 'primary.dark' },
                  },
                },
              }}
            />

            <Button
              variant="contained"
              color="secondary"
              href={NAV_CTA.href}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              {t(NAV_CTA.labelKey)}
            </Button>

            <Button
              component="a"
              href={`${basePath}/admin`}
              startIcon={<AdminPanelSettingsIcon sx={{ fontSize: 18 }} />}
              sx={{
                display: { xs: 'none', md: 'flex' },
                ml: 1.5,
                color: scrolled ? 'text.secondary' : 'rgba(255,255,255,0.65)',
                fontWeight: 500,
                fontSize: '0.8rem',
                transition: 'color 300ms',
                '&:hover': {
                  color: scrolled ? 'text.primary' : '#FFFFFF',
                  backgroundColor: 'transparent',
                },
              }}
            >
              Admin Demo
            </Button>

            <IconButton
              aria-label={t('a11y.openNavMenu')}
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: 'none' },
                color: scrolled ? 'text.primary' : '#FFFFFF',
                transition: 'color 300ms',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 300,
            backgroundColor: 'background.paper',
            backgroundImage: 'none',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={handleDrawerToggle}
            aria-label={t('a11y.closeNavMenu')}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.labelKey} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={handleNavClick}
                sx={{ borderRadius: 2, mb: 0.5 }}
              >
                <ListItemText
                  primary={t(item.labelKey)}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              href={NAV_CTA.href}
              onClick={handleNavClick}
            >
              {t(NAV_CTA.labelKey)}
            </Button>
          </ListItem>
          <ListItem disablePadding sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            <LanguagePicker />
          </ListItem>
          <ListItem disablePadding sx={{ mt: 1 }}>
            <ListItemButton
              component="a"
              href={`${basePath}/admin`}
              onClick={handleNavClick}
              sx={{ borderRadius: 2, mb: 0.5 }}
            >
              <AdminPanelSettingsIcon sx={{ fontSize: 18, mr: 1.5, color: 'text.secondary' }} />
              <ListItemText
                primary="Admin Demo"
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  color: 'text.secondary',
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
