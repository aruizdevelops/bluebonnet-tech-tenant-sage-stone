/**
 * Mock dashboard analytics data for Sage & Stone Wellness.
 * MOCK DATA - Replace with real analytics/reporting API when backend is ready.
 */

export const MOCK_KPIS = {
  totalBookings: 342,
  totalRevenue: 48750,
  avgBookingValue: 142.54,
  newClients: 47,
  consultationRequests: 23,
  topService: 'Deep Tissue Massage',
  membershipSignups: 12,
  totalServices: 21,
  unavailableServices: 0,
  activeSpecials: 3,
};

export const MOCK_BOOKINGS_BY_CATEGORY = [
  { category: 'Massage Therapy', bookings: 124, revenue: 17360 },
  { category: 'Facials', bookings: 78, revenue: 13260 },
  { category: 'Skin Treatments', bookings: 52, revenue: 10400 },
  { category: 'Injectables', bookings: 38, revenue: 9120 },
  { category: 'Body Treatments', bookings: 28, revenue: 4760 },
  { category: 'Head Spa', bookings: 15, revenue: 2475 },
  { category: 'Packages', bookings: 7, revenue: 2975 },
];

export const MOCK_TOP_SERVICES = [
  { name: 'Deep Tissue Massage', bookings: 58, revenue: 8120, trend: 12 },
  { name: 'Signature Facial', bookings: 42, revenue: 6510, trend: 8 },
  { name: 'Botox & Dysport', bookings: 34, revenue: 8160, trend: 15 },
  { name: 'Couples Massage', bookings: 28, revenue: 7840, trend: -2 },
  { name: 'Microneedling', bookings: 22, revenue: 6600, trend: 20 },
];

export const MOCK_LOW_PERFORMERS = [
  { name: 'LED Light Therapy', bookings: 4, reason: 'Low awareness among clients' },
  { name: 'Detox Body Wrap', bookings: 6, reason: 'Seasonal demand drop' },
  { name: 'Dermaplaning', bookings: 8, reason: 'Often booked as add-on only' },
];

export const MOCK_BUSIEST_HOURS = [
  { hour: '9 AM', bookings: 18 },
  { hour: '10 AM', bookings: 34 },
  { hour: '11 AM', bookings: 42 },
  { hour: '12 PM', bookings: 28 },
  { hour: '1 PM', bookings: 38 },
  { hour: '2 PM', bookings: 45 },
  { hour: '3 PM', bookings: 52 },
  { hour: '4 PM', bookings: 48 },
  { hour: '5 PM', bookings: 36 },
  { hour: '6 PM', bookings: 22 },
];

export const MOCK_SPECIALS_PERFORMANCE = [
  { title: 'Spring Renewal Package', bookings: 18, views: 245, conversionRate: 7.3, revenue: 3420 },
  { title: 'New Guest Welcome Offer', bookings: 31, views: 520, conversionRate: 6.0, revenue: 4030 },
  { title: 'Friend Referral Reward', bookings: 14, views: 180, conversionRate: 7.8, revenue: 1890 },
];

export const MOCK_FEATURED_PERFORMANCE = [
  { name: 'Deep Tissue Massage', bookings: 58, views: 890, conversionRate: 6.5 },
  { name: 'Signature Facial', bookings: 42, views: 720, conversionRate: 5.8 },
  { name: 'Botox & Dysport', bookings: 34, views: 680, conversionRate: 5.0 },
  { name: 'Head Spa Ritual', bookings: 15, views: 340, conversionRate: 4.4 },
];

export const MOCK_WEEKLY_TRENDS = [
  { period: 'Mon', bookings: 38, revenue: 5416 },
  { period: 'Tue', bookings: 42, revenue: 5988 },
  { period: 'Wed', bookings: 48, revenue: 6844 },
  { period: 'Thu', bookings: 52, revenue: 7412 },
  { period: 'Fri', bookings: 58, revenue: 8270 },
  { period: 'Sat', bookings: 64, revenue: 9124 },
  { period: 'Sun', bookings: 40, revenue: 5704 },
];

export const MOCK_MONTHLY_TRENDS = [
  { period: 'Jan', bookings: 278, revenue: 39610 },
  { period: 'Feb', bookings: 312, revenue: 44480 },
  { period: 'Mar', bookings: 342, revenue: 48750 },
];

export const MOCK_BOOKING_STATUS_BREAKDOWN = [
  { status: 'Completed', count: 218, color: '#7C9A6E' },
  { status: 'Confirmed', count: 68, color: '#8BA4B8' },
  { status: 'Pending', count: 34, color: '#D4A054' },
  { status: 'Cancelled', count: 22, color: '#C4454A' },
];

export const MOCK_RECENT_ACTIVITY = [
  { id: 'act-1', type: 'booking', message: 'New booking: Deep Tissue Massage for Catherine M.', time: '5 minutes ago' },
  { id: 'act-2', type: 'lead', message: 'New consultation request from James R. (Botox & Dysport)', time: '18 minutes ago' },
  { id: 'act-3', type: 'booking', message: 'Booking confirmed: Signature Facial for Priya S.', time: '32 minutes ago' },
  { id: 'act-4', type: 'membership', message: 'New membership signup: Elevated tier - Lauren T.', time: '1 hour ago' },
  { id: 'act-5', type: 'booking', message: 'Booking completed: Couples Massage for David & Maria K.', time: '1.5 hours ago' },
  { id: 'act-6', type: 'lead', message: 'Lead status updated to Contacted: Amanda F. (Microneedling)', time: '2 hours ago' },
  { id: 'act-7', type: 'booking', message: 'New booking: Korean Body Scrub for Daniela R.', time: '2.5 hours ago' },
  { id: 'act-8', type: 'special', message: 'Spring Renewal Package redeemed by Sophia L.', time: '3 hours ago' },
];
