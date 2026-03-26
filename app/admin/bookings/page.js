'use client';

import { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import { useAdminData } from '../../../src/admin/hooks/useAdminData';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import BookingCard from '../../../src/admin/components/BookingCard';

const STATUS_TABS = ['all', 'pending', 'confirmed', 'completed', 'cancelled'];

export default function BookingsPage() {
  const { t } = useTranslation();
  const { bookings, updateBookingStatus } = useAdminData();
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return bookings.filter((bk) => {
      const matchesStatus = statusFilter === 'all' || bk.status === statusFilter;
      const matchesSearch = !search || bk.clientName.toLowerCase().includes(search.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [bookings, statusFilter, search]);

  const getCount = (status) => {
    if (status === 'all') return bookings.length;
    return bookings.filter((bk) => bk.status === status).length;
  };

  return (
    <PageContainer title={t('admin.bookings.title')} subtitle={t('admin.bookings.subtitle')}>
      <MockDataBanner message={t('admin.bookings.mockBanner')} />

      {/* Filters */}
      <Box sx={{ mb: 3 }}>
        <Tabs
          value={statusFilter}
          onChange={(e, val) => setStatusFilter(val)}
          sx={{ mb: 2 }}
        >
          {STATUS_TABS.map((tab) => (
            <Tab
              key={tab}
              value={tab}
              label={`${t(`admin.bookings.status.${tab}`)} (${getCount(tab)})`}
            />
          ))}
        </Tabs>
        <TextField
          size="small"
          placeholder={t('admin.bookings.searchPlaceholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
              </InputAdornment>
            ),
          }}
          sx={{ minWidth: 280 }}
        />
      </Box>

      {/* Booking List */}
      {filtered.length === 0 ? (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 6 }}>
          {t('admin.bookings.noResults')}
        </Typography>
      ) : (
        <Box>
          {filtered.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              onUpdateStatus={updateBookingStatus}
            />
          ))}
        </Box>
      )}
    </PageContainer>
  );
}
