/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledTextInput } from './StyledTextInput';

interface IStyledTextareaProps {
  $isResizable?: boolean;
  $isHidden?: boolean;
}

const hiddenStyles = `
  visibility: hidden;
  position: absolute;
  overflow: hidden;
  height: 0;
  top: 0;
  left: 0;
  transform: translateZ(0);
`;

export const StyledTextarea = styled(StyledTextInput)<IStyledTextareaProps>`
  resize: ${props => (props.$isResizable ? 'vertical' : 'none')};
  overflow: auto;
  ${props => props.$isHidden && hiddenStyles};

  ${componentStyles};
`;
