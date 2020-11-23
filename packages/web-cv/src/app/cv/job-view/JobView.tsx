import React, { FC } from 'react';
import { Job } from '../../../cv/types';
import {
  AtSpan,
  EmployerSpan,
  JobDetailsDiv,
  JobDiv,
  JobTitleDiv,
  JobTitleSpan,
  ResponsibilityItem,
  ResponsibilityList,
  StyledDateRangeView,
} from './JobViewStyles';

export interface JobViewProps {
  readonly job: Job;
  readonly employer: string;

  readonly className?: string;
}

export const JobView: FC<JobViewProps> = ({ job, employer, className }) => (
  <JobDiv className={className}>
    <StyledDateRangeView startDate={job.startDate} endDate={job.endDate} />
    <JobDetailsDiv>
      <JobTitleDiv>
        <JobTitleSpan>{job.jobTitle}</JobTitleSpan> <AtSpan>at</AtSpan> <EmployerSpan>{employer}</EmployerSpan>
      </JobTitleDiv>
      <ResponsibilityList>
        {job.responsibilities.map((responsibility, index) => (
          <ResponsibilityItem key={index}>{responsibility}</ResponsibilityItem>
        ))}
      </ResponsibilityList>
    </JobDetailsDiv>
  </JobDiv>
);
