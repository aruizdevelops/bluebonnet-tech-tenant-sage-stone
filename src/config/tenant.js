/**
 * Tenant configuration for Sage & Stone Wellness.
 * Light-mode, calming, premium med-spa & day-spa palette
 * evoking nature, warmth, and wellness.
 */
const tenantConfig = {
  id: 'sage-stone-wellness',
  name: 'Sage & Stone Wellness',
  logo: null,
  theme: {
    palette: {
      mode: 'light',
      primary: {
        main: '#7C9A6E',
        light: '#9BB68E',
        dark: '#5E7A52',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#B8977E',
        light: '#D0B49F',
        dark: '#967660',
        contrastText: '#FFFFFF',
      },
      background: {
        default: '#FAF8F5',
        paper: '#FFFFFF',
      },
      text: {
        primary: '#2D2926',
        secondary: '#6B6560',
      },
      error: {
        main: '#C4454A',
      },
      warning: {
        main: '#D4A054',
      },
      success: {
        main: '#7C9A6E',
      },
      info: {
        main: '#8BA4B8',
      },
      accent: {
        main: '#D4A0A0',
        light: '#E8C4C4',
        dark: '#B87C7C',
        contrastText: '#FFFFFF',
      },
      divider: 'rgba(45, 41, 38, 0.08)',
    },
    typography: {
      h1: {
        fontSize: 'clamp(2.25rem, 1.5rem + 3vw, 3.75rem)',
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        fontFamily: '"Playfair Display", Georgia, serif',
      },
      h2: {
        fontSize: 'clamp(1.75rem, 1.15rem + 2.2vw, 2.75rem)',
        fontWeight: 600,
        lineHeight: 1.15,
        letterSpacing: '-0.01em',
        fontFamily: '"Playfair Display", Georgia, serif',
      },
      h3: {
        fontSize: 'clamp(1.35rem, 1rem + 1.2vw, 2rem)',
        fontWeight: 600,
        lineHeight: 1.2,
        fontFamily: '"Playfair Display", Georgia, serif',
      },
      h4: {
        fontWeight: 600,
        fontFamily: '"Playfair Display", Georgia, serif',
      },
      h5: {
        fontWeight: 600,
        fontFamily: '"Playfair Display", Georgia, serif',
      },
      h6: {
        fontWeight: 600,
        fontFamily: '"Playfair Display", Georgia, serif',
      },
      body1: {
        fontSize: '1.0625rem',
        lineHeight: 1.7,
        fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      },
      body2: {
        fontSize: '0.9375rem',
        lineHeight: 1.6,
        fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      },
      button: {
        fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
        fontWeight: 500,
        letterSpacing: '0.03em',
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 28,
            padding: '10px 28px',
            fontWeight: 500,
            textTransform: 'none',
            letterSpacing: '0.03em',
          },
          containedPrimary: {
            background: 'linear-gradient(135deg, #7C9A6E 0%, #9BB68E 100%)',
            boxShadow: '0 4px 16px rgba(124, 154, 110, 0.25)',
            '&:hover': {
              background: 'linear-gradient(135deg, #5E7A52 0%, #7C9A6E 100%)',
              boxShadow: '0 6px 24px rgba(124, 154, 110, 0.35)',
            },
          },
          containedSecondary: {
            background: 'linear-gradient(135deg, #D4A0A0 0%, #E8C4C4 100%)',
            boxShadow: '0 4px 16px rgba(212, 160, 160, 0.25)',
            '&:hover': {
              background: 'linear-gradient(135deg, #B87C7C 0%, #D4A0A0 100%)',
              boxShadow: '0 6px 24px rgba(212, 160, 160, 0.35)',
            },
          },
          outlinedPrimary: {
            borderColor: 'rgba(124, 154, 110, 0.4)',
            color: '#5E7A52',
            '&:hover': {
              borderColor: '#7C9A6E',
              backgroundColor: 'rgba(124, 154, 110, 0.06)',
            },
          },
          sizeLarge: {
            padding: '14px 36px',
            fontSize: '1rem',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(45, 41, 38, 0.06)',
            boxShadow: '0 2px 16px rgba(45, 41, 38, 0.05)',
            borderRadius: 16,
            transition:
              'transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              boxShadow: '0 8px 32px rgba(45, 41, 38, 0.08)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            backdropFilter: 'blur(12px)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            fontWeight: 500,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
    },
  },
  features: {
    booking: true,
    memberships: true,
    giftCards: true,
    consultation: true,
    blog: false,
  },
};

export default tenantConfig;
