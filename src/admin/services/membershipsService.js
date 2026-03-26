/**
 * Membership management service (mock implementation).
 * All functions return { success, data, error } for consistent API contract.
 * Replace internals with real API calls when backend is ready.
 */

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_MEMBERSHIPS = [
  {
    id: 'mem-001',
    tier: 'Essential',
    price: 99,
    billingCycle: 'monthly',
    activeMembers: 34,
    description: 'One signature service per month, 10% off additional treatments, priority booking.',
    features: ['1 signature service/month', '10% off additional treatments', 'Priority booking'],
    active: true,
    createdAt: '2026-01-01T00:00:00Z',
  },
  {
    id: 'mem-002',
    tier: 'Elevated',
    price: 189,
    billingCycle: 'monthly',
    activeMembers: 18,
    description: 'One premium service per month, 15% off all additional treatments, complimentary add-ons.',
    features: ['1 premium service/month', '15% off all treatments', 'Complimentary add-ons', 'Member events'],
    active: true,
    createdAt: '2026-01-01T00:00:00Z',
  },
  {
    id: 'mem-003',
    tier: 'Luxe',
    price: 299,
    billingCycle: 'monthly',
    activeMembers: 8,
    description: 'Two premium services per month, 20% off all additional treatments, VIP scheduling.',
    features: ['2 premium services/month', '20% off all treatments', 'Complimentary upgrades', 'VIP scheduling', 'Quarterly gift'],
    active: true,
    createdAt: '2026-01-01T00:00:00Z',
  },
];

export async function getMemberships() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: MOCK_MEMBERSHIPS.map((item) => ({ ...item })), error: null };
}

export async function createMembership(item) {
  await delay(SIMULATED_DELAY);
  const now = new Date().toISOString();
  const newItem = {
    ...item,
    id: `mem-${Date.now()}`,
    activeMembers: 0,
    createdAt: now,
    updatedAt: now,
  };
  return { success: true, data: newItem, error: null };
}

export async function updateMembership(id, updates) {
  await delay(SIMULATED_DELAY);
  const updatedItem = { ...updates, id, updatedAt: new Date().toISOString() };
  return { success: true, data: updatedItem, error: null };
}

export async function deleteMembership(id) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { id }, error: null };
}
