import styled from 'styled-components';
import { SIZE_A4_WIDTH } from '../../style';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoxDiv = styled.div`
  width: ${SIZE_A4_WIDTH};
  flex: 0 0 ${SIZE_A4_WIDTH};
  margin: auto;
  padding: 0 1.8rem;
`;

export const SideDiv = styled.div`
  flex: 1 1 0;
`;
