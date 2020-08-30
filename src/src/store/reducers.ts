import { combineReducers } from 'redux';
import auth from './auth/reducer';
import bank from './bank/reducer';
import country from './country/reducer';
import state from './state/reducer';
import city from './city/reducer';
import currency from './currency/reducer';
import language from './language/reducer';
import role from './role/reducer';
import user from './user/reducer';

const reducers = combineReducers({
  auth,
  bank,
  country,
  state,
  city,
  currency,
  language,
  role,
  user
});

export default reducers;
