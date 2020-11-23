import styled from 'styled-components';
import { FONT_SIZE_S, FONT_WEIGHT_REGULAR } from './general-ui/style';
import { GeneralInformationHeader } from './cv/general-information-header/GeneralInformationHeader';
import { JobView } from './cv/job-view/JobView';

export const AppDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: ${FONT_SIZE_S};
  font-weight: ${FONT_WEIGHT_REGULAR};
`;

export const StyledGeneralInformationHeader = styled(GeneralInformationHeader)`
  margin-bottom: 1.4rem;
`;

export const StyledJobView = styled(JobView)`
  margin-bottom: 1rem;
`;
