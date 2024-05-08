/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { em, math } from 'polished';
import {
  DEFAULT_THEME,
  SELECTOR_FOCUS_VISIBLE,
  focusStyles,
  getColor,
  getColorV8,
  getFocusBoxShadow,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';
import { IButtonProps } from '../types';
import { StyledSplitButton } from './StyledSplitButton';
import { StyledIcon } from './StyledIcon';

const COMPONENT_ID = 'buttons.button';

const getBorderRadius = (props: IButtonProps & ThemeProps<DefaultTheme>) => {
  if (props.isPill) {
    return '100px';
  }

  return props.theme.borderRadii.md;
};

const getDisabledBackgroundColor = (props: IButtonProps & ThemeProps<DefaultTheme>) => {
  return getColorV8('neutralHue', 200, props.theme);
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
 * 2. focus shadow outline replaces box-shadow for links, to contain outline on line breaks
 * 3. shifting :focus-visible from LVHFA order to preserve `color` on hover
 * 4. set default outline-color for smooth transition without artifacts
 */
const colorStyles = ({
  theme,
  isLink,
  isBasic,
  isDanger,
  isNeutral,
  isPrimary,
  focusInset
}: IButtonProps & ThemeProps<DefaultTheme>) => {
  let retVal;
  const disabledBackgroundColor = getColor({
    theme,
    variable: 'background.emphasis',
    dark: { offset: -100 },
    transparency: theme.opacity[100]
  });
  const disabledForegroundColor = getColor({
    theme,
    variable: 'foreground.subtle',
    dark: { offset: +200 },
    light: { offset: -100 }
  });

  if (isLink) {
    const options = { theme, variable: `foreground.${isDanger ? 'danger' : 'primary'}` };
    const foregroundColor = getColor(options);
    const hoverForegroundColor = getColor({
      ...options,
      dark: { offset: -100 },
      light: { offset: +100 }
    });
    const activeForegroundColor = getColor({
      ...options,
      dark: { offset: -200 },
      light: { offset: +200 }
    });
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
  } else if (isPrimary) {
    let variable;

    if (isDanger) {
      variable = 'background.dangerEmphasis';
    } else if (isNeutral) {
      variable = 'background.emphasis';
    } else {
      variable = 'background.primaryEmphasis';
    }

    const options = { theme, variable };
    const backgroundColor = getColor(options);
    const hoverBackgroundColor = getColor({
      ...options,
      dark: { offset: -100 },
      light: { offset: +100 }
    });
    const activeBackgroundColor = getColor({
      ...options,
      dark: { offset: -200 },
      light: { offset: +200 }
    });
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
        inset: focusInset,
        shadowWidth: focusInset ? 'sm' : 'md',
        spacerWidth: focusInset ? 'sm' : 'xs',
        styles:
          (isDanger || isNeutral) && focusInset
            ? {
                borderColor: getColor({ theme, variable: 'border.primaryEmphasis' })
              }
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
    let borderVariable;
    let backgroundVariable;
    let foregroundVariable;

    if (isDanger) {
      borderVariable = 'border.dangerEmphasis';
      backgroundVariable = 'background.dangerEmphasis';
      foregroundVariable = isNeutral ? 'foreground.default' : 'foreground.danger';
    } else {
      borderVariable = 'border.primaryEmphasis';
      backgroundVariable = 'background.primaryEmphasis';
      foregroundVariable = isNeutral ? 'foreground.default' : 'foreground.primary';
    }

    const borderColor = isBasic
      ? undefined
      : getColor({ theme, variable: isNeutral && !isDanger ? 'border.default' : borderVariable });
    const hoverBorderColor = isBasic
      ? undefined
      : getColor({
          theme,
          variable: borderVariable,
          dark: { offset: -100 },
          light: { offset: +100 }
        });
    const activeBorderColor = isBasic
      ? undefined
      : getColor({
          theme,
          variable: borderVariable,
          dark: { offset: -200 },
          light: { offset: +200 }
        });
    const focusBorderColor = isBasic ? undefined : getColor({ theme, variable: borderVariable });
    const foregroundOptions = { theme, variable: foregroundVariable };
    const foregroundColor = getColor(foregroundOptions);
    const hoverForegroundColor = isNeutral
      ? undefined
      : getColor({
          ...foregroundOptions,
          dark: { offset: -100 },
          light: { offset: +100 }
        });
    const activeForegroundColor = isNeutral
      ? undefined
      : getColor({
          ...foregroundOptions,
          dark: { offset: -200 },
          light: { offset: +200 }
        });
    const backgroundOptions = { theme, variable: backgroundVariable };
    const hoverBackgroundColor = getColor({
      ...backgroundOptions,
      transparency: theme.opacity[100]
    });
    const activeBackgroundColor = getColor({
      ...backgroundOptions,
      transparency: theme.opacity[200]
    });
    const iconOptions = { theme, variable: 'foreground.subtle' };
    const iconForegroundColor = isNeutral ? getColor(iconOptions) : undefined;
    const hoverIconForegroundColor = isNeutral
      ? getColor({
          ...iconOptions,
          dark: { offset: -100 },
          light: { offset: +100 }
        })
      : undefined;
    const activeIconForegroundColor = isNeutral
      ? getColor({
          ...iconOptions,
          dark: { offset: -200 },
          light: { offset: +200 }
        })
      : undefined;

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
        inset: focusInset,
        styles: isNeutral ? { borderColor: focusBorderColor } : undefined
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
const groupStyles = (props: IButtonProps & ThemeProps<DefaultTheme>) => {
  const { theme, isPrimary, isBasic, isPill, focusInset } = props;
  const { rtl, borderWidths, borders } = theme;
  const startPosition = rtl ? 'right' : 'left';
  const endPosition = rtl ? 'left' : 'right';
  const marginOffset = borderWidths.sm;
  const marginDisplacement = `${isPrimary || isBasic ? '' : '-'}${marginOffset}`;
  const iconMarginDisplacement = isPill && '-2px';
  const disabledBackgroundColor = !isPrimary && getDisabledBackgroundColor(props);
  const borderColor = isBasic ? 'transparent' : 'revert';
  const focusColor = getColorV8('primaryHue', 600, theme);
  const focusBoxShadow =
    isBasic &&
    !isPrimary &&
    getFocusBoxShadow({
      theme,
      inset: focusInset,
      spacerColor: { hue: focusColor },
      color: { hue: 'transparent' }
    });

  return css`
    position: relative;
    /* stylelint-disable value-keyword-case */
    /* prettier-ignore */
    transition:
      border-color 0.1s ease-in-out,
      background-color 0.1s ease-in-out,
      box-shadow 0.1s ease-in-out,
      color 0.1s ease-in-out,
      margin-${startPosition} 0.1s ease-in-out,
      outline-color 0.1s ease-in-out,
      z-index 0.25s ease-in-out;
    /* stylelint-enable value-keyword-case */
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

    /* stylelint-disable property-no-unknown, property-case */
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
    /* stylelint-enable property-no-unknown, property-case */

    /* stylelint-disable property-no-unknown, selector-max-specificity */
    &:first-of-type:not(:last-of-type) ${StyledIcon} {
      margin-${endPosition}: ${iconMarginDisplacement};
    }

    &:last-of-type:not(:first-of-type) ${StyledIcon} {
      margin-${startPosition}: ${iconMarginDisplacement};
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
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out,
    outline-color 0.1s ease-in-out,
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
      box-shadow 0.1s ease-in-out,
      color 0.1s ease-in-out,
      outline-color 0.1s ease-in-out,
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

  ${StyledSplitButton} && {
    ${props => groupStyles(props)}
  }
  /* stylelint-enable */

  ${props => retrieveComponentStyles(COMPONENT_ID, props)}
`;

StyledButton.defaultProps = {
  theme: DEFAULT_THEME
};
