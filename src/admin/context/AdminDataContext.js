'use client';

import { createContext, useReducer, useEffect } from 'react';
import { getServices, getCategories } from '../services/servicesService';
import { getBookings } from '../services/bookingsService';
import { getLeads } from '../services/leadsService';
import { getPromotions } from '../services/promotionsService';
import { getMemberships } from '../services/membershipsService';
import { getMedia } from '../services/mediaService';
import { getBusinessInfo } from '../services/businessService';

const AdminDataContext = createContext(null);

const initialState = {
  services: [],
  categories: [],
  bookings: [],
  leads: [],
  promotions: [],
  memberships: [],
  giftCards: [],
  staff: [],
  media: [],
  businessInfo: null,
  isLoading: true,
  error: null,
};

function adminReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'INIT_DATA':
      return { ...state, ...action.payload, isLoading: false };

    // Services
    case 'SET_SERVICES':
      return { ...state, services: action.payload };
    case 'ADD_SERVICE':
      return { ...state, services: [...state.services, action.payload] };
    case 'UPDATE_SERVICE':
      return {
        ...state,
        services: state.services.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    case 'DELETE_SERVICE':
      return {
        ...state,
        services: state.services.filter((item) => item.id !== action.payload),
      };

    // Categories
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'ADD_CATEGORY':
      return { ...state, categories: [...state.categories, action.payload] };
    case 'UPDATE_CATEGORY':
      return {
        ...state,
        categories: state.categories.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    case 'DELETE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter((item) => item.id !== action.payload),
      };

    // Bookings
    case 'SET_BOOKINGS':
      return { ...state, bookings: action.payload };
    case 'UPDATE_BOOKING':
      return {
        ...state,
        bookings: state.bookings.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };

    // Leads
    case 'SET_LEADS':
      return { ...state, leads: action.payload };
    case 'UPDATE_LEAD':
      return {
        ...state,
        leads: state.leads.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };

    // Promotions
    case 'SET_PROMOTIONS':
      return { ...state, promotions: action.payload };
    case 'ADD_PROMOTION':
      return { ...state, promotions: [...state.promotions, action.payload] };
    case 'UPDATE_PROMOTION':
      return {
        ...state,
        promotions: state.promotions.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    case 'DELETE_PROMOTION':
      return {
        ...state,
        promotions: state.promotions.filter((item) => item.id !== action.payload),
      };

    // Memberships
    case 'SET_MEMBERSHIPS':
      return { ...state, memberships: action.payload };
    case 'ADD_MEMBERSHIP':
      return { ...state, memberships: [...state.memberships, action.payload] };
    case 'UPDATE_MEMBERSHIP':
      return {
        ...state,
        memberships: state.memberships.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    case 'DELETE_MEMBERSHIP':
      return {
        ...state,
        memberships: state.memberships.filter((item) => item.id !== action.payload),
      };

    // Gift Cards
    case 'SET_GIFT_CARDS':
      return { ...state, giftCards: action.payload };

    // Staff
    case 'SET_STAFF':
      return { ...state, staff: action.payload };

    // Media
    case 'SET_MEDIA':
      return { ...state, media: action.payload };
    case 'ADD_MEDIA':
      return { ...state, media: [...state.media, action.payload] };
    case 'DELETE_MEDIA':
      return {
        ...state,
        media: state.media.filter((item) => item.id !== action.payload),
      };

    // Business info
    case 'SET_BUSINESS_INFO':
      return { ...state, businessInfo: action.payload };

    default:
      return state;
  }
}

export function AdminDataProvider({ children }) {
  const [state, dispatch] = useReducer(adminReducer, initialState);

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      try {
        const [
          servicesResult,
          categoriesResult,
          bookingsResult,
          leadsResult,
          promotionsResult,
          membershipsResult,
          mediaResult,
          businessResult,
        ] = await Promise.all([
          getServices(),
          getCategories(),
          getBookings(),
          getLeads(),
          getPromotions(),
          getMemberships(),
          getMedia(),
          getBusinessInfo(),
        ]);

        if (cancelled) return;

        dispatch({
          type: 'INIT_DATA',
          payload: {
            services: servicesResult.data,
            categories: categoriesResult.data,
            bookings: bookingsResult.data,
            leads: leadsResult.data,
            promotions: promotionsResult.data,
            memberships: membershipsResult.data,
            media: mediaResult.data,
            businessInfo: businessResult.data,
          },
        });
      } catch (err) {
        if (!cancelled) {
          dispatch({ type: 'SET_ERROR', payload: err.message });
        }
      }
    }

    loadData();
    return () => { cancelled = true; };
  }, []);

  const value = { state, dispatch };

  return (
    <AdminDataContext.Provider value={value}>
      {children}
    </AdminDataContext.Provider>
  );
}

export default AdminDataContext;
