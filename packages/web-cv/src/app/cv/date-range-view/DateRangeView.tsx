import React, { FC } from 'react';
import { DateRangeDiv } from './DateRangeViewStyles';

export interface DateRangeViewProps {
  readonly startDate: string;
  readonly endDate: string;

  readonly className?: string;
}

export const DateRangeView: FC<DateRangeViewProps> = ({ startDate, endDate, className }) => (
  <DateRangeDiv className={className}>
    <span>
      {startDate} -<br />
      {endDate}
    </span>
  </DateRangeDiv>
);
