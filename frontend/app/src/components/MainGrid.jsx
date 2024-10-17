import * as React from 'react';
import Grid from '@mui/material/Grid';

export default function MainGrid({ children }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}