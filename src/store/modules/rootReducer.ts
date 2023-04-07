import { combineReducers } from '@reduxjs/toolkit';

import contacts from './contactsSlice';
import counter from './counterSlice';
import saldo from './saldoSlice';

export default combineReducers({
  contacts,
  counter,
  saldo
});
