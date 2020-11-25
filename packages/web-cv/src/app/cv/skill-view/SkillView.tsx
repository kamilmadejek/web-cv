import React, { FC } from 'react';
import { Skill } from '../../../cv/types';
import { SkillNameSpan, SkillViewDiv } from './SkillViewStyles';

export interface SkillViewProps {
  readonly skill: Skill;

  readonly className?: string;
}

export const SkillView: FC<SkillViewProps> = ({ skill, className }) => (
  <SkillViewDiv className={className}>
    <SkillNameSpan>{skill.name}:</SkillNameSpan> {skill.description}
  </SkillViewDiv>
);
