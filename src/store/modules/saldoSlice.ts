import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { log } from 'console';

interface SaldoState {
  value: number;
}

const initialState: SaldoState = {
  value: 0
};

const saldoSlice = createSlice({
  name: 'saldo',
  initialState,
  reducers: {
    adicionarSaldo: (state, action: PayloadAction<number>) => {
      state.value = action.payload + state.value;
    },
    removeSaldo: (state, action: PayloadAction<number>) => {
      state.value = state.value - action.payload;
    }
  }
});

export const { adicionarSaldo, removeSaldo } = saldoSlice.actions;
export default saldoSlice.reducer;
