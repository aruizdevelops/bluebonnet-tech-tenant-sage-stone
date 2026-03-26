'use client';

import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import SpaIcon from '@mui/icons-material/Spa';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from '../../i18n/useTranslation';

const STATUS_COLORS = {
  pending: 'warning',
  confirmed: 'info',
  completed: 'success',
  cancelled: 'error',
};

export default function BookingCard({ booking, onUpdateStatus }) {
  const { t } = useTranslation();

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap', gap: 1 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <PersonIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {booking.clientName}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <EmailIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary">{booking.clientEmail}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <PhoneIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary">{booking.clientPhone}</Typography>
              </Box>
            </Box>
          </Box>
          <Chip
            label={booking.status}
            color={STATUS_COLORS[booking.status] || 'default'}
            size="small"
            sx={{ textTransform: 'capitalize' }}
          />
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SpaIcon sx={{ fontSize: 18, color: 'primary.main' }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>{booking.serviceName}</Typography>
              <Typography variant="caption" color="text.secondary">{booking.providerName}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EventIcon sx={{ fontSize: 18, color: 'primary.main' }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>{booking.date}</Typography>
              <Typography variant="caption" color="text.secondary">{booking.time}</Typography>
            </Box>
          </Box>
        </Box>

        {booking.notes && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
            {booking.notes}
          </Typography>
        )}

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {booking.status === 'pending' && (
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => onUpdateStatus(booking.id, 'confirmed')}
            >
              {t('admin.bookings.confirm')}
            </Button>
          )}
          {(booking.status === 'pending' || booking.status === 'confirmed') && (
            <Button
              size="small"
              variant="outlined"
              color="success"
              onClick={() => onUpdateStatus(booking.id, 'completed')}
            >
              {t('admin.bookings.complete')}
            </Button>
          )}
          {booking.status !== 'cancelled' && booking.status !== 'completed' && (
            <Button
              size="small"
              variant="outlined"
              color="error"
              onClick={() => onUpdateStatus(booking.id, 'cancelled')}
            >
              {t('admin.bookings.cancel')}
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
