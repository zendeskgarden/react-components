/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';
import { css } from 'styled-components';

import { DARK_THEME, render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import DEFAULT_THEME from '../../theming/elements/theme';
import { Type } from '../../types/elements';
import { StyledTitle } from '../../views/notification/StyledTitle';
import { Alert } from './Alert';
import { Title } from './AlertTitle';

describe('Title', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Title ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  describe('Types', () => {
    it('renders default font weight', () => {
      const { getByText } = render(
        <Alert type="info">
          <Title>title</Title>
        </Alert>
      );

      expect(getByText('title')).toHaveStyleRule(
        'font-weight',
        `${DEFAULT_THEME.fontWeights.semibold}`
      );
    });

    it('renders isRegular font weight', () => {
      const { getByText } = render(
        <Alert type="info">
          <Title isRegular>title</Title>
        </Alert>
      );

      expect(getByText('title')).toHaveStyleRule(
        'font-weight',
        `${DEFAULT_THEME.fontWeights.regular}`
      );
    });

    it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
      { mode: 'light', type: 'success', color: PALETTE.green[900] },
      { mode: 'dark', type: 'success', color: PALETTE.green[300] },
      { mode: 'light', type: 'error', color: PALETTE.red[900] },
      { mode: 'dark', type: 'error', color: PALETTE.red[300] },
      { mode: 'light', type: 'warning', color: PALETTE.yellow[900] },
      { mode: 'dark', type: 'warning', color: PALETTE.yellow[300] },
      { mode: 'light', type: 'info', color: PALETTE.grey[900] },
      { mode: 'dark', type: 'info', color: PALETTE.grey[300] }
    ])('renders $mode mode $type color', ({ mode, type, color }) => {
      const { container } = render(
        <Alert type={type}>
          <Title>title</Title>
        </Alert>,
        {
          theme: mode === 'dark' ? DARK_THEME : undefined
        }
      );

      expect(container.firstChild).toHaveStyleRule('color', color, {
        modifier: css`
          ${StyledTitle}
        ` as any
      });
    });
  });
});
