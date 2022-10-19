/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { math } from 'polished';

import { IAvatarProps, SIZE } from '../types';
import { StyledStatusIndicatorBase } from './StyledStatusIndicatorBase';
import { getStatusBorderOffset, includes, IStyledStatusIndicatorProps } from './utility';

export interface IStatusIndicatorProps extends Omit<IAvatarProps, 'badge' | 'isSystem' | 'status'> {
  readonly type?: IStyledStatusIndicatorProps['type'];
  borderColor?: string;
}

const COMPONENT_ID = 'avatars.status_indicator';

const [xxs, xs, s, m, l] = SIZE;

const sizeStyles = (props: IStatusIndicatorProps & ThemeProps<DefaultTheme>) => {
  const isVisible = !includes([xxs, xs], props.size);
  const borderWidth = getStatusBorderOffset(props);

  let padding = '0';

  if (props.size === s) {
    padding = math(`${props.theme.space.base + 1}px - (${borderWidth} * 2)`);
  } else if (includes([m, l], props.size)) {
    padding = math(`${props.theme.space.base + 3}px - (${borderWidth} * 2)`);
  }

  return css`
    max-width: calc(2em + (${borderWidth} * 3));
    box-sizing: content-box;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: ${props.theme.fontSizes.xs};
    font-weight: ${props.theme.fontWeights.semibold};

    & > span {
      display: ${isVisible ? 'inline-block' : 'none'};
      padding: 0 ${padding};
      max-width: 2em;
      overflow: inherit;
      text-align: inherit;
      text-overflow: inherit;
      white-space: inherit;
    }

    & > svg {
      ${!isVisible && 'display: none;'}
    }
  `;
};

const colorStyles = (props: IStatusIndicatorProps & ThemeProps<DefaultTheme>) => {
  const { theme, type, size, borderColor, surfaceColor } = props;

  let boxShadow = theme.shadows.sm(
    surfaceColor || (type ? theme.colors.background : (theme.palette.white as string))
  );

  if (size === xxs) {
    boxShadow = boxShadow.replace(theme.shadowWidths.sm, '1px');
  }

  return css`
    border-color: ${borderColor};
    box-shadow: ${boxShadow};
  `;
};

export const StyledStatusIndicator = styled(StyledStatusIndicatorBase).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStatusIndicatorProps>`
  ${sizeStyles}
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStatusIndicator.defaultProps = {
  size: 'medium',
  theme: DEFAULT_THEME
};
