import React from 'react';
import { GeneralInformation } from '../../../cv/types';
import {
  BackgroundDiv,
  NameDiv,
  ProfessionalDescriptionDiv,
  ProfessionalTitleDiv,
  StyledLabelValueLayout,
} from './GeneralInformationHeaderStyles';
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
              <a href={`tel:${generalInformation.phone}`}>{generalInformation.phone}</a>
            </StyledLabelValueLayout>
            <StyledLabelValueLayout>
              <span>E-mail</span>
              <a href={`mailto:${generalInformation.email}`}>{generalInformation.email}</a>
            </StyledLabelValueLayout>
          </div>
          <div>
            <StyledLabelValueLayout>
              <span>LinkedIn</span>
              <a href={generalInformation.linkedIn}>{generalInformation.linkedIn}</a>
            </StyledLabelValueLayout>
          </div>
        </TwoColumnLayout>
      </PageWidthBox>
    </BackgroundDiv>
    <PageWidthBox>
      <ProfessionalDescriptionDiv>{generalInformation.professionalDescription}</ProfessionalDescriptionDiv>
    </PageWidthBox>
  </section>
);
