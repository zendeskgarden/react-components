/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { math } from 'polished';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  focusStyles,
  getColor
} from '@zendeskgarden/react-theming';
import { Validation } from '../../types';
import { getHeight as getInputHeight } from './StyledInput';

const COMPONENT_ID = 'dropdowns.combobox.trigger';

interface IStyledTriggerProps extends ThemeProps<DefaultTheme> {
  isAutocomplete?: boolean;
  isBare?: boolean;
  isCompact?: boolean;
  isEditable?: boolean;
  isLabelHovered?: boolean;
  isMultiselectable?: boolean;
  maxHeight?: string;
  focusInset?: boolean;
  validation?: Validation;
}

const colorStyles = ({
  theme,
  validation,
  isBare,
  isLabelHovered,
  focusInset
}: IStyledTriggerProps) => {
  const foregroundColor = getColor({ theme, variable: 'foreground.default' });
  const backgroundColor = isBare
    ? 'transparent'
    : getColor({ theme, variable: 'background.default' });
  let borderColor: string | undefined;
  let borderVariable: string | undefined;
  let hoverBorderColor: string | undefined;
  let focusBorderColor: string | undefined;

  if (validation) {
    if (validation === 'success') {
      borderVariable = 'border.successEmphasis';
    } else if (validation === 'warning') {
      borderVariable = 'border.warningEmphasis';
    } else if (validation === 'error') {
      borderVariable = 'border.dangerEmphasis';
    }

    borderColor = getColor({ theme, variable: borderVariable });
    hoverBorderColor = borderColor;
    focusBorderColor = borderColor;
  } else {
    borderColor = getColor({
      theme,
      variable: 'border.default',
      dark: { offset: -100 },
      light: { offset: 100 }
    });
    borderVariable = 'border.primaryEmphasis';
    hoverBorderColor = getColor({ theme, variable: borderVariable });
    focusBorderColor = hoverBorderColor;
  }

  const disabledBackgroundColor = isBare
    ? undefined
    : getColor({ theme, variable: 'background.disabled' });
  const disabledBorderColor = getColor({ theme, variable: 'border.disabled' });
  const disabledForegroundColor = getColor({ theme, variable: 'foreground.disabled' });
  const focusSelector = `
    &:focus-within:not([aria-disabled='true']),
    &:focus-visible
  `;

  return css`
    color-scheme: only ${theme.colors.base};
    border-color: ${isLabelHovered ? hoverBorderColor : borderColor};
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    &:hover {
      border-color: ${hoverBorderColor};
    }

    ${focusStyles({
      theme,
      inset: focusInset,
      color: { variable: borderVariable },
      selector: focusSelector,
      styles: { borderColor: focusBorderColor },
      condition: !isBare
    })}

    &[aria-disabled='true'] {
      border-color: ${disabledBorderColor};
      background-color: ${disabledBackgroundColor};
      color: ${disabledForegroundColor};
    }
  `;
};

const sizeStyles = (props: IStyledTriggerProps) => {
  const inputHeight = getInputHeight(props);
  let minHeight;
  let horizontalPadding;

  if (props.isBare) {
    if (props.isMultiselectable) {
      minHeight = math(`${props.theme.shadowWidths.sm} * 2 + ${inputHeight}`);
      horizontalPadding = props.theme.shadowWidths.sm;
    } else {
      minHeight = `${inputHeight}px`;
      horizontalPadding = '0';
    }
  } else {
    minHeight = `${props.theme.space.base * (props.isCompact ? 3 : 2) + inputHeight}px`;
    horizontalPadding = `${props.theme.space.base * 3}px`;
  }

  const maxHeight = props.maxHeight || minHeight;
  const verticalPadding = math(
    `(${minHeight} - ${inputHeight} - (${props.isBare ? 0 : props.theme.borderWidths.sm} * 2)) / 2`
  );

  return css`
    padding: ${verticalPadding} ${horizontalPadding};
    min-height: ${minHeight};
    max-height: ${maxHeight};
    font-size: ${props.theme.fontSizes.md};
  `;
};

export const StyledTrigger = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTriggerProps>`
  overflow-y: auto;
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out;
  border: ${props => (props.isBare ? 'none' : props.theme.borders.sm)};
  border-radius: ${props => (props.isBare ? '0' : props.theme.borderRadii.md)};
  cursor: ${props => (!props.isAutocomplete && props.isEditable ? 'text' : 'pointer')};
  box-sizing: border-box;

  ${sizeStyles};

  &:focus {
    outline: none;
  }

  ${colorStyles};

  &[aria-disabled='true'] {
    cursor: default;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTrigger.defaultProps = {
  theme: DEFAULT_THEME
};
