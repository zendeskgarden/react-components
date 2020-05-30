/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { em, math, rgba } from 'polished';
import { DEFAULT_THEME, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
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
  if (props.isLink) {
    return 0;
  } else if (props.isPill) {
    return '100px';
  }

  return props.theme.borderRadii.md;
};

export const getHeight = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  if (props.size === SIZE.SMALL) {
    return `${props.theme.space.base * 8}px`;
  } else if (props.size === SIZE.LARGE) {
    return `${props.theme.space.base * 12}px`;
  }

  return `${props.theme.space.base * 10}px`;
};

const colorStyles = (
  props: IStyledButtonProps & ThemeProps<DefaultTheme> & HTMLAttributes<HTMLButtonElement>
) => {
  let retVal;
  let hue;

  if (props.disabled) {
    hue = 'neutralHue';
  } else if (props.isDanger) {
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
    props.focusInset && (props.isPrimary || props.isSelected)
      ? props.theme.palette.white
      : baseColor;
  const boxShadow = `
    ${props.focusInset ? 'inset' : ''}
    ${props.theme.shadows.md(rgba(boxShadowColor as string, 0.35))}`;

  if (props.isLink) {
    retVal = css`
      background-color: transparent;
      color: ${baseColor};

      &:hover {
        color: ${hoverColor};
      }

      &:active,
      &[aria-pressed='true'],
      &[aria-pressed='mixed'] {
        color: ${activeColor};
      }

      &:disabled {
        color: ${disabledForegroundColor};
      }
    `;
  } else if (props.isPrimary || props.isSelected) {
    retVal = css`
      background-color: ${props.isPrimary && props.isSelected ? activeColor : baseColor};
      color: ${props.theme.palette.white};

      &:hover {
        background-color: ${hoverColor};
      }

      &[data-garden-focus-visible] {
        box-shadow: ${boxShadow};
      }

      &:active,
      &[aria-pressed='true'],
      &[aria-pressed='mixed'] {
        background-color: ${activeColor};
      }

      &:disabled {
        background-color: ${disabledBackgroundColor};
        color: ${disabledForegroundColor};
      }
    `;
  } else {
    retVal = css`
      border-color: ${!props.isBasic && baseColor};
      background-color: transparent;
      color: ${baseColor};

      &:hover {
        border-color: ${!props.isBasic && hoverColor};
        background-color: ${rgba(baseColor as string, 0.08)};
        color: ${hoverColor};
      }

      &[data-garden-focus-visible] {
        box-shadow: ${boxShadow};
      }

      &:active,
      &[aria-pressed='true'],
      &[aria-pressed='mixed'] {
        border-color: ${!props.isBasic && activeColor};
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
  const isPrimary = props.isPrimary;
  const rtl = props.theme.rtl;
  const lightBorderColor = props.theme.colors.background;

  return css`
    position: relative;
    /* stylelint-disable-next-line property-no-unknown */
    margin-${rtl ? 'right' : 'left'}: ${math(`${props.theme.borderWidths.sm} * -1`)};
    border-top-width: ${isPrimary && 0};
    border-bottom-width: ${isPrimary && 0};
    border-right-color: ${isPrimary && lightBorderColor};
    border-left-color: ${isPrimary && lightBorderColor};

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
    }

    /* stylelint-disable property-no-unknown, property-case */
    &:first-of-type:not(:last-of-type) {
      margin-${rtl ? 'right' : 'left'}: 0;
      border-top-${rtl ? 'left' : 'right'}-radius: 0;
      border-bottom-${rtl ? 'left' : 'right'}-radius: 0;
      border-${rtl ? 'right' : 'left'}-width: ${isPrimary && 0};
    }

    &:last-of-type:not(:first-of-type) {
      border-top-${rtl ? 'right' : 'left'}-radius: 0;
      border-bottom-${rtl ? 'right' : 'left'}-radius: 0;
      border-${rtl ? 'left' : 'right'}-width: ${isPrimary && 0};
    }
    /* stylelint-enable property-no-unknown, property-case */

    &:not(:first-of-type):not(:last-of-type) {
      border-radius: 0;
    }

    /* stylelint-disable property-no-unknown, selector-max-specificity */
    &:first-of-type:not(:last-of-type) ${StyledIcon} {
      margin-${rtl ? 'left' : 'right'}: ${props.isPill && '-2px'};
    }

    &:last-of-type:not(:first-of-type) ${StyledIcon} {
      margin-${rtl ? 'right' : 'left'}: ${props.isPill && '-2px'};
    }
    /* stylelint-enable property-no-unknown, selector-max-specificity */
  `;
};

const sizeStyles = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  let retVal;

  if (props.isLink) {
    retVal = css`
      padding: 0;
      font-size: inherit;
    `;
  } else {
    const height = getHeight(props);
    const lineHeight = math(`${height} - (${props.theme.borderWidths.sm} * 2)`);
    let padding;
    let fontSize;

    if (props.size === SIZE.SMALL) {
      fontSize = props.theme.fontSizes.sm;
      padding = `${props.theme.space.base * 3}px`;
    } else {
      fontSize = props.theme.fontSizes.md;

      if (props.size === SIZE.LARGE) {
        padding = `${props.theme.space.base * 5}px`;
      } else {
        padding = `${props.theme.space.base * 4}px`;
      }
    }

    retVal = css`
      padding: 0 ${em(math(`${padding} - ${props.theme.borderWidths.sm}`), fontSize)};
      height: ${height};
      line-height: ${lineHeight};
      font-size: ${fontSize};
    `;
  }

  return retVal;
};

export interface IStyledButtonProps {
  isBasic?: boolean;
  isDanger?: boolean;
  focusInset?: boolean;
  isLink?: boolean;
  isPrimary?: boolean;
  isPill?: boolean;
  isSelected?: boolean;
  size?: 'small' | 'medium' | 'large';
  isStretched?: boolean;
  disabled?: boolean;
}

/**
 * Accepts all `<button>` props
 */
export const StyledButton = styled.button.attrs<IStyledButtonProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: props.type || 'button'
}))<IStyledButtonProps>`
  display: ${props => (props.isLink ? 'inline' : 'inline-block')};
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out;
  margin: 0;
  border: ${props => (props.isLink ? 'none' : `${props.theme.borders.sm} transparent`)};
  border-radius: ${props => getBorderRadius(props)};
  cursor: pointer;
  width: ${props => (props.isStretched ? '100%' : '')};
  overflow: hidden;
  vertical-align: ${props => !props.isLink && 'middle'};
  text-align: center;
  text-decoration: none; /* <a> element reset */
  text-overflow: ellipsis;
  white-space: ${props => !props.isLink && 'nowrap'};
  font-family: inherit; /* <button> & <input> override */
  font-weight: ${props => (props.isLink ? 'inherit' : props.theme.fontWeights.regular)};
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
    text-decoration: ${props => (props.isLink ? 'underline' : 'none')}; /* <a> element reset */
  }

  &:focus {
    outline: none;
  }

  &[data-garden-focus-visible] {
    text-decoration: ${props => (props.isLink ? 'underline' : 'none')}; /* <a> element reset */
  }

  &:active,
  &[aria-pressed='true'],
  &[aria-pressed='mixed'] {
    /* prettier-ignore */
    transition:
      border-color 0.1s ease-in-out,
      background-color 0.1s ease-in-out,
      color 0.1s ease-in-out;
    text-decoration: ${props => (props.isLink ? 'underline' : 'none')}; /* <a> element reset */
  }

  /* Color (default, primary, basic, & danger) styling */
  ${props => colorStyles(props)};

  &:disabled {
    cursor: default;
    text-decoration: ${props => props.isLink && 'none'};
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
