import styled from 'styled-components';
import { FONT_WEIGHT_BOLD } from '../../style';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;

  > :nth-child(1) {
    min-width: 2.3rem;
    margin-right: 0.8rem;
    font-weight: ${FONT_WEIGHT_BOLD};
  }
`;
