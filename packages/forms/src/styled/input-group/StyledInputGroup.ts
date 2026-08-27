/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { em, math } from 'polished';
import { componentStyles, focusStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledButton, StyledIconButton } from '@zendeskgarden/react-buttons';
import { Validation } from '../../types';
import { StyledTextInput } from '../text/StyledTextInput';
import { StyledLabel } from '../common/StyledLabel';
import { StyledHint } from '../common/StyledHint';
import { StyledMessage } from '../common/StyledMessage';

const COMPONENT_ID = 'forms.input_group';

interface IStyledInputGroupProps {
  $isCompact?: boolean;
  $isSeamless?: boolean;
  $focusInset?: boolean;
}

const sizeStyles = (props: ThemeProps<DefaultTheme> & IStyledInputGroupProps) => {
  const { theme, $isCompact, $isSeamless } = props;
  const fontSize = theme.fontSizes.md;

  if (!$isSeamless) {
    return css`
      font-size: ${fontSize};
    `;
  }

  const containerSize = $isCompact ? 32 : 40;
  const horizontalSpacing = theme.space.base * 2;
  const paddingInline = em(`${theme.space.base * 3}px`, fontSize);
  /*
   * InputGroup forces a child IconButton to size="small" (32px) whenever isSeamless. That fits
   * a regular 40px container with room to spare, but not a 32px compact container plus its own
   * border - seamlessStyles shrinks the IconButton to fit in that case, so buttonSize here tracks
   * whichever size actually renders.
   */
  const iconButtonSize = $isCompact ? containerSize - parseFloat(theme.borderWidths.sm) * 2 : 32;
  const verticalPadding = math(
    `(${containerSize}px - ${iconButtonSize}px - (${theme.borderWidths.sm} * 2)) / 2`
  );
  const iconButtonInset = (iconButtonSize - parseFloat(theme.iconSizes.md)) / 2;
  const iconButtonPaddingInline = `calc(${paddingInline} - ${iconButtonInset}px)`;
  const textButtonPaddingInline = `calc(${paddingInline} - ${horizontalSpacing}px)`;

  return css`
    font-size: ${fontSize};
    padding-block: ${verticalPadding};
    padding-inline: ${paddingInline};
    gap: ${horizontalSpacing}px;

    /*
     * an edge IconButton's own icon is inset within the button by (button size - icon size) / 2,
     * so pairing the container's declared edge padding with the button's own inset would push
     * the icon in twice as far as intended - tuck the button closer to the edge to compensate,
     * landing the icon itself at the container's declared padding
     */
    &:has(> ${StyledIconButton}:first-child) {
      padding-inline-start: ${iconButtonPaddingInline};
    }

    &:has(> ${StyledIconButton}:last-child) {
      padding-inline-end: ${iconButtonPaddingInline};
    }

    /*
     * a text Button's own padding is overridden below to ${horizontalSpacing}px, so the same
     * over-compensation applies at the edges - tuck it in so the button's own text, not its
     * padding, lands at the container's declared padding
     */
    &:has(> ${StyledButton}:not(${StyledIconButton}):first-child) {
      padding-inline-start: ${textButtonPaddingInline};
    }

    &:has(> ${StyledButton}:not(${StyledIconButton}):last-child) {
      padding-inline-end: ${textButtonPaddingInline};
    }
  `;
};

/*
 * StyledTextInput reflects its own $validation as a data-validation attribute (rather than
 * something the container could read as a styled-components prop), so a seamless container - a
 * sibling in the DOM, not an ancestor of anything that carries the prop - can select on it here
 * via :has() to color its own border/focus ring the same way.
 */
const VALIDATION_BORDER_VARIABLE: Record<Validation, string> = {
  success: 'border.successEmphasis',
  warning: 'border.warningEmphasis',
  error: 'border.dangerEmphasis'
};

const validationStyles = (props: ThemeProps<DefaultTheme> & IStyledInputGroupProps) => {
  const { theme, $focusInset } = props;

  return (Object.keys(VALIDATION_BORDER_VARIABLE) as Validation[]).map(validation => {
    const selector = `${StyledTextInput}[data-validation="${validation}"]`;
    const borderColor = getColor({ theme, variable: VALIDATION_BORDER_VARIABLE[validation] });

    return css`
      &:has(${selector}) {
        border-color: ${borderColor};
      }

      &:hover:has(${selector}) {
        border-color: ${borderColor};
      }

      ${focusStyles({
        theme,
        inset: $focusInset,
        color: { variable: VALIDATION_BORDER_VARIABLE[validation] },
        selector: `&:focus-within:has(${selector}):not(:has(button:focus-visible))`,
        styles: { borderColor }
      })}
    `;
  });
};

const seamlessStyles = (props: ThemeProps<DefaultTheme> & IStyledInputGroupProps) => {
  if (!props.$isSeamless) {
    return undefined;
  }

  const { theme, $isCompact, $focusInset } = props;
  const containerSize = $isCompact ? 32 : 40;
  const buttonSizeValue = $isCompact ? 24 : 28;
  const buttonSize = `${buttonSizeValue}px`;
  const iconButtonSize = $isCompact
    ? `${containerSize - parseFloat(theme.borderWidths.sm) * 2}px`
    : undefined;
  const horizontalSpacing = theme.space.base * 2;
  const borderColor = getColor({
    theme,
    variable: 'border.default',
    dark: { offset: -100 },
    light: { offset: 100 }
  });
  const backgroundColor = getColor({ theme, variable: 'background.default' });
  const focusBorderColor = getColor({ theme, variable: 'border.primaryEmphasis' });
  const buttonLineHeight = math(`${buttonSize} - (${theme.borderWidths.sm} * 2)`);

  return css`
    box-sizing: border-box;
    /* prettier-ignore */
    transition: border-color 0.25s ease-in-out;
    border: ${theme.borders.sm};
    border-radius: ${theme.borderRadii.md};
    border-color: ${borderColor};
    background-color: ${backgroundColor};
    min-height: ${containerSize}px;

    &:hover {
      border-color: ${focusBorderColor};
    }

    /*
     * a regular IconButton's own small size (32px) already fits within the container with room
     * to spare, so it's left unstyled - but that same 32px doesn't fit within a 32px compact
     * container plus its own border, so it's shrunk down to fit in that case. Either way, the
     * consumer is expected to pass focusInset for a seamless group, since padding-block is too
     * tight for an outward ring to clear.
     */
    & ${StyledIconButton} {
      flex: none;
      align-self: center;
      width: ${iconButtonSize};
      min-width: ${iconButtonSize};
      height: ${iconButtonSize};
      min-height: ${iconButtonSize};
    }

    /*
     * Button's own horizontal padding is computed in em units relative to font-size, so it
     * can't be cleanly subtracted from the gap above. Overriding it to a fixed value that
     * matches the container's own edge spacing keeps the visual rhythm at ${horizontalSpacing}px
     * regardless of button size, without duplicating StyledButton's private padding formula.
     *
     * height/line-height are shrunk to match the IconButton size too, so a text Button doesn't
     * grow the container past its own min-height.
     */
    & ${StyledButton}:not(${StyledIconButton}) {
      padding-inline: ${horizontalSpacing}px;
      height: ${buttonSize};
      min-height: ${buttonSize};
      line-height: ${buttonLineHeight};
    }

    /*
     * an action button shows its own focus-visible ring instead - the outer box's ring
     * should not also fire while a button is showing that ring. Keyed off :focus-visible, not
     * :focus: a mouse-clicked button gets :focus but not :focus-visible, so keying off :focus
     * alone would suppress the outer ring with no button ring to replace it.
     */
    ${focusStyles({
      theme,
      inset: $focusInset,
      color: { variable: 'border.primaryEmphasis' },
      selector: '&:focus-within:not(:has(button:focus-visible))',
      styles: { borderColor: focusBorderColor }
    })}

    ${validationStyles(props)}
  `;
};

/**
 * [1] - Override the default `width: 100%` style
 */
const positionStyles = (props: ThemeProps<DefaultTheme> & IStyledInputGroupProps) => {
  const topMargin = `${props.theme.space.base * (props.$isCompact ? 1 : 2)}px`;

  return css`
    ${StyledLabel}:not([hidden]) + &&,
    ${StyledHint} + &&,
    ${StyledMessage} + &&,
    && + ${StyledHint},
    && + ${StyledMessage} {
      margin-top: ${topMargin};
    }

    & > ${StyledTextInput} {
      position: relative;
      flex: 1 1 auto;
      margin-top: 0;
      margin-bottom: 0;
      width: auto; /* [1] */
      min-width: 0;
    }
  `;
};

/**
 * 1. remove border overlap in items
 * 2. keep text inputs above other elements for validation states
 */
const itemStyles = (props: ThemeProps<DefaultTheme> & IStyledInputGroupProps) => {
  const startDirection = props.theme.rtl ? 'right' : 'left';
  const endDirection = props.theme.rtl ? 'left' : 'right';

  return css`
    ${!props.$isSeamless &&
    css`
      & > * {
        z-index: -1;
      }

      & > ${StyledTextInput} {
        z-index: 0; /* [2] */
      }

      & > ${StyledTextInput}:disabled {
        z-index: -2;
      }

      & > ${StyledTextInput}:hover, & > button:hover,
      & > ${StyledTextInput}:focus-visible, & > button:focus-visible,
      & > ${StyledTextInput}:active, & > button:active,
      & > button[aria-pressed='true'],
      & > button[aria-pressed='mixed'] {
        z-index: 1;
      }
    `}

    & > button:disabled {
      border-top-width: 0;
      border-bottom-width: 0;
    }

    ${!props.$isSeamless &&
    css`
      & > *:not(:first-child) {
        margin-${startDirection}: -${props.theme.borderWidths.sm}; /* [1] */
      }

      & > *:first-child:not(:last-child) {
        border-top-${endDirection}-radius: 0;
        border-bottom-${endDirection}-radius: 0;
      }

      & > *:last-child:not(:first-child) {
        border-top-${startDirection}-radius: 0;
        border-bottom-${startDirection}-radius: 0;
      }

      & > *:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    `}
  `;
};

export const StyledInputGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledInputGroupProps>`
  display: inline-flex;
  position: relative;
  flex-wrap: nowrap;
  align-items: stretch;
  z-index: 0;
  width: 100%;

  ${props => sizeStyles(props)};
  ${props => positionStyles(props)};
  ${props => itemStyles(props)};
  ${props => seamlessStyles(props)};

  ${componentStyles};
`;
