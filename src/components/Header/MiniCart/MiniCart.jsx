/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MiniCartWrap, HearthWrap, ContFavorite } from './MiniCartStyles';

const MiniCart = props => {
  const { favorites } = props;
  return (
    <Link to="/favorites">
      <MiniCartWrap>
        <HearthWrap>&#10084;</HearthWrap>
        <ContFavorite>{favorites.length}</ContFavorite>
      </MiniCartWrap>
    </Link>
  );
};

const mapStateToProps = store => ({
  favorites: store.favoriteReducer.favorites
});

export default connect(mapStateToProps)(MiniCart);
