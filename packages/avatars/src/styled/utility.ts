/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css, keyframes, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { STATUS } from '../types';

export const TRANSITION_DURATION = 0.25;

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

const iconFadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const statusIconStyles = ({
  offset,
  theme
}: ThemeProps<DefaultTheme> & { offset: string }) => {
  /**
   * 1. because we are using the stroke icon instead of fill due to artifacts in visual appearance,
   *    we need to remove the circle
   * 2. when @zendeskgarden/css-bedrock is present, max-height needs to be unset due to icon being
   *    resized incorrectly
   */
  return css`
    position: absolute;
    top: -${offset};
    left: -${offset};
    transform-origin: 50% 50%;
    animation: ${iconFadeIn} ${TRANSITION_DURATION}s;
    max-height: unset; /* [2] */

    /* stylelint-disable-next-line selector-no-qualifying-type */
    &[data-icon-status='transfers'] {
      transform: scale(${theme.rtl ? -1 : 1}, 1);
    }

    /* stylelint-disable-next-line selector-no-qualifying-type */
    &[data-icon-status='away'] circle {
      display: none; /* [1] */
    }
  `;
};
