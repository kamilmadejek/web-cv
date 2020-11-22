import React from 'react';
import './import-styled-components';
import { GeneralInformationHeader } from './cv/general-information-header/GeneralInformationHeader';
import { CV } from '../cv/types';
import { AppDiv } from './AppStyles';

export interface AppProps {
  readonly cv: CV | null;
}

export const App: React.FC<AppProps> = ({ cv }) =>
  cv ? (
    <AppDiv>
      <GeneralInformationHeader generalInformation={cv.generalInformation} />
    </AppDiv>
  ) : null;
