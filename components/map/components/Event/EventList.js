import React from 'react';
import { Grid, List, Box, Typography, Divider } from '@mui/material';
import FeatureEvent from './FeatureEvent';
import RegularEvent from './RegularEvent';
import { RegularEventSkeleton, FeatureEventSkeleton } from './Skeletons';

const EventList = ({ isLoading, events, groupedEvents, ismobile, onEventClick }) => {

  const featuredEvents = events.filter(event => event.featured_event === 1);
  return (
    <>
      {isLoading ? (
        <Grid container spacing={2}>
          {Array.from(new Array(featuredEvents.length || 2)).map((_, index) => (
            <FeatureEventSkeleton key={index} ismobile={ismobile} />
          ))}
        </Grid>
      ) : (
        featuredEvents.length > 0 && (
          <Grid container spacing={2} sx={{ px: 1, mb: 2 }}>
            {featuredEvents.map(event => (
              <FeatureEvent key={event.event_id} event={event} ismobile={ismobile} onEventClick={onEventClick}/>
            ))}
          </Grid>
        )
      )}
      {isLoading ? (
        <List sx={{ paddingTop: 0 }}>
          {Array.from(new Array(5)).map((_, index) => (
            <Box key={index} mb={2}>
              <RegularEventSkeleton ismobile={ismobile} />
              <Divider />
            </Box>
          ))}
        </List>
      ) : events.length === 0 ? (
        <Typography variant={ismobile ? "subtitle2" : "subtitle1"} align="center" sx={{ mt: 4, color: '#64748B' }}>
          No events available based on your search criteria.
        </Typography>
      ) : (
        <List sx={{ paddingTop: 0, padding: '1px 10px' }}>
          {Object.keys(groupedEvents).map(event_date => (
            <Box key={event_date} mb={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, color: '#64748B' }}>
                <Typography variant="body2" sx={{ fontWeight: 600, mr: 2, whiteSpace: 'nowrap' }}>
                  {event_date}
                </Typography>
                <Divider sx={{ flexGrow: 1, alignSelf: 'center', borderColor: '#E2E8F0' }} />
              </Box>
              {groupedEvents[event_date].map(event => (
                <Box key={event.event_id} mb={2}>
                  <RegularEvent event={event} ismobile={ismobile} onEventClick={onEventClick}/>
                </Box>
              ))}
            </Box>
          ))}
        </List>
      )}
    </>
  )
};

export default EventList;
