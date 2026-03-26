'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { PageContainer } from '@bluebonnet-tech/core';
import { useTranslation } from '../../../src/i18n/useTranslation';
import { useAdminData } from '../../../src/admin/hooks/useAdminData';
import { useFormState } from '../../../src/admin/hooks/useFormState';
import MockDataBanner from '../../../src/admin/components/MockDataBanner';
import ConfirmDialog from '../../../src/admin/components/ConfirmDialog';

const EMPTY_CATEGORY = {
  name: '',
  slug: '',
  description: '',
  sortOrder: 0,
};

function CategoryFormDialog({ open, onClose, category, onSaved, t }) {
  const isEdit = Boolean(category);
  const initialValues = category
    ? { name: category.nameKey || category.name || '', slug: category.id || '', description: category.descriptionKey || category.description || '', sortOrder: category.sortOrder || 0 }
    : EMPTY_CATEGORY;

  const { values, errors, touched, isDirty, handleChange, handleBlur, handleSubmit, reset } = useFormState(
    initialValues,
    (vals) => {
      const errs = {};
      if (!vals.name || vals.name.trim().length < 2) errs.name = t('admin.categoryForm.validation.nameRequired');
      if (vals.slug && !/^[a-z0-9-]+$/.test(vals.slug)) errs.slug = t('admin.categoryForm.validation.slugFormat');
      if (vals.sortOrder !== '' && isNaN(Number(vals.sortOrder))) errs.sortOrder = t('admin.categoryForm.validation.sortOrderNumber');
      return errs;
    }
  );

  const handleSave = () => {
    handleSubmit(async (formValues) => {
      if (onSaved) await onSaved(formValues);
      reset();
      onClose();
    });
  };

  const handleCancel = () => { reset(); onClose(); };

  return (
    <Dialog open={open} onClose={handleCancel} maxWidth="sm" fullWidth>
      <DialogTitle>{isEdit ? t('admin.categoryForm.editTitle') : t('admin.categoryForm.addTitle')}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          <TextField
            label={t('admin.categoryForm.categoryName')}
            value={values.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            fullWidth
            required
          />
          <TextField
            label={t('admin.categoryForm.slug')}
            value={values.slug}
            onChange={(e) => handleChange('slug', e.target.value)}
            onBlur={() => handleBlur('slug')}
            error={touched.slug && Boolean(errors.slug)}
            helperText={(touched.slug && errors.slug) || t('admin.categoryForm.slugHelper')}
            fullWidth
          />
          <TextField
            label={t('admin.categoryForm.description')}
            value={values.description}
            onChange={(e) => handleChange('description', e.target.value)}
            fullWidth
            multiline
            rows={2}
          />
          <TextField
            label={t('admin.categoryForm.sortOrder')}
            value={values.sortOrder}
            onChange={(e) => handleChange('sortOrder', e.target.value)}
            onBlur={() => handleBlur('sortOrder')}
            error={touched.sortOrder && Boolean(errors.sortOrder)}
            helperText={(touched.sortOrder && errors.sortOrder) || t('admin.categoryForm.sortOrderHelper')}
            type="number"
            fullWidth
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={handleCancel}>{t('admin.common.cancel')}</Button>
        <Button variant="contained" onClick={handleSave} disabled={!isDirty}>
          {isEdit ? t('admin.common.saveChanges') : t('admin.categoryForm.addCategory')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function CategoriesPage() {
  const { t } = useTranslation();
  const { categories, services, addCategory, updateCategory, deleteCategory } = useAdminData();
  const [formOpen, setFormOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const getServiceCount = (catId) => services.filter((svc) => svc.category === catId).length;

  const handleAdd = () => { setEditingCategory(null); setFormOpen(true); };
  const handleEdit = (cat) => { setEditingCategory(cat); setFormOpen(true); };

  const handleFormSave = async (formValues) => {
    if (editingCategory) {
      await updateCategory(editingCategory.id, formValues);
    } else {
      await addCategory(formValues);
    }
  };

  const handleDelete = async () => {
    if (deleteTarget) {
      await deleteCategory(deleteTarget.id);
      setDeleteTarget(null);
    }
  };

  return (
    <PageContainer title={t('admin.categories.title')} subtitle={t('admin.categories.subtitle')}>
      <MockDataBanner message={t('admin.categories.mockBanner')} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="body2" color="text.secondary">
          {t('admin.categories.count', { count: categories.length })}
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd}>
          {t('admin.categories.addCategory')}
        </Button>
      </Box>

      {categories.length === 0 ? (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 6 }}>
          {t('admin.categories.noCategories')}
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>{t('admin.categories.colOrder')}</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>{t('admin.categories.colName')}</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>{t('admin.categories.colSlug')}</TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="center">{t('admin.categories.colItems')}</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>{t('admin.categories.colDescription')}</TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="right">{t('admin.categories.colActions')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((cat, index) => (
                <TableRow key={cat.id} hover>
                  <TableCell>{cat.sortOrder != null ? cat.sortOrder : index + 1}</TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>{cat.nameKey || cat.name || cat.id}</TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      {cat.id}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">{getServiceCount(cat.id)}</TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary" noWrap sx={{ maxWidth: 200 }}>
                      {cat.descriptionKey || cat.description || ''}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small" onClick={() => handleEdit(cat)}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={() => setDeleteTarget(cat)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <CategoryFormDialog
        open={formOpen}
        onClose={() => setFormOpen(false)}
        category={editingCategory}
        onSaved={handleFormSave}
        t={t}
      />

      <ConfirmDialog
        open={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title={t('admin.categories.deleteTitle')}
        message={t('admin.categories.deleteConfirm', { name: deleteTarget?.nameKey || deleteTarget?.name || '' })}
      />
    </PageContainer>
  );
}
