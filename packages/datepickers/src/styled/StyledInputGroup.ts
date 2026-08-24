/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  componentStyles,
  focusStyles,
  getColor,
  SELECTOR_FOCUS_VISIBLE
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.input_group';

interface IStyledInputGroupProps {
  $isCompact?: boolean;
}

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const backgroundColor = getColor({ theme, variable: 'background.default' });
  const borderColor = getColor({
    theme,
    variable: 'border.default',
    dark: { offset: -100 },
    light: { offset: 100 }
  });
  const hoverBorderColor = getColor({ theme, variable: 'border.primaryEmphasis' });

  return css`
    border-color: ${borderColor};
    background-color: ${backgroundColor};

    &:hover {
      border-color: ${hoverBorderColor};
    }
  `;
};

/*
 * Matches `forms.input`'s Label/Hint/Message spacing (see StyledTextInput's
 * sizeStyles) via `data-garden-id`, since `@zendeskgarden/react-forms`
 * doesn't export its Styled* components for cross-package selector matching.
 */
const spacingStyles = ({
  theme,
  $isCompact
}: ThemeProps<DefaultTheme> & IStyledInputGroupProps) => {
  const margin = `${theme.space.base * ($isCompact ? 1 : 2)}px`;

  return css`
    &&:has(~ [data-garden-id='forms.input_hint']),
    &&:has(~ [data-garden-id='forms.input_message']) {
      margin-block-end: ${margin};
    }

    [data-garden-id='forms.input_hint'] + &&,
    [data-garden-id='forms.input_message'] + &&,
    [data-garden-id='forms.input_label']:not([hidden]) + && {
      margin-block-start: ${margin};
    }
  `;
};

/*
 * Mirrors `forms.faux_input`'s `validation="error"` border treatment,
 * keyed off the inner input's `aria-invalid` rather than a validation prop.
 */
const invalidStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const borderColor = getColor({ theme, variable: 'border.dangerEmphasis' });

  return css`
    &:has([aria-invalid='true']) {
      border-color: ${borderColor};

      &:hover {
        border-color: ${borderColor};
      }
    }

    ${focusStyles({
      theme,
      color: { variable: 'border.dangerEmphasis' },
      styles: { borderColor },
      selector: "&:has([aria-invalid='true']):focus-within:not(:has(button:focus))"
    })}
  `;
};

/*
 * 1. Removes inner input border styles
 * 2. Removes inner input background so this wrapper's background shows through
 * 3. Removes inner input styles when focused
 */
export const StyledInputGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledInputGroupProps>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space.base * 2}px;
  box-sizing: border-box;
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out;
  border: ${props => props.theme.borders.sm};
  border-radius: ${props => props.theme.borderRadii.md};

  ${colorStyles};

  & > [data-garden-id$='input'] {
    border: none; /* [1] */
    background-color: transparent; /* [2] */

    ${SELECTOR_FOCUS_VISIBLE} {
      box-shadow: unset; /* [3] */
    }
  }

  ${props =>
    focusStyles({
      theme: props.theme,
      color: { variable: 'border.primaryEmphasis' },
      styles: { borderColor: getColor({ theme: props.theme, variable: 'border.primaryEmphasis' }) },
      selector: '&:focus-within:not(:has(button:focus))'
    })}

  ${invalidStyles};

  ${spacingStyles};

  ${componentStyles};
`;
