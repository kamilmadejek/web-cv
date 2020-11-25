import styled from 'styled-components';
import { DateRangeView } from '../date-range-view/DateRangeView';
import { FONT_SIZE_L, FONT_WEIGHT_MEDIUM } from '../../general-ui/style';

export const EducationDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledDateRangeView = styled(DateRangeView)`
  flex: 0 0 auto;
`;

export const EducationDetailsDiv = styled.div`
  flex: 1 1 0;
  margin-left: 1rem;
`;

export const InstitutionDiv = styled.div`
  font-size: ${FONT_SIZE_L};
  font-weight: ${FONT_WEIGHT_MEDIUM};
  margin-bottom: 0.2rem;
`;

export const FieldDiv = styled.div`
  line-height: 1.4;
`;
export const MajorDiv = styled.div`
  line-height: 1.4;
`;
