/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { em, math, rgba } from 'polished';
import {
  DEFAULT_THEME,
  SELECTOR_FOCUS_VISIBLE,
  focusStyles,
  getColor,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';
import { IButtonProps } from '../types';
import { StyledButtonGroup } from './StyledButtonGroup';
import { StyledIcon } from './StyledIcon';

const COMPONENT_ID = 'buttons.button';

const getBorderRadius = (props: IButtonProps & ThemeProps<DefaultTheme>) => {
  if (props.isPill) {
    return '100px';
  }

  return props.theme.borderRadii.md;
};

const getDisabledBackgroundColor = (props: IButtonProps & ThemeProps<DefaultTheme>) => {
  return getColor('neutralHue', 200, props.theme);
};

export const getHeight = (props: IButtonProps & ThemeProps<DefaultTheme>) => {
  if (props.size === 'small') {
    return `${props.theme.space.base * 8}px`;
  } else if (props.size === 'large') {
    return `${props.theme.space.base * 12}px`;
  }

  return `${props.theme.space.base * 10}px`;
};

/**
 * 1. override CSS bedrock
 */
const colorStyles = (props: IButtonProps & ThemeProps<DefaultTheme>) => {
  let retVal;
  let hue;

  if (
    props.disabled ||
    (props.isNeutral && (props.isPrimary || props.isSelected) && !props.isDanger)
  ) {
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
  const disabledBackgroundColor = getDisabledBackgroundColor(props);
  const disabledForegroundColor = getColor(hue, shade - 200, props.theme);

  if (props.isLink) {
    retVal = css`
      background-color: transparent;
      color: ${baseColor};

      &:hover,
      ${SELECTOR_FOCUS_VISIBLE} {
        color: ${hoverColor};
      }

      &:focus {
        color: ${baseColor}; /* [1] */
      }

      ${focusStyles({
        theme: props.theme,
        condition: false,
        styles: {
          outline: `${math(`${props.theme.borderWidths.md} - 1`)} solid ${getColor(
            'primaryHue',
            shade,
            props.theme
          )}`
        }
      })}

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

      ${focusStyles({
        theme: props.theme,
        inset: props.focusInset,
        shadowWidth: props.focusInset ? 'sm' : 'md',
        spacerWidth: props.focusInset ? 'sm' : 'xs',
        styles:
          props.isDanger && props.focusInset
            ? {
                borderColor: getColor('primaryHue', shade, props.theme)
              }
            : undefined
      })}

      &:active {
        background-color: ${activeColor};
      }

      &[aria-pressed='true'],
      &[aria-pressed='mixed'] {
        background-color: ${props.isPrimary && activeColor};
      }

      &:disabled {
        background-color: ${disabledBackgroundColor};
        color: ${disabledForegroundColor};
      }
    `;
  } else {
    const borderColor =
      props.isNeutral && !props.isDanger ? getColor('neutralHue', 300, props.theme) : baseColor;
    const foregroundColor = props.isNeutral ? props.theme.colors.foreground : baseColor;
    const hoverBorderColor = props.isNeutral && !props.isDanger ? baseColor : hoverColor;
    const hoverForegroundColor = props.isNeutral ? foregroundColor : hoverColor;

    retVal = css`
      border-color: ${!props.isBasic && borderColor};
      background-color: transparent;
      color: ${foregroundColor};

      &:hover {
        border-color: ${!props.isBasic && hoverBorderColor};
        background-color: ${rgba(baseColor as string, 0.08)};
        color: ${hoverForegroundColor};
      }

      ${focusStyles({
        theme: props.theme,
        inset: props.focusInset,
        styles: props.isNeutral ? { borderColor: baseColor } : undefined
      })}

      &:active,
      &[aria-pressed='true'],
      &[aria-pressed='mixed'] {
        border-color: ${!props.isBasic && activeColor};
        background-color: ${rgba(baseColor as string, 0.2)};
        color: ${!props.isNeutral && activeColor};
      }

      &:disabled {
        border-color: transparent;
        background-color: ${disabledBackgroundColor};
        color: ${disabledForegroundColor};
      }

      & ${StyledIcon} {
        color: ${props.isNeutral && getColor('neutralHue', shade, props.theme)};
      }

      /* prettier-ignore */
      &:hover ${StyledIcon},
      &:focus-visible ${StyledIcon},
      &[data-garden-focus-visible] ${StyledIcon} {
        color: ${props.isNeutral && getColor('neutralHue', shade + 100, props.theme)};
      }

      &:active ${StyledIcon} {
        color: ${props.isNeutral && foregroundColor};
      }

      &:disabled ${StyledIcon} {
        color: ${disabledForegroundColor};
      }
    `;
  }

  return retVal;
};

/**
 * 1. Icon button override.
 */
const groupStyles = (props: IButtonProps & ThemeProps<DefaultTheme>) => {
  const { theme, isPrimary, isPill } = props;
  const rtl = theme.rtl;
  const disabledBackgroundColor = getDisabledBackgroundColor(props);
  const marginOffset = isPrimary ? theme.borderWidths.sm : `-${theme.borderWidths.sm}`;

  return css`
    position: relative;

    &:hover,
    &:active,
    ${SELECTOR_FOCUS_VISIBLE} {
      z-index: 1;
    }

    &:disabled {
      z-index: -1;
      background-color: ${!isPrimary && disabledBackgroundColor}; /* [1] */
    }

    /* stylelint-disable property-no-unknown, property-case */
    &:not(:first-of-type) {
      margin-${rtl ? 'right' : 'left'}: ${marginOffset};
    }

    &:not(:first-of-type):disabled {
      margin-${rtl ? 'right' : 'left'}: ${theme.borderWidths.sm};
      border-${rtl ? 'right' : 'left'}-width: ${0};
    }

    &:not(:first-of-type):not(:last-of-type) {
      border-radius: 0;
    }

    &:first-of-type:not(:last-of-type) {
      border-top-${rtl ? 'left' : 'right'}-radius: 0;
      border-bottom-${rtl ? 'left' : 'right'}-radius: 0;
    }

    &:last-of-type:not(:first-of-type) {
      border-top-${rtl ? 'right' : 'left'}-radius: 0;
      border-bottom-${rtl ? 'right' : 'left'}-radius: 0;
    }
    /* stylelint-enable property-no-unknown, property-case */

    /* stylelint-disable property-no-unknown, selector-max-specificity */
    &:first-of-type:not(:last-of-type) ${StyledIcon} {
      margin-${rtl ? 'left' : 'right'}: ${isPill && '-2px'};
    }

    &:last-of-type:not(:first-of-type) ${StyledIcon} {
      margin-${rtl ? 'right' : 'left'}: ${isPill && '-2px'};
    }
    /* stylelint-enable property-no-unknown, selector-max-specificity */
  `;
};

const iconStyles = (props: IButtonProps & ThemeProps<DefaultTheme>) => {
  const size = props.size === 'small' ? props.theme.iconSizes.sm : props.theme.iconSizes.md;

  return css`
    width: ${size};
    min-width: ${size};
    height: ${size};
    vertical-align: ${props.isLink && 'middle'};
  `;
};

const sizeStyles = (props: IButtonProps & ThemeProps<DefaultTheme>) => {
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

    if (props.size === 'small') {
      fontSize = props.theme.fontSizes.sm;
      padding = `${props.theme.space.base * 3}px`;
    } else {
      fontSize = props.theme.fontSizes.md;

      if (props.size === 'large') {
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

/**
 * 1. FF <input type="submit"> fix
 * 2. <a> element reset
 * 3. Shifting :focus-visible from LVHFA order to preserve `text-decoration` on hover
 */
export const StyledButton = styled.button.attrs<IButtonProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: props.type || 'button'
}))<IButtonProps>`
  display: ${props => (props.isLink ? 'inline' : 'inline-flex')};
  align-items: ${props => !props.isLink && 'center'};
  justify-content: ${props => !props.isLink && 'center'};
  /* prettier-ignore */
  transition:
    ${props => props.isLink && 'outline 0.1s ease-in-out,'}
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out,
    z-index 0.25s ease-in-out;
  margin: 0;
  border: ${props => `${props.isLink ? `0px solid` : props.theme.borders.sm} transparent`};
  border-radius: ${props => getBorderRadius(props)};
  cursor: pointer;
  width: ${props => (props.isStretched ? '100%' : '')};
  overflow: hidden;
  text-decoration: none; /* <a> element reset */
  text-overflow: ellipsis;
  white-space: ${props => !props.isLink && 'nowrap'};
  font-family: inherit; /* <button> & <input> override */
  font-weight: ${props => (props.isLink ? 'inherit' : props.theme.fontWeights.regular)};
  -webkit-font-smoothing: subpixel-antialiased;
  box-sizing: border-box;
  user-select: ${props => !props.isLink && 'none'};
  -webkit-touch-callout: none;

  ${props => sizeStyles(props)};

  &::-moz-focus-inner {
    /* [1] */
    border: 0;
    padding: 0;
  }

  /* [3] */
  ${SELECTOR_FOCUS_VISIBLE} {
    text-decoration: none;
  }

  /* [3] */
  &:hover {
    text-decoration: ${props => (props.isLink ? 'underline' : 'none')}; /* [2] */
  }

  &:active,
  &[aria-pressed='true'],
  &[aria-pressed='mixed'] {
    /* prettier-ignore */
    transition:
      border-color 0.1s ease-in-out,
      background-color 0.1s ease-in-out,
      color 0.1s ease-in-out,
      z-index 0.25s ease-in-out;
    text-decoration: ${props => (props.isLink ? 'underline' : 'none')}; /* [2] */
  }

  ${props => colorStyles(props)};

  &:disabled {
    cursor: default;
    text-decoration: ${props => props.isLink && 'none'};
  }

  /* stylelint-disable */
  & ${StyledIcon} {
    ${props => iconStyles(props)}
  }

  ${StyledButtonGroup} && {
    ${props => groupStyles(props)}
  }
  /* stylelint-enable */

  ${props => retrieveComponentStyles(COMPONENT_ID, props)}
`;

StyledButton.defaultProps = {
  theme: DEFAULT_THEME
};
