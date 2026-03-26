'use client';

import { useContext, useCallback } from 'react';
import AdminDataContext from '../context/AdminDataContext';
import { sanitizeText } from '@bluebonnet-tech/core';
import * as servicesService from '../services/servicesService';
import * as bookingsService from '../services/bookingsService';
import * as leadsService from '../services/leadsService';
import * as promotionsService from '../services/promotionsService';
import * as membershipsService from '../services/membershipsService';
import * as mediaService from '../services/mediaService';
import * as businessService from '../services/businessService';

function sanitizeItem(item) {
  const sanitized = {};
  for (const [key, value] of Object.entries(item)) {
    sanitized[key] = typeof value === 'string' ? sanitizeText(value) : value;
  }
  return sanitized;
}

export function useAdminData() {
  const context = useContext(AdminDataContext);
  if (!context) {
    throw new Error('useAdminData must be used within an AdminDataProvider');
  }

  const { state, dispatch } = context;

  // Service actions
  const addService = useCallback(async (item) => {
    const result = await servicesService.createService(sanitizeItem(item));
    if (result.success) {
      dispatch({ type: 'ADD_SERVICE', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const updateService = useCallback(async (id, updates) => {
    const result = await servicesService.updateService(id, sanitizeItem(updates));
    if (result.success) {
      dispatch({ type: 'UPDATE_SERVICE', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const deleteService = useCallback(async (id) => {
    const result = await servicesService.deleteService(id);
    if (result.success) {
      dispatch({ type: 'DELETE_SERVICE', payload: id });
    }
    return result;
  }, [dispatch]);

  // Category actions
  const addCategory = useCallback(async (item) => {
    const result = await servicesService.createCategory(sanitizeItem(item));
    if (result.success) {
      dispatch({ type: 'ADD_CATEGORY', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const updateCategory = useCallback(async (id, updates) => {
    const result = await servicesService.updateCategory(id, sanitizeItem(updates));
    if (result.success) {
      dispatch({ type: 'UPDATE_CATEGORY', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const deleteCategory = useCallback(async (id) => {
    const result = await servicesService.deleteCategory(id);
    if (result.success) {
      dispatch({ type: 'DELETE_CATEGORY', payload: id });
    }
    return result;
  }, [dispatch]);

  // Booking actions
  const updateBookingStatus = useCallback(async (id, status) => {
    const result = await bookingsService.updateBookingStatus(id, status);
    if (result.success) {
      dispatch({ type: 'UPDATE_BOOKING', payload: result.data });
    }
    return result;
  }, [dispatch]);

  // Lead actions
  const updateLeadStatus = useCallback(async (id, status) => {
    const result = await leadsService.updateLeadStatus(id, status);
    if (result.success) {
      dispatch({ type: 'UPDATE_LEAD', payload: result.data });
    }
    return result;
  }, [dispatch]);

  // Promotion actions
  const addPromotion = useCallback(async (item) => {
    const result = await promotionsService.createPromotion(sanitizeItem(item));
    if (result.success) {
      dispatch({ type: 'ADD_PROMOTION', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const updatePromotion = useCallback(async (id, updates) => {
    const result = await promotionsService.updatePromotion(id, sanitizeItem(updates));
    if (result.success) {
      dispatch({ type: 'UPDATE_PROMOTION', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const deletePromotion = useCallback(async (id) => {
    const result = await promotionsService.deletePromotion(id);
    if (result.success) {
      dispatch({ type: 'DELETE_PROMOTION', payload: id });
    }
    return result;
  }, [dispatch]);

  // Membership actions
  const addMembership = useCallback(async (item) => {
    const result = await membershipsService.createMembership(sanitizeItem(item));
    if (result.success) {
      dispatch({ type: 'ADD_MEMBERSHIP', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const updateMembership = useCallback(async (id, updates) => {
    const result = await membershipsService.updateMembership(id, sanitizeItem(updates));
    if (result.success) {
      dispatch({ type: 'UPDATE_MEMBERSHIP', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const deleteMembership = useCallback(async (id) => {
    const result = await membershipsService.deleteMembership(id);
    if (result.success) {
      dispatch({ type: 'DELETE_MEMBERSHIP', payload: id });
    }
    return result;
  }, [dispatch]);

  // Media actions
  const uploadMedia = useCallback(async (file) => {
    const result = await mediaService.uploadMedia(file);
    if (result.success) {
      dispatch({ type: 'ADD_MEDIA', payload: result.data });
    }
    return result;
  }, [dispatch]);

  const deleteMedia = useCallback(async (id) => {
    const result = await mediaService.deleteMedia(id);
    if (result.success) {
      dispatch({ type: 'DELETE_MEDIA', payload: id });
    }
    return result;
  }, [dispatch]);

  // Business info actions
  const updateBusinessInfo = useCallback(async (updates) => {
    const result = await businessService.updateBusinessInfo(sanitizeItem(updates));
    if (result.success) {
      dispatch({ type: 'SET_BUSINESS_INFO', payload: result.data });
    }
    return result;
  }, [dispatch]);

  return {
    ...state,
    addService,
    updateService,
    deleteService,
    addCategory,
    updateCategory,
    deleteCategory,
    updateBookingStatus,
    updateLeadStatus,
    addPromotion,
    updatePromotion,
    deletePromotion,
    addMembership,
    updateMembership,
    deleteMembership,
    uploadMedia,
    deleteMedia,
    updateBusinessInfo,
  };
}
