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

const COMPONENT_ID = 'avatars.status_indicator';

const [xxs, xs, s, m, l] = SIZE;
const [active, available, away, transfers, offline] = ['active', ...STATUS];

const sizeStyles = (props: IStatusIndicatorProps & ThemeProps<DefaultTheme>) => {
  const isActive = props.status === 'active';

  let isVisible = true;
  let height = '0';
  let padding = '0';
  let borderWidth = props.theme.shadowWidths.sm;

  switch (props.size) {
    case xxs:
      isVisible = false;
      borderWidth = math(`${borderWidth} - 1`);
      height = math(`${props.theme.space.base}px - ${borderWidth}`);
      break;
    case xs:
      isVisible = false;
      height = math(`${props.theme.space.base * 2}px - (${borderWidth} * 2)`);
      break;
    case s:
      height = math(`${props.theme.space.base * 3}px ${isActive ? '' : `- (${borderWidth} * 2)`}`);
      padding = math(`${props.theme.space.base + 1}px - (${borderWidth} * 2)`);
      break;
    case m:
    case l:
      height = math(`${props.theme.space.base * 4}px ${isActive ? '' : `- (${borderWidth} * 2)`}`);
      padding = math(`${props.theme.space.base + 3}px - (${borderWidth} * 2)`);
      break;
  }

  /**
   * 1. because we are using the stroke icon instead of fill due to artifacts in visual appearance,
   *    we need to remove the circle
   * 2. when @zendeskgarden/css-bedrock is present, max-height needs to be unset due to icon being
   *    resized incorrectly
   */
  return css`
    border: ${borderWidth} ${props.theme.borderStyles.solid};
    border-radius: ${height};
    min-width: ${height};
    max-width: calc(2em + (${borderWidth} * 3));
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
      position: absolute;
      top: -${borderWidth};
      left: -${borderWidth};
      transform-origin: 50% 50%;
      max-height: unset; /* [2] */

      /* stylelint-disable-next-line selector-no-qualifying-type */
      &[data-icon-status='transfers'] {
        transform: scale(${props.theme.rtl ? -1 : 1}, 1);
      }

      /* stylelint-disable-next-line selector-no-qualifying-type */
      &[data-icon-status='away'] circle {
        display: none; /* [1] */
      }
    }
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

  if (props.size === xxs) {
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
      backgroundColor = props.theme.palette.white as string;
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

  transition: inherit;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStatusIndicator.defaultProps = {
  size: 'medium',
  theme: DEFAULT_THEME
};
