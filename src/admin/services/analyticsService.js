/**
 * Analytics service (mock implementation).
 * All functions return { success, data, error } for consistent API contract.
 * Replace internals with real analytics API when backend is ready.
 */

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_ANALYTICS = {
  pageViews: {
    total: 12480,
    trend: 8.3,
    topPages: [
      { page: 'Home', views: 4820 },
      { page: 'Services', views: 3150 },
      { page: 'Book Now', views: 1890 },
      { page: 'About', views: 1240 },
      { page: 'Specials', views: 780 },
      { page: 'Memberships', views: 600 },
    ],
  },
  bookingTrends: {
    total: 342,
    trend: 9.6,
    byChannel: [
      { channel: 'Website', bookings: 198 },
      { channel: 'Phone', bookings: 89 },
      { channel: 'Walk-in', bookings: 34 },
      { channel: 'Referral', bookings: 21 },
    ],
  },
  popularServices: [
    { name: 'Deep Tissue Massage', bookings: 58, revenue: 8120 },
    { name: 'Signature Facial', bookings: 42, revenue: 6510 },
    { name: 'Botox & Dysport', bookings: 34, revenue: 8160 },
    { name: 'Couples Massage', bookings: 28, revenue: 7840 },
    { name: 'Microneedling', bookings: 22, revenue: 6600 },
  ],
  clientRetention: {
    newClients: 47,
    returningClients: 128,
    retentionRate: 73.1,
  },
  revenueByMonth: [
    { month: 'Oct 2025', revenue: 35200 },
    { month: 'Nov 2025', revenue: 38400 },
    { month: 'Dec 2025', revenue: 41800 },
    { month: 'Jan 2026', revenue: 39610 },
    { month: 'Feb 2026', revenue: 44480 },
    { month: 'Mar 2026', revenue: 48750 },
  ],
};

export async function getAnalytics() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { ...MOCK_ANALYTICS }, error: null };
}
