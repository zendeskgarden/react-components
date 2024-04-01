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
  getColorV8,
  getLineHeight,
  DEFAULT_THEME,
  focusStyles
} from '@zendeskgarden/react-theming';
import { Validation } from '../../types';
import { StyledHint } from '../common/StyledHint';
import { StyledLabel } from '../common/StyledLabel';
import { StyledMessage } from '../common/StyledMessage';

const COMPONENT_ID = 'forms.input';

const isInvalid = (validation?: Validation) => {
  return validation === 'warning' || validation === 'error';
};

const colorStyles = (props: IStyledTextInputProps & ThemeProps<DefaultTheme>) => {
  const HUE = 'primaryHue';
  const SHADE = 600;
  const placeholderColor = getColorV8('neutralHue', SHADE - 200, props.theme);
  let borderColor: string | undefined;
  let hoverBorderColor: string | undefined;
  let focusBorderColor: string;
  let focusRingHue = HUE;
  let focusRingShade = SHADE;

  if (props.validation) {
    let hue = HUE;

    if (props.validation === 'success') {
      hue = 'successHue';
    } else if (props.validation === 'warning') {
      hue = 'warningHue';
      focusRingShade = 700;
    } else if (props.validation === 'error') {
      hue = 'dangerHue';
    }

    borderColor = getColorV8(hue as string, SHADE, props.theme)!;
    hoverBorderColor = borderColor;
    focusBorderColor = borderColor;
    focusRingHue = hue;
  } else {
    borderColor = getColorV8('neutralHue', SHADE - 300, props.theme);
    hoverBorderColor = getColorV8('primaryHue', SHADE, props.theme);
    focusBorderColor = hoverBorderColor!;
  }

  const readOnlyBackgroundColor = getColorV8('neutralHue', SHADE - 500, props.theme);
  const readOnlyBorderColor = getColorV8('neutralHue', SHADE - 300, props.theme);
  const disabledBackgroundColor = readOnlyBackgroundColor;
  const disabledBorderColor = getColorV8('neutralHue', SHADE - 400, props.theme);
  const disabledForegroundColor = getColorV8('neutralHue', SHADE - 200, props.theme);

  let controlledBorderColor = borderColor;

  if (props.isFocused) {
    controlledBorderColor = focusBorderColor;
  }

  if (props.isHovered) {
    controlledBorderColor = hoverBorderColor;
  }

  return css`
    border-color: ${controlledBorderColor};
    background-color: ${props.isBare
      ? 'transparent'
      : getColorV8('background', 600 /* default shade */, props.theme)};
    color: ${getColorV8('foreground', 600 /* default shade */, props.theme)};

    &::placeholder {
      color: ${placeholderColor};
    }

    &[readonly],
    /* apply to faux input */
    &[aria-readonly='true'] {
      border-color: ${readOnlyBorderColor};
      background-color: ${!props.isBare && readOnlyBackgroundColor};
    }

    &:hover {
      border-color: ${hoverBorderColor};
    }

    ${focusStyles({
      theme: props.theme,
      inset: props.focusInset,
      condition: !props.isBare,
      hue: focusRingHue,
      shade: focusRingShade,
      styles: {
        borderColor: focusBorderColor
      }
    })}

    &:disabled,
    /* apply to faux input */
    &[aria-disabled='true'] {
      border-color: ${disabledBorderColor};
      background-color: ${!props.isBare && disabledBackgroundColor};
      color: ${disabledForegroundColor};
    }
  `;
};

const sizeStyles = (props: IStyledTextInputProps & ThemeProps<DefaultTheme>) => {
  const fontSize = props.theme.fontSizes.md;
  const paddingHorizontal = `${props.theme.space.base * 3}px`;
  let height;
  let paddingVertical;
  let browseFontSize;
  let swatchHeight;

  if (props.isCompact) {
    height = `${props.theme.space.base * 8}px`;
    paddingVertical = `${props.theme.space.base * 1.5}px`;
    browseFontSize = math(`${props.theme.fontSizes.sm} - 1`);
    swatchHeight = `${props.theme.space.base * 6}px`;
  } else {
    height = `${props.theme.space.base * 10}px`;
    paddingVertical = `${props.theme.space.base * 2.5}px`;
    browseFontSize = props.theme.fontSizes.sm;
    swatchHeight = `${props.theme.space.base * 7}px`;
  }

  const lineHeight = math(
    `${height} - (${paddingVertical} * 2) - (${props.theme.borderWidths.sm} * 2)`
  );
  const padding = props.isBare
    ? '0'
    : `${em(paddingVertical, fontSize)} ${em(paddingHorizontal, fontSize)}`;
  const swatchMarginVertical = math(`(${lineHeight} - ${swatchHeight}) / 2`);
  const swatchMarginHorizontal = math(
    `${paddingVertical} + ${swatchMarginVertical} - ${paddingHorizontal}`
  );

  return css`
    padding: ${padding};
    min-height: ${props.isBare ? '1em' : height};
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
        padding: ${props.isCompact ? '0 2px' : '1px 3px'}; /* correct color swatch size for Edge */
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
    && + ${StyledMessage} {
      margin-top: ${props.theme.space.base * (props.isCompact ? 1 : 2)}px;
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

  &::placeholder {
    opacity: 1;
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

  ${props => sizeStyles(props)};

  /* Color (default and validation) styling */
  ${props => colorStyles(props)};

  &:disabled {
    cursor: default;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTextInput.defaultProps = {
  theme: DEFAULT_THEME
};
