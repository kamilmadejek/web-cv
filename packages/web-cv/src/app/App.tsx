import React from 'react';
import './import-styled-components';
import { GeneralInformationHeader } from './cv/general-information-header/GeneralInformationHeader';
import { CV } from '../cv/types';
import { AppDiv } from './AppStyles';

export interface AppProps {
  readonly cv: CV | null;

  readonly className?: string;
}

export const App: React.FC<AppProps> = ({ cv, className }) =>
  cv ? (
    <AppDiv className={className}>
      <GeneralInformationHeader generalInformation={cv.generalInformation} />
    </AppDiv>
  ) : null;
