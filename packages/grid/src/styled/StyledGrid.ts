/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { StyledRow } from './StyledRow';
import { StyledCol } from './StyledCol';

const COMPONENT_ID = 'grid.grid';

export interface IStyledGridProps extends ThemeProps<DefaultTheme> {
  isFluid?: boolean;
  isDebug?: boolean;
  gutters?: false | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

const debugStyles = (props: IStyledGridProps) => {
  const borderColor = getColor('primaryHue', 400, props.theme, 0.35);
  const backgroundColor = getColor('primaryHue', 200, props.theme, 0.35);

  return (
    props.isDebug &&
    css`
      & ${StyledRow} {
        background-color: ${backgroundColor};

        & ${StyledCol} {
          border: ${props.theme.borders.sm} ${borderColor};
          background-clip: content-box;
          background-color: ${backgroundColor};
        }
      }
    `
  );
};

const sizeStyles = (props: IStyledGridProps) => {
  const spacing = props.gutters ? math(`${props.theme.space[props.gutters!]} / 2`) : 0;

  return css`
    padding-right: ${spacing};
    padding-left: ${spacing};

    & ${StyledRow} {
      margin-right: -${spacing};
      margin-left: -${spacing};

      & ${StyledCol} {
        padding-right: ${spacing};
        padding-left: ${spacing};
      }
    }
  `;
};

export const StyledGrid = styled.div.attrs<IStyledGridProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledGridProps>`
  direction: ${props => props.theme.rtl && 'rtl'};
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  box-sizing: border-box;

  ${props => sizeStyles(props)};
  ${props => debugStyles(props)};

  &::before,
  &::after {
    box-sizing: border-box;
  }

  & *,
  & *::before,
  & *::after {
    box-sizing: inherit;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGrid.defaultProps = {
  gutters: 'md',
  theme: DEFAULT_THEME
};
