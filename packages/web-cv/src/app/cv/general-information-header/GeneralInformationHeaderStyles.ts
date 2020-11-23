import styled from 'styled-components';
import {
  COLOR_HEADER_BACKGROUND,
  COLOR_HEADER_TEXT,
  FONT_SIZE_M,
  FONT_SIZE_XL,
  FONT_SIZE_XXL,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_REGULAR,
  FONT_WEIGHT_THIN,
} from '../../general-ui/style';
import { LabelValueLayout } from '../../general-ui/components/label-value-layout/LabelValueLayout';

export const BackgroundDiv = styled.div`
  padding: 1rem 0;
  background-color: ${COLOR_HEADER_BACKGROUND};
  color: ${COLOR_HEADER_TEXT};
`;

export const NameDiv = styled.div`
  font-size: ${FONT_SIZE_XXL};
  font-weight: ${FONT_WEIGHT_REGULAR};
  margin-bottom: 0.4rem;
`;

export const ProfessionalTitleDiv = styled.div`
  font-size: ${FONT_SIZE_XL};
  font-weight: ${FONT_WEIGHT_THIN};
  margin-bottom: 1rem;
`;

export const StyledLabelValueLayout = styled(LabelValueLayout)`
  font-size: ${FONT_SIZE_M};
  margin-bottom: 0.2rem;
`;
