/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import em from 'polished/lib/helpers/em';
import math from 'polished/lib/math/math';
import rgba from 'polished/lib/color/rgba';
import classNames from 'classnames';
import {
  DEFAULT_THEME,
  getColor,
  isRtl,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';
import { StyledButtonGroup } from './StyledButtonGroup';
import { StyledIcon } from './StyledIcon';
import { HTMLAttributes } from 'react';

const COMPONENT_ID = 'buttons.button';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const getBorderRadius = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  if (props.link) {
    return 0;
  } else if (props.pill) {
    return '100px';
  }

  return props.theme.borderRadii.md;
};

export const getLineHeight = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  if (props.size === SIZE.SMALL) {
    return props.theme.space.base * 8;
  } else if (props.size === SIZE.LARGE) {
    return props.theme.space.base * 12;
  }

  return props.theme.space.base * 10;
};

const colorStyles = (
  props: IStyledButtonProps & ThemeProps<DefaultTheme> & HTMLAttributes<HTMLButtonElement>
) => {
  let retVal;
  let hue;

  if (props.disabled) {
    hue = 'neutralHue';
  } else if (props.danger) {
    hue = 'dangerHue';
  } else {
    hue = 'primaryHue';
  }

  const shade = 600;
  const baseColor = getColor(hue, shade, props.theme);
  const hoverColor = getColor(hue, shade + 100, props.theme);
  const activeColor = getColor(hue, shade + 200, props.theme);
  const disabledBackgroundColor = getColor(hue, shade - 400, props.theme);
  const disabledForegroundColor = getColor(hue, shade - 200, props.theme);
  const boxShadowColor =
    props.focusInset && (props.primary || props.selected) ? props.theme.palette.white : baseColor;
  const boxShadow = `
    ${props.focusInset ? 'inset' : ''}
    ${props.theme.shadows.md(rgba(boxShadowColor as string, 0.35))}`;

  if (props.link) {
    retVal = css`
      background-color: transparent;
      color: ${baseColor};

      &:hover {
        color: ${hoverColor};
      }

      &:active {
        color: ${activeColor};
      }

      &:disabled {
        color: ${disabledForegroundColor};
      }
    `;
  } else if (props.primary || props.selected) {
    retVal = css`
      background-color: ${props.primary && props.selected ? activeColor : baseColor};
      color: ${props.theme.palette.white};

      &:hover {
        background-color: ${hoverColor};
      }

      &.focus-visible {
        box-shadow: ${boxShadow};
      }

      &:active {
        background-color: ${activeColor};
      }

      &:disabled {
        background-color: ${disabledBackgroundColor};
        color: ${disabledForegroundColor};
      }
    `;
  } else {
    retVal = css`
      border-color: ${!props.basic && baseColor};
      background-color: transparent;
      color: ${baseColor};

      &:hover {
        border-color: ${!props.basic && hoverColor};
        background-color: ${rgba(baseColor as string, 0.08)};
        color: ${hoverColor};
      }

      &.focus-visible {
        box-shadow: ${boxShadow};
      }

      &:active {
        border-color: ${!props.basic && activeColor};
        background-color: ${rgba(baseColor as string, 0.2)};
        color: ${activeColor};
      }

      &:disabled {
        border-color: transparent;
        background-color: ${disabledBackgroundColor};
        color: ${disabledForegroundColor};
      }
    `;
  }

  return retVal;
};

const groupStyles = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  const primary = props.primary;
  const rtl = isRtl(props);
  const lightBorderColor = props.theme.colors.background;
  const lineHeight = getLineHeight(props);

  return css`
    position: relative;
    /* stylelint-disable-next-line property-no-unknown */
    margin-${rtl ? 'right' : 'left'}: ${math(`${props.theme.borderWidths.sm} * -1`)};
    border-top-width: ${primary && 0};
    border-bottom-width: ${primary && 0};
    border-right-color: ${primary && lightBorderColor};
    border-left-color: ${primary && lightBorderColor};
    line-height: ${primary && math(`${lineHeight} * 1px`)};

    &:hover,
    &:active {
      z-index: 1;
    }

    &:disabled {
      z-index: -1;
      border-top-width: 0;
      border-bottom-width: 0;
      border-right-color: ${lightBorderColor};
      border-left-color: ${lightBorderColor};
      line-height: ${math(`${lineHeight} * 1px`)};
    }

    /* stylelint-disable property-no-unknown, property-case */
    &:first-of-type:not(:last-of-type) {
      margin-${rtl ? 'right' : 'left'}: 0;
      border-top-${rtl ? 'left' : 'right'}-radius: 0;
      border-bottom-${rtl ? 'left' : 'right'}-radius: 0;
      border-${rtl ? 'right' : 'left'}-width: ${primary && 0};
    }

    &:last-of-type:not(:first-of-type) {
      border-top-${rtl ? 'right' : 'left'}-radius: 0;
      border-bottom-${rtl ? 'right' : 'left'}-radius: 0;
      border-${rtl ? 'left' : 'right'}-width: ${primary && 0};
    }
    /* stylelint-enable property-no-unknown, property-case */

    &:not(:first-of-type):not(:last-of-type) {
      border-radius: 0;
    }

    /* stylelint-disable property-no-unknown, selector-max-specificity */
    &:first-of-type:not(:last-of-type) ${StyledIcon} {
      margin-${rtl ? 'left' : 'right'}: ${props.pill && '-2px'};
    }

    &:last-of-type:not(:first-of-type) ${StyledIcon} {
      margin-${rtl ? 'right' : 'left'}: ${props.pill && '-2px'};
    }
    /* stylelint-enable property-no-unknown, selector-max-specificity */
  `;
};

const sizeStyles = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  let retVal;

  if (props.link) {
    retVal = css`
      padding: 0;
      font-size: inherit;
    `;
  } else {
    let fontSize;
    let minWidth;
    const lineHeight = getLineHeight(props);
    const padding = props.theme.space.base * 7;

    if (props.size === 'small') {
      fontSize = props.theme.fontSizes.sm;
      minWidth = props.theme.space.base * 25;
    } else if (props.size === 'large') {
      fontSize = props.theme.fontSizes.md;
      minWidth = props.theme.space.base * 35;
    } else {
      fontSize = props.theme.fontSizes.md;
      minWidth = props.theme.space.base * 30;
    }

    retVal = css`
      padding: 0 ${em(math(`${padding} - ${props.theme.borderWidths.sm}`), fontSize)};
      min-width: ${!props.stretched && `${minWidth}px`};
      line-height: ${math(`${lineHeight} - (${props.theme.borderWidths.sm} * 2)`)};
      font-size: ${fontSize};
    `;
  }

  return retVal;
};

export interface IStyledButtonProps {
  basic?: boolean;
  danger?: boolean;
  focused?: boolean;
  focusInset?: boolean;
  link?: boolean;
  primary?: boolean;
  pill?: boolean;
  selected?: boolean;
  size?: 'small' | 'medium' | 'large';
  stretched?: boolean;
  disabled?: boolean;
}

/**
 * Accepts all `<button>` props
 */
export const StyledButton = styled.button.attrs<IStyledButtonProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(props.className, { 'focus-visible': props.focused }),
  type: 'button'
}))<IStyledButtonProps>`
  display: ${props => (props.link ? 'inline' : 'inline-block')};
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out;
  margin: 0;
  border: ${props => (props.link ? 'none' : `${props.theme.borders.sm} transparent`)};
  border-radius: ${props => getBorderRadius(props)};
  cursor: pointer;
  width: ${props => (props.stretched ? '100%' : '')};
  overflow: hidden;
  vertical-align: ${props => !props.link && 'middle'};
  text-align: center;
  text-decoration: none; /* <a> element reset */
  text-overflow: ellipsis;
  white-space: ${props => !props.link && 'nowrap'};
  font-family: inherit; /* <button> & <input> override */
  font-weight: ${props => (props.link ? 'inherit' : props.theme.fontWeights.regular)};
  -webkit-font-smoothing: subpixel-antialiased;
  box-sizing: border-box;
  user-select: none;
  -webkit-touch-callout: none;

  ${props => sizeStyles(props)};

  &::-moz-focus-inner {
    /* FF <input type="submit"> fix */
    border: 0;
    padding: 0;
  }

  &:hover {
    text-decoration: ${props => (props.link ? 'underline' : 'none')}; /* <a> element reset */
  }

  &:focus {
    outline: none;
  }

  &.focus-visible {
    text-decoration: ${props => (props.link ? 'underline' : 'none')}; /* <a> element reset */
  }

  &:active {
    /* prettier-ignore */
    transition:
      border-color 0.1s ease-in-out,
      background-color 0.1s ease-in-out,
      color 0.1s ease-in-out;
    text-decoration: ${props => (props.link ? 'underline' : 'none')}; /* <a> element reset */
  }

  /* Color (default, primary, basic, & danger) styling */
  ${props => colorStyles(props)};

  &:disabled {
    cursor: default;
    text-decoration: ${props => props.link && 'none'};
  }

  /* stylelint-disable */
  ${StyledButtonGroup} & {
    ${props => groupStyles(props)};
  }
  /* stylelint-enable */

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledButton.defaultProps = {
  theme: DEFAULT_THEME
};
