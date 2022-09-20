/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';

import { STATUS, SIZE } from '../types';

export const TRANSITION_DURATION = 0.25;

const [xxs, xs, s, m, l] = SIZE;
const [active, available, away, transfers, offline] = ['active', ...STATUS];

export interface IStyledStatusIndicatorProps extends ThemeProps<DefaultTheme> {
  readonly size?: typeof SIZE[number];
  readonly type?: typeof STATUS[number] | 'active';
}

export function getStatusColor(
  type?: IStyledStatusIndicatorProps['type'],
  theme?: typeof DEFAULT_THEME
): string {
  switch (type) {
    case active:
      return getColor('crimson', 400, theme)!;
    case available:
      return getColor('mint', 400, theme)!;
    case away:
      return getColor('orange', 400, theme)!;
    case transfers:
      return getColor('azure', 400, theme)!;
    case offline:
      return getColor('grey', 500, theme)!;
    default:
      return 'transparent';
  }
}

export function getStatusSize(props: IStyledStatusIndicatorProps, offset: string): string {
  const isActive = props.type === active;

  switch (props.size) {
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

export function getStatusBorderOffset(props: IStyledStatusIndicatorProps): string {
  return props.size === xxs
    ? math(`${props.theme.shadowWidths.sm} - 1`)
    : props.theme.shadowWidths.sm;
}

export function includes<T extends U, U>(array: readonly T[], element: U): element is T {
  return array.includes(element as T);
}
