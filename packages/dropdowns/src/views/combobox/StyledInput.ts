/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { hideVisually, math } from 'polished';
import { retrieveComponentStyles, getLineHeight, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.combobox.input';

interface IStyledInputProps extends ThemeProps<DefaultTheme> {
  isBare?: boolean;
  isCompact?: boolean;
  isEditable?: boolean;
  isMultiselectable?: boolean;
}

const colorStyles = ({ theme }: IStyledInputProps) => {
  const placeholderColor = getColor({ theme, variable: 'foreground.disabled' });

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

export const sizeStyles = (props: IStyledInputProps) => {
  const height = props.theme.space.base * 5;
  const fontSize = props.theme.fontSizes.md;
  const lineHeight = getLineHeight(height, fontSize);
  const margin = math(`${props.theme.shadowWidths.sm} + ${(getHeight(props) - height) / 2}`);
  const minWidth = `${props.theme.space.base * 8}px`;

  return css`
    min-width: ${minWidth};
    height: ${height}px;
    line-height: ${lineHeight};
    font-size: ${fontSize};

    && {
      margin-top: ${margin};
      margin-bottom: ${margin};
    }
  `;
};

export const StyledInput = styled.input.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledInputProps>`
  flex-basis: 0;
  flex-grow: 1;
  border: none;
  padding: 0;
  font-family: inherit;

  &:focus {
    outline: none;
  }

  ${sizeStyles};

  ${colorStyles};

  &[hidden] {
    display: revert;
    ${props => props.isEditable && hideVisually()}
  }

  &[aria-hidden='true'] {
    display: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
