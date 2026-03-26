'use client';

import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from '../../i18n/useTranslation';
import { getFaq } from '../../constants/content';
import { ANALYTICS_EVENTS } from '../../constants/analytics';

export default function FaqSection() {
  const { t } = useTranslation();
  const content = getFaq(t);

  const handleAccordionChange = (question) => (_, isExpanded) => {
    if (isExpanded) {
      // [Analytics] Track FAQ expansion
      console.log('[Analytics]', ANALYTICS_EVENTS.FAQ_EXPAND, { question });
    }
  };

  return (
    <Box
      component="section"
      id="faq"
      sx={{ py: { xs: 10, md: 14 } }}
    >
      <Container maxWidth="md">
        <Stack alignItems="center" textAlign="center" spacing={2} sx={{ mb: 8 }}>
          <Typography
            variant="overline"
            component="p"
            sx={{ color: 'primary.main', letterSpacing: '0.15em' }}
          >
            {content.overline}
          </Typography>
          <Typography variant="h2" component="h2">
            {content.headline}
          </Typography>
        </Stack>

        <Box>
          {content.items.map((item, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              onChange={handleAccordionChange(item.question)}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '12px !important',
                mb: 2,
                '&::before': { display: 'none' },
                '&.Mui-expanded': {
                  borderColor: 'primary.main',
                  boxShadow: '0 4px 20px rgba(124, 154, 110, 0.08)',
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: 'primary.main' }} />
                }
                sx={{
                  px: 3,
                  py: 0.5,
                  '& .MuiAccordionSummary-content': {
                    my: 2,
                  },
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
