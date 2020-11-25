import React, { FC } from 'react';
import { SectionHeader } from './ItemizedSectionStyles';

export interface ItemizedSectionProps {
  readonly title: string;
  readonly className?: string;
}

export const ItemizedSection: FC<ItemizedSectionProps> = ({ children, title, className }) => (
  <section className={className}>
    <SectionHeader>{title}</SectionHeader>
    {React.Children.map(children, (child) => child)}
  </section>
);
