import AdminShell from '../../src/admin/components/AdminShell';

export const metadata = {
  title: 'Admin | Sage & Stone Wellness',
  description: 'Administration dashboard for Sage & Stone Wellness.',
};

export default function AdminLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
