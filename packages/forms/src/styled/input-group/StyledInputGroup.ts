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

/* shared between sizeStyles' padding math and seamlessStyles' actual override, to keep them in sync */
const COMPACT_ICON_BUTTON_SHRINK = 4;

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
  /* tracks the size seamlessStyles actually renders, which is shrunk when compact */
  const iconButtonSize = $isCompact ? containerSize - COMPACT_ICON_BUTTON_SHRINK : 32;
  const verticalPadding = math(
    `(${containerSize}px - ${iconButtonSize}px - (${theme.borderWidths.sm} * 2)) / 2`
  );
  const iconGlyphSize = $isCompact ? theme.iconSizes.sm : theme.iconSizes.md;
  const iconButtonInset = (iconButtonSize - parseFloat(iconGlyphSize)) / 2;
  const iconButtonPaddingInline = `calc(${paddingInline} - ${iconButtonInset}px)`;
  const textButtonPaddingInline = `calc(${paddingInline} - ${horizontalSpacing}px)`;

  return css`
    font-size: ${fontSize};
    padding-block: ${verticalPadding};
    padding-inline: ${paddingInline};
    gap: ${horizontalSpacing}px;

    /* compensates for the IconButton's own inset so its icon, not its edge, lands at the container's declared padding */
    &:has(> ${StyledIconButton}:first-child) {
      padding-inline-start: ${iconButtonPaddingInline};
    }

    &:has(> ${StyledIconButton}:last-child) {
      padding-inline-end: ${iconButtonPaddingInline};
    }

    /* same compensation, for the Button padding override below */
    &:has(> ${StyledButton}:not(${StyledIconButton}):first-child) {
      padding-inline-start: ${textButtonPaddingInline};
    }

    &:has(> ${StyledButton}:not(${StyledIconButton}):last-child) {
      padding-inline-end: ${textButtonPaddingInline};
    }
  `;
};

/* selects on StyledTextInput's data-validation attribute, since $validation isn't available as a prop here */
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
  const iconButtonSize = $isCompact ? `${containerSize - COMPACT_ICON_BUTTON_SHRINK}px` : undefined;
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
    align-items: center;
    /* prettier-ignore */
    transition: border-color 0.25s ease-in-out, box-shadow 0.1s ease-in-out;
    border: ${theme.borders.sm};
    border-radius: ${theme.borderRadii.md};
    border-color: ${borderColor};
    background-color: ${backgroundColor};
    min-height: ${containerSize}px;

    &:hover {
      border-color: ${focusBorderColor};
    }

    & ${StyledTextInput} {
      align-self: stretch; /* override the container's own centered children */
    }

    /* only shrunk when compact - a regular 32px IconButton already fits with room to spare */
    & ${StyledIconButton} {
      flex: none;
      align-self: center;
      width: ${iconButtonSize};
      min-width: ${iconButtonSize};
      height: ${iconButtonSize};
      min-height: ${iconButtonSize};

      /* the icon glyph itself is otherwise always rendered at iconSizes.md, regardless of size */
      & svg {
        width: ${$isCompact ? theme.iconSizes.sm : undefined};
        height: ${$isCompact ? theme.iconSizes.sm : undefined};
      }
    }

    /* overrides Button's own em-based padding to match the container's edge spacing, and shrinks height to match the IconButton */
    & ${StyledButton}:not(${StyledIconButton}) {
      padding-inline: ${horizontalSpacing}px;
      height: ${buttonSize};
      min-height: ${buttonSize};
      line-height: ${buttonLineHeight};
    }

    /* suppressed while a button shows its own :focus-visible ring instead */
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
