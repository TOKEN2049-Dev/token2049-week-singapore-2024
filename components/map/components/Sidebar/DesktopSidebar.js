import React from 'react';
import { Box, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';
import EventList from '../Event/EventList';

const DesktopSidebar = ({ events, isLoading, onEventClick }) => {
  const otherEvents = events.filter(event => event.featured_event !== 1);
  const sortedEvents = otherEvents.sort((a, b) => new Date(a.event_date) - new Date(b.event_date));

  const groupedEvents = sortedEvents.reduce((acc, event) => {
    const eventDate = format(parseISO(event.event_date), 'dd MMM yyyy | EEEE');
    if (!acc[eventDate]) acc[eventDate] = [];
    acc[eventDate].push(event);
    return acc;
  }, {});

  return (
    <Box
      bgcolor="background.paper"
      sx={{
        height: '100vh',
        overflowY: 'auto',
        position: 'relative',
        padding: '0px 40px',
        paddingTop: '20px',
      }}
    >
      <Box sx={{ top: 0, backgroundColor: 'inherit', zIndex: 1, paddingBottom: '8px', paddingTop: '16px', padding: '1px 10px' }}>
        <Typography sx={{ fontSize: '28px', fontWeight: 500 }} gutterBottom>
          <Box sx={{ display: 'inline', fontSize: '28px', fontWeight: 500, color: '#2771FC' }}>
            {events.length} events
          </Box>
          {' '}
          based on your search
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        </Box>
        <EventList events={events} groupedEvents={groupedEvents} isLoading={isLoading} ismobile={0} onEventClick={onEventClick} />
      </Box>
    </Box>
  );
};

export default DesktopSidebar;
