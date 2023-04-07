import { Divider, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../store/hooks';
import saldoSlice from '../store/modules/saldoSlice';

const ComponetName: React.FC = () => {
  const value = useAppSelector(state => state.saldo);

  return (
    <React.Fragment>
      <Typography variant="h2">Saldo</Typography>
      <Divider />
      <Typography variant="h3">R${value.value}</Typography>
    </React.Fragment>
  );
};

export default ComponetName;
