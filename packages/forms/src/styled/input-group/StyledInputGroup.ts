/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { em, math } from 'polished';
import { componentStyles, focusStyles, getColor } from '@zendeskgarden/react-theming';
import { Validation } from '../../types';
import { StyledTextInput } from '../text/StyledTextInput';
import { StyledLabel } from '../common/StyledLabel';
import { StyledHint } from '../common/StyledHint';
import { StyledMessage } from '../common/StyledMessage';

const COMPONENT_ID = 'forms.input_group';

/* targets react-buttons' public data-garden-id hooks, since its styled components are private; a consumer-overridden data-garden-id exempts that button from these styles 
TODO: remove this once packages are unified

*/
const BUTTON_SELECTOR = "button[data-garden-id='buttons.button']";
const ICON_BUTTON_SELECTOR = "button[data-garden-id='buttons.icon_button']";

/* shared between sizeStyles' padding math and unifiedStyles' actual override, to keep them in sync */
const getCompactIconButtonSize = (theme: DefaultTheme) => math(`${theme.space.base}px * 6`);

interface IStyledInputGroupProps {
  $isCompact?: boolean;
  $isUnified?: boolean;
  $focusInset?: boolean;
}

const sizeStyles = (props: ThemeProps<DefaultTheme> & IStyledInputGroupProps) => {
  const { theme, $isCompact, $isUnified } = props;
  const fontSize = theme.fontSizes.md;

  if (!$isUnified) {
    return css`
      font-size: ${fontSize};
    `;
  }

  /* the target edge-to-icon distance for a leading/trailing IconButton, kept independent of the container's own padding-inline below */
  const buttonEdgeTarget = em(theme.space.sm, fontSize);
  /* tracks the size unifiedStyles actually renders, which is shrunk when compact */
  const iconButtonSize = $isCompact
    ? parseFloat(getCompactIconButtonSize(theme))
    : parseFloat(theme.space.lg);
  const iconGlyphSize = theme.iconSizes.md;
  const iconButtonInset = (iconButtonSize - parseFloat(iconGlyphSize)) / 2;
  const iconButtonPaddingInline = `calc(${buttonEdgeTarget} - ${iconButtonInset}px)`;

  return css`
    font-size: ${fontSize};
    padding-inline: ${theme.space.xxs};

    /* compensates for the IconButton's own inset so its icon, not its edge, lands at the target edge distance */
    &:has(> ${ICON_BUTTON_SELECTOR}:first-child) {
      padding-inline-start: ${iconButtonPaddingInline};
    }

    &:has(> ${ICON_BUTTON_SELECTOR}:last-child) {
      padding-inline-end: ${iconButtonPaddingInline};
    }

    /* first-child Input/nested group owns all start spacing; last-child owns all end spacing */
    &:has(> ${StyledTextInput}:first-child),
    &:has(> [data-garden-id='${COMPONENT_ID}']:first-child) {
      padding-inline-start: 0;
    }

    &:has(> ${StyledTextInput}:last-child),
    &:has(> [data-garden-id='${COMPONENT_ID}']:last-child) {
      padding-inline-end: 0;
    }

    /* non-first Button bridges the 0-gap with its own 4px start margin */
    & > * + ${BUTTON_SELECTOR} {
      margin-inline-start: ${theme.space.xxs};
    }

    ${$isCompact &&
    css`
      & > [data-garden-id='${COMPONENT_ID}'] + ${ICON_BUTTON_SELECTOR} {
        margin-inline-start: ${theme.space.xs};
      }
    `}

    /* base 8px padding on both sides; first/last child overrides to 12px below */
    & > ${StyledTextInput} {
      padding-inline: ${theme.space.xs};
    }

    /* non-first Input bridges the 0-gap with its own 4px margin (4px + 8px padding = 12px from preceding edge) */
    & > * + ${StyledTextInput} {
      margin-inline-start: ${theme.space.xxs};
    }

    & > ${StyledTextInput}:first-child {
      border-start-start-radius: ${theme.borderRadii.md};
      border-end-start-radius: ${theme.borderRadii.md};
      padding-inline-start: ${theme.space.sm};
    }

    & > ${StyledTextInput}:last-child {
      border-start-end-radius: ${theme.borderRadii.md};
      border-end-end-radius: ${theme.borderRadii.md};
      padding-inline-end: ${theme.space.sm};
    }

    & > [data-garden-id='${COMPONENT_ID}']:first-child > ${StyledTextInput}:first-child {
      border-start-start-radius: ${theme.borderRadii.md};
      border-end-start-radius: ${theme.borderRadii.md};
    }

    & > [data-garden-id='${COMPONENT_ID}']:last-child > ${StyledTextInput}:last-child {
      border-start-end-radius: ${theme.borderRadii.md};
      border-end-end-radius: ${theme.borderRadii.md};
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

/* mirrors MediaInput's own read-only treatment: only the background changes, since a read-only input remains focusable and selectable */
const readOnlyStyles = (props: ThemeProps<DefaultTheme> & IStyledInputGroupProps) => {
  const { theme } = props;
  const backgroundColor = getColor({ theme, variable: 'background.disabled' });

  return css`
    &:has(${StyledTextInput}[readonly]) {
      background-color: ${backgroundColor};
    }
  `;
};

/* mirrors MediaInput's own disabled treatment, since a descendant input's disabled state isn't otherwise reflected on this container */
const disabledStyles = (props: ThemeProps<DefaultTheme> & IStyledInputGroupProps) => {
  const { theme } = props;
  const borderColor = getColor({ theme, variable: 'border.disabled' });
  const backgroundColor = getColor({ theme, variable: 'background.disabled' });

  return css`
    &:has(${StyledTextInput}:disabled) {
      border-color: ${borderColor};
      background-color: ${backgroundColor};
      cursor: default;
    }
  `;
};

const unifiedStyles = (props: ThemeProps<DefaultTheme> & IStyledInputGroupProps) => {
  if (!props.$isUnified) {
    return undefined;
  }

  const { theme, $isCompact, $focusInset } = props;
  const containerSize = $isCompact ? theme.space.lg : theme.space.xl;
  const buttonSize = math(`${theme.space.base}px * ${$isCompact ? 6 : 7}`);
  const iconButtonSize = $isCompact ? getCompactIconButtonSize(theme) : theme.space.lg;
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
    cursor: text;
    min-height: ${containerSize};

    &:hover {
      border-color: ${focusBorderColor};
    }

    & ${StyledTextInput} {
      align-self: stretch; /* override the container's own centered children */
    }

    /* sizes any icon button (IconButton, ToggleIconButton, ...) to fit the container; its icon glyph stays iconSizes.md regardless, and pressed-state styling is geometry-independent */
    & ${ICON_BUTTON_SELECTOR} {
      flex: none;
      align-self: center;
      width: ${iconButtonSize};
      min-width: ${iconButtonSize};
      height: ${iconButtonSize};
      min-height: ${iconButtonSize};
    }

    /* a nested InputGroup (e.g. ClearableInput's wrapper) fills remaining space as a transparent flex wrapper;
       the outer provides the visual container, so the inner's own border/background/sizing is stripped */
    & > [data-garden-id='${COMPONENT_ID}'] {
      flex: 1 1 auto;
      align-self: stretch;
      border: none;
      background-color: transparent;
      min-width: 0;
      min-height: 0;
      padding-block: 0;
      padding-inline: 0;

      &:has(> ${ICON_BUTTON_SELECTOR}:last-child) {
        padding-inline-end: 0;
      }

      &:has(> ${ICON_BUTTON_SELECTOR}:first-child) {
        padding-inline-start: 0;
      }

      &:focus-within:not(:has(button:focus-visible)) {
        border-color: transparent;
        box-shadow: none;
      }
    }

    /* shrinks a text button's height to fit the container, without touching its own padding */
    & ${BUTTON_SELECTOR} {
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
    ${readOnlyStyles(props)}
    ${disabledStyles(props)}
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
    ${!props.$isUnified &&
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

    ${!props.$isUnified &&
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
  ${props => unifiedStyles(props)};

  ${componentStyles};
`;
