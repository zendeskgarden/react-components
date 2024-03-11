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
  getColorV8,
  focusStyles
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

const colorStyles = (props: IStyledTriggerProps) => {
  const SHADE = 600;
  let hue = 'neutralHue';

  if (props.validation === 'success') {
    hue = 'successHue';
  } else if (props.validation === 'warning') {
    hue = 'warningHue';
  } else if (props.validation === 'error') {
    hue = 'dangerHue';
  }

  const backgroundColor = props.isBare ? 'transparent' : props.theme.colors.background;
  let borderColor: string | undefined;
  let hoverBorderColor: string | undefined;
  let focusBorderColor: string | undefined;
  let focusShade: number | undefined;

  if (props.validation) {
    borderColor = getColorV8(hue, SHADE, props.theme);
    hoverBorderColor = borderColor;

    if (props.validation === 'warning') {
      focusBorderColor = getColorV8(hue, SHADE + 100, props.theme);
      focusShade = SHADE + 100;
    } else {
      focusBorderColor = borderColor;
    }
  } else {
    borderColor = getColorV8('neutralHue', SHADE - 300, props.theme);
    hoverBorderColor = getColorV8('primaryHue', SHADE, props.theme);
    focusBorderColor = hoverBorderColor;
  }

  const disabledBackgroundColor = props.isBare
    ? undefined
    : getColorV8('neutralHue', SHADE - 500, props.theme);
  const disabledBorderColor = getColorV8('neutralHue', SHADE - 400, props.theme);
  const disabledForegroundColor = getColorV8('neutralHue', SHADE - 200, props.theme);
  const focusSelector = `
    &:focus-within:not([aria-disabled='true']),
    &:focus-visible
  `;

  return css`
    border-color: ${props.isLabelHovered ? hoverBorderColor : borderColor};
    background-color: ${backgroundColor};
    color: ${props.theme.colors.foreground};

    &:hover {
      border-color: ${hoverBorderColor};
    }

    ${focusStyles({
      theme: props.theme,
      inset: props.focusInset,
      hue: focusBorderColor,
      shade: focusShade,
      selector: focusSelector,
      styles: { borderColor: focusBorderColor },
      condition: !props.isBare
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
