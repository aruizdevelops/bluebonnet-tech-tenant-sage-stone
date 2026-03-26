'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from '../../i18n/useTranslation';
import { getContact } from '../../constants/content';
import { ANALYTICS_EVENTS } from '../../constants/analytics';

export default function ContactInfo() {
  const { t } = useTranslation();
  const content = getContact(t);

  const handlePhoneClick = () => {
    // [Analytics] Track phone click
    console.log('[Analytics]', ANALYTICS_EVENTS.PHONE_CLICK, { phone: content.location.phone });
  };

  const handleTextClick = () => {
    // [Analytics] Track text click
    console.log('[Analytics]', ANALYTICS_EVENTS.TEXT_CLICK, { phone: content.location.textPhone });
  };

  const handleBookClick = () => {
    // [Analytics] Track booking start from contact section
    console.log('[Analytics]', ANALYTICS_EVENTS.BOOKING_START, { source: 'contact_section' });
  };

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: t('contact.callUs'),
      subtitle: content.location.phone,
      href: `tel:${content.location.phone.replace(/[^+\d]/g, '')}`,
      onClick: handlePhoneClick,
      color: 'primary.main',
    },
    {
      icon: SmsIcon,
      title: t('contact.textUs'),
      subtitle: content.location.textPhone,
      href: `sms:${content.location.textPhone.replace(/[^+\d]/g, '')}`,
      onClick: handleTextClick,
      color: 'secondary.main',
    },
    {
      icon: CalendarMonthIcon,
      title: t('contact.bookOnline'),
      subtitle: t('contact.bookOnlineSubtitle'),
      href: '#book',
      onClick: handleBookClick,
      color: 'primary.dark',
    },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        <Stack alignItems="center" textAlign="center" spacing={2} sx={{ mb: 8 }}>
          <Typography
            variant="overline"
            component="p"
            sx={{ color: 'primary.main', letterSpacing: '0.15em' }}
          >
            {content.overline}
          </Typography>
          <Typography variant="h2" component="h2">
            {content.headline}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600 }}
          >
            {content.subtitle}
          </Typography>
        </Stack>

        {/* Contact Method Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {contactMethods.map((method) => {
            const IconComp = method.icon;
            return (
              <Grid size={{ xs: 12, md: 4 }} key={method.title}>
                <Card
                  component="a"
                  href={method.href}
                  onClick={method.onClick}
                  sx={{
                    height: '100%',
                    textDecoration: 'none',
                    textAlign: 'center',
                    cursor: 'pointer',
                    p: 1,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(45, 41, 38, 0.10)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: (theme) =>
                          `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.secondary.light}20 100%)`,
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      <IconComp sx={{ color: method.color, fontSize: 26 }} />
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {method.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {method.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Location Details + Map */}
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: '100%', p: 1 }}>
              <CardContent sx={{ p: 3 }}>
                {/* Address */}
                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                  <LocationOnIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {content.location.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {content.location.address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {content.location.city}
                    </Typography>
                  </Box>
                </Stack>

                {/* Email */}
                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                  <EmailIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                  <Box>
                    <Typography
                      variant="body2"
                      component="a"
                      href={`mailto:${content.location.email}`}
                      sx={{
                        color: 'primary.dark',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      {content.location.email}
                    </Typography>
                  </Box>
                </Stack>

                {/* Hours */}
                <Stack direction="row" spacing={2}>
                  <AccessTimeIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                      {t('contact.hoursTitle')}
                    </Typography>
                    {content.hours.map((h) => (
                      <Stack
                        key={h.days}
                        direction="row"
                        justifyContent="space-between"
                        spacing={3}
                        sx={{ mb: 0.5 }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          {h.days}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {h.time}
                        </Typography>
                      </Stack>
                    ))}
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            {/* Map Placeholder */}
            <Box
              sx={{
                width: '100%',
                height: '100%',
                minHeight: 300,
                borderRadius: 4,
                bgcolor: 'rgba(45, 41, 38, 0.04)',
                border: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Stack alignItems="center" spacing={1}>
                <LocationOnIcon sx={{ color: 'text.secondary', fontSize: 40, opacity: 0.4 }} />
                <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.6 }}>
                  {t('contact.mapPlaceholder')}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
