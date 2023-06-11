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
  getLineHeight,
  getColor
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.combobox.input';

interface IStyledInputProps extends ThemeProps<DefaultTheme> {
  isBare?: boolean;
  isCompact?: boolean;
  isMultiselectable?: boolean;
}

const colorStyles = (props: IStyledInputProps) => {
  const placeholderColor = getColor('neutralHue', 400, props.theme);

  return css`
    background-color: inherit;
    color: inherit;

    &::placeholder {
      opacity: 1;
      color: ${placeholderColor};
    }
  `;
};

export const getHeight = (props: IStyledInputProps) => {
  if (props.isBare && !props.isMultiselectable) {
    return props.theme.space.base * 5;
  }

  return props.theme.space.base * (props.isCompact ? 5 : 8);
};

const sizeStyles = (props: IStyledInputProps) => {
  const height = `${getHeight(props)}px`;
  const fontSize = props.theme.fontSizes.md;
  const lineHeight = getLineHeight(props.theme.space.base * 4, fontSize);
  const minWidth = `${props.theme.space.base * 8}px`;

  return css`
    padding: 0;
    min-width: ${minWidth};
    height: ${height};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

/*
 * 1. Line up input with the styled value.
 */
export const StyledInput = styled.input.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledInputProps>`
  flex-basis: 0;
  flex-grow: 1;
  transform: translateY(-0.5px); /* [1] */
  border: none;
  font-family: inherit;

  :focus {
    outline: none;
  }

  ${sizeStyles};

  ${colorStyles};

  &[hidden] {
    display: revert;
    ${hideVisually()}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledInput.defaultProps = {
  theme: DEFAULT_THEME
};
