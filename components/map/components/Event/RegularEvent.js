import React from 'react';
import { Box, Avatar, CardContent, Chip } from '@mui/material';
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { format, parse } from 'date-fns';
import { EventDetailsBox, EventTitle, EventDetails, RegularCard, Ribbon } from './EventComponents';

const RegularEvent = ({ event, ismobile, onEventClick, isPast }) => {
  const eventTag = event.event_category;
  const eventPrice = event.event_type;

  const startTime = format(parse(event.start_time, 'HH:mm:ss', new Date()), 'h:mm a');
  const endTime = format(parse(event.end_time, 'HH:mm:ss', new Date()), 'h:mm a');
  const formattedTime = `${startTime} - ${endTime}`;

  const handleEventClick = (event) => {
    onEventClick(event);
  };

  return (
    <Box
      component="a"
      sx={{
        textDecoration: 'none',
        cursor: 'pointer',
        filter: isPast ? 'grayscale(100%)' : 'none', // Apply gray filter if event is past
        opacity: isPast ? 0.6 : 1, // Lower opacity for past events
      }}
      onClick={() => handleEventClick(event)}
    >
      <RegularCard ismobile={ismobile}>
        {event.invite_only ?
          <Ribbon ismobile={ismobile}>
            Invitation Only
          </Ribbon>
          : ''}
        <CardContent
          alignItems="center"
          sx={{
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Box sx={{ flexGrow: 1, mb: 1 }}>
              <EventTitle ismobile={ismobile}>
                {event.event_name}
              </EventTitle>
              <EventDetailsBox ismobile={ismobile} isRegular={true}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IoLocationOutline style={{ fontSize: ismobile ? '12px' : '14px', flexShrink: 0 }} />
                  <EventDetails ismobile={ismobile}>{event.venue}</EventDetails>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IoTimeOutline style={{ fontSize: ismobile ? '12px' : '14px', flexShrink: 0 }} />
                  <EventDetails ismobile={ismobile}>{formattedTime}</EventDetails>
                </Box>
              </EventDetailsBox>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              gap: 1,
              marginTop: ismobile ? '' : 2
            }}>
            {eventTag && eventPrice ?
              <>
                <Chip
                  label={eventTag}
                  sx={{
                    padding: ismobile ? '0px 1px' : '6px 12px',
                    fontSize: ismobile ? '10px' : '12px',
                  }}
                />
                <Chip
                  label={eventPrice}
                  sx={{
                    padding: ismobile ? '0px 1px' : '6px 12px',
                    fontSize: ismobile ? '10px' : '12px',
                  }}
                />
              </> : ''}
          </Box>
        </CardContent>
        <Avatar
          alt={event.event_name}
          src={event.thumbnail}
          variant="rounded"
          sx={{
            width: ismobile ? 100 : 160,
            height: ismobile ? 100 : 160,
            borderRadius: "12px"
          }}
        />
      </RegularCard>
    </Box >
  );
};

export default RegularEvent;
