/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor } from '@zendeskgarden/react-theming';
import { ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';

import { SIZE, IAvatarProps } from '../types';

const [xxs, xs, s, m, l] = SIZE;

export const TRANSITION_DURATION = 0.25;

export interface IStyledStatusIndicatorProps extends ThemeProps<DefaultTheme> {
  readonly $size?: IAvatarProps['size'];
  readonly $type?: IAvatarProps['status'] | 'active';
}

const StatusColorParams = {
  active: { hue: 'crimson', light: { shade: 700 }, dark: { shade: 600 } },
  available: { hue: 'mint', light: { shade: 500 }, dark: { shade: 400 } },
  away: { hue: 'orange', light: { shade: 500 }, dark: { shade: 400 } },
  transfers: { hue: 'azure', light: { shade: 500 }, dark: { shade: 400 } },
  offline: { hue: 'grey', light: { shade: 500 }, dark: { shade: 400 } }
};

export function getStatusColor(
  theme: IStyledStatusIndicatorProps['theme'],
  type?: IStyledStatusIndicatorProps['$type']
): string {
  if (type === undefined) {
    return 'transparent';
  }

  const colorArgs = StatusColorParams[type];

  return colorArgs ? getColor({ ...colorArgs, theme }) : 'transparent';
}

export function getStatusBorderOffset(props: IStyledStatusIndicatorProps): string {
  return props.$size === xxs
    ? math(`${props.theme.shadowWidths.sm} - 1`)
    : props.theme.shadowWidths.sm;
}

export function getStatusSize(props: IStyledStatusIndicatorProps, offset: string): string {
  const isActive = props.$type === 'active';

  switch (props.$size) {
    case xxs:
      return math(`${props.theme.space.base}px - ${offset}`);
    case xs:
      return math(`${props.theme.space.base * 2}px - (${offset} * 2)`);
    case s:
      return math(`${props.theme.space.base * 3}px ${isActive ? '' : `- (${offset} * 2)`}`);
    case m:
    case l:
      return math(`${props.theme.space.base * 4}px ${isActive ? '' : `- (${offset} * 2)`}`);
    default:
      return '0';
  }
}

export function includes<T extends U, U>(array: readonly T[], element: U): element is T {
  return array.includes(element as T);
}
