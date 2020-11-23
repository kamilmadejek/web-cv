import React, { FC } from 'react';
import { Job } from '../../../cv/types';
import {
  AtSpan,
  EmployerSpan,
  JobDiv,
  JobTitleDiv,
  JobTitleSpan,
  ResponsibilityItem,
  ResponsibilityList,
} from './JobItemStyles';

export interface JobItemProps {
  readonly job: Job;
  readonly employer: string;

  readonly className?: string;
}

export const JobItem: FC<JobItemProps> = ({ job, employer, className }) => (
  <JobDiv className={className}>
    <JobTitleDiv>
      <JobTitleSpan>{job.jobTitle}</JobTitleSpan> <AtSpan>at</AtSpan> <EmployerSpan>{employer}</EmployerSpan>
    </JobTitleDiv>
    <ResponsibilityList>
      {job.responsibilities.map((responsibility, index) => (
        <ResponsibilityItem key={index}>{responsibility}</ResponsibilityItem>
      ))}
    </ResponsibilityList>
  </JobDiv>
);
