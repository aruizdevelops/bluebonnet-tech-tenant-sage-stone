'use client';

import { useState } from 'react';
import { Box, Grid, ToggleButtonGroup, ToggleButton, Typography, Button } from '@mui/material';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../src/i18n/useTranslation';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SpaIcon from '@mui/icons-material/Spa';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Link from 'next/link';
import MockDataBanner from '../../src/admin/components/MockDataBanner';
import DashboardKpiCard from '../../src/admin/components/DashboardKpiCard';
import {
  HorizontalBarChart,
  RankedItemsCard,
  TrendsTable,
  PerformanceCards,
  AlertCard,
  StatusBreakdownChart,
} from '../../src/admin/components/DashboardChart';
import ActivityFeed from '../../src/admin/components/ActivityFeed';
import {
  MOCK_KPIS,
  MOCK_BOOKINGS_BY_CATEGORY,
  MOCK_TOP_SERVICES,
  MOCK_LOW_PERFORMERS,
  MOCK_BUSIEST_HOURS,
  MOCK_SPECIALS_PERFORMANCE,
  MOCK_FEATURED_PERFORMANCE,
  MOCK_WEEKLY_TRENDS,
  MOCK_MONTHLY_TRENDS,
  MOCK_BOOKING_STATUS_BREAKDOWN,
  MOCK_RECENT_ACTIVITY,
} from '../../src/admin/constants/dashboardMockData';

export default function AdminDashboard() {
  const { t } = useTranslation();
  const [timeframe, setTimeframe] = useState('month');

  const trendData = timeframe === 'week' ? MOCK_WEEKLY_TRENDS : MOCK_MONTHLY_TRENDS;
  const periodLabel = timeframe === 'week' ? 'Day' : 'Month';

  return (
    <PageContainer title={t('admin.dashboard.title')} subtitle={t('admin.dashboard.subtitle')}>
      <MockDataBanner message={t('admin.dashboard.mockBanner')} />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <ToggleButtonGroup
          value={timeframe}
          exclusive
          onChange={(e, val) => { if (val) setTimeframe(val); }}
          size="small"
        >
          <ToggleButton value="week">{t('admin.dashboard.thisWeek')}</ToggleButton>
          <ToggleButton value="month">{t('admin.dashboard.thisMonth')}</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
          <DashboardKpiCard
            title={t('admin.dashboard.totalBookings')}
            value={MOCK_KPIS.totalBookings.toLocaleString()}
            subtitle={t('admin.dashboard.thisMonthLabel')}
            icon={<EventNoteIcon />}
            color="#7C9A6E"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
          <DashboardKpiCard
            title={t('admin.dashboard.revenue')}
            value={`$${MOCK_KPIS.totalRevenue.toLocaleString()}`}
            subtitle={t('admin.dashboard.thisMonthLabel')}
            icon={<AttachMoneyIcon />}
            color="#43A047"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
          <DashboardKpiCard
            title={t('admin.dashboard.avgBookingValue')}
            value={`$${MOCK_KPIS.avgBookingValue.toFixed(2)}`}
            subtitle={t('admin.dashboard.avgBookingChange')}
            icon={<TrendingUpIcon />}
            color="#D4A054"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
          <DashboardKpiCard
            title={t('admin.dashboard.newClients')}
            value={MOCK_KPIS.newClients}
            subtitle={t('admin.dashboard.thisMonthLabel')}
            icon={<PersonAddIcon />}
            color="#8BA4B8"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
          <DashboardKpiCard
            title={t('admin.dashboard.consultations')}
            value={MOCK_KPIS.consultationRequests}
            subtitle={t('admin.dashboard.thisMonthLabel')}
            icon={<SpaIcon />}
            color="#D4A0A0"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
          <DashboardKpiCard
            title={t('admin.dashboard.membershipSignups')}
            value={MOCK_KPIS.membershipSignups}
            subtitle={t('admin.dashboard.thisMonthLabel')}
            icon={<CardMembershipIcon />}
            color="#B8977E"
          />
        </Grid>
      </Grid>

      {/* Main Charts Row */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <HorizontalBarChart
            title={t('admin.dashboard.bookingsByCategory')}
            data={MOCK_BOOKINGS_BY_CATEGORY}
            labelKey="category"
            valueKey="bookings"
            color="#7C9A6E"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <RankedItemsCard
            title={t('admin.dashboard.topBookedServices')}
            subtitle={t('admin.dashboard.topBookedSubtitle')}
            data={MOCK_TOP_SERVICES}
            valueKey="bookings"
          />
        </Grid>
      </Grid>

      {/* Trends and Busiest Hours */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TrendsTable
            title={timeframe === 'week' ? t('admin.dashboard.weeklyBookingTrends') : t('admin.dashboard.monthlyBookingTrends')}
            data={trendData}
            periodLabel={periodLabel}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <HorizontalBarChart
            title={t('admin.dashboard.busiestHours')}
            data={MOCK_BUSIEST_HOURS}
            labelKey="hour"
            valueKey="bookings"
            color="#B8977E"
          />
        </Grid>
      </Grid>

      {/* Booking Status & Performance */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatusBreakdownChart
            title={t('admin.dashboard.bookingStatusBreakdown')}
            data={MOCK_BOOKING_STATUS_BREAKDOWN}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <PerformanceCards
            title={t('admin.dashboard.featuredPerformance')}
            data={MOCK_FEATURED_PERFORMANCE}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <PerformanceCards
            title={t('admin.dashboard.specialsPerformance')}
            data={MOCK_SPECIALS_PERFORMANCE}
          />
        </Grid>
      </Grid>

      {/* Activity Feed & Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ActivityFeed title={t('admin.dashboard.recentActivity')} activities={MOCK_RECENT_ACTIVITY} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <AlertCard
            title={t('admin.dashboard.lowPerforming')}
            items={MOCK_LOW_PERFORMERS}
            severity="warning"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: 3, borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>{t('admin.dashboard.quickStats')}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">{t('admin.dashboard.totalServices')}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{MOCK_KPIS.totalServices}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">{t('admin.dashboard.unavailableServices')}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'warning.main' }}>{MOCK_KPIS.unavailableServices}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">{t('admin.dashboard.activeSpecials')}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>{MOCK_KPIS.activeSpecials}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">{t('admin.dashboard.categories')}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>7</Typography>
              </Box>
            </Box>
          </Box>

          {/* Quick Actions */}
          <Box sx={{ mt: 3, p: 3, borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>{t('admin.dashboard.quickActions')}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button variant="outlined" size="small" startIcon={<AddIcon />} component={Link} href="/admin/services" fullWidth>
                {t('admin.dashboard.addService')}
              </Button>
              <Button variant="outlined" size="small" startIcon={<VisibilityIcon />} component={Link} href="/admin/bookings" fullWidth>
                {t('admin.dashboard.viewBookings')}
              </Button>
              <Button variant="outlined" size="small" startIcon={<ContactMailIcon />} component={Link} href="/admin/leads" fullWidth>
                {t('admin.dashboard.viewLeads')}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
