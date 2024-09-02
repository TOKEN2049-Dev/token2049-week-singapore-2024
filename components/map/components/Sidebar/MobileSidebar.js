import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { format, parseISO } from 'date-fns';
import EventList from '../Event/EventList';

const DraggableHandle = ({ bind }) => (
  <Box {...bind()} sx={{
    cursor: 'grab',
    touchAction: 'none',
    '&:active': { cursor: 'grabbing' },
    mb: 2
  }}>
    <Divider sx={{ width: '50px', border: '4px solid #DEDEDE', borderRadius: '100px', margin: '10px auto' }} />
    <Box sx={{ flexGrow: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ top: 0, backgroundColor: 'inherit', zIndex: 1, paddingBottom: '2px', padding: '1px 10px', flexShrink: 0 }}>
        <Typography sx={{ fontSize: '16px', fontWeight: 600, textAlign: 'center' }} gutterBottom>
          Explore {' '}
          <Box sx={{ display: 'inline', fontWeight: 600, color: '#2771FC' }}>
            events
          </Box>{' '}
          here
        </Typography>
      </Box>
    </Box>
  </Box>
);

const MobileSidebar = forwardRef(({ events, isLoading, onEventClick }, ref) => {
  const sortedEvents = events.filter(event => event.featured_event !== 1).sort((a, b) => new Date(a.event_date) - new Date(b.event_date));

  const groupedEvents = sortedEvents.reduce((acc, event) => {
    const eventDate = format(parseISO(event.event_date), 'dd MMM yyyy | EEEE');
    if (!acc[eventDate]) acc[eventDate] = [];
    acc[eventDate].push(event);
    return acc;
  }, {});

  const [{ y }, api] = useSpring(() => ({ y: 8 }));
  const contentRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollToTop: () => {
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    },
    changePosition: (newY) => {
      api.start({ y: newY });
    }
  }));

  const bind = useDrag(
    ({ movement: [, my], memo = y.get() }) => {
      const newY = memo - (my / window.innerHeight) * 100 * 2;
      if (newY < 8) api.start({ y: 8 });
      else if (newY > 80) api.start({ y: 70 });
      else api.start({ y: newY });
      return memo;
    },
    { axis: 'y' }
  );

  const handleEventClick = (event) => {
    api.start({ y: 8 });
    onEventClick(event);
  };

  return (
    <animated.div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: y.to(y => `${y}vh`),
        zIndex: 1000,
        borderTop: '1px solid #ddd',
        borderRadius: '20px 20px 0 0',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <DraggableHandle bind={bind} />
      <Box ref={contentRef} sx={{ flexGrow: 1, overflow: 'auto', touchAction: 'auto' }}>
        <EventList events={events} groupedEvents={groupedEvents} isLoading={isLoading} ismobile={true} onEventClick={handleEventClick} />
      </Box>
    </animated.div>
  );
});

export default MobileSidebar;