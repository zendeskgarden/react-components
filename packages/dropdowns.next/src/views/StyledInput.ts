/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { hideVisually } from 'polished';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  getLineHeight
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.combobox.input';

interface IStyledInputProps extends ThemeProps<DefaultTheme> {
  isCompact?: boolean;
}

export const getHeight = (props: IStyledInputProps) =>
  props.theme.space.base * (props.isCompact ? 5 : 8);

const sizeStyles = (props: IStyledInputProps) => {
  const height = `${getHeight(props)}px`;
  const fontSize = props.theme.fontSizes.md;
  const lineHeight = getLineHeight(props.theme.space.base * 5, fontSize);
  const minWidth = `${props.theme.space.base * 8}px`;

  return css`
    padding: 0;
    min-width: ${minWidth};
    height: ${height};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledInput = styled.input.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledInputProps>`
  flex-basis: 0;
  flex-grow: 1;
  border: none;
  color: inherit;

  :focus {
    outline: none;
  }

  ${sizeStyles};

  &[hidden] {
    display: revert;
    ${hideVisually()}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledInput.defaultProps = {
  theme: DEFAULT_THEME
};
