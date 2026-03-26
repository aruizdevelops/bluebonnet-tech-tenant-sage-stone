/**
 * Business info service (mock implementation).
 * All functions return { success, data, error } for consistent API contract.
 * Replace internals with real API calls when backend is ready.
 */

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_BUSINESS_INFO = {
  name: 'Sage & Stone Wellness',
  email: 'hello@sageandstone.com',
  phone: '(512) 555-0189',
  textPhone: '(512) 555-0190',
  website: 'https://www.sageandstone.com',
  address: '4200 Ridgeline Boulevard',
  suite: 'Suite 110',
  city: 'Austin',
  state: 'TX',
  zip: '78746',
  about: 'Where science meets serenity. Elevated wellness for body, skin, and spirit.',
  hours: [
    { days: 'Monday - Friday', open: '9:00 AM', close: '7:00 PM' },
    { days: 'Saturday', open: '9:00 AM', close: '6:00 PM' },
    { days: 'Sunday', open: '10:00 AM', close: '5:00 PM' },
  ],
};

export async function getBusinessInfo() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { ...MOCK_BUSINESS_INFO }, error: null };
}

export async function updateBusinessInfo(updates) {
  await delay(SIMULATED_DELAY);
  const updatedInfo = { ...MOCK_BUSINESS_INFO, ...updates, updatedAt: new Date().toISOString() };
  return { success: true, data: updatedInfo, error: null };
}
