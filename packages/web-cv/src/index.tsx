import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createImmutableConfiguration } from '@km/utility-greenhouse/lib/immutable-configuration';
import './index.css';
import reportWebVitals from './report-web-vitals';
import { Configuration } from './configuration/types';
import { createStore } from './store/create-store';
import { RootState } from './store/root-reducer';
import explicitConfiguration from './configuration.json';
import { loadCV, WebCVAction } from './store/actions/actions';
import { AppContainer } from './app/AppContainer';

const configuration = createImmutableConfiguration<Configuration>({
  defaultConfiguration: {},
  configuration: explicitConfiguration,
});

const store: Store<RootState, WebCVAction> = createStore();
store.dispatch(loadCV(configuration.cv));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
