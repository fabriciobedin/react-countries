import { combineReducers } from 'redux';
import setCountriesReducer from './reducers/setCountriesReducer';
import changeThemeReducer from './reducers/changeThemeReducer';
import favoriteReducer from './reducers/favoriteReducer';

const Reducers = combineReducers({
  setCountriesReducer,
  changeThemeReducer,
  favoriteReducer
});

export default Reducers;
