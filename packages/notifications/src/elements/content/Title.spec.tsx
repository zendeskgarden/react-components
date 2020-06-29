/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { render } from 'garden-test-utils';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Notification } from '../Notification';
import { Title } from './Title';
import { StyledTitle } from '../../styled';

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

    it('renders success styling', () => {
      const { container } = render(
        <Notification type="success">
          <Title>title</Title>
        </Notification>
      );

      expect(container.firstChild).toHaveStyleRule(
        'color',
        getColor('successHue', 600, DEFAULT_THEME),
        {
          modifier: css`
            ${StyledTitle}
          ` as any
        }
      );
    });

    it('renders error styling', () => {
      const { container } = render(
        <Notification type="error">
          <Title>title</Title>
        </Notification>
      );

      expect(container.firstChild).toHaveStyleRule(
        'color',
        getColor('dangerHue', 600, DEFAULT_THEME),
        {
          modifier: css`
            ${StyledTitle}
          ` as any
        }
      );
    });

    it('renders warning styling', () => {
      const { container } = render(
        <Notification type="warning">
          <Title>title</Title>
        </Notification>
      );

      expect(container.firstChild).toHaveStyleRule(
        'color',
        getColor('warningHue', 700, DEFAULT_THEME),
        {
          modifier: css`
            ${StyledTitle}
          ` as any
        }
      );
    });

    it('renders info styling', () => {
      const { container } = render(
        <Notification type="info">
          <Title>title</Title>
        </Notification>
      );

      expect(container.firstChild).toHaveStyleRule('color', DEFAULT_THEME.colors.foreground, {
        modifier: css`
          ${StyledTitle}
        ` as any
      });
    });
  });
});
