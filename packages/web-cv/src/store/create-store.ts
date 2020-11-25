import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, RootState } from './root-reducer';
import { WebCVAction } from './actions/actions';

export const createStore = () =>
  configureStore<RootState, WebCVAction>({
    reducer: rootReducer,
  });
