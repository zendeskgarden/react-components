/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, focusStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledHeaderItemIcon } from './StyledHeaderItemIcon';
import { StyledBaseHeaderItem, IStyledBaseHeaderItemProps } from './StyledBaseHeaderItem';
import { StyledHeaderItemText } from './StyledHeaderItemText';
import { getHeaderItemSize } from '../utils';

const COMPONENT_ID = 'chrome.header_item';

/*
 * 1. Anchor reset.
 */
const colorStyles = ({ theme, maxY }: IStyledBaseHeaderItemProps & ThemeProps<DefaultTheme>) => {
  const options = { theme, variable: 'foreground.subtle' };
  const hoverColor = getColor({ ...options, dark: { offset: -100 }, light: { offset: 100 } });
  const activeColor = getColor({ ...options, dark: { offset: -200 }, light: { offset: 200 } });

  return css`
    &:hover,
    &:focus {
      color: inherit; /* [1] */
    }

    ${focusStyles({ theme, inset: maxY })};

    /* prettier-ignore */
    &:hover ${StyledHeaderItemIcon},
    &:hover ${StyledHeaderItemText} {
      color: ${hoverColor};
    }

    /* prettier-ignore */
    &:active ${StyledHeaderItemIcon},
    &:active ${StyledHeaderItemText} {
      color: ${activeColor};
    }
  `;
};

const sizeStyles = ({ theme, isRound }: IStyledBaseHeaderItemProps & ThemeProps<DefaultTheme>) => {
  const iconBorderRadius = isRound ? '100px' : undefined;
  const imageBorderRadius = math(`${theme.borderRadii.md} - 1`);
  const imageSize = math(`${getHeaderItemSize(theme)} - ${theme.space.base * 2}`);

  return css`
    img {
      margin: 0;
      border-radius: ${imageBorderRadius};
      width: ${imageSize};
      height: ${imageSize};
    }

    ${StyledHeaderItemIcon} {
      border-radius: ${iconBorderRadius};
    }
  `;
};

/*
 * 1. Anchor reset.
 */
export const StyledHeaderItem = styled(StyledBaseHeaderItem as 'button').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledBaseHeaderItemProps>`
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: none; /* [1] */
  }

  ${sizeStyles};

  ${colorStyles};

  /* prettier-ignore */
  & ${StyledHeaderItemIcon},
  & ${StyledHeaderItemText} {
    transition: 
      box-shadow 0.1s ease-in-out,
      color 0.1s ease-in-out;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
