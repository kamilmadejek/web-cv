import { ActionType } from './action-type';
import { CV } from '../../cv/types';

// CV actions

export interface CVLoadAction {
  readonly type: ActionType.CV_LOAD;
  readonly payload: CV;
}

export const loadCV = (cv: CV): CVLoadAction => ({
  type: ActionType.CV_LOAD,
  payload: cv,
});

// Other action (not to be used, for default switch case)

export interface OtherAction {
  readonly type: ActionType.OTHER_ACTION;
}

export type WebCVAction = CVLoadAction | OtherAction;
