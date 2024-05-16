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
  let color;

  if (validation === 'error') {
    color = getColor({ theme, variable: 'foreground.danger' });
  } else if (validation === 'success') {
    color = getColor({ theme, variable: 'foreground.success' });
  } else if (validation === 'warning') {
    color = getColor({ theme, variable: 'foreground.warning' });
  } else {
    color = getColor({
      theme,
      variable: 'foreground.default',
      dark: { offset: 100 },
      light: { offset: -100 }
    });
  }

  return css`
    color: ${color};
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
    /* stylelint-disable-next-line property-no-unknown */
    padding-${theme.rtl ? 'right' : 'left'}: ${paddingHorizontal};
    line-height: ${lineHeight};
    font-size: ${fontSize};

    /* stylelint-disable-next-line */
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

  /* stylelint-disable-next-line */
  ${StyledLabel}:not([hidden]) + & {
    display: block;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMessage.defaultProps = {
  theme: DEFAULT_THEME
};
