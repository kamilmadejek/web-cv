import React, { FC } from 'react';
import { Education } from '../../../cv/types';
import {
  EducationDiv,
  EducationDetailsDiv,
  StyledDateRangeView,
  InstitutionDiv,
  MajorDiv,
} from './EducationViewStyles';

export interface EducationViewProps {
  readonly education: Education;

  readonly className?: string;
}

export const EducationView: FC<EducationViewProps> = ({ education, className }) => (
  <EducationDiv className={className}>
    <StyledDateRangeView startDate={education.startDate} endDate={education.endDate} />
    <EducationDetailsDiv>
      <InstitutionDiv>{education.institution}</InstitutionDiv>
      <MajorDiv>{education.major}</MajorDiv>
    </EducationDetailsDiv>
  </EducationDiv>
);
