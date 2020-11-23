import styled from 'styled-components';
import { FONT_SIZE_L, FONT_SIZE_M, FONT_WEIGHT_MEDIUM } from '../../general-ui/style';
import { DateRangeView } from '../date-range-view/DateRangeView';

export const JobDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledDateRangeView = styled(DateRangeView)`
  flex: 0 0 auto;
`;

export const JobDetailsDiv = styled.div`
  flex: 1 1 0;
  margin-left: 1rem;
`;

export const JobTitleDiv = styled.div`
  margin-bottom: 0.6rem;
  font-size: ${FONT_SIZE_M};
`;

export const JobTitleSpan = styled.span`
  font-size: ${FONT_SIZE_L};
  font-weight: ${FONT_WEIGHT_MEDIUM};
`;

export const AtSpan = styled.span`
  display: inline-block;
  margin: 0 0.1rem;
`;

export const EmployerSpan = styled.span`
  font-weight: ${FONT_WEIGHT_MEDIUM};
`;

export const ResponsibilityList = styled.ul`
  padding-left: 1rem;
`;

export const ResponsibilityItem = styled.li`
  margin-bottom: 0.2rem;
`;
