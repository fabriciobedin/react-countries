/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header/Header';
import CountryList from '../../components/CountryList/CountryList';
import { Container, TitleMain, ButtonRound } from '../../assets/styles/Lib';

const Favorite = props => {
  const { favorites } = props;
  return (
    <>
      <Header />
      <Container direction="column">
        <TitleMain>Favoritos</TitleMain>

        <div>
          <ButtonRound margintop="0" onClick={() => props.history.goBack()}>
            Voltar
          </ButtonRound>
        </div>

        <Container>
          <CountryList countries={favorites} />
        </Container>

        {favorites.length > 0 && (
          <div>
            <ButtonRound
              margintop="2rem"
              marginbottom="2rem"
              onClick={() => props.history.goBack()}
            >
              Voltar
            </ButtonRound>
          </div>
        )}
      </Container>
    </>
  );
};
const mapStateToProps = store => ({
  favorites: store.favoriteReducer.favorites
});
export default connect(mapStateToProps)(withRouter(Favorite));
