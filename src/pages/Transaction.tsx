import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const Transaction: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5">Cadastrar valor</Typography>
        <Divider />
      </Grid>
      <Grid item padding={'10px'} xs={12}>
        <TextField fullWidth label={'Valor'} type="number"></TextField>
      </Grid>
      <Grid item paddingTop={'10px'} xs={6}>
        <Button variant="outlined" fullWidth>
          Somar Valor
        </Button>
      </Grid>
      <Grid item paddingTop={'10px'} xs={6}>
        <Button variant="contained" fullWidth>
          Subtrair Valor
        </Button>
      </Grid>
    </Grid>
  );
};

export default Transaction;
