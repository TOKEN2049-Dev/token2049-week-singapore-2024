import React, { useState } from 'react';
import { Fab, Tooltip, Box, Typography } from '@mui/material';
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = ({ target }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  };

  return (
    isVisible && (
      <Tooltip title="Scroll to top" placement="right">
        <Fab
          color="primary"
          onClick={handleScroll}
          sx={{
            position: 'absolute',
            bottom: 24,
            left: 24,
            width: 90,
            height: 90,
            zIndex: 1000,
            backgroundColor: '#ffffff',
            color: '#000000',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'none',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <IoIosArrowUp style={{ marginRight: 4, fontWeight: 700, fontSize: 20 }} />
            <Typography
              sx={{
                fontSize: '11px',
                color: '#1C1C1C'
              }}>
              Scroll to Top
            </Typography>
          </Box>
        </Fab>
      </Tooltip>
    )
  );
};

export default ScrollToTopButton;