'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import { useTranslation } from '../../i18n/useTranslation';
import { getTestimonials } from '../../constants/content';

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const content = getTestimonials(t);

  return (
    <Box
      component="section"
      id="testimonials"
      sx={{ py: { xs: 10, md: 14 } }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            component="p"
            sx={{ color: 'primary.main', mb: 2, letterSpacing: '0.15em' }}
          >
            {content.overline}
          </Typography>
          <Typography variant="h2" component="h2">
            {content.headline}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {content.items.map((testimonial) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={testimonial.name}>
              <Card
                sx={{
                  height: '100%',
                  p: 1,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(45, 41, 38, 0.10)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <FormatQuoteIcon
                    sx={{
                      color: 'primary.main',
                      fontSize: 32,
                      opacity: 0.5,
                      mb: 1.5,
                    }}
                  />

                  {/* Star Rating */}
                  <Stack direction="row" spacing={0.25} sx={{ mb: 2 }}>
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <StarIcon
                        key={i}
                        sx={{ color: 'warning.main', fontSize: 18 }}
                      />
                    ))}
                  </Stack>

                  <Typography
                    variant="body2"
                    component="blockquote"
                    color="text.secondary"
                    sx={{
                      fontStyle: 'italic',
                      lineHeight: 1.8,
                      m: 0,
                      mb: 3,
                    }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </Typography>

                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: 'primary.main',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                      }}
                      aria-hidden="true"
                    >
                      {testimonial.name
                        .split(/\s+/)
                        .filter(Boolean)
                        .map((n) => n[0])
                        .join('')}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        component="p"
                      >
                        {testimonial.role} &middot; {testimonial.company}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
