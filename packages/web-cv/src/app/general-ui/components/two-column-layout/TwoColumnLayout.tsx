import React, { FC } from 'react';
import { ContainerDiv } from './TwoColumnLayoutStyles';

export interface TwoColumnLayoutProps {
  readonly className?: string;
}

export const TwoColumnLayout: FC<TwoColumnLayoutProps> = ({ children, className }) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <ContainerDiv>
      {childrenArray[0] || null}
      {childrenArray[1] || null}
    </ContainerDiv>
  );
};
