import { defineState } from 'redux-localstore';
import { ADD_FAVORITE, DEL_FAVORITE } from '../actions/actionType';

const defaultState = {
  favorites: []
};

const initialState = defineState(defaultState)('favoriteReducer');

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.favorite]
      };
    case DEL_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter(
          favorite => favorite.numericCode !== action.favorite.numericCode
        )
      };
    }
    default:
      return state;
  }
};

export default favoriteReducer;
