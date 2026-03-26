/**
 * Spa services CRUD service (mock implementation).
 * All functions return { success, data, error } for consistent API contract.
 * Replace internals with real API calls when backend is ready.
 */

import { SERVICES, SERVICE_CATEGORIES } from '../../constants/services';

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getServices() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: SERVICES.map((item) => ({ ...item })), error: null };
}

export async function createService(item) {
  await delay(SIMULATED_DELAY);
  const now = new Date().toISOString();
  const newItem = {
    ...item,
    id: `svc-${Date.now()}`,
    slug: item.slug || item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    createdAt: now,
    updatedAt: now,
  };
  return { success: true, data: newItem, error: null };
}

export async function updateService(id, updates) {
  await delay(SIMULATED_DELAY);
  const updatedItem = { ...updates, id, updatedAt: new Date().toISOString() };
  return { success: true, data: updatedItem, error: null };
}

export async function deleteService(id) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { id }, error: null };
}

export async function getCategories() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: SERVICE_CATEGORIES.map((cat) => ({ ...cat })), error: null };
}

export async function createCategory(item) {
  await delay(SIMULATED_DELAY);
  const now = new Date().toISOString();
  const newItem = {
    ...item,
    id: `cat-${Date.now()}`,
    createdAt: now,
    updatedAt: now,
  };
  return { success: true, data: newItem, error: null };
}

export async function updateCategory(id, updates) {
  await delay(SIMULATED_DELAY);
  const updatedItem = { ...updates, id, updatedAt: new Date().toISOString() };
  return { success: true, data: updatedItem, error: null };
}

export async function deleteCategory(id) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { id }, error: null };
}
