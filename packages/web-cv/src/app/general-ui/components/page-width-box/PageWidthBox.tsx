import React from 'react';
import { BoxDiv, ContainerDiv, SideDiv } from './PageWidthBoxStyles';

export const PageWidthBox: React.FC = ({ children }) => (
  <ContainerDiv>
    <SideDiv />
    <BoxDiv>{children}</BoxDiv>
    <SideDiv />
  </ContainerDiv>
);
