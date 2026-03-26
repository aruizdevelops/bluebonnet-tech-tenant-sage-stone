'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControlLabel,
  Switch,
  MenuItem,
  Box,
  Typography,
} from '@mui/material';
import { useTranslation } from '../../i18n/useTranslation';
import { useFormState } from '../hooks/useFormState';
import { useAdminData } from '../hooks/useAdminData';

const EMPTY_SERVICE = {
  name: '',
  shortDescription: '',
  fullDescription: '',
  category: '',
  duration: '',
  price: '',
  active: true,
  featured: false,
  consultationRequired: false,
};

function validate(values, t) {
  const errors = {};
  if (!values.name || values.name.trim().length < 2) {
    errors.name = t('admin.serviceForm.validation.nameRequired');
  }
  if (values.name && values.name.length > 100) {
    errors.name = t('admin.serviceForm.validation.nameMax');
  }
  if (!values.shortDescription || values.shortDescription.trim().length < 10) {
    errors.shortDescription = t('admin.serviceForm.validation.descriptionRequired');
  }
  if (values.shortDescription && values.shortDescription.length > 500) {
    errors.shortDescription = t('admin.serviceForm.validation.descriptionMax');
  }
  if (values.price && isNaN(Number(values.price))) {
    errors.price = t('admin.serviceForm.validation.pricePositive');
  }
  if (!values.category) {
    errors.category = t('admin.serviceForm.validation.categoryRequired');
  }
  return errors;
}

export default function ServiceForm({ open, onClose, service, onSaved }) {
  const { t } = useTranslation();
  const { categories } = useAdminData();
  const isEdit = Boolean(service);

  const initialValues = service
    ? {
        name: service.name || service.nameKey || '',
        shortDescription: service.shortDescription || service.descriptionKey || '',
        fullDescription: service.fullDescription || service.fullDescriptionKey || '',
        category: service.category || '',
        duration: service.duration || service.durationKey || '',
        price: service.price || service.priceLabelKey || '',
        active: service.active !== undefined ? service.active : true,
        featured: service.featured || false,
        consultationRequired: service.consultationRequired || false,
      }
    : EMPTY_SERVICE;

  const {
    values,
    errors,
    touched,
    isDirty,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  } = useFormState(initialValues, (vals) => validate(vals, t));

  const handleSave = () => {
    handleSubmit(async (formValues) => {
      if (onSaved) {
        await onSaved(formValues);
      }
      reset();
      onClose();
    });
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleCancel} maxWidth="sm" fullWidth>
      <DialogTitle>
        {isEdit ? t('admin.serviceForm.editTitle') : t('admin.serviceForm.addTitle')}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          <TextField
            label={t('admin.serviceForm.serviceName')}
            value={values.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            fullWidth
            required
          />
          <TextField
            label={t('admin.serviceForm.shortDescription')}
            value={values.shortDescription}
            onChange={(e) => handleChange('shortDescription', e.target.value)}
            onBlur={() => handleBlur('shortDescription')}
            error={touched.shortDescription && Boolean(errors.shortDescription)}
            helperText={
              (touched.shortDescription && errors.shortDescription) ||
              t('admin.serviceForm.charCount', { count: values.shortDescription.length })
            }
            fullWidth
            multiline
            rows={2}
            required
          />
          <TextField
            label={t('admin.serviceForm.fullDescription')}
            value={values.fullDescription}
            onChange={(e) => handleChange('fullDescription', e.target.value)}
            fullWidth
            multiline
            rows={4}
          />
          <TextField
            label={t('admin.serviceForm.category')}
            value={values.category}
            onChange={(e) => handleChange('category', e.target.value)}
            onBlur={() => handleBlur('category')}
            error={touched.category && Boolean(errors.category)}
            helperText={touched.category && errors.category}
            select
            fullWidth
            required
          >
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.nameKey || cat.name || cat.id}
              </MenuItem>
            ))}
          </TextField>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label={t('admin.serviceForm.duration')}
              value={values.duration}
              onChange={(e) => handleChange('duration', e.target.value)}
              fullWidth
            />
            <TextField
              label={t('admin.serviceForm.price')}
              value={values.price}
              onChange={(e) => handleChange('price', e.target.value)}
              onBlur={() => handleBlur('price')}
              error={touched.price && Boolean(errors.price)}
              helperText={touched.price && errors.price}
              fullWidth
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={values.active}
                  onChange={(e) => handleChange('active', e.target.checked)}
                  color="primary"
                />
              }
              label={t('admin.serviceForm.available')}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={values.featured}
                  onChange={(e) => handleChange('featured', e.target.checked)}
                  color="primary"
                />
              }
              label={t('admin.serviceForm.featured')}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={values.consultationRequired}
                  onChange={(e) => handleChange('consultationRequired', e.target.checked)}
                  color="primary"
                />
              }
              label={t('admin.serviceForm.consultationRequired')}
            />
          </Box>

          {/* Preview */}
          <Box sx={{ mt: 1, p: 2, borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'background.default' }}>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
              {t('admin.serviceForm.preview')}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {values.name || t('admin.serviceForm.previewName')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {values.shortDescription || t('admin.serviceForm.previewDescription')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              {values.featured && (
                <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  {t('admin.serviceForm.previewFeatured')}
                </Typography>
              )}
              {!values.active && (
                <Typography variant="caption" sx={{ color: 'error.main', fontWeight: 600 }}>
                  {t('admin.serviceForm.previewUnavailable')}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={handleCancel}>{t('admin.common.cancel')}</Button>
        <Button variant="contained" onClick={handleSave} disabled={!isDirty}>
          {isEdit ? t('admin.common.saveChanges') : t('admin.serviceForm.addService')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
