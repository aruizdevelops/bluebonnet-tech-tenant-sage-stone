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
import LeadCard from '../../../src/admin/components/LeadCard';

const STATUS_TABS = ['all', 'new', 'contacted', 'converted', 'closed'];

export default function LeadsPage() {
  const { t } = useTranslation();
  const { leads, updateLeadStatus } = useAdminData();
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return leads.filter((lead) => {
      const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
      const matchesSearch = !search || lead.name.toLowerCase().includes(search.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [leads, statusFilter, search]);

  const getCount = (status) => {
    if (status === 'all') return leads.length;
    return leads.filter((l) => l.status === status).length;
  };

  return (
    <PageContainer title={t('admin.leads.title')} subtitle={t('admin.leads.subtitle')}>
      <MockDataBanner message={t('admin.leads.mockBanner')} />

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
              label={`${t(`admin.leads.status.${tab}`)} (${getCount(tab)})`}
            />
          ))}
        </Tabs>
        <TextField
          size="small"
          placeholder={t('admin.leads.searchPlaceholder')}
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

      {/* Lead List */}
      {filtered.length === 0 ? (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 6 }}>
          {t('admin.leads.noResults')}
        </Typography>
      ) : (
        <Box>
          {filtered.map((lead) => (
            <LeadCard
              key={lead.id}
              lead={lead}
              onUpdateStatus={updateLeadStatus}
            />
          ))}
        </Box>
      )}
    </PageContainer>
  );
}
