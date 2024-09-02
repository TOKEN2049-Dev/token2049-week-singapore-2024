import React from 'react';
import { Box, Grid, Skeleton, Card, CardContent, Chip } from '@mui/material';

export const FeatureEventSkeleton = ({ ismobile }) => {
  return (
    <Grid item xs={6} sm={6}>
      <Card
        sx={{
          borderRadius: '8px',
          textAlign: 'left',
          boxShadow: '0px 3px 8px -1px #3232470D',
          height: ismobile ? 'auto' : '400px',
          padding: ismobile ? '8px' : '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Skeleton variant="rounded" width={ismobile ? 80 : 100} height={ismobile ? 80 : 100} sx={{ marginBottom: 2 }} />
          <Skeleton variant="text" width={ismobile ? '70%' : '100%'} height={ismobile ? 30 : 40} sx={{ marginBottom: 2 }} />
          <Skeleton variant="text" width={ismobile ? '50%' : '80%'} height={ismobile ? 15 : 20} sx={{ marginBottom: 2 }} />
          <Skeleton variant="text" width={ismobile ? '40%' : '70%'} height={ismobile ? 15 : 20} sx={{ marginBottom: 2 }} />
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 1, marginBottom: 2 }}>
          <Chip label={<Skeleton width={ismobile ? 40 : 50} />} size="large" sx={{ padding: '1px 6px', backgroundColor: '#F1F5F9', color: '#64748B' }} />
          <Chip label={<Skeleton width={ismobile ? 20 : 30} />} size="large" sx={{ padding: '1px 6px', backgroundColor: '#F1F5F9', color: '#64748B' }} />
        </Box>
      </Card>
    </Grid>
  );
};

export const RegularEventSkeleton = ({ ismobile }) => {
  return (
    <Box mb={2}>
      <Card
        sx={{
          padding: ismobile ? '15px 10px' : '21px 16px',
          margin: ismobile && 1,
          boxShadow: '0px 3px 8px -1px #3232470D',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: ismobile ? 'flex-start' : 'flex-start',
        }}
      >
        <CardContent sx={{ padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Skeleton variant="text" width={ismobile ? '70%' : '80%'} height={ismobile ? 30 : 40} sx={{ marginBottom: 2 }} />
          <Skeleton variant="text" width={ismobile ? '50%' : '60%'} height={ismobile ? 15 : 20} sx={{ marginBottom: 2 }} />
          <Skeleton variant="text" width={ismobile ? '40%' : '50%'} height={ismobile ? 15 : 20} sx={{ marginBottom: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 1, marginBottom: 2 }}>
            <Chip label={<Skeleton width={ismobile ? 40 : 50} />} size="large" sx={{ padding: '1px 6px', backgroundColor: '#F1F5F9', color: '#64748B' }} />
            <Chip label={<Skeleton width={ismobile ? 20 : 30} />} size="large" sx={{ padding: '1px 6px', backgroundColor: '#F1F5F9', color: '#64748B' }} />
          </Box>
        </CardContent>
        <Skeleton variant="rounded" width={ismobile ? 100 : 200} height={ismobile ? 100 : 200} />
      </Card>
    </Box>
  );
};
