import _ from 'lodash';
import React from 'react';
import './import-styled-components';
import { CV } from '../cv/types';
import { AppDiv, StyledGeneralInformationHeader } from './AppStyles';
import { ItemizedSection } from './general-ui/components/itemized-section/ItemizedSection';
import { PageWidthBox } from './general-ui/components/page-width-box/PageWidthBox';

export interface AppProps {
  readonly cv: CV | null;

  readonly className?: string;
}

export const App: React.FC<AppProps> = ({ cv, className }) =>
  cv ? (
    <AppDiv className={className}>
      <StyledGeneralInformationHeader generalInformation={cv.generalInformation} />
      <PageWidthBox>
        <ItemizedSection title="Experience">
          {extractJobsWithEmployerInfo(cv).map((job, index) => (
            <div key={index}>{JSON.stringify(job)}</div>
          ))}
        </ItemizedSection>
      </PageWidthBox>
    </AppDiv>
  ) : null;

const extractJobsWithEmployerInfo = (cv: CV) =>
  _.flatten(
    cv.employmentHistory.map((employment) => employment.jobs.map((job) => ({ ...job, employer: employment.employer }))),
  );
