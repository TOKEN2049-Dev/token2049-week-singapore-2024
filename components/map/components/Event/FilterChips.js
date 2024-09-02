import React from 'react';
import { Box, Chip } from '@mui/material';

const FilterChips = ({ tag, price, searchQuery, ismobile }) => (
  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3, mt: ismobile ? 2 : 0 }}>
    {tag && (
      <Chip
        label={`Type: ${tag}`}
        size={ismobile ? "small" : "large"}
        sx={{
          padding: '1px 6px',
        }}
      />
    )}
    {price && (
      <Chip
        label={`Price: ${price}`}
        size={ismobile ? "small" : "large"}
        sx={{
          padding: '1px 6px',
        }}
      />
    )}
    {searchQuery && (
      <Chip
        label={`Search: ${searchQuery}`}
        size={ismobile ? "small" : "large"}
        sx={{
          padding: '1px 6px',
        }}
      />
    )}
  </Box>
);

export default FilterChips;
