import { styled } from '@mui/system';
import { Box } from '@mui/material';

const FilterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  padding: theme.spacing(2.5, 6), // Uses theme spacing
  backgroundColor: theme.palette.background.paper, // Uses theme background color
  boxShadow: '0px 4px 8px 0px #CBD5E140',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  color: theme.palette.text.primary, // Uses theme text color
}));

const FilterBoxMobile = styled(Box)({
  padding: '12px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  color: "#31426C",
});

const SearchWrapper = styled(Box)({
  display: 'flex',
  width: '300px',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#F5F7F9',
  border: '1px solid #F5F7F9',
  borderRadius: '100px',
  padding: '2px 12px',
  paddingLeft: '21px',
  fontWeight: 500,
});

const SearchWrapperMobile = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#F5F7F9',
  border: '1px solid #F5F7F9',
  borderRadius: '100px',
  padding: '2px 16px',
  width: '70%',
  fontWeight: 500,
});

export { FilterBox, FilterBoxMobile, SearchWrapper, SearchWrapperMobile };
