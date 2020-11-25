import { CV } from '../../cv/types';
import { ActionType } from '../actions/action-type';
import { WebCVAction } from '../actions/actions';

export type CVState = CV | null;

export const initialCVState: CVState = null;

export const cvReducer = (state: CVState = initialCVState, action: WebCVAction): CVState => {
  switch (action.type) {
    case ActionType.CV_LOAD:
      return action.payload;
    default:
      return state;
  }
};
