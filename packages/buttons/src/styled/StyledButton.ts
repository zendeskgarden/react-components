/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ButtonHTMLAttributes } from 'react';
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { em, math } from 'polished';
import {
  SELECTOR_FOCUS_VISIBLE,
  focusStyles,
  getColor,
  getFocusBoxShadow,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';
import { IButtonProps } from '../types';
import { StyledSplitButton } from './StyledSplitButton';
import { StyledIcon } from './StyledIcon';

export const COMPONENT_ID = 'buttons.button';

export interface IStyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $isUnderlined?: boolean;
  $isDanger?: boolean;
  $size?: IButtonProps['size'];
  $isStretched?: boolean;
  $isNeutral?: boolean;
  $isPrimary?: boolean;
  $isBasic?: boolean;
  $isLink?: boolean;
  $isPill?: boolean;
  $focusInset?: boolean;
}

const getBorderRadius = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  if (props.$isPill) {
    return '100px';
  }

  return props.theme.borderRadii.md;
};

export const getHeight = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  if (props.$size === 'small') {
    return `${props.theme.space.base * 8}px`;
  } else if (props.$size === 'large') {
    return `${props.theme.space.base * 12}px`;
  }

  return `${props.theme.space.base * 10}px`;
};

/**
 * 1. override CSS bedrock
 * 2. focus shadow outline replaces box-shadow for links, to contain outline on line breaks
 * 3. shifting :focus-visible from LVHFA order to preserve `color` on hover
 * 4. set default outline-color for smooth transition without artifacts
 */
const colorStyles = ({
  theme,
  $isLink,
  $isBasic,
  $isDanger,
  $isNeutral,
  $isPrimary,
  $focusInset
}: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  let retVal;
  const disabledBackgroundColor = getColor({ theme, variable: 'background.disabled' });
  const disabledForegroundColor = getColor({ theme, variable: 'foreground.disabled' });
  const offset100 = { dark: { offset: -100 }, light: { offset: 100 } };
  const offset200 = { dark: { offset: -200 }, light: { offset: 200 } };

  if ($isLink) {
    /*
     * Anchor / link button styling
     */
    const options = { theme, variable: $isDanger ? 'foreground.danger' : 'foreground.primary' };
    const foregroundColor = getColor(options);
    const hoverForegroundColor = getColor({ ...options, ...offset100 });
    const activeForegroundColor = getColor({ ...options, ...offset200 });
    const focusOutlineColor = getColor({ theme, variable: 'border.primaryEmphasis' });

    retVal = css`
      outline-color: transparent; /* [4] */
      background-color: transparent;
      color: ${foregroundColor};

      ${focusStyles({
        theme,
        condition: false,
        styles: {
          color: foregroundColor /* [1] */,
          outlineColor: focusOutlineColor /* [2] */
        }
      })}

      /* [3] */
      &:hover {
        color: ${hoverForegroundColor};
      }

      &:active,
      &[aria-pressed='true'],
      &[aria-pressed='mixed'] {
        color: ${activeForegroundColor};
      }

      &:disabled {
        color: ${disabledForegroundColor};
      }
    `;
  } else if ($isPrimary) {
    /*
     * Primary button styling
     */
    let backgroundVariable;

    if ($isDanger) {
      backgroundVariable = 'background.dangerEmphasis';
    } else if ($isNeutral) {
      backgroundVariable = 'background.emphasis';
    } else {
      backgroundVariable = 'background.primaryEmphasis';
    }

    const options = { theme, variable: backgroundVariable };
    const backgroundColor = getColor(options);
    const hoverBackgroundColor = getColor({ ...options, ...offset100 });
    const activeBackgroundColor = getColor({ ...options, ...offset200 });
    const foregroundColor = getColor({ theme, variable: 'foreground.onEmphasis' });

    retVal = css`
      outline-color: transparent; /* [4] */
      background-color: ${backgroundColor};
      color: ${foregroundColor};

      &:hover {
        background-color: ${hoverBackgroundColor};
      }

      ${focusStyles({
        theme,
        inset: $focusInset,
        shadowWidth: $focusInset ? 'sm' : 'md',
        spacerWidth: $focusInset ? 'sm' : 'xs',
        styles:
          ($isDanger || $isNeutral) && $focusInset
            ? { borderColor: getColor({ theme, variable: 'border.primaryEmphasis' }) }
            : undefined
      })}

      &:active,
      &[aria-pressed='true'],
      &[aria-pressed='mixed'] {
        background-color: ${activeBackgroundColor};
      }

      &:disabled {
        background-color: ${disabledBackgroundColor};
        color: ${disabledForegroundColor};
      }
    `;
  } else {
    /*
     * Default button styling
     */
    let borderColor;
    let hoverBorderColor;
    let activeBorderColor;
    let focusBorderColor;
    let backgroundVariable;
    let foregroundVariable;

    if ($isDanger) {
      if (!$isBasic) {
        const borderOptions = { theme, variable: 'border.dangerEmphasis' };

        borderColor = getColor(borderOptions);
        hoverBorderColor = getColor({ ...borderOptions, ...offset100 });
        activeBorderColor = getColor({ ...borderOptions, ...offset200 });

        if ($isNeutral) {
          focusBorderColor = getColor(borderOptions);
        }
      }

      backgroundVariable = 'background.dangerEmphasis';
      foregroundVariable = $isNeutral ? 'foreground.default' : 'foreground.danger';
    } else {
      if (!$isBasic) {
        const borderOptions = { theme, variable: 'border.primaryEmphasis' };

        if ($isNeutral) {
          borderColor = getColor({ theme, variable: 'border.default', ...offset100 });
          hoverBorderColor = getColor(borderOptions);
          focusBorderColor = hoverBorderColor;
          activeBorderColor = getColor({ ...borderOptions, ...offset100 });
        } else {
          borderColor = getColor(borderOptions);
          hoverBorderColor = getColor({ ...borderOptions, ...offset100 });
          activeBorderColor = getColor({ ...borderOptions, ...offset200 });
        }
      }

      backgroundVariable = 'background.primaryEmphasis';
      foregroundVariable = $isNeutral ? 'foreground.default' : 'foreground.primary';
    }

    const hoverBackgroundColor = getColor({
      theme,
      variable: backgroundVariable,
      transparency: theme.opacity[100]
    });
    const activeBackgroundColor = getColor({
      theme,
      variable: backgroundVariable,
      transparency: theme.opacity[200]
    });
    const foregroundOptions = { theme, variable: foregroundVariable };
    const foregroundColor = getColor(foregroundOptions);
    let hoverForegroundColor;
    let activeForegroundColor;
    let iconForegroundColor;
    let hoverIconForegroundColor;
    let activeIconForegroundColor;

    if ($isNeutral) {
      const iconOptions = { theme, variable: 'foreground.subtle' };

      iconForegroundColor = getColor(iconOptions);
      hoverIconForegroundColor = getColor({ ...iconOptions, ...offset100 });
      activeIconForegroundColor = getColor({ ...iconOptions, ...offset200 });
    } else {
      hoverForegroundColor = getColor({ ...foregroundOptions, ...offset100 });
      activeForegroundColor = getColor({ ...foregroundOptions, ...offset200 });
    }

    retVal = css`
      outline-color: transparent; /* [4] */
      border-color: ${borderColor};
      background-color: transparent;
      color: ${foregroundColor};

      &:hover {
        border-color: ${hoverBorderColor};
        background-color: ${hoverBackgroundColor};
        color: ${hoverForegroundColor};
      }

      ${focusStyles({
        theme,
        inset: $focusInset,
        styles: { borderColor: focusBorderColor }
      })}

      &:active,
      &[aria-pressed='true'],
      &[aria-pressed='mixed'] {
        border-color: ${activeBorderColor};
        background-color: ${activeBackgroundColor};
        color: ${activeForegroundColor};
      }

      &:disabled {
        border-color: transparent;
        background-color: ${disabledBackgroundColor};
        color: ${disabledForegroundColor};
      }

      /* prettier-ignore */
      & ${StyledIcon} {
        color: ${iconForegroundColor};
      }

      &:hover ${StyledIcon}, &:focus-visible ${StyledIcon} {
        color: ${hoverIconForegroundColor};
      }

      &:active ${StyledIcon} {
        color: ${activeIconForegroundColor};
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
 * 2. reset icon button with border
 */
const groupStyles = ({
  theme,
  $isPrimary,
  $isBasic,
  $isPill,
  $focusInset
}: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  const { rtl, borderWidths, borders } = theme;
  const startPosition = rtl ? 'right' : 'left';
  const endPosition = rtl ? 'left' : 'right';
  const marginOffset = borderWidths.sm;
  const marginDisplacement = `${$isPrimary || $isBasic ? '' : '-'}${marginOffset}`;
  const iconMarginDisplacement = $isPill && '-2px';
  const disabledBackgroundColor =
    !$isPrimary && getColor({ theme, variable: 'background.disabled' });
  const borderColor = $isBasic ? 'transparent' : 'revert';
  const focusColor = getColor({ theme, variable: 'border.primaryEmphasis' });
  const focusBoxShadow =
    $isBasic &&
    !$isPrimary &&
    getFocusBoxShadow({
      theme,
      inset: $focusInset,
      spacerColor: { hue: focusColor },
      color: { hue: 'transparent' }
    });

  return css`
    position: relative;
    /* prettier-ignore */
    transition:
      border-color 0.1s ease-in-out,
      background-color 0.1s ease-in-out,
      box-shadow 0.1s ease-in-out,
      color 0.1s ease-in-out,
      margin-${startPosition} 0.1s ease-in-out,
      outline-color 0.1s ease-in-out,
      z-index 0.25s ease-in-out;
    border: ${borders.sm} ${borderColor}; /* [2] */

    ${SELECTOR_FOCUS_VISIBLE} {
      border-color: ${focusColor};
      box-shadow: ${focusBoxShadow};
    }

    &:hover,
    &:active,
    ${SELECTOR_FOCUS_VISIBLE} {
      z-index: 1;
    }

    &:disabled {
      z-index: -1;
      background-color: ${disabledBackgroundColor}; /* [1] */
    }

    &:not(:first-of-type) {
      margin-${startPosition}: ${marginDisplacement};
    }

    &:not(:first-of-type):disabled {
      margin-${startPosition}: ${marginOffset};
    }

    &:not(:first-of-type):not(:last-of-type) {
      border-radius: 0;
    }

    &:first-of-type:not(:last-of-type) {
      border-top-${endPosition}-radius: 0;
      border-bottom-${endPosition}-radius: 0;
    }

    &:last-of-type:not(:first-of-type) {
      border-top-${startPosition}-radius: 0;
      border-bottom-${startPosition}-radius: 0;
    }

    &:first-of-type:not(:last-of-type) ${StyledIcon} {
      margin-${endPosition}: ${iconMarginDisplacement};
    }

    &:last-of-type:not(:first-of-type) ${StyledIcon} {
      margin-${startPosition}: ${iconMarginDisplacement};
    }
  `;
};

const iconStyles = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  const $size = props.$size === 'small' ? props.theme.iconSizes.sm : props.theme.iconSizes.md;

  return css`
    width: ${$size};
    min-width: ${$size};
    height: ${$size};
    vertical-align: ${props.$isLink && 'middle'};
  `;
};

const sizeStyles = (props: IStyledButtonProps & ThemeProps<DefaultTheme>) => {
  let retVal;

  if (props.$isLink) {
    retVal = css`
      padding: 0;
      font-size: inherit;
    `;
  } else {
    const height = getHeight(props);
    const lineHeight = math(`${height} - (${props.theme.borderWidths.sm} * 2)`);
    let padding;
    let fontSize;

    if (props.$size === 'small') {
      fontSize = props.theme.fontSizes.sm;
      padding = `${props.theme.space.base * 3}px`;
    } else {
      fontSize = props.theme.fontSizes.md;

      if (props.$size === 'large') {
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

/*
 * 1. <a> element reset
 * 2. FF <input type="submit"> fix
 * 3. Shifting :focus-visible from LVHFA order to preserve `text-decoration` on hover
 */
export const StyledButton = styled.button.attrs<IStyledButtonProps>(props => ({
  'data-garden-id': (props as any)['data-garden-id'] || COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: props.type || 'button'
}))<IStyledButtonProps>`
  display: ${props => (props.$isLink ? 'inline' : 'inline-flex')};
  align-items: ${props => !props.$isLink && 'center'};
  justify-content: ${props => !props.$isLink && 'center'};
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out,
    outline-color 0.1s ease-in-out,
    z-index 0.25s ease-in-out;
  margin: 0;
  border: ${props => `${props.$isLink ? `0px solid` : props.theme.borders.sm} transparent`};
  border-radius: ${props => getBorderRadius(props)};
  cursor: pointer;
  width: ${props => (props.$isStretched ? '100%' : '')};
  overflow: hidden;
  text-decoration: ${props => (props.$isUnderlined ? 'underline' : 'none')}; /* [1] */
  text-overflow: ellipsis;
  white-space: ${props => !props.$isLink && 'nowrap'};
  font-family: inherit; /* <button> & <input> override */
  font-weight: ${props => (props.$isLink ? 'inherit' : props.theme.fontWeights.regular)};
  -webkit-font-smoothing: subpixel-antialiased;
  box-sizing: border-box;
  user-select: ${props => !props.$isLink && 'none'};
  -webkit-touch-callout: none;

  ${props => sizeStyles(props)};

  &::-moz-focus-inner {
    /* [2] */
    border: 0;
    padding: 0;
  }

  /* [3] */
  ${SELECTOR_FOCUS_VISIBLE} {
    text-decoration: none;
  }

  /* [3] */
  &:hover {
    text-decoration: ${props => (props.$isLink ? 'underline' : 'none')}; /* [2] */
  }

  &:active,
  &[aria-pressed='true'],
  &[aria-pressed='mixed'] {
    /* prettier-ignore */
    transition:
      border-color 0.1s ease-in-out,
      background-color 0.1s ease-in-out,
      box-shadow 0.1s ease-in-out,
      color 0.1s ease-in-out,
      outline-color 0.1s ease-in-out,
      z-index 0.25s ease-in-out;
    text-decoration: ${props => (props.$isLink ? 'underline' : 'none')}; /* [2] */
  }

  ${props => colorStyles(props)};

  &:disabled {
    cursor: default;
    text-decoration: ${props => props.$isLink && 'none'};
  }

  & ${StyledIcon} {
    ${props => iconStyles(props)}
  }

  ${StyledSplitButton} && {
    ${props => groupStyles(props)}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)}
`;
