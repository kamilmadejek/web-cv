import styled from 'styled-components';
import { FONT_SIZE_S, FONT_WEIGHT_REGULAR } from './general-ui/style';
import { GeneralInformationHeader } from './cv/general-information-header/GeneralInformationHeader';
import { JobView } from './cv/job-view/JobView';
import { ItemizedSection } from './general-ui/components/itemized-section/ItemizedSection';
import { EducationView } from './cv/education-view/EducationView';

export const AppDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: ${FONT_SIZE_S};
  font-weight: ${FONT_WEIGHT_REGULAR};
`;

export const StyledGeneralInformationHeader = styled(GeneralInformationHeader)`
  margin-bottom: 1.4rem;
`;

export const StyledItemizedSection = styled(ItemizedSection)`
  margin-bottom: 1.2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledJobView = styled(JobView)`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledEducationView = styled(EducationView)`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;
