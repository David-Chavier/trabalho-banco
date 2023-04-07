import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { adicionarSaldo, removeSaldo } from '../store/modules/saldoSlice';

const Transaction: React.FC = () => {
  const value = useAppSelector(state => state.saldo);

  const dispatch = useAppDispatch();

  const [valor, setValor] = useState<number>(0);

  const GravaSaldo = () => {
    dispatch(adicionarSaldo(valor));
    setValor(0);
  };

  console.log(value);

  const DebitaSaldo = () => {
    dispatch(removeSaldo(valor));
    setValor(0);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5">Cadastrar valor</Typography>
        <Divider />
      </Grid>
      <Grid item padding={'10px'} xs={12}>
        <TextField
          fullWidth
          value={valor}
          label={'Valor'}
          type="number"
          onChange={event => setValor(parseFloat(event.target.value))}
        ></TextField>
      </Grid>
      <Grid item paddingTop={'10px'} xs={6}>
        <Button onClick={GravaSaldo} variant="outlined" fullWidth>
          Somar Valor
        </Button>
      </Grid>
      <Grid item paddingTop={'10px'} xs={6}>
        <Button onClick={DebitaSaldo} variant="contained" fullWidth>
          Subtrair Valor
        </Button>
      </Grid>
    </Grid>
  );
};

export default Transaction;
