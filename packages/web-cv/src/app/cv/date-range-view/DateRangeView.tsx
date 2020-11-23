import React, { FC } from 'react';
import { DateRangeDiv, EndDateSpan, DashSpan, StartDateSpan } from './DateRangeViewStyles';

export interface DateRangeViewProps {
  readonly startDate: string;
  readonly endDate: string;

  readonly className?: string;
}

export const DateRangeView: FC<DateRangeViewProps> = ({ startDate, endDate, className }) => (
  <DateRangeDiv className={className}>
    <StartDateSpan>{startDate}</StartDateSpan> <DashSpan>-</DashSpan>
    <br />
    <EndDateSpan>{endDate}</EndDateSpan>
  </DateRangeDiv>
);
