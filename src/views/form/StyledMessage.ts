/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import getLineHeight from '../../theming/utils/getLineHeight';
import { Validation } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';
import { StyledLabel } from './StyledLabel';
import { StyledMessageIcon } from './StyledMessageIcon';

export interface IStyledMessageProps {
  $validation?: Validation;
}

const colorStyles = ({ theme, $validation }: IStyledMessageProps & IStyledBaseProps) => {
  let variable;

  if ($validation === 'error') {
    variable = 'foreground.danger';
  } else if ($validation === 'success') {
    variable = 'foreground.success';
  } else if ($validation === 'warning') {
    variable = 'foreground.warning';
  } else {
    variable = 'foreground.subtle';
  }

  const foregroundColor = getColor({ theme, variable });

  return css`
    color: ${foregroundColor};
  `;
};

const sizeStyles = ({ theme }: IStyledBaseProps) => {
  const fontSize = theme.fontSizes.sm;
  const lineHeight = getLineHeight(theme.iconSizes.md, theme.fontSizes.sm);
  const marginTop = `${theme.space.base}px`;

  return css`
    line-height: ${lineHeight};
    font-size: ${fontSize};

    ${StyledLabel}:not([hidden]) + & {
      margin-top: ${marginTop};
    }
  `;
};

export const StyledMessage = styled.div<IStyledMessageProps>`
  direction: ${props => props.theme.rtl && 'rtl'};
  display: ${props => (props.$validation ? 'flex' : 'inline-block')};
  position: relative;
  align-items: ${props => props.$validation && 'flex-start'};
  vertical-align: middle; /* support message inline with input layout */

  ${sizeStyles};

  ${colorStyles};

  & ${StyledMessageIcon} {
    flex-shrink: 0;
    margin-top: -1px;
    margin-${props => (props.theme.rtl ? 'left' : 'right')}: ${props =>
      props.theme.space.base * 2}px;
  }

  ${StyledLabel}:not([hidden]) + & {
    display: ${props => (props.$validation ? 'flex' : 'block')};
  }

  ${componentStyles};
`;
