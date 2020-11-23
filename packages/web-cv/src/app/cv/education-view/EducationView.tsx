import React, { FC } from 'react';
import { Education } from '../../../cv/types';
import {
  EducationDetailsDiv,
  EducationDiv,
  FieldDiv,
  InstitutionDiv,
  MajorDiv,
  StyledDateRangeView,
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
      <FieldDiv>{education.field}</FieldDiv>
      <MajorDiv>{education.major}</MajorDiv>
    </EducationDetailsDiv>
  </EducationDiv>
);
