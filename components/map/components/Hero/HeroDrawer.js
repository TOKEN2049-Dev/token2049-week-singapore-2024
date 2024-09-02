import React from 'react';
import { IconButton, List, ListItemText, ListItemButton } from '@mui/material';
import HamburgerIcon from './Hamburger';

const links = [
  { text: 'TICKETS', href: 'https://www.asia.token2049.com/tickets' },
  { text: 'SPEAKERS', href: 'https://www.asia.token2049.com/speakers' },
  { text: 'AGENDA', href: 'https://www.asia.token2049.com/agenda' },
  { text: 'PARTNERS', href: 'https://www.asia.token2049.com/partners' },
  { text: 'NEXUS', href: 'https://www.asia.token2049.com/nexus-startup-competition' },
  { text: 'TRAVEL', href: 'https://www.asia.token2049.com/travel' },
  { text: 'MOBILE APP', href: 'https://www.asia.token2049.com/mobile-app' },
  { text: 'SIDE EVENTS', href: 'https://week.token2049.com/' },
  { text: 'STUDENTS', href: 'https://www.asia.token2049.com/students' },
  { text: "I'M ATTENDING", href: 'https://www.asia.token2049.com/attending' }
];

const HeroDrawer = ({ toggleDrawer, drawerOpen }) => (
  <>
    <IconButton
      onClick={toggleDrawer}
      sx={{
        alignSelf: 'flex-end',
        marginBottom: '20px',
        fontSize: '50px',
        marginTop: 1
      }}
    >
      <HamburgerIcon isOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </IconButton>
    <List>
      {links.map(({ text, href }) => (
        <ListItemButton key={text} component="a" href={href}>
          <ListItemText
            primary={text}
            primaryTypographyProps={{
              sx: {
                fontWeight: 500,
                fontSize: '28px',
                fontFamily: "Oswald",
                color: 'black'
              },
            }}
          />
        </ListItemButton>
      ))}
    </List>
  </>
);

export default HeroDrawer;
