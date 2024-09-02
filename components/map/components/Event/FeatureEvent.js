import React from 'react';
import { Box, Typography, Grid, Avatar, Chip, CardContent, Tooltip } from '@mui/material';
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { format, parse } from 'date-fns';
import { EventDetails, EventDetailsBox, EventTitle, FeatureCard } from './EventComponents';

const FeatureEvent = ({ event, ismobile, onEventClick }) => {

  const eventTag = event.event_category;
  const eventPrice = event.event_type;

  const startTime = format(parse(event.start_time, 'HH:mm:ss', new Date()), 'h:mm a');
  const endTime = format(parse(event.end_time, 'HH:mm:ss', new Date()), 'h:mm a');
  const formattedTime = `${startTime} - ${endTime}`;

  const handleEventClick = (event) => {
    onEventClick(event);
  };

  return (
    <Grid item xs={6} key={event.id} sx={{ display: 'flex' }}>
      <Box
        component="a"
        sx={{
          textDecoration: 'none',
          cursor: 'pointer',
          width: '100%',
          display: 'flex',
          position: 'relative', // Ensure the Box is relative to position the icon
        }}
        onClick={() => handleEventClick(event)}
          >
          <FeatureCard ismobile={ismobile} sx={{ flexGrow: 1 }}>

            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {!ismobile && <Tooltip
                title={
                  <Typography variant="caption" sx={{ fontSize: '12px', color: '#64748B', fontWeight: 400, }}>
                    This is a TOKEN2049 Week Featured event.
                    Email us at sponsors@token2049.com to upgrade your slide event to featured event.
                  </Typography>
                }
                arrow
                placement="top"
                componentsProps={{
                  tooltip: {
                    sx: {
                      padding: '21px 24px',
                      bgcolor: 'white',
                      borderRadius: '16px',
                      boxShadow: '0px 4px 8px 0px #CBD5E140',
                      '& .MuiTooltip-arrow': {
                        color: 'white',
                        boxShadow: '0px 4px 8px 0px #CBD5E140',
                      },
                    },
                  },
                }}
              >

                <Box sx={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  fontSize: ismobile ? '20px' : '28px',
                  color: '#64748B', // Icon color
                  cursor: 'pointer', // Cursor changes to pointer when hovering over the icon
                  zIndex: 1,
                  opacity: 0.4
                }}
                >
                  <IoIosInformationCircle />
                </Box>
              </Tooltip>
              }
              <Box>
                <Avatar
                  alt={event.event_name}
                  src={event.thumbnail}
                  variant="rounded"
                  sx={{ width: ismobile ? 80 : 114, height: ismobile ? 80 : 114, marginBottom: ismobile ? 2 : 4, borderRadius: "12px" }}
                />
                <EventTitle ismobile={ismobile} >{event.event_name}</EventTitle>
                <EventDetailsBox ismobile={ismobile}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 300, }}>
                    <IoLocationOutline style={{ fontSize: ismobile ? '12px' : '14px', flexShrink: 0 }} />
                    <EventDetails ismobile={ismobile}>{event.venue}</EventDetails>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 300, }}>
                    <IoTimeOutline style={{ fontSize: ismobile ? '12px' : '14px', flexShrink: 0 }} />
                    <EventDetails ismobile={ismobile}>{formattedTime}</EventDetails>
                  </Box>
                </EventDetailsBox>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexWrap: 'wrap',
                  gap: 1,
                  marginTop: ismobile ? 2 : 3 // Adjust margin for mobile
                }}>
                {eventTag && eventPrice ?
                  <>
                    <Chip
                      label={eventTag}
                      sx={{
                        padding: ismobile ? '0px 1px' : '6px 12px', // Smaller padding on mobile
                        fontSize: ismobile ? '10px' : '12px', // Smaller font size on mobile
                      }}
                    />
                    <Chip
                      label={eventPrice}
                      sx={{
                        padding: ismobile ? '0px 1px' : '6px 12px', // Smaller padding on mobile
                        fontSize: ismobile ? '10px' : '12px', // Smaller font size on mobile
                      }}
                    />
                  </> : ''}
              </Box>
            </CardContent>
          </FeatureCard>
      </Box>
    </Grid >
  );
};

export default FeatureEvent;
