/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { em, math } from 'polished';
import {
  retrieveComponentStyles,
  getLineHeight,
  DEFAULT_THEME,
  focusStyles,
  getColor
} from '@zendeskgarden/react-theming';
import { Validation } from '../../types';
import { StyledHint } from '../common/StyledHint';
import { StyledLabel } from '../common/StyledLabel';
import { StyledMessage } from '../common/StyledMessage';

const COMPONENT_ID = 'forms.input';

const isInvalid = (validation?: Validation) => {
  return validation === 'warning' || validation === 'error';
};

const colorStyles = ({
  theme,
  isBare,
  isHovered,
  focusInset,
  validation
}: IStyledTextInputProps & ThemeProps<DefaultTheme>) => {
  const foregroundColor = getColor({ theme, variable: 'foreground.default' });
  const backgroundColor = isBare
    ? 'transparent'
    : getColor({ theme, variable: 'background.default' });
  let borderColor: string | undefined;
  let hoverBorderColor: string | undefined;
  let borderVariable: string | undefined;
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
  const placeholderColor = disabledForegroundColor;
  const readOnlyBackgroundColor = disabledBackgroundColor;

  return css`
    border-color: ${isHovered ? hoverBorderColor : borderColor};
    background-color: ${backgroundColor};
    color: ${foregroundColor};

    &::placeholder {
      opacity: 1;
      color: ${placeholderColor};
    }

    &[readonly],
    &[aria-readonly='true'] {
      background-color: ${readOnlyBackgroundColor};
    }

    &:hover {
      border-color: ${hoverBorderColor};
    }

    ${focusStyles({
      theme,
      inset: focusInset,
      color: { variable: borderVariable },
      styles: { borderColor: focusBorderColor },
      condition: !isBare
    })}

    &:disabled,
    &[aria-disabled='true'] {
      border-color: ${disabledBorderColor};
      background-color: ${disabledBackgroundColor};
      color: ${disabledForegroundColor};
    }
  `;
};

const sizeStyles = ({
  theme,
  isBare,
  isCompact
}: IStyledTextInputProps & ThemeProps<DefaultTheme>) => {
  const fontSize = theme.fontSizes.md;
  const paddingHorizontal = `${theme.space.base * 3}px`;
  let height;
  let paddingVertical;
  let browseFontSize;
  let swatchHeight;

  if (isCompact) {
    height = `${theme.space.base * 8}px`;
    paddingVertical = `${theme.space.base * 1.5}px`;
    browseFontSize = math(`${theme.fontSizes.sm} - 1`);
    swatchHeight = `${theme.space.base * 6}px`;
  } else {
    height = `${theme.space.base * 10}px`;
    paddingVertical = `${theme.space.base * 2.5}px`;
    browseFontSize = theme.fontSizes.sm;
    swatchHeight = `${theme.space.base * 7}px`;
  }

  const lineHeight = math(`${height} - (${paddingVertical} * 2) - (${theme.borderWidths.sm} * 2)`);
  const padding = isBare
    ? '0'
    : `${em(paddingVertical, fontSize)} ${em(paddingHorizontal, fontSize)}`;
  const swatchMarginVertical = math(`(${lineHeight} - ${swatchHeight}) / 2`);
  const swatchMarginHorizontal = math(
    `${paddingVertical} + ${swatchMarginVertical} - ${paddingHorizontal}`
  );

  return css`
    padding: ${padding};
    min-height: ${isBare ? '1em' : height};
    line-height: ${getLineHeight(lineHeight, fontSize)};
    font-size: ${fontSize};

    &::-ms-browse {
      font-size: ${browseFontSize};
    }

    &[type='date'],
    &[type='datetime-local'],
    &[type='file'],
    &[type='month'],
    &[type='time'],
    &[type='week'] {
      max-height: ${height};
    }

    &[type='file'] {
      line-height: 1; /* align file prompt text */
    }

    /* stylelint-disable-next-line at-rule-empty-line-before */
    @supports (-ms-ime-align: auto) {
      &[type='color'] {
        padding: ${isCompact ? '0 2px' : '1px 3px'}; /* correct color swatch size for Edge */
      }
    }

    &::-moz-color-swatch {
      margin-top: ${swatchMarginVertical};
      margin-left: ${swatchMarginHorizontal};
      width: calc(100% + ${math(`${swatchMarginHorizontal} * -2`)});
      height: ${swatchHeight};
    }

    &::-webkit-color-swatch {
      margin: ${swatchMarginVertical} ${swatchMarginHorizontal};
    }

    /* stylelint-disable */
    ${StyledLabel}:not([hidden]) + &&,
    ${StyledHint} + &&,
    ${StyledMessage} + &&,
    && + ${StyledHint},
    && ~ ${StyledMessage} {
      margin-top: ${theme.space.base * (isCompact ? 1 : 2)}px;
    }
    /* stylelint-enable */
  `;
};

export interface IStyledTextInputProps {
  isCompact?: boolean;
  isBare?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  focusInset?: boolean;
  validation?: Validation;
}

export const StyledTextInput = styled.input.attrs<IStyledTextInputProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-invalid': isInvalid(props.validation)
}))<IStyledTextInputProps>`
  appearance: none;
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out,
    z-index 0.25s ease-in-out;
  direction: ${props => props.theme.rtl && 'rtl'};
  border: ${props => (props.isBare ? 'none' : props.theme.borders.sm)};
  border-radius: ${props => (props.isBare ? '0' : props.theme.borderRadii.md)};
  width: 100%; /* vs. display: block to limit mouse interaction area */
  box-sizing: border-box;
  vertical-align: middle; /* support inline label */
  font-family: inherit;

  &::-ms-browse {
    border-radius: ${props => props.theme.borderRadii.sm};
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none; /* remove clear button and password reveal in IE */
  }

  &::-moz-color-swatch {
    border: none;
    border-radius: ${props => props.theme.borderRadii.sm};
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: ${props => props.theme.borderRadii.sm};
  }

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-clear-button,
  &::-webkit-inner-spin-button,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button {
    display: none; /* remove non-standard browser features */
  }

  &::-webkit-datetime-edit {
    direction: ${props => props.theme.rtl && 'rtl'};
    line-height: 1;
  }

  &:invalid {
    box-shadow: none; /* prevent FireFox validation styling */
  }

  &[type='file']::-ms-value {
    display: none; /* remove file entry in IE */
  }

  /* stylelint-disable-next-line */
  @media screen and (min--moz-device-pixel-ratio: 0) {
    &[type='number'] {
      appearance: textfield; /* remove number spinner in FireFox */
    }
  }

  ${sizeStyles};

  ${colorStyles};

  &:disabled {
    cursor: default;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTextInput.defaultProps = {
  theme: DEFAULT_THEME
};
