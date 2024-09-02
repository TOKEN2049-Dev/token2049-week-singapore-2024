import { IconButton, Typography } from '@mui/material';
import { RxReset } from "react-icons/rx";

const ResetButton = ({ handleReset }) => (
  <IconButton
    onClick={handleReset}
    color="primary"
    sx={{
      display: 'flex',
      alignItems: 'center',
      borderRadius: '100px', // Square-like shape with 12px border radius
      padding: '8px 10px', // Add padding for better look
      marginRight: 3,
      '&:hover': {
        backgroundColor: '#F5F7F9', // Slightly darker on hover
      },
    }}
  >
    <RxReset size={15} style={{ marginRight: '4px' }} />
    <Typography sx={{
      fontWeight: 600, fontSize: '11px'
    }}>
      Reset
    </Typography>
  </IconButton>
);

export default ResetButton;