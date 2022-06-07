/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { math } from 'polished';

import { IAvatarProps, SIZE, STATUS } from '../types';
import { getStatusColor } from './utility';

export interface IStatusIndicatorProps extends Omit<IAvatarProps, 'badge' | 'isSystem' | 'status'> {
  readonly status?: IAvatarProps['status'] | 'active';
  borderColor?: string;
}

const COMPONENT_ID = 'avatars.status-indicator';

const [xxs, xs, s, m, l] = SIZE;
const [active, available, away, transfers, offline] = ['active', ...STATUS];

const sizeStyles = (props: IStatusIndicatorProps & ThemeProps<DefaultTheme>) => {
  let borderWidth = '0';
  let padding = '0';
  let height = '0';
  let visible = true;

  switch (props.size) {
    case xxs:
      visible = false;
      height = `${props.theme.space.base + 1}px`;
      break;
    case xs:
      visible = false;
      height = `${props.theme.space.base * 2}px`;
      break;
    case s:
    case m:
    case l:
      borderWidth = props.theme.shadowWidths.sm;
      if (props.size === s && props.status !== 'active') {
        height = math(`${props.theme.space.base * 3}px - (${borderWidth} * 2)`);
      } else {
        padding = math(`${props.theme.space.base + 1}px - (${borderWidth})`);
        height = math(`${props.theme.space.base * 4}px - (${borderWidth} * 2)`);
      }
      break;
  }

  return css`
    border: ${borderWidth} ${props.theme.borderStyles.solid};
    border-radius: ${height};
    min-width: ${height};
    max-width: 2.48em;
    height: ${height};
    box-sizing: content-box;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    line-height: ${height};
    white-space: nowrap;
    font-size: ${props.theme.fontSizes.xs};
    font-weight: ${props.theme.fontWeights.semibold};

    & > span {
      padding: 0 ${padding};
    }

    & > svg {
      width: 100%;
      height: 100%;

      & circle {
        display: none;
      }
    }

    ${!visible &&
    css`
      & > * {
        display: none;
      }
    `}
  `;
};

const colorStyles = (props: IStatusIndicatorProps & ThemeProps<DefaultTheme>) => {
  const foregroundColor = props.foregroundColor || props.theme.palette.white;
  const surfaceColor =
    props.surfaceColor ||
    (props.status ? props.theme.colors.background : (props.theme.palette.white as string));
  let backgroundColor = props.backgroundColor || 'transparent';
  let borderColor = props.borderColor || backgroundColor;
  let boxShadow = props.theme.shadows.sm(surfaceColor);

  if (xxs === props.size) {
    boxShadow = boxShadow.replace(props.theme.shadowWidths.sm, '1px');
  }

  switch (props.status) {
    case available:
    case active:
    case away:
    case transfers:
      backgroundColor = getStatusColor(props.status, props.theme);
      borderColor = backgroundColor;
      break;
    case offline:
      borderColor = getStatusColor(props.status, props.theme);
      backgroundColor = surfaceColor;
      break;
  }

  return css`
    border-color: ${borderColor};
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

export const StyledStatusIndicator = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStatusIndicatorProps>`
  ${sizeStyles}
  ${colorStyles}

  &,
  & svg,
  & span {
    transition: inherit;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStatusIndicator.defaultProps = {
  size: 'medium',
  theme: DEFAULT_THEME
};
