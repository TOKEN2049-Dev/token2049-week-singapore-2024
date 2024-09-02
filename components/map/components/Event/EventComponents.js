import { styled } from '@mui/system';
import { Box, Typography, Card } from '@mui/material';

const RegularCard = styled(Card)(({ ismobile }) => ({
  padding: ismobile ? '15px 10px' : '21px 16px',  // Adjusted padding for mobile
  display: 'flex',
  justifyContent: 'space-between',
  border: 'solid 1px #E2E8F0',
  alignItems: 'center',
  gap: '16px',
  position: 'relative',
}));

const FeatureCard = styled(Card)(({ ismobile }) => ({
  padding: ismobile ? '2px' : '12px',
  display: 'flex',
  justifyContent: 'space-between',
  border: 'solid 1px #E2E8F0',
  textAlign: 'left',
  flexDirection: 'column',
}));

const EventTitle = styled(Typography)(({ ismobile }) => ({
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: ismobile ? '' : '4px',
  mb: 1,
  fontSize: ismobile ? '16px' : '18px'  // Adjusted font size for mobile
}));

const EventDetails = styled(Typography)(({ ismobile }) => ({
  color: '#64748B',
  fontSize: ismobile ? '12px' : '14px', // Adjust font size for mobile
}));

const EventDetailsBox = styled(Box)(({ ismobile, isRegular }) => ({
  marginTop: 4,
  marginBottom: 10,
  fontSize: ismobile ? '12px' : '14px', // Adjust font size for mobile
  fontWeight: 300,
  margin: isRegular && !ismobile ? 2 : '',
}));

const Ribbon = styled(Box)(({ ismobile }) => ({
  position: 'absolute',
  width: ismobile ? 160 : 260,
  top: 0,
  right: 0,
  textAlign: 'center',
  backgroundColor: '#8247FF',
  color: 'white',
  padding: ismobile ? '8px 10px' : '14px 20px',
  paddingLeft: ismobile ? '80px' : '120px',
  fontSize: ismobile ? '10px' : '12.5px',
  fontWeight: 500,
  transform: 'translate(25%, -25%) rotate(35deg)', // Adjust the position and rotation
  zIndex: 10,
}));

export { RegularCard, FeatureCard, EventTitle, EventDetails, EventDetailsBox, Ribbon }