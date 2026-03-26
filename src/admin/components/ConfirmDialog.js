'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';
import { useTranslation } from '../../i18n/useTranslation';

export default function ConfirmDialog({ open, onClose, onConfirm, title, message, confirmLabel, confirmColor }) {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{title || t('admin.common.confirmAction')}</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          {message || t('admin.common.confirmProceed')}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose}>{t('admin.common.cancel')}</Button>
        <Button
          variant="contained"
          color={confirmColor || 'error'}
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          {confirmLabel || t('admin.common.delete')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
