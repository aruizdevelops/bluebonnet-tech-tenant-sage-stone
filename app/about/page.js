'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import { TenantProvider, CoreThemeProvider } from '@bluebonnet-tech/core';
import tenantConfig from '../../src/config/tenant';
import { LanguageProvider } from '../../src/i18n/LanguageContext';
import { useTranslation } from '../../src/i18n/useTranslation';
import { PageLayout, PageHero } from '../../src/components/shared';

const TEAM_MEMBERS = [
  { nameKey: 'pages.about.teamMember1.name', roleKey: 'pages.about.teamMember1.role', bioKey: 'pages.about.teamMember1.bio' },
  { nameKey: 'pages.about.teamMember2.name', roleKey: 'pages.about.teamMember2.role', bioKey: 'pages.about.teamMember2.bio' },
  { nameKey: 'pages.about.teamMember3.name', roleKey: 'pages.about.teamMember3.role', bioKey: 'pages.about.teamMember3.bio' },
];

const CREDENTIALS = [
  'pages.about.credential1',
  'pages.about.credential2',
  'pages.about.credential3',
  'pages.about.credential4',
  'pages.about.credential5',
];

const VALUES = [
  { titleKey: 'pages.about.value1.title', descKey: 'pages.about.value1.description' },
  { titleKey: 'pages.about.value2.title', descKey: 'pages.about.value2.description' },
  { titleKey: 'pages.about.value3.title', descKey: 'pages.about.value3.description' },
  { titleKey: 'pages.about.value4.title', descKey: 'pages.about.value4.description' },
];

function AboutPage() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageHero
        title={t('pages.about.title')}
        subtitle={t('pages.about.subtitle')}
        breadcrumbKey="breadcrumb.about"
      />

      <Container sx={{ py: { xs: 4, md: 6 } }}>
        {/* Philosophy Section */}
        <Box sx={{ mb: 8, maxWidth: 800 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 2, mb: 1, display: 'block' }}
          >
            {t('pages.about.philosophyOverline')}
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 600, mb: 3 }}
          >
            {t('pages.about.philosophyTitle')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            {t('pages.about.philosophy')}
          </Typography>
        </Box>

        {/* Approach Section */}
        <Box
          sx={{
            mb: 8,
            py: 6,
            px: { xs: 3, md: 6 },
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(124, 154, 110, 0.06) 0%, rgba(184, 151, 126, 0.06) 100%)',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: 'secondary.dark', fontWeight: 600, letterSpacing: 2, mb: 1, display: 'block' }}
          >
            {t('pages.about.approachOverline')}
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 600, mb: 3 }}
          >
            {t('pages.about.approachTitle')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, maxWidth: 800 }}>
            {t('pages.about.approach')}
          </Typography>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
              {t('pages.about.teamTitle')}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              {t('pages.about.teamSubtitle')}
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {TEAM_MEMBERS.map((member) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.nameKey}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 96,
                      height: 96,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: 'primary.light',
                      color: 'primary.contrastText',
                    }}
                  >
                    <PersonIcon sx={{ fontSize: 48 }} />
                  </Avatar>
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {t(member.nameKey)}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'primary.main', fontWeight: 500, mb: 2 }}
                    >
                      {t(member.roleKey)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {t(member.bioKey)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Credentials Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 600, mb: 2 }}
          >
            {t('pages.about.credentialsTitle')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, maxWidth: 800 }}>
            {t('pages.about.credentials')}
          </Typography>
          <List>
            {CREDENTIALS.map((credKey) => (
              <ListItem key={credKey} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CheckCircleOutlineIcon sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary={t(credKey)}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Values Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 600, mb: 4, textAlign: 'center' }}
          >
            {t('pages.about.valuesTitle')}
          </Typography>
          <Grid container spacing={3}>
            {VALUES.map((value) => (
              <Grid size={{ xs: 12, sm: 6 }} key={value.titleKey}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'primary.dark' }}>
                    {t(value.titleKey)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {t(value.descKey)}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            py: 6,
            px: 4,
            textAlign: 'center',
            borderRadius: 4,
            background: 'linear-gradient(135deg, #7C9A6E 0%, #9BB68E 100%)',
            color: '#FFFFFF',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1.5 }}>
            {t('pages.about.ctaTitle')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.85)', maxWidth: 500, mx: 'auto' }}>
            {t('pages.about.ctaSubtitle')}
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/contact"
            sx={{
              bgcolor: '#FFFFFF',
              color: 'primary.dark',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)',
              },
            }}
          >
            {t('pages.about.ctaButton')}
          </Button>
        </Box>
      </Container>
    </PageLayout>
  );
}

export default function AboutPageWrapper() {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
        <LanguageProvider>
          <AboutPage />
        </LanguageProvider>
      </CoreThemeProvider>
    </TenantProvider>
  );
}
