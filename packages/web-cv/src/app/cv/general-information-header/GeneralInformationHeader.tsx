import React from 'react';
import { GeneralInformation } from '../../../cv/types';
import { BackgroundDiv, LabelValueSpan, NameDiv, ProfessionalTitleDiv } from './GeneralInformationHeaderStyles';
import { LabelValueLayout } from '../../general-ui/components/label-value-layout/LabelValueLayout';
import { PageWidthBox } from '../../general-ui/components/page-width-box/PageWidthBox';

export interface GeneralInformationHeaderProps {
  readonly generalInformation: GeneralInformation;
}

export const GeneralInformationHeader: React.FC<GeneralInformationHeaderProps> = ({ generalInformation }) => (
  <section>
    <BackgroundDiv>
      <PageWidthBox>
        <NameDiv>{generalInformation.name}</NameDiv>
        <ProfessionalTitleDiv>{generalInformation.professionalTitle}</ProfessionalTitleDiv>
        <LabelValueLayout>
          <LabelValueSpan>Phone</LabelValueSpan>
          <LabelValueSpan>{generalInformation.phone}</LabelValueSpan>
        </LabelValueLayout>
        <LabelValueLayout>
          <LabelValueSpan>E-mail</LabelValueSpan>
          <LabelValueSpan>{generalInformation.email}</LabelValueSpan>
        </LabelValueLayout>
        <LabelValueLayout>
          <LabelValueSpan>LinkedIn</LabelValueSpan>
          <LabelValueSpan>{generalInformation.linkedIn}</LabelValueSpan>
        </LabelValueLayout>
      </PageWidthBox>
    </BackgroundDiv>
    <PageWidthBox>
      <div>{generalInformation.professionalDescription}</div>
    </PageWidthBox>
  </section>
);
