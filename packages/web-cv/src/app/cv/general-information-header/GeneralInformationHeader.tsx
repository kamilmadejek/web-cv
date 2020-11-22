import React from 'react';
import { GeneralInformation } from '../../../cv/types';
import { BackgroundDiv } from './GeneralInformationHeaderStyles';
import { LabelValueLayout } from '../../general-ui/components/label-value-layout/LabelValueLayout';
import { PageWidthBox } from '../../general-ui/components/page-width-box/PageWidthBox';

export interface GeneralInformationHeaderProps {
  readonly generalInformation: GeneralInformation;
}

export const GeneralInformationHeader: React.FC<GeneralInformationHeaderProps> = ({ generalInformation }) => (
  <section>
    <BackgroundDiv>
      <PageWidthBox>
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
      </PageWidthBox>
    </BackgroundDiv>
    <PageWidthBox>
      <div>{generalInformation.professionalDescription}</div>
    </PageWidthBox>
  </section>
);
