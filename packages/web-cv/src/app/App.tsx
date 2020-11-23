import _ from 'lodash';
import React from 'react';
import './import-styled-components';
import { CV } from '../cv/types';
import {
  AppDiv,
  PrintPageFooter,
  StyledEducationView,
  StyledGeneralInformationHeader,
  StyledItemizedSection,
  StyledJobView,
  StyledSkillView,
  WebPageFooter,
} from './AppStyles';
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
        <StyledItemizedSection title="Experience">
          {_.flatten(
            cv.employmentHistory.map((employment, eIndex) =>
              employment.jobs.map((job, jIndex) => (
                <StyledJobView key={`${eIndex}-${jIndex}`} job={job} employer={employment.employer} />
              )),
            ),
          )}
        </StyledItemizedSection>
        <StyledItemizedSection title="Education">
          {cv.educationHistory.map((education, index) => (
            <StyledEducationView key={index} education={education} />
          ))}
        </StyledItemizedSection>
        <StyledItemizedSection title="Skills">
          {cv.skills.map((skill, index) => (
            <StyledSkillView key={index} skill={skill} />
          ))}
        </StyledItemizedSection>
      </PageWidthBox>
      <PrintPageFooter>
        <PageWidthBox>{cv.footer}</PageWidthBox>
      </PrintPageFooter>
      <WebPageFooter>
        <PageWidthBox>WebCV, 2020 by Kamil Madejek</PageWidthBox>
      </WebPageFooter>
    </AppDiv>
  ) : null;
