import React from 'react';
import './import-styled-components';
import { GeneralInformationHeader } from './cv/general-information-header/GeneralInformationHeader';
import { CV } from '../cv/types';

export interface AppProps {
  readonly cv: CV | null;
}

export const App: React.FC<AppProps> = ({ cv }) =>
  cv ? (
    <React.Fragment>
      <GeneralInformationHeader generalInformation={cv.generalInformation} />
    </React.Fragment>
  ) : null;
