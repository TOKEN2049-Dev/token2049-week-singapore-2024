import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import { Box, Button, AppBar, Typography } from '@mui/material';

const HeroSectionWrapper = styled(Box)(({ theme, backgroundImage, isMobile }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', // This creates a basic parallax effect
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.common.white,
  textAlign: 'center',
  padding: isMobile ? theme.spacing(2.5) : 0,
  position: 'relative',
  overflow: 'hidden',
}));

const StyledAppBar = styled(AppBar)(({ theme, isMobile }) => ({
  position: 'absolute',  // Keeps the AppBar within the HeroSection
  display: 'flex',
  justifyContent: 'center',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'transparent',
  boxShadow: 'none',
  paddingTop: isMobile ? theme.spacing(2) : theme.spacing(2.5),
  zIndex: theme.zIndex.appBar,
}));

const SubMenu = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(1.25, 0),
  display: 'flex',
  justifyContent: 'center',
  backdropFilter: 'blur(80px)',
  gap: theme.spacing(6.25),
  zIndex: theme.zIndex.modal - 1,
}));

const SubMenuButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  marginRight: theme.spacing(2),
  fontSize: theme.typography.pxToRem(14),
  fontWeight: 600,
  '&:hover': {
    opacity: 0.7,
  },
}));

const NavButton = styled(Button)(({ theme, isMobile }) => ({
  color: theme.palette.common.white,
  marginRight: isMobile ? theme.spacing(1) : theme.spacing(1.75),
  fontSize: theme.typography.pxToRem(13.5),
  fontWeight: 600,
  '&:hover': {
    opacity: 0.7,
  },
}));

const ToolbarContainedButton = styled(Button)(({ theme, isMobile }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  fontSize: theme.typography.pxToRem(14),
  fontWeight: 600,
  padding: isMobile ? theme.spacing(1, 2) : theme.spacing(0.75, 2.5),
  borderRadius: isMobile ? theme.shape.borderRadius : theme.spacing(1.5),
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const ToolbarOutlineButton = styled(Button)(({ theme, isMobile }) => ({
  border: `2px solid ${theme.palette.common.white}`,
  color: theme.palette.common.white,
  fontSize: theme.typography.pxToRem(14),
  fontWeight: 600,
  padding: isMobile ? theme.spacing(1, 2) : theme.spacing(0.75, 2.5),
  borderRadius: isMobile ? theme.shape.borderRadius : theme.spacing(1.5),
  '&:hover': {
    color: '#EAE1FF',
    border: `2px solid #EAE1FF`,
  },
}));

const HeroButton = styled(Button)(({ theme, isMobile }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 600,
  width: isMobile && '260px',
  padding: isMobile ? theme.spacing(1.2, 2) : theme.spacing(2, 8),
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const BlurredButton = styled(Button)(({ theme, isMobile }) => ({
  color: theme.palette.common.white,
  width: isMobile && '260px',
  fontWeight: 600,
  padding: isMobile ? theme.spacing(1.2, 2) : theme.spacing(2, 8),
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)', // Apply blur effect
  transition: 'background-color 0.3s ease, color 0.3s ease, backdrop-filter 0.3s ease', // Smooth transition
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    // color: theme.palette.common.white,
  },
}));

const LogoImageTop = styled('img')(() => ({
  maxWidth: '80%',
  cursor: 'pointer',
}));
const LogoImage = styled('img')(({ isMobile }) => ({
  height: isMobile && '25px', // Adjust the height for mobile and tablet
  maxWidth: !isMobile && '80%',
  cursor: 'pointer',
}));

const HeroImage = styled('img')(({ isMobile }) => ({
  maxWidth: '90%', // Adjust the max-width for mobile and tablet
  height: 'auto',
  marginTop: isMobile ? '10px' : '60px',
}));

const ImageSubtitle = styled(Typography)(({ isMobile }) => ({
  fontFamily: "Oswald",
  fontSize: isMobile ? '20px' : '36px',
  letterSpacing: '3px'
}))

const StyledLink = styled('a')(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'underline',
  '&:hover': {
    color: theme.palette.common.white,
  },
}));

export {
  HeroButton,
  StyledLink,
  HeroImage,
  HeroSectionWrapper,
  LogoImageTop,
  LogoImage,
  BlurredButton,
  ToolbarOutlineButton,
  NavButton,
  SubMenu,
  StyledAppBar,
  ToolbarContainedButton,
  SubMenuButton,
  ImageSubtitle
};
