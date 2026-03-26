/**
 * Lead/inquiry management service (mock implementation).
 * All functions return { success, data, error } for consistent API contract.
 * Replace internals with real API calls when backend is ready.
 */

import { MOCK_LEADS } from '../constants/leadsMockData';

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getLeads() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: MOCK_LEADS.map((item) => ({ ...item })), error: null };
}

export async function updateLeadStatus(id, status) {
  await delay(SIMULATED_DELAY);
  const updatedItem = { id, status, updatedAt: new Date().toISOString() };
  return { success: true, data: updatedItem, error: null };
}
