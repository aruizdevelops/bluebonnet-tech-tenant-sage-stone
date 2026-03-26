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
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SpaIcon from '@mui/icons-material/Spa';
import { useTranslation } from '../../i18n/useTranslation';

const STATUS_COLORS = {
  new: 'info',
  contacted: 'warning',
  converted: 'success',
  closed: 'default',
};

export default function LeadCard({ lead, onUpdateStatus }) {
  const { t } = useTranslation();

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap', gap: 1 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <PersonIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {lead.name}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <EmailIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary">{lead.email}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <PhoneIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary">{lead.phone}</Typography>
              </Box>
            </Box>
          </Box>
          <Chip
            label={lead.status}
            color={STATUS_COLORS[lead.status] || 'default'}
            size="small"
            sx={{ textTransform: 'capitalize' }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
          <SpaIcon sx={{ fontSize: 16, color: 'primary.main' }} />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {lead.serviceInterest}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {lead.message}
        </Typography>

        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
          {t('admin.leads.submitted')}: {new Date(lead.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {lead.status === 'new' && (
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => onUpdateStatus(lead.id, 'contacted')}
            >
              {t('admin.leads.markContacted')}
            </Button>
          )}
          {(lead.status === 'new' || lead.status === 'contacted') && (
            <Button
              size="small"
              variant="outlined"
              color="success"
              onClick={() => onUpdateStatus(lead.id, 'converted')}
            >
              {t('admin.leads.markConverted')}
            </Button>
          )}
          {lead.status !== 'closed' && (
            <Button
              size="small"
              variant="outlined"
              color="default"
              onClick={() => onUpdateStatus(lead.id, 'closed')}
            >
              {t('admin.leads.close')}
            </Button>
          )}
          <Button
            size="small"
            variant="outlined"
            startIcon={<PhoneIcon />}
            href={`tel:${lead.phone}`}
          >
            {t('admin.leads.call')}
          </Button>
          <Button
            size="small"
            variant="outlined"
            startIcon={<EmailIcon />}
            href={`mailto:${lead.email}`}
          >
            {t('admin.leads.email')}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
