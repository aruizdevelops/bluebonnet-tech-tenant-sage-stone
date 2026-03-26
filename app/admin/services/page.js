'use client';

import { useState, useMemo } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  IconButton,
  Switch,
  Chip,
  InputAdornment,
  Grid,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import { useAdminData } from '../../../src/admin/hooks/useAdminData';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import ServiceForm from '../../../src/admin/components/ServiceForm';
import ConfirmDialog from '../../../src/admin/components/ConfirmDialog';

export default function ServicesPage() {
  const { t } = useTranslation();
  const { services, categories, addService, updateService, deleteService } = useAdminData();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [formOpen, setFormOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const filtered = useMemo(() => {
    return services.filter((svc) => {
      const name = (svc.name || svc.nameKey || '').toLowerCase();
      const matchesSearch = !search || name.includes(search.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || svc.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [services, search, categoryFilter]);

  const handleAdd = () => {
    setEditingService(null);
    setFormOpen(true);
  };

  const handleEdit = (svc) => {
    setEditingService(svc);
    setFormOpen(true);
  };

  const handleFormSave = async (formValues) => {
    if (editingService) {
      await updateService(editingService.id, formValues);
    } else {
      await addService(formValues);
    }
  };

  const handleToggleActive = async (svc) => {
    await updateService(svc.id, { ...svc, active: !svc.active });
  };

  const handleToggleFeatured = async (svc) => {
    await updateService(svc.id, { ...svc, featured: !svc.featured });
  };

  const handleDelete = async () => {
    if (deleteTarget) {
      await deleteService(deleteTarget.id);
      setDeleteTarget(null);
    }
  };

  return (
    <PageContainer title={t('admin.services.title')} subtitle={t('admin.services.subtitle')}>
      <MockDataBanner message={t('admin.services.mockBanner')} />

      {/* Toolbar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexGrow: 1 }}>
          <TextField
            size="small"
            placeholder={t('admin.services.searchPlaceholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: 220 }}
          />
          <TextField
            size="small"
            select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            label={t('admin.services.categoryFilter')}
            sx={{ minWidth: 180 }}
          >
            <MenuItem value="all">{t('admin.services.allCategories')}</MenuItem>
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.nameKey || cat.name || cat.id}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd}>
          {t('admin.services.addService')}
        </Button>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {t('admin.services.itemsCount', { filtered: filtered.length, total: services.length })}
      </Typography>

      {/* Service Cards */}
      {filtered.length === 0 ? (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 6 }}>
          {services.length === 0 ? t('admin.services.noItems') : t('admin.services.noMatch')}
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {filtered.map((svc) => (
            <Grid key={svc.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card sx={{ height: '100%', opacity: svc.active ? 1 : 0.65 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {svc.name || svc.nameKey || svc.id}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      <IconButton size="small" onClick={() => handleEdit(svc)}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" onClick={() => setDeleteTarget(svc)}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, minHeight: 40 }}>
                    {svc.shortDescription || svc.descriptionKey || ''}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1, mb: 1.5, flexWrap: 'wrap' }}>
                    {svc.category && (
                      <Chip label={svc.category} size="small" variant="outlined" />
                    )}
                    {svc.durationKey && (
                      <Chip label={svc.durationKey || svc.duration} size="small" variant="outlined" />
                    )}
                    {svc.priceLabelKey && (
                      <Chip label={svc.priceLabelKey || svc.price} size="small" variant="outlined" />
                    )}
                    {svc.consultationRequired && (
                      <Chip label="Consultation" size="small" color="info" variant="outlined" />
                    )}
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="caption" color="text.secondary">
                        {t('admin.serviceCard.available')}
                      </Typography>
                      <Switch
                        size="small"
                        checked={svc.active}
                        onChange={() => handleToggleActive(svc)}
                        color="primary"
                      />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <IconButton
                        size="small"
                        onClick={() => handleToggleFeatured(svc)}
                        sx={{ color: svc.featured ? 'warning.main' : 'text.disabled' }}
                      >
                        <StarIcon fontSize="small" />
                      </IconButton>
                      {svc.featured && (
                        <Typography variant="caption" color="warning.main" sx={{ fontWeight: 600 }}>
                          {t('admin.serviceCard.featured')}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Service Form Dialog */}
      <ServiceForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        service={editingService}
        onSaved={handleFormSave}
      />

      {/* Delete Confirmation */}
      <ConfirmDialog
        open={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title={t('admin.services.deleteTitle')}
        message={t('admin.services.deleteConfirm', { name: deleteTarget?.name || deleteTarget?.nameKey || '' })}
      />
    </PageContainer>
  );
}
