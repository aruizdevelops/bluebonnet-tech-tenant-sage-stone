/**
 * Service catalog for Sage & Stone Wellness.
 * All placeholder content — does not copy or replicate any real business data.
 */

export const SERVICE_CATEGORIES = [
  {
    id: 'massage',
    nameKey: 'serviceCategories.massage.name',
    icon: 'Spa',
    descriptionKey: 'serviceCategories.massage.description',
  },
  {
    id: 'body-treatments',
    nameKey: 'serviceCategories.bodyTreatments.name',
    icon: 'SelfImprovement',
    descriptionKey: 'serviceCategories.bodyTreatments.description',
  },
  {
    id: 'facials',
    nameKey: 'serviceCategories.facials.name',
    icon: 'Face',
    descriptionKey: 'serviceCategories.facials.description',
  },
  {
    id: 'injectables',
    nameKey: 'serviceCategories.injectables.name',
    icon: 'AutoFixHigh',
    descriptionKey: 'serviceCategories.injectables.description',
  },
  {
    id: 'skin-treatments',
    nameKey: 'serviceCategories.skinTreatments.name',
    icon: 'AutoAwesome',
    descriptionKey: 'serviceCategories.skinTreatments.description',
  },
  {
    id: 'head-spa',
    nameKey: 'serviceCategories.headSpa.name',
    icon: 'WaterDrop',
    descriptionKey: 'serviceCategories.headSpa.description',
  },
  {
    id: 'packages',
    nameKey: 'serviceCategories.packages.name',
    icon: 'CardGiftcard',
    descriptionKey: 'serviceCategories.packages.description',
  },
];

export const SERVICES = [
  // ── Massage ──────────────────────────────────────────────
  {
    id: 'swedish-massage',
    slug: 'swedish-massage',
    category: 'massage',
    nameKey: 'services.swedishMassage.name',
    descriptionKey: 'services.swedishMassage.shortDescription',
    fullDescriptionKey: 'services.swedishMassage.fullDescription',
    durationKey: 'services.swedishMassage.duration',
    priceLabelKey: 'services.swedishMassage.priceLabel',
    featured: false,
    active: true,
    consultationRequired: false,
    icon: 'Spa',
  },
  {
    id: 'deep-tissue-massage',
    slug: 'deep-tissue-massage',
    category: 'massage',
    nameKey: 'services.deepTissueMassage.name',
    descriptionKey: 'services.deepTissueMassage.shortDescription',
    fullDescriptionKey: 'services.deepTissueMassage.fullDescription',
    durationKey: 'services.deepTissueMassage.duration',
    priceLabelKey: 'services.deepTissueMassage.priceLabel',
    featured: true,
    active: true,
    consultationRequired: false,
    icon: 'Spa',
  },
  {
    id: 'prenatal-massage',
    slug: 'prenatal-massage',
    category: 'massage',
    nameKey: 'services.prenatalMassage.name',
    descriptionKey: 'services.prenatalMassage.shortDescription',
    fullDescriptionKey: 'services.prenatalMassage.fullDescription',
    durationKey: 'services.prenatalMassage.duration',
    priceLabelKey: 'services.prenatalMassage.priceLabel',
    featured: false,
    active: true,
    consultationRequired: false,
    icon: 'Spa',
  },
  {
    id: 'couples-massage',
    slug: 'couples-massage',
    category: 'massage',
    nameKey: 'services.couplesMassage.name',
    descriptionKey: 'services.couplesMassage.shortDescription',
    fullDescriptionKey: 'services.couplesMassage.fullDescription',
    durationKey: 'services.couplesMassage.duration',
    priceLabelKey: 'services.couplesMassage.priceLabel',
    featured: true,
    active: true,
    consultationRequired: false,
    icon: 'Favorite',
  },
  {
    id: 'lymphatic-drainage-massage',
    slug: 'lymphatic-drainage-massage',
    category: 'massage',
    nameKey: 'services.lymphaticDrainageMassage.name',
    descriptionKey: 'services.lymphaticDrainageMassage.shortDescription',
    fullDescriptionKey: 'services.lymphaticDrainageMassage.fullDescription',
    durationKey: 'services.lymphaticDrainageMassage.duration',
    priceLabelKey: 'services.lymphaticDrainageMassage.priceLabel',
    featured: false,
    active: true,
    consultationRequired: false,
    icon: 'Spa',
  },

  // ── Head Spa ─────────────────────────────────────────────
  {
    id: 'head-spa-ritual',
    slug: 'head-spa-ritual',
    category: 'head-spa',
    nameKey: 'services.headSpaRitual.name',
    descriptionKey: 'services.headSpaRitual.shortDescription',
    fullDescriptionKey: 'services.headSpaRitual.fullDescription',
    durationKey: 'services.headSpaRitual.duration',
    priceLabelKey: 'services.headSpaRitual.priceLabel',
    featured: true,
    active: true,
    consultationRequired: false,
    icon: 'WaterDrop',
  },

  // ── Body Treatments ──────────────────────────────────────
  {
    id: 'korean-body-scrub',
    slug: 'korean-body-scrub',
    category: 'body-treatments',
    nameKey: 'services.koreanBodyScrub.name',
    descriptionKey: 'services.koreanBodyScrub.shortDescription',
    fullDescriptionKey: 'services.koreanBodyScrub.fullDescription',
    durationKey: 'services.koreanBodyScrub.duration',
    priceLabelKey: 'services.koreanBodyScrub.priceLabel',
    featured: false,
    active: true,
    consultationRequired: false,
    icon: 'SelfImprovement',
  },
  {
    id: 'detox-body-wrap',
    slug: 'detox-body-wrap',
    category: 'body-treatments',
    nameKey: 'services.detoxBodyWrap.name',
    descriptionKey: 'services.detoxBodyWrap.shortDescription',
    fullDescriptionKey: 'services.detoxBodyWrap.fullDescription',
    durationKey: 'services.detoxBodyWrap.duration',
    priceLabelKey: 'services.detoxBodyWrap.priceLabel',
    featured: false,
    active: true,
    consultationRequired: false,
    icon: 'SelfImprovement',
  },

  // ── Facials ──────────────────────────────────────────────
  {
    id: 'signature-facial',
    slug: 'signature-facial',
    category: 'facials',
    nameKey: 'services.signatureFacial.name',
    descriptionKey: 'services.signatureFacial.shortDescription',
    fullDescriptionKey: 'services.signatureFacial.fullDescription',
    durationKey: 'services.signatureFacial.duration',
    priceLabelKey: 'services.signatureFacial.priceLabel',
    featured: true,
    active: true,
    consultationRequired: false,
    icon: 'Face',
  },
  {
    id: 'radiance-facial',
    slug: 'radiance-facial',
    category: 'facials',
    nameKey: 'services.radianceFacial.name',
    descriptionKey: 'services.radianceFacial.shortDescription',
    fullDescriptionKey: 'services.radianceFacial.fullDescription',
    durationKey: 'services.radianceFacial.duration',
    priceLabelKey: 'services.radianceFacial.priceLabel',
    featured: false,
    active: true,
    consultationRequired: false,
    icon: 'Face',
  },
  {
    id: 'acne-clarifying-facial',
    slug: 'acne-clarifying-facial',
    category: 'facials',
    nameKey: 'services.acneClarifyingFacial.name',
    descriptionKey: 'services.acneClarifyingFacial.shortDescription',
    fullDescriptionKey: 'services.acneClarifyingFacial.fullDescription',
    durationKey: 'services.acneClarifyingFacial.duration',
    priceLabelKey: 'services.acneClarifyingFacial.priceLabel',
    featured: false,
    active: true,
    consultationRequired: false,
    icon: 'Face',
  },
  {
    id: 'anti-aging-facial',
    slug: 'anti-aging-facial',
    category: 'facials',
    nameKey: 'services.antiAgingFacial.name',
    descriptionKey: 'services.antiAgingFacial.shortDescription',
    fullDescriptionKey: 'services.antiAgingFacial.fullDescription',
    durationKey: 'services.antiAgingFacial.duration',
    priceLabelKey: 'services.antiAgingFacial.priceLabel',
    featured: true,
    active: true,
    consultationRequired: false,
    icon: 'Face',
  },

  // ── Injectables ──────────────────────────────────────────
  {
    id: 'botox-dysport',
    slug: 'botox-dysport',
    category: 'injectables',
    nameKey: 'services.botoxDysport.name',
    descriptionKey: 'services.botoxDysport.shortDescription',
    fullDescriptionKey: 'services.botoxDysport.fullDescription',
    durationKey: 'services.botoxDysport.duration',
    priceLabelKey: 'services.botoxDysport.priceLabel',
    featured: true,
    active: true,
    consultationRequired: true,
    icon: 'AutoFixHigh',
  },
  {
    id: 'dermal-fillers',
    slug: 'dermal-fillers',
    category: 'injectables',
    nameKey: 'services.dermalFillers.name',
    descriptionKey: 'services.dermalFillers.shortDescription',
    fullDescriptionKey: 'services.dermalFillers.fullDescription',
    durationKey: 'services.dermalFillers.duration',
    priceLabelKey: 'services.dermalFillers.priceLabel',
    featured: false,
    active: true,
    consultationRequired: true,
    icon: 'AutoFixHigh',
  },

  // ── Skin Treatments ──────────────────────────────────────
  {
    id: 'chemical-peel',
    slug: 'chemical-peel',
    category: 'skin-treatments',
    nameKey: 'services.chemicalPeel.name',
    descriptionKey: 'services.chemicalPeel.shortDescription',
    fullDescriptionKey: 'services.chemicalPeel.fullDescription',
    durationKey: 'services.chemicalPeel.duration',
    priceLabelKey: 'services.chemicalPeel.priceLabel',
    featured: false,
    active: true,
    consultationRequired: true,
    icon: 'AutoAwesome',
  },
  {
    id: 'microneedling',
    slug: 'microneedling',
    category: 'skin-treatments',
    nameKey: 'services.microneedling.name',
    descriptionKey: 'services.microneedling.shortDescription',
    fullDescriptionKey: 'services.microneedling.fullDescription',
    durationKey: 'services.microneedling.duration',
    priceLabelKey: 'services.microneedling.priceLabel',
    featured: true,
    active: true,
    consultationRequired: true,
    icon: 'AutoAwesome',
  },
  {
    id: 'dermaplaning',
    slug: 'dermaplaning',
    category: 'skin-treatments',
    nameKey: 'services.dermaplaning.name',
    descriptionKey: 'services.dermaplaning.shortDescription',
    fullDescriptionKey: 'services.dermaplaning.fullDescription',
    durationKey: 'services.dermaplaning.duration',
    priceLabelKey: 'services.dermaplaning.priceLabel',
    featured: false,
    active: true,
    consultationRequired: false,
    icon: 'AutoAwesome',
  },
  {
    id: 'led-light-therapy',
    slug: 'led-light-therapy',
    category: 'skin-treatments',
    nameKey: 'services.ledLightTherapy.name',
    descriptionKey: 'services.ledLightTherapy.shortDescription',
    fullDescriptionKey: 'services.ledLightTherapy.fullDescription',
    durationKey: 'services.ledLightTherapy.duration',
    priceLabelKey: 'services.ledLightTherapy.priceLabel',
    featured: false,
    active: true,
    consultationRequired: false,
    icon: 'LightMode',
  },
  {
    id: 'body-contouring',
    slug: 'body-contouring',
    category: 'skin-treatments',
    nameKey: 'services.bodyContouring.name',
    descriptionKey: 'services.bodyContouring.shortDescription',
    fullDescriptionKey: 'services.bodyContouring.fullDescription',
    durationKey: 'services.bodyContouring.duration',
    priceLabelKey: 'services.bodyContouring.priceLabel',
    featured: false,
    active: true,
    consultationRequired: true,
    icon: 'FitnessCenter',
  },

  // ── Packages ─────────────────────────────────────────────
  {
    id: 'relaxation-package',
    slug: 'relaxation-package',
    category: 'packages',
    nameKey: 'services.relaxationPackage.name',
    descriptionKey: 'services.relaxationPackage.shortDescription',
    fullDescriptionKey: 'services.relaxationPackage.fullDescription',
    durationKey: 'services.relaxationPackage.duration',
    priceLabelKey: 'services.relaxationPackage.priceLabel',
    featured: true,
    active: true,
    consultationRequired: false,
    icon: 'CardGiftcard',
  },
];

/**
 * Helper — return only active services.
 */
export function getActiveServices() {
  return SERVICES.filter((s) => s.active);
}

/**
 * Helper — return featured services.
 */
export function getFeaturedServices() {
  return SERVICES.filter((s) => s.featured && s.active);
}

/**
 * Helper — return services requiring consultation.
 */
export function getConsultationServices() {
  return SERVICES.filter((s) => s.consultationRequired && s.active);
}

/**
 * Helper — return services for a given category id.
 */
export function getServicesByCategory(categoryId) {
  return SERVICES.filter((s) => s.category === categoryId && s.active);
}

/**
 * Helper — find a service by slug.
 */
export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug) || null;
}
