import React from 'react';
import { ContainerDiv, LabelDiv, ValueDiv } from './LabelValueLayoutStyles';

export interface LabelValueLayoutProps {}

export const LabelValueLayout: React.FC<LabelValueLayoutProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <ContainerDiv>
      <LabelDiv>{childrenArray[0] || null}</LabelDiv>
      <ValueDiv>{childrenArray[1] || null}</ValueDiv>
    </ContainerDiv>
  );
};
