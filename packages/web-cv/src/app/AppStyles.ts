import styled from 'styled-components';
import { FONT_SIZE_S, FONT_SIZE_XS, FONT_WEIGHT_MEDIUM, FONT_WEIGHT_REGULAR } from './general-ui/style';
import { GeneralInformationHeader } from './cv/general-information-header/GeneralInformationHeader';
import { JobView } from './cv/job-view/JobView';
import { ItemizedSection } from './general-ui/components/itemized-section/ItemizedSection';
import { EducationView } from './cv/education-view/EducationView';
import { SkillView } from './cv/skill-view/SkillView';

export const AppDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: ${FONT_SIZE_S};
  font-weight: ${FONT_WEIGHT_REGULAR};
`;

export const StyledGeneralInformationHeader = styled(GeneralInformationHeader)`
  margin-bottom: 1.4rem;
`;

export const StyledItemizedSection = styled(ItemizedSection)`
  margin-bottom: 1.4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledJobView = styled(JobView)`
  margin-bottom: 0.6rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledEducationView = styled(EducationView)`
  margin-bottom: 0.6rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledSkillView = styled(SkillView)`
  margin-bottom: 0.4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PrintPageFooter = styled.footer`
  @media screen {
    display: none;
  }

  @media print {
    position: fixed;
    bottom: 0;
    font-size: ${FONT_SIZE_XS};
    padding-bottom: 1rem;
  }
`;

export const WebPageFooter = styled.footer`
  @media screen {
    margin-top: 2.4rem;
    margin-bottom: 1rem;
    text-align: right;
    opacity: 50%;
    font-weight: ${FONT_WEIGHT_MEDIUM};
  }

  @media print {
    display: none;
  }
`;
