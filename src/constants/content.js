/**
 * Content for the Sage & Stone Wellness tenant app.
 * All placeholder content — does not copy or replicate any real business data.
 *
 * Each export is a function that accepts a `t` (translate) function
 * and returns the same object shapes the components expect.
 */

export function getHero(t) {
  return {
    overline: t('hero.overline'),
    headline: t('hero.headline'),
    subtitle: t('hero.subtitle'),
    primaryCta: t('hero.primaryCta'),
    secondaryCta: t('hero.secondaryCta'),
  };
}

export function getServiceCategories(t) {
  return {
    overline: t('serviceCategories.overline'),
    headline: t('serviceCategories.headline'),
    subtitle: t('serviceCategories.subtitle'),
    items: [
      {
        title: t('serviceCategories.daySpa.title'),
        description: t('serviceCategories.daySpa.description'),
        icon: 'Spa',
        href: '#day-spa',
        subcategories: [
          t('serviceCategories.daySpa.sub.massage'),
          t('serviceCategories.daySpa.sub.bodyTreatments'),
          t('serviceCategories.daySpa.sub.headSpa'),
          t('serviceCategories.daySpa.sub.packages'),
        ],
      },
      {
        title: t('serviceCategories.medSpa.title'),
        description: t('serviceCategories.medSpa.description'),
        icon: 'AutoAwesome',
        href: '#med-spa',
        subcategories: [
          t('serviceCategories.medSpa.sub.facials'),
          t('serviceCategories.medSpa.sub.injectables'),
          t('serviceCategories.medSpa.sub.skinTreatments'),
          t('serviceCategories.medSpa.sub.bodyContouring'),
        ],
      },
    ],
  };
}

export function getAbout(t) {
  return {
    overline: t('about.overline'),
    headline: t('about.headline'),
    description: t('about.description'),
    highlights: [
      t('about.highlight1'),
      t('about.highlight2'),
      t('about.highlight3'),
      t('about.highlight4'),
    ],
  };
}

export function getBenefits(t) {
  return {
    overline: t('benefits.overline'),
    headline: t('benefits.headline'),
    items: [
      {
        title: t('benefits.expertise.title'),
        description: t('benefits.expertise.description'),
        icon: 'Verified',
      },
      {
        title: t('benefits.personalized.title'),
        description: t('benefits.personalized.description'),
        icon: 'Tune',
      },
      {
        title: t('benefits.luxury.title'),
        description: t('benefits.luxury.description'),
        icon: 'AutoAwesome',
      },
      {
        title: t('benefits.results.title'),
        description: t('benefits.results.description'),
        icon: 'TrendingUp',
      },
    ],
  };
}

export function getProcess(t) {
  return {
    overline: t('process.overline'),
    headline: t('process.headline'),
    subtitle: t('process.subtitle'),
    steps: [
      {
        number: '01',
        title: t('process.consult.title'),
        description: t('process.consult.description'),
      },
      {
        number: '02',
        title: t('process.customize.title'),
        description: t('process.customize.description'),
      },
      {
        number: '03',
        title: t('process.transform.title'),
        description: t('process.transform.description'),
      },
      {
        number: '04',
        title: t('process.maintain.title'),
        description: t('process.maintain.description'),
      },
    ],
  };
}

export function getTestimonials(t) {
  return {
    overline: t('testimonials.overline'),
    headline: t('testimonials.headline'),
    items: [
      {
        quote: t('testimonials.jessica.quote'),
        name: 'Jessica M.',
        role: t('testimonials.jessica.role'),
        company: 'Austin, TX',
        rating: 5,
      },
      {
        quote: t('testimonials.carlos.quote'),
        name: 'Carlos D.',
        role: t('testimonials.carlos.role'),
        company: 'Round Rock, TX',
        rating: 5,
      },
      {
        quote: t('testimonials.rachel.quote'),
        name: 'Rachel T.',
        role: t('testimonials.rachel.role'),
        company: 'Cedar Park, TX',
        rating: 5,
      },
      {
        quote: t('testimonials.anya.quote'),
        name: 'Anya P.',
        role: t('testimonials.anya.role'),
        company: 'Lakeway, TX',
        rating: 5,
      },
    ],
  };
}

export function getFaq(t) {
  return {
    overline: t('faq.overline'),
    headline: t('faq.headline'),
    items: [
      {
        question: t('faq.firstVisit.question'),
        answer: t('faq.firstVisit.answer'),
      },
      {
        question: t('faq.arriveEarly.question'),
        answer: t('faq.arriveEarly.answer'),
      },
      {
        question: t('faq.injectablesSafe.question'),
        answer: t('faq.injectablesSafe.answer'),
      },
      {
        question: t('faq.facialFrequency.question'),
        answer: t('faq.facialFrequency.answer'),
      },
      {
        question: t('faq.cancellationPolicy.question'),
        answer: t('faq.cancellationPolicy.answer'),
      },
      {
        question: t('faq.giftCards.question'),
        answer: t('faq.giftCards.answer'),
      },
      {
        question: t('faq.pregnancySafe.question'),
        answer: t('faq.pregnancySafe.answer'),
      },
      {
        question: t('faq.membershipWorth.question'),
        answer: t('faq.membershipWorth.answer'),
      },
      {
        question: t('faq.downtime.question'),
        answer: t('faq.downtime.answer'),
      },
    ],
  };
}

export function getSpecials(t) {
  return {
    overline: t('specials.overline'),
    headline: t('specials.headline'),
    subtitle: t('specials.subtitle'),
    items: [
      {
        name: t('specials.newClient.name'),
        description: t('specials.newClient.description'),
        badge: t('specials.newClient.badge'),
      },
      {
        name: t('specials.springGlow.name'),
        description: t('specials.springGlow.description'),
        badge: t('specials.springGlow.badge'),
      },
      {
        name: t('specials.referral.name'),
        description: t('specials.referral.description'),
        badge: t('specials.referral.badge'),
      },
      {
        name: t('specials.memberBonus.name'),
        description: t('specials.memberBonus.description'),
        badge: t('specials.memberBonus.badge'),
      },
    ],
  };
}

export function getContact(t) {
  return {
    overline: t('contact.overline'),
    headline: t('contact.headline'),
    subtitle: t('contact.subtitle'),
    location: {
      name: 'Sage & Stone Wellness',
      address: '4200 Ridgeline Boulevard, Suite 110',
      city: 'Austin, TX 78746',
      phone: '(512) 555-0189',
      textPhone: '(512) 555-0190',
      email: 'hello@sageandstone.com',
    },
    hours: [
      { days: t('contact.hours.weekdays'), time: t('contact.hours.weekdaysTime') },
      { days: t('contact.hours.saturday'), time: t('contact.hours.saturdayTime') },
      { days: t('contact.hours.sunday'), time: t('contact.hours.sundayTime') },
    ],
  };
}

export function getCta(t) {
  return {
    headline: t('cta.headline'),
    subtitle: t('cta.subtitle'),
    buttonLabel: t('cta.buttonLabel'),
    note: t('cta.note'),
  };
}

export function getFooter(t) {
  return {
    brand: 'Sage & Stone Wellness',
    tagline: t('footer.tagline'),
    columns: [
      {
        title: t('footer.quickLinks'),
        links: [
          { label: t('nav.services'), href: '#services' },
          { label: t('nav.specials'), href: '#specials' },
          { label: t('nav.about'), href: '#about' },
          { label: t('nav.memberships'), href: '#memberships' },
          { label: t('nav.contact'), href: '#contact' },
        ],
      },
      {
        title: t('footer.servicesColumn'),
        links: [
          { label: t('footer.massageTherapy'), href: '#massage' },
          { label: t('footer.facials'), href: '#facials' },
          { label: t('footer.injectables'), href: '#injectables' },
          { label: t('footer.bodyTreatments'), href: '#body-treatments' },
        ],
      },
      {
        title: t('footer.contact'),
        links: [
          { label: 'hello@sageandstone.com', href: 'mailto:hello@sageandstone.com' },
          { label: '(512) 555-0189', href: 'tel:+15125550189' },
          { label: t('footer.textUs'), href: 'sms:+15125550190' },
          { label: '4200 Ridgeline Blvd, Austin, TX', href: null },
        ],
      },
    ],
    copyright: t('footer.copyright'),
    legalLinks: [
      { label: t('footer.privacyPolicy'), href: '#' },
      { label: t('footer.termsOfService'), href: '#' },
      { label: t('footer.hipaaNotice'), href: '#' },
    ],
  };
}
