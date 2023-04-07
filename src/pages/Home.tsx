import { Divider, Typography, Grid } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../store/hooks';

const ComponetName: React.FC = () => {
  const value = useAppSelector(state => state.saldo);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3">Saldo da sua conta</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} paddingTop={'10px'}>
        <Typography variant="h4">R${value.value}</Typography>
      </Grid>
    </Grid>
  );
};

export default ComponetName;
