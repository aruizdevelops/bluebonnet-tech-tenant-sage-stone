'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from '../../i18n/useTranslation';
import { getAbout } from '../../constants/content';

export default function AboutPreview() {
  const { t } = useTranslation();
  const content = getAbout(t);

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography
                variant="overline"
                component="p"
                sx={{ color: 'primary.main', mb: 2, letterSpacing: '0.15em' }}
              >
                {content.overline}
              </Typography>
              <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                {content.headline}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {content.description}
              </Typography>

              <List disablePadding sx={{ mb: 3 }}>
                {content.highlights.map((item) => (
                  <ListItem key={item} disablePadding sx={{ mb: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleOutlineIcon
                        sx={{ color: 'primary.main', fontSize: 22 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        variant: 'body2',
                        color: 'text.primary',
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              <Button
                variant="outlined"
                color="primary"
                href="#team"
                endIcon={<ArrowForwardIcon />}
              >
                {t('about.cta')}
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            {/* Visual placeholder: gradient/pattern box representing spa ambiance */}
            <Box
              sx={{
                width: '100%',
                height: { xs: 300, md: 400 },
                borderRadius: 4,
                background: (theme) =>
                  `linear-gradient(145deg, ${theme.palette.primary.light}40 0%, ${theme.palette.secondary.light}50 50%, #E8C4C430 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at 30% 70%, rgba(124,154,110,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(184,151,126,0.15) 0%, transparent 50%)',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 8,
                  border: '1px solid rgba(124,154,110,0.15)',
                  borderRadius: 3,
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: 'primary.dark',
                  opacity: 0.3,
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontStyle: 'italic',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {t('about.imagePlaceholder')}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
