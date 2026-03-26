/**
 * Promotions CRUD service (mock implementation).
 * All functions return { success, data, error } for consistent API contract.
 * Replace internals with real API calls when backend is ready.
 */

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_PROMOTIONS = [
  {
    id: 'promo-001',
    title: 'Spring Renewal Package',
    description: 'Dermaplaning + Radiance Facial + LED Light Therapy at a special rate.',
    discountType: 'percentage',
    discountValue: 15,
    startDate: '2026-03-01',
    endDate: '2026-04-30',
    active: true,
    code: 'SPRING15',
    usageCount: 18,
    usageLimit: 50,
    createdAt: '2026-02-25T10:00:00Z',
  },
  {
    id: 'promo-002',
    title: 'New Guest Welcome Offer',
    description: '15% off your first service and a complimentary skincare consultation.',
    discountType: 'percentage',
    discountValue: 15,
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    active: true,
    code: 'WELCOME15',
    usageCount: 31,
    usageLimit: null,
    createdAt: '2026-01-01T00:00:00Z',
  },
  {
    id: 'promo-003',
    title: 'Friend Referral Reward',
    description: 'Refer a friend and both receive a $25 credit toward your next visit.',
    discountType: 'fixed',
    discountValue: 25,
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    active: true,
    code: 'REFER25',
    usageCount: 14,
    usageLimit: null,
    createdAt: '2026-01-01T00:00:00Z',
  },
];

export async function getPromotions() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: MOCK_PROMOTIONS.map((item) => ({ ...item })), error: null };
}

export async function createPromotion(item) {
  await delay(SIMULATED_DELAY);
  const now = new Date().toISOString();
  const newItem = {
    ...item,
    id: `promo-${Date.now()}`,
    usageCount: 0,
    createdAt: now,
    updatedAt: now,
  };
  return { success: true, data: newItem, error: null };
}

export async function updatePromotion(id, updates) {
  await delay(SIMULATED_DELAY);
  const updatedItem = { ...updates, id, updatedAt: new Date().toISOString() };
  return { success: true, data: updatedItem, error: null };
}

export async function deletePromotion(id) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { id }, error: null };
}
