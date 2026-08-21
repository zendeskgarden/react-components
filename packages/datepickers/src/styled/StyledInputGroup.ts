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
 * 1. Removes inner input border styles
 * 2. Removes inner input background so this wrapper's background shows through
 * 3. Removes inner input styles when focused
 */
export const StyledInputGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
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

  ${componentStyles};
`;
