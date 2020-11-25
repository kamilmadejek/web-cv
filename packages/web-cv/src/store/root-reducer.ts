import { combineReducers } from '@reduxjs/toolkit';
import { cvReducer, CVState } from './cv/cvReducer';

export interface RootState {
  readonly cv: CVState;
}

export const rootReducer = combineReducers<RootState>({
  cv: cvReducer,
});
