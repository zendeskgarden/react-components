/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { getRenderFn, render } from 'garden-test-utils';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import { Notification } from '../Notification';
import { Title } from './Title';
import { StyledTitle } from '../../styled';
import { Type } from '../../types';

describe('Title', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Title ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  describe('Types', () => {
    it('renders default styling', () => {
      const { container, getByText } = render(
        <Notification>
          <Title>title</Title>
        </Notification>
      );

      expect(getByText('title')).toHaveStyleRule(
        'font-weight',
        `${DEFAULT_THEME.fontWeights.semibold}`
      );
      expect(container.firstChild).toHaveStyleRule('color', 'inherit', {
        modifier: css`
          ${StyledTitle}
        ` as any
      });
    });

    it('renders isRegular styling', () => {
      const { getByText } = render(
        <Notification>
          <Title isRegular>title</Title>
        </Notification>
      );

      expect(getByText('title')).toHaveStyleRule(
        'font-weight',
        `${DEFAULT_THEME.fontWeights.regular}`
      );
    });

    it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
      { mode: 'light', type: 'success', color: PALETTE.green[700] },
      { mode: 'dark', type: 'success', color: PALETTE.green[400] },
      { mode: 'light', type: 'error', color: PALETTE.red[700] },
      { mode: 'dark', type: 'error', color: PALETTE.red[400] },
      { mode: 'light', type: 'warning', color: PALETTE.yellow[700] },
      { mode: 'dark', type: 'warning', color: PALETTE.yellow[400] },
      { mode: 'light', type: 'info', color: PALETTE.grey[900] },
      { mode: 'dark', type: 'info', color: PALETTE.grey[300] }
    ])('renders $mode mode $type color', ({ mode, type, color }) => {
      const { container } = getRenderFn(mode)(
        <Notification type={type}>
          <Title>title</Title>
        </Notification>
      );

      expect(container.firstChild).toHaveStyleRule('color', color, {
        modifier: css`
          ${StyledTitle}
        ` as any
      });
    });
  });
});
