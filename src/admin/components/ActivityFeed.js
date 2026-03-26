'use client';

import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const ICON_MAP = {
  booking: <EventNoteIcon sx={{ fontSize: 18, color: '#7C9A6E' }} />,
  lead: <ContactMailIcon sx={{ fontSize: 18, color: '#8BA4B8' }} />,
  membership: <CardMembershipIcon sx={{ fontSize: 18, color: '#D4A054' }} />,
  special: <LocalOfferIcon sx={{ fontSize: 18, color: '#D4A0A0' }} />,
};

export default function ActivityFeed({ title, activities }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {title}
        </Typography>
        <List disablePadding>
          {activities.map((activity) => (
            <ListItem
              key={activity.id}
              disablePadding
              sx={{ py: 1, borderBottom: '1px solid', borderColor: 'divider', '&:last-child': { borderBottom: 'none' } }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                {ICON_MAP[activity.type] || ICON_MAP.booking}
              </ListItemIcon>
              <ListItemText
                primary={activity.message}
                secondary={activity.time}
                primaryTypographyProps={{ variant: 'body2' }}
                secondaryTypographyProps={{ variant: 'caption' }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
