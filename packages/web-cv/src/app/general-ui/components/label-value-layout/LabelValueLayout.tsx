import React from 'react';
import { ContainerDiv } from './LabelValueLayoutStyles';

export interface LabelValueLayoutProps {
  readonly className?: string;
}

export const LabelValueLayout: React.FC<LabelValueLayoutProps> = ({ children, className }) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <ContainerDiv className={className}>
      {childrenArray[0] || null}
      {childrenArray[1] || null}
    </ContainerDiv>
  );
};
