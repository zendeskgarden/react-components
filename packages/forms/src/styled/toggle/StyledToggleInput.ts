/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledCheckInput } from '../checkbox/StyledCheckInput';
import { StyledToggleLabel } from './StyledToggleLabel';

const COMPONENT_ID = 'forms.toggle';

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const backgroundOptions = { theme, variable: 'background.emphasis' };
  const backgroundColor = getColor(backgroundOptions);
  const hoverBackgroundColor = getColor({
    ...backgroundOptions,
    dark: { offset: -100 },
    light: { offset: 100 }
  });
  const activeBackgroundColor = getColor({
    ...backgroundOptions,
    dark: { offset: -200 },
    light: { offset: 200 }
  });

  return css`
    & ~ ${StyledToggleLabel}::before {
      background-color: ${backgroundColor};
    }

    &:enabled ~ ${StyledToggleLabel}:hover::before {
      background-color: ${hoverBackgroundColor};
    }

    &:enabled ~ ${StyledToggleLabel}:active::before {
      background-color: ${activeBackgroundColor};
    }
  `;
};

const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const height = `${theme.space.base * 5}px`;
  const width = `${theme.space.base * 10}px`;
  const iconSize = theme.iconSizes.md;
  const iconPosition = math(`(${height} - ${iconSize}) / 2`);
  const checkedIconPosition = math(`${width} - ${iconSize} - ${iconPosition}`);

  return css`
    top: 0;
    width: ${width};
    height: ${height};

    & ~ ${StyledToggleLabel}::before {
      width: ${width};
      height: ${height};
    }

    & ~ ${StyledToggleLabel} > svg {
      top: ${iconPosition};
      ${theme.rtl ? 'right' : 'left'}: ${iconPosition};
      width: ${iconSize};
      height: ${iconSize};
    }

    &:checked ~ ${StyledToggleLabel} > svg {
      ${theme.rtl ? 'right' : 'left'}: ${checkedIconPosition};
    }
  `;
};

export const StyledToggleInput = styled(StyledCheckInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  & ~ ${StyledToggleLabel}::before {
    top: 0;
    /* prettier-ignore */
    transition:
      box-shadow .1s ease-in-out,
      background-color .15s ease-in-out,
      color .25s ease-in-out;
    border: none;
    border-radius: 100px;
  }

  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};
`;
