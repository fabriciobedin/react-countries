/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GlobalStyle from './assets/styles/Global';
import Config from './Config';
import CountryService from './services/CountryService';
import { loadCountries } from './redux/actions/actions';

import Home from './pages/Home/Home';
import Favorite from './pages/Favorite/Favorite';
import Detail from './pages/Detail/Detail';

const App = props => {
  const { theme, loadCountries } = props;
  document.title = Config.PAGE_TITLE;

  useEffect(() => {
    const countryService = new CountryService();
    countryService.getAllCountriesFromApi().then(res => {
      loadCountries(res.data);
    });
  }, [loadCountries]);
  return (
    <ThemeProvider theme={{ scheme: theme.scheme }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/country/:numericcode" render={localprops => <Detail {...localprops} />} />
          <Route path="/favorites" render={() => <Favorite />} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ loadCountries }, dispatch);
const mapStateToProps = store => ({
  theme: store.changeThemeReducer.theme
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
