/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { componentStyles, focusStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledButton, StyledIconButton } from '@zendeskgarden/react-buttons';
import { StyledTextInput } from '../text/StyledTextInput';
import { StyledLabel } from '../common/StyledLabel';
import { StyledHint } from '../common/StyledHint';
import { StyledMessage } from '../common/StyledMessage';

const COMPONENT_ID = 'forms.input_group';

interface IStyledInputGroupProps {
  $isCompact?: boolean;
  $isSeamless?: boolean;
}

const seamlessStyles = (props: ThemeProps<DefaultTheme> & IStyledInputGroupProps) => {
  if (!props.$isSeamless) {
    return undefined;
  }

  const { theme, $isCompact } = props;
  const containerSize = $isCompact ? 32 : 40;
  const buttonSizeValue = $isCompact ? 24 : 28;
  const buttonSize = `${buttonSizeValue}px`;
  const horizontalSpacing = theme.space.base * 2;
  const verticalPadding = math(
    `(${containerSize}px - ${buttonSizeValue}px - (${theme.borderWidths.sm} * 2)) / 2`
  );
  const borderColor = getColor({
    theme,
    variable: 'border.default',
    dark: { offset: -100 },
    light: { offset: 100 }
  });
  const backgroundColor = getColor({ theme, variable: 'background.default' });
  const focusBorderColor = getColor({ theme, variable: 'border.primaryEmphasis' });

  return css`
    box-sizing: border-box;
    align-items: center;
    border: ${theme.borders.sm};
    border-radius: ${theme.borderRadii.md};
    border-color: ${borderColor};
    background-color: ${backgroundColor};
    padding: ${verticalPadding} ${horizontalSpacing}px;
    gap: ${horizontalSpacing}px;
    min-height: ${containerSize}px;

    /*
     * scoped to IconButton specifically (not text Buttons, which size by their own content) -
     * both width/height + min-width/min-height are set, since IconButton sets its own
     * min-width/min-height to its size token, which beats a smaller explicit width/height alone.
     */
    & ${StyledIconButton} {
      flex: none;
      align-self: center;
      width: ${buttonSize};
      min-width: ${buttonSize};
      height: ${buttonSize};
      min-height: ${buttonSize};

      /*
       * the compact button (24px, the WCAG 2.5.8 floor) doesn't have room for the default
       * outward focus ring within a 32px container without clipping - draw it inward instead
       */
      ${$isCompact &&
      focusStyles({
        theme,
        inset: true,
        color: { variable: 'border.primaryEmphasis' },
        styles: { borderColor: focusBorderColor }
      })}
    }

    /*
     * Button's own horizontal padding is computed in em units relative to font-size, so it
     * can't be cleanly subtracted from the gap above. Overriding it to a fixed value that
     * matches the container's own edge spacing keeps the visual rhythm at ${horizontalSpacing}px
     * regardless of button size, without duplicating StyledButton's private padding formula.
     */
    & ${StyledButton}:not(${StyledIconButton}) {
      padding-inline: ${horizontalSpacing}px;
    }

    /*
     * an action button shows its own focus-visible ring instead - the outer box's ring
     * should not also fire while a button is showing that ring. Keyed off :focus-visible, not
     * :focus: a mouse-clicked button gets :focus but not :focus-visible, so keying off :focus
     * alone would suppress the outer ring with no button ring to replace it.
     */
    ${focusStyles({
      theme,
      color: { variable: 'border.primaryEmphasis' },
      selector: '&:focus-within:not(:has(button:focus-visible))',
      styles: { borderColor: focusBorderColor }
    })}
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

  ${props => positionStyles(props)};
  ${props => itemStyles(props)};
  ${props => seamlessStyles(props)};

  ${componentStyles};
`;
