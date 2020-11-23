import styled from 'styled-components';
import { FONT_SIZE_M, FONT_WEIGHT_BOLD } from '../../general-ui/style';

export const DateRangeDiv = styled.div`
  width: 3.6rem;
  padding-top: 0.1rem;
  text-align: right;
  font-size: ${FONT_SIZE_M};
  font-weight: ${FONT_WEIGHT_BOLD};

  > span {
    display: inline-block;
    text-align: left;
  }
`;
