/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { STATUS } from '../types';

const [active, available, away, transfers, offline] = ['active', ...STATUS];

export function getStatusColor(
  status: typeof STATUS[number] | 'active' | undefined,
  theme = DEFAULT_THEME
): string {
  switch (status) {
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
