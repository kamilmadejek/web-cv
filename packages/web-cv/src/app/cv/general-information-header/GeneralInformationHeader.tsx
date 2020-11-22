import React, { Fragment } from 'react';
import { GeneralInformation } from '../../../cv/types';
import { StyledSection } from './GeneralInformationHeaderStyles';
import { LabelValueLayout } from '../../general-ui/components/label-value-layout/LabelValueLayout';

export interface GeneralInformationHeaderProps {
  readonly generalInformation: GeneralInformation;
}

export const GeneralInformationHeader: React.FC<GeneralInformationHeaderProps> = ({ generalInformation }) => (
  <StyledSection>
    <div>{generalInformation.name}</div>
    <div>{generalInformation.professionalTitle}</div>
    <LabelValueLayout>
      Phone
      {generalInformation.phone}
    </LabelValueLayout>
    <LabelValueLayout>
      E-mail
      {generalInformation.email}
    </LabelValueLayout>
    <LabelValueLayout>
      LinkedIn
      {generalInformation.linkedIn}
    </LabelValueLayout>
    <div>{generalInformation.professionalDescription}</div>
  </StyledSection>
);
