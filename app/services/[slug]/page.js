import { SERVICES } from '../../../src/constants/services';
import ServiceDetailClient from './ServiceDetailClient';

export function generateStaticParams() {
  return SERVICES.filter((s) => s.isActive !== false).map((s) => ({
    slug: s.slug,
  }));
}

export default function ServiceDetailPage() {
  return <ServiceDetailClient />;
}
