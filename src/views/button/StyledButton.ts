/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { em, math } from 'polished';
import { ButtonHTMLAttributes } from 'react';
import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { SELECTOR_FOCUS_VISIBLE, focusStyles } from '../../theming/utils/focusStyles';
import { getColor } from '../../theming/utils/getColor';
import { getFocusBoxShadow } from '../../theming/utils/getFocusBoxShadow';
import { getIconRenderSize } from '../../theming/utils/getIconRenderSize';
import { IButtonProps } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';
import { StyledIcon } from './StyledIcon';
import { StyledSplitButton } from './StyledSplitButton';

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

/**
 * Button corners are pill by default. Links get no resting radius: they render
 * with `overflow: hidden`, so any radius truncates the underline at the corners.
 */
const getBorderRadius = (props: IStyledButtonProps & IStyledBaseProps) => {
  if (props.$isLink) {
    return '0';
  } else if (props.$isPill === false) {
    return props.theme.borderRadii.md;
  }

  return props.theme.borderRadii.full;
};

export const getHeight = (props: IStyledButtonProps & IStyledBaseProps) => {
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
 * 5. on focus-visible, links take a small radius to match other focus rings,
 *    with the outline offset increased by 1px so the ring clears the corners
 * 6. neutral buttons in an input group share the input's resting border; the
 *    zero-specificity ancestor keeps it at resting precedence, so state rules
 *    (and the icon button's own resting border) apply over it
 * 7. disabled border placed before the hover and active rules: disabled danger
 *    buttons keep their hover and active border colors
 * 8. subtle icons for neutral buttons; danger buttons keep the danger color on
 *    their icons
 * 9. an unset `$isNeutral` counts as neutral: only `false` opts out
 */
const colorStyles = ({
  theme,
  $isLink,
  $isBasic,
  $isDanger,
  $isNeutral,
  $isPrimary,
  $focusInset
}: IStyledButtonProps & IStyledBaseProps) => {
  let retVal;
  const isNeutral = $isNeutral !== false; /* [9] */
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
          borderRadius: theme.borderRadii.sm /* [5] */,
          color: foregroundColor /* [1] */,
          outlineColor: focusOutlineColor /* [2] */,
          outlineOffset: theme.shadowWidths.sm /* [5] */
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
    let backgroundColor;
    let hoverBackgroundColor;
    let activeBackgroundColor;

    if ($isDanger) {
      const options = { theme, variable: 'background.dangerEmphasis' };

      backgroundColor = getColor(options);
      hoverBackgroundColor = getColor({ ...options, ...offset100 });
      activeBackgroundColor = getColor({ ...options, ...offset200 });
    } else {
      backgroundColor = getColor({
        theme,
        hue: 'neutralHue',
        light: { shade: 900 },
        dark: { shade: 300 }
      });
      hoverBackgroundColor = getColor({
        theme,
        hue: 'neutralHue',
        light: { shade: 800 },
        dark: { shade: 200 }
      });
      activeBackgroundColor = getColor({
        theme,
        hue: 'neutralHue',
        light: { shade: 700 },
        dark: { shade: 100 }
      });
    }

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
        styles: $focusInset
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
    let disabledBorderColor;
    let inputGroupBorderColor;
    let backgroundOptions;
    let foregroundVariable;

    if ($isDanger) {
      if (!$isBasic) {
        const borderOptions = { theme, variable: 'border.dangerEmphasis' };

        borderColor = getColor(borderOptions);
        hoverBorderColor = getColor({ ...borderOptions, ...offset100 });
        activeBorderColor = getColor({ ...borderOptions, ...offset200 });
      }

      backgroundOptions = { theme, variable: 'background.dangerEmphasis' };
      foregroundVariable = 'foreground.danger';
    } else {
      if (!$isBasic) {
        borderColor = getColor({
          theme,
          hue: 'neutralHue',
          light: { shade: 500 },
          dark: { shade: 600 }
        });
        hoverBorderColor = getColor({
          theme,
          hue: 'neutralHue',
          light: { shade: 600 },
          dark: { shade: 500 }
        });
        activeBorderColor = getColor({
          theme,
          hue: 'neutralHue',
          light: { shade: 700 },
          dark: { shade: 400 }
        });
        focusBorderColor = borderColor;
        disabledBorderColor = 'transparent';

        if (isNeutral) {
          inputGroupBorderColor = getColor({ theme, variable: 'border.default', ...offset100 });
        }
      }

      backgroundOptions = {
        theme,
        hue: 'neutralHue',
        light: { shade: 700 },
        dark: { hue: 'white' }
      };
      foregroundVariable = isNeutral ? 'foreground.default' : 'foreground.primary';
    }

    const hoverBackgroundColor = getColor({
      ...backgroundOptions,
      transparency: theme.opacity[100]
    });
    const activeBackgroundColor = getColor({
      ...backgroundOptions,
      transparency: theme.opacity[200]
    });
    const foregroundOptions = { theme, variable: foregroundVariable };
    const foregroundColor = getColor(foregroundOptions);
    let hoverForegroundColor;
    let activeForegroundColor;
    let iconForegroundColor;
    let hoverIconForegroundColor;
    let activeIconForegroundColor;
    let pressedIconForegroundColor;

    if ($isDanger || !isNeutral) {
      hoverForegroundColor = getColor({ ...foregroundOptions, ...offset100 });
      activeForegroundColor = getColor({ ...foregroundOptions, ...offset200 });
    }

    /* [8] */
    if (!$isDanger && isNeutral) {
      const iconOptions = { theme, variable: 'foreground.subtle' };

      iconForegroundColor = getColor(iconOptions);
      hoverIconForegroundColor = getColor({ ...iconOptions, ...offset100 });
      activeIconForegroundColor = getColor({ ...iconOptions, ...offset200 });
      pressedIconForegroundColor = activeIconForegroundColor;
    }

    retVal = css`
      outline-color: transparent; /* [4] */
      border-color: ${borderColor};
      background-color: transparent;
      color: ${foregroundColor};

      /* [6] */
      :where([data-garden-id='forms.input_group']) & {
        border-color: ${inputGroupBorderColor};
      }

      /* [3] */
      ${focusStyles({
        theme,
        inset: $focusInset,
        styles: { borderColor: focusBorderColor }
      })}

      ${$isDanger &&
      css`
        /* [7] */
        &:disabled {
          border-color: transparent;
        }
      `}

      &:hover {
        border-color: ${hoverBorderColor};
        background-color: ${hoverBackgroundColor};
        color: ${hoverForegroundColor};
      }

      &:active,
      &[aria-pressed='true'],
      &[aria-pressed='mixed'] {
        border-color: ${activeBorderColor};
        background-color: ${activeBackgroundColor};
        color: ${activeForegroundColor};
      }

      &:disabled {
        border-color: ${disabledBorderColor};
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

      &[aria-pressed='true'] ${StyledIcon}, &[aria-pressed='mixed'] ${StyledIcon} {
        color: ${pressedIconForegroundColor};
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
}: IStyledButtonProps & IStyledBaseProps) => {
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

const iconStyles = (props: IStyledButtonProps & IStyledBaseProps) => {
  const $size = props.$size === 'small' ? props.theme.iconSizes.sm : props.theme.iconSizes.md;
  const renderSize = getIconRenderSize(props.theme, props.$size === 'small');

  return css`
    width: ${renderSize};
    min-width: ${$size};
    height: ${renderSize};
    vertical-align: ${props.$isLink && 'middle'};
  `;
};

const sizeStyles = (props: IStyledButtonProps & IStyledBaseProps) => {
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
 * 4. every SVG in a button renders at the icon render size
 */
/*
 * the `type="button"` default lives in the `Button`/`IconButton` elements: an
 * attrs fallback would be discarded by styled-components >= 6.3.12 when a
 * caller explicitly passes `type={undefined}`
 */
export const StyledButton = styled.button<IStyledButtonProps>`
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
  font-weight: ${props => (props.$isLink ? 'inherit' : props.theme.fontWeights.semibold)};
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

  /* [4] */
  & svg {
    width: ${props => getIconRenderSize(props.theme, props.$size === 'small')};
    height: ${props => getIconRenderSize(props.theme, props.$size === 'small')};
  }

  ${StyledSplitButton} && {
    ${props => groupStyles(props)}
  }

  ${componentStyles}
`;
