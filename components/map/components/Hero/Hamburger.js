import { motion } from 'framer-motion';

const HamburgerIcon = ({ isOpen, toggleDrawer }) => (
  <motion.div onClick={toggleDrawer} style={{ cursor: 'pointer' }}>
    <motion.span
      initial={false}
      animate={isOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        display: 'block',
        width: '30px',
        height: '3px',
        backgroundColor: isOpen ? '#000000' : '#FFFFFF', // Change color based on isOpen state
        borderRadius: '2px',
        marginBottom: '8px',
        transition: 'background-color 0.3s ease', // Add transition for color change
      }}
    />
    <motion.span
      initial={false}
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        display: 'block',
        width: '30px',
        height: '3px',
        backgroundColor: isOpen ? '#000000' : '#FFFFFF', // Change color based on isOpen state
        borderRadius: '2px',
        marginBottom: '8px',
        transition: 'background-color 0.3s ease', // Add transition for color change
      }}
    />
    <motion.span
      initial={false}
      animate={isOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        display: 'block',
        width: '30px',
        height: '3px',
        backgroundColor: isOpen ? '#000000' : '#FFFFFF', // Change color based on isOpen state
        borderRadius: '2px',
        transition: 'background-color 0.3s ease', // Add transition for color change
      }}
    />
  </motion.div>
);

export default HamburgerIcon;
