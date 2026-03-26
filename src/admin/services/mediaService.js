/**
 * Media library service (mock implementation).
 * All functions return { success, data, error } for consistent API contract.
 * Replace internals with real API calls when backend is ready.
 */

const SIMULATED_DELAY = 300;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_MEDIA = [
  { id: 'media-001', name: 'spa-lobby.jpg', url: '/images/spa-lobby.jpg', type: 'image/jpeg', size: 245000, usedIn: 1, createdAt: '2026-01-15T10:00:00Z' },
  { id: 'media-002', name: 'massage-room.jpg', url: '/images/massage-room.jpg', type: 'image/jpeg', size: 312000, usedIn: 3, createdAt: '2026-01-15T10:05:00Z' },
  { id: 'media-003', name: 'facial-treatment.jpg', url: '/images/facial-treatment.jpg', type: 'image/jpeg', size: 198000, usedIn: 2, createdAt: '2026-01-20T14:30:00Z' },
  { id: 'media-004', name: 'head-spa.jpg', url: '/images/head-spa.jpg', type: 'image/jpeg', size: 275000, usedIn: 1, createdAt: '2026-02-01T09:00:00Z' },
  { id: 'media-005', name: 'couples-suite.jpg', url: '/images/couples-suite.jpg', type: 'image/jpeg', size: 340000, usedIn: 1, createdAt: '2026-02-10T11:20:00Z' },
  { id: 'media-006', name: 'product-display.jpg', url: '/images/product-display.jpg', type: 'image/jpeg', size: 156000, usedIn: 0, createdAt: '2026-02-15T16:45:00Z' },
];

export async function getMedia() {
  await delay(SIMULATED_DELAY);
  return { success: true, data: MOCK_MEDIA.map((item) => ({ ...item })), error: null };
}

export async function uploadMedia(file) {
  await delay(SIMULATED_DELAY);
  const now = new Date().toISOString();
  const newItem = {
    id: `media-${Date.now()}`,
    name: file.name || 'uploaded-image.jpg',
    url: `/images/${file.name || 'uploaded-image.jpg'}`,
    type: file.type || 'image/jpeg',
    size: file.size || 0,
    usedIn: 0,
    createdAt: now,
  };
  return { success: true, data: newItem, error: null };
}

export async function deleteMedia(id) {
  await delay(SIMULATED_DELAY);
  return { success: true, data: { id }, error: null };
}
