'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  MenuItem,
  Paper,
  Alert,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import { TenantProvider, CoreThemeProvider } from '@bluebonnet-tech/core';
import tenantConfig from '../../src/config/tenant';
import { LanguageProvider } from '../../src/i18n/LanguageContext';
import { useTranslation } from '../../src/i18n/useTranslation';
import { PageLayout, PageHero } from '../../src/components/shared';
import { getActiveServices } from '../../src/constants/services';
import { ANALYTICS_EVENTS } from '../../src/constants/analytics';

const CONTACT_ADDRESS = '4200 Ridgeline Boulevard, Suite 110, Austin, TX 78746';
const CONTACT_PHONE = '(512) 555-0189';
const CONTACT_TEXT = '(512) 555-0190';
const CONTACT_EMAIL = 'hello@sageandstone.com';

function ContactPage() {
  const { t } = useTranslation();
  const services = getActiveServices();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Analytics: page view
    // trackEvent(ANALYTICS_EVENTS.PAGE_VIEW, { page: 'contact' });
  }, []);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Analytics: contact_submit
    // trackEvent(ANALYTICS_EVENTS.CONTACT_SUBMIT, { service: formData.service });
    setSubmitted(true);
  };

  const contactItems = [
    {
      icon: LocationOnIcon,
      labelKey: 'pages.contact.addressLabel',
      value: CONTACT_ADDRESS,
      href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_ADDRESS)}`,
    },
    {
      icon: PhoneIcon,
      labelKey: 'pages.contact.phoneLabel',
      value: CONTACT_PHONE,
      href: 'tel:+15125550189',
    },
    {
      icon: SmsIcon,
      labelKey: 'pages.contact.textLabel',
      value: CONTACT_TEXT,
      href: 'sms:+15125550190',
    },
    {
      icon: EmailIcon,
      labelKey: 'pages.contact.emailLabel',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
  ];

  return (
    <PageLayout>
      <PageHero
        title={t('pages.contact.title')}
        subtitle={t('pages.contact.subtitle')}
        breadcrumbKey="breadcrumb.contact"
      />

      <Container sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {contactItems.map((item) => (
                <Grid size={{ xs: 12, sm: 6, md: 12 }} key={item.labelKey}>
                  <Card
                    component={item.href ? 'a' : 'div'}
                    href={item.href || undefined}
                    sx={{
                      height: '100%',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'transform 200ms, box-shadow 200ms',
                      '&:hover': item.href
                        ? { transform: 'translateY(-2px)', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }
                        : {},
                    }}
                  >
                    <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, p: 2.5 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          color: 'primary.contrastText',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <item.icon sx={{ fontSize: 22 }} />
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.25 }}>
                          {t(item.labelKey)}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {item.value}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Business Hours */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                mb: 4,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <AccessTimeIcon sx={{ color: 'primary.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {t('pages.contact.hoursTitle')}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                {t('contact.hours.weekdays')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                {t('contact.hours.saturday')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('contact.hours.sunday')}
              </Typography>
            </Paper>

            {/* Map Placeholder */}
            <Paper
              elevation={0}
              sx={{
                p: 0,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                overflow: 'hidden',
                height: 240,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'rgba(124, 154, 110, 0.06)',
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <LocationOnIcon sx={{ fontSize: 48, color: 'primary.light', mb: 1 }} />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                  {t('pages.contact.mapTitle')}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('pages.contact.getDirections')}
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                {t('pages.contact.formTitle')}
              </Typography>

              {submitted && (
                <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                  {t('pages.contact.formSuccess')}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={t('pages.contact.formName')}
                      value={formData.name}
                      onChange={handleChange('name')}
                      required
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={t('pages.contact.formEmail')}
                      type="email"
                      value={formData.email}
                      onChange={handleChange('email')}
                      required
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={t('pages.contact.formPhone')}
                      value={formData.phone}
                      onChange={handleChange('phone')}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      select
                      label={t('pages.contact.formService')}
                      value={formData.service}
                      onChange={handleChange('service')}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    >
                      <MenuItem value="">
                        {t('pages.contact.formServiceNone')}
                      </MenuItem>
                      {services.map((service) => (
                        <MenuItem key={service.id} value={service.id}>
                          {t(service.nameKey)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={5}
                      label={t('pages.contact.formMessage')}
                      value={formData.message}
                      onChange={handleChange('message')}
                      required
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid size={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{ px: 4 }}
                    >
                      {t('pages.contact.formSubmit')}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
}

export default function ContactPageWrapper() {
  return (
    <TenantProvider config={tenantConfig}>
      <CoreThemeProvider>
        <LanguageProvider>
          <ContactPage />
        </LanguageProvider>
      </CoreThemeProvider>
    </TenantProvider>
  );
}
