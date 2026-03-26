/**
 * Booking management service (mock implementation).
 * All functions return { success, data, error } for consistent API contract.
 * Replace internals with real API calls when backend is ready.
 */

import { MOCK_BOOKINGS } from '../constants/bookingsMockData';

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getBookings() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: MOCK_BOOKINGS.map((item) => ({ ...item })), error: null };
}

export async function updateBookingStatus(id, status) {
  await delay(SIMULATED_DELAY);
  const updatedItem = { id, status, updatedAt: new Date().toISOString() };
  return { success: true, data: updatedItem, error: null };
}
