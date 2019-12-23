import { ADD_FAVORITE, DEL_FAVORITE, LOAD_COUNTRIES, CHANGE_THEME } from './actionType';

export const addFavorite = favorite => {
  return {
    type: ADD_FAVORITE,
    favorite
  };
};

export const delFavorite = favorite => {
  return {
    type: DEL_FAVORITE,
    favorite
  };
};

export const loadCountries = countries => {
  return {
    type: LOAD_COUNTRIES,
    countries
  };
};

export const changeTheme = () => {
  return {
    type: CHANGE_THEME
  };
};
