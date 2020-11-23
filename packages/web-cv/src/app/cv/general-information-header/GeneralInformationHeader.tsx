import React, { Fragment } from 'react';
import { GeneralInformation } from '../../../cv/types';
import { BackgroundDiv, NameDiv, ProfessionalTitleDiv, StyledLabelValueLayout } from './GeneralInformationHeaderStyles';
import { LabelValueLayout } from '../../general-ui/components/label-value-layout/LabelValueLayout';
import { PageWidthBox } from '../../general-ui/components/page-width-box/PageWidthBox';
import { TwoColumnLayout } from '../../general-ui/components/two-column-layout/TwoColumnLayout';

export interface GeneralInformationHeaderProps {
  readonly generalInformation: GeneralInformation;

  readonly className?: string;
}

export const GeneralInformationHeader: React.FC<GeneralInformationHeaderProps> = ({
  generalInformation,
  className,
}) => (
  <section className={className}>
    <BackgroundDiv>
      <PageWidthBox>
        <NameDiv>{generalInformation.name}</NameDiv>
        <ProfessionalTitleDiv>{generalInformation.professionalTitle}</ProfessionalTitleDiv>
        <TwoColumnLayout>
          <div>
            <StyledLabelValueLayout>
              <span>Phone</span>
              <span>{generalInformation.phone}</span>
            </StyledLabelValueLayout>
            <StyledLabelValueLayout>
              <span>E-mail</span>
              <span>{generalInformation.email}</span>
            </StyledLabelValueLayout>
          </div>
          <div>
            <StyledLabelValueLayout>
              <span>LinkedIn</span>
              <span>{generalInformation.linkedIn}</span>
            </StyledLabelValueLayout>
          </div>
        </TwoColumnLayout>
      </PageWidthBox>
    </BackgroundDiv>
    <PageWidthBox>
      <div>{generalInformation.professionalDescription}</div>
    </PageWidthBox>
  </section>
);
