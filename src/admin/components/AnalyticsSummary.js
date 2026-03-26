'use client';

import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useTranslation } from '../../i18n/useTranslation';

export default function AnalyticsSummary({ analytics }) {
  const { t } = useTranslation();

  if (!analytics) return null;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Page Views */}
      <Card>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>{t('admin.analytics.pageViews')}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <TrendingUpIcon sx={{ fontSize: 16, color: 'success.main' }} />
              <Typography variant="body2" color="success.main" sx={{ fontWeight: 600 }}>
                +{analytics.pageViews.trend}%
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            {analytics.pageViews.total.toLocaleString()}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {analytics.pageViews.topPages.map((page) => {
              const maxViews = analytics.pageViews.topPages[0].views;
              return (
                <Box key={page.page}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2">{page.page}</Typography>
                    <Typography variant="body2" color="text.secondary">{page.views.toLocaleString()}</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(page.views / maxViews) * 100}
                    sx={{ height: 6, borderRadius: 3, bgcolor: 'rgba(0,0,0,0.06)', '& .MuiLinearProgress-bar': { borderRadius: 3 } }}
                  />
                </Box>
              );
            })}
          </Box>
        </CardContent>
      </Card>

      {/* Booking Channels */}
      <Card>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>{t('admin.analytics.bookingsByChannel')}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {analytics.bookingTrends.byChannel.map((ch) => {
              const maxBookings = analytics.bookingTrends.byChannel[0].bookings;
              return (
                <Box key={ch.channel}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2">{ch.channel}</Typography>
                    <Typography variant="body2" color="text.secondary">{ch.bookings}</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(ch.bookings / maxBookings) * 100}
                    sx={{ height: 6, borderRadius: 3, bgcolor: 'rgba(0,0,0,0.06)', '& .MuiLinearProgress-bar': { borderRadius: 3, bgcolor: '#B8977E' } }}
                  />
                </Box>
              );
            })}
          </Box>
        </CardContent>
      </Card>

      {/* Client Retention */}
      <Card>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>{t('admin.analytics.clientRetention')}</Typography>
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            <Box>
              <Typography variant="body2" color="text.secondary">{t('admin.analytics.newClients')}</Typography>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>{analytics.clientRetention.newClients}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">{t('admin.analytics.returningClients')}</Typography>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>{analytics.clientRetention.returningClients}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">{t('admin.analytics.retentionRate')}</Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>{analytics.clientRetention.retentionRate}%</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
