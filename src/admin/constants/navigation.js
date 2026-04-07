import DashboardIcon from '@mui/icons-material/Dashboard';
import SpaIcon from '@mui/icons-material/Spa';
import CategoryIcon from '@mui/icons-material/Category';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PeopleIcon from '@mui/icons-material/People';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import StoreIcon from '@mui/icons-material/Store';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function getAdminNavItems(t) {
  return [
    { label: t('admin.nav.dashboard'), icon: <DashboardIcon />, path: `${basePath}/admin` },
    { label: t('admin.nav.services'), icon: <SpaIcon />, path: `${basePath}/admin/services` },
    { label: t('admin.nav.categories'), icon: <CategoryIcon />, path: `${basePath}/admin/categories` },
    { label: t('admin.nav.bookings'), icon: <EventNoteIcon />, path: `${basePath}/admin/bookings` },
    { label: t('admin.nav.leads'), icon: <ContactMailIcon />, path: `${basePath}/admin/leads` },
    { label: t('admin.nav.promotions'), icon: <LocalOfferIcon />, path: `${basePath}/admin/promotions` },
    { label: t('admin.nav.memberships'), icon: <CardMembershipIcon />, path: `${basePath}/admin/memberships` },
    { label: t('admin.nav.giftCards'), icon: <CardGiftcardIcon />, path: `${basePath}/admin/gift-cards` },
    { label: t('admin.nav.staff'), icon: <PeopleIcon />, path: `${basePath}/admin/staff` },
    { label: t('admin.nav.media'), icon: <PhotoLibraryIcon />, path: `${basePath}/admin/media` },
    { label: t('admin.nav.businessInfo'), icon: <StoreIcon />, path: `${basePath}/admin/business` },
    { label: t('admin.nav.analytics'), icon: <BarChartIcon />, path: `${basePath}/admin/analytics` },
    { label: t('admin.nav.settings'), icon: <SettingsIcon />, path: `${basePath}/admin/settings` },
  ];
}
