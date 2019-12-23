/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CountryBoxWrap } from './CountryBoxStyles';
import { addFavorite, delFavorite } from '../../redux/actions/actions';

const CountryBox = props => {
  const {
    addFavorite,
    delFavorite,
    favorites,
    country: { name, flag, numericCode }
  } = props;

  const isFavorite = favorites.find(favorite => favorite.numericCode === props.country.numericCode);

  return (
    <CountryBoxWrap>
      <Link to={`/country/${numericCode}`}>
        <div className="imagewrap">
          <img src={flag} alt="" className="flag" />
        </div>
        <div className="countryname">{name}</div>
      </Link>
      <button
        className="btnfav"
        type="button"
        onClick={() => (isFavorite ? delFavorite(props.country) : addFavorite(props.country))}
      >
        {isFavorite ? 'Remover' : 'Salvar'}
      </button>
    </CountryBoxWrap>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ addFavorite, delFavorite }, dispatch);
const mapStateToProps = store => ({
  favorites: store.favoriteReducer.favorites
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryBox);
