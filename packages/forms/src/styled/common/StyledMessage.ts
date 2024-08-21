/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { math } from 'polished';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  getLineHeight,
  getColor
} from '@zendeskgarden/react-theming';
import { Validation } from '../../types';
import { StyledMessageIcon } from './StyledMessageIcon';
import { StyledLabel } from './StyledLabel';

export interface IStyledMessageProps {
  validation?: Validation;
}

const COMPONENT_ID = 'forms.input_message';

const colorStyles = ({ theme, validation }: IStyledMessageProps & ThemeProps<DefaultTheme>) => {
  let variable;

  if (validation === 'error') {
    variable = 'foreground.danger';
  } else if (validation === 'success') {
    variable = 'foreground.success';
  } else if (validation === 'warning') {
    variable = 'foreground.warning';
  } else {
    variable = 'foreground.subtle';
  }

  const foregroundColor = getColor({ theme, variable });

  return css`
    color: ${foregroundColor};
  `;
};

const sizeStyles = ({ theme, validation }: IStyledMessageProps & ThemeProps<DefaultTheme>) => {
  const fontSize = theme.fontSizes.sm;
  const lineHeight = getLineHeight(theme.iconSizes.md, theme.fontSizes.sm);
  const marginTop = `${theme.space.base}px`;
  const paddingHorizontal = validation
    ? math(`${theme.space.base * 2} + ${theme.iconSizes.md}`)
    : undefined;

  return css`
    padding-${theme.rtl ? 'right' : 'left'}: ${paddingHorizontal};
    line-height: ${lineHeight};
    font-size: ${fontSize};

    ${StyledLabel}:not([hidden]) + & {
      margin-top: ${marginTop};
    }
  `;
};

export const StyledMessage = styled.div.attrs(props => ({
  'data-garden-id': (props as any)['data-garden-id'] || COMPONENT_ID,
  'data-garden-version': (props as any)['data-garden-version'] || PACKAGE_VERSION
}))<IStyledMessageProps>`
  direction: ${props => props.theme.rtl && 'rtl'};
  display: inline-block;
  position: relative;
  vertical-align: middle; /* support message inline with input layout */

  ${sizeStyles};

  ${colorStyles};

  & ${StyledMessageIcon} {
    position: absolute;
    top: -1px;
    ${props => (props.theme.rtl ? 'right' : 'left')}: 0;
  }

  ${StyledLabel}:not([hidden]) + & {
    display: block;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMessage.defaultProps = {
  theme: DEFAULT_THEME
};
