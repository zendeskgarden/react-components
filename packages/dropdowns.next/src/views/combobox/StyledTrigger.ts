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
  getColor,
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

  if (props.validation) {
    borderColor = getColor(hue, SHADE, props.theme);
    hoverBorderColor = borderColor;
    focusBorderColor = borderColor;
  } else {
    borderColor = getColor('neutralHue', SHADE - 300, props.theme);
    hoverBorderColor = getColor('primaryHue', SHADE, props.theme);
    focusBorderColor = hoverBorderColor;
  }

  const disabledBackgroundColor = props.isBare
    ? undefined
    : getColor('neutralHue', SHADE - 500, props.theme);
  const disabledBorderColor = getColor('neutralHue', SHADE - 400, props.theme);
  const disabledForegroundColor = getColor('neutralHue', SHADE - 200, props.theme);
  const focusSelector = `
    &:focus-within:not([aria-disabled='true']),
    &:focus-visible,
    &[data-garden-focus-visible='true']
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
  const minHeight = `${props.theme.space.base * (props.isCompact ? 8 : 10)}px`;
  const maxHeight = props.maxHeight || minHeight;
  const horizontalPadding = `${props.theme.space.base * 3}px`;
  const verticalPadding = math(
    `(${minHeight} - ${getInputHeight(props)} - (${props.theme.borderWidths.sm} * 2)) / 2`
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
