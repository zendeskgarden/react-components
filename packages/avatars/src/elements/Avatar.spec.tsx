/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, cleanup } from 'garden-test-utils';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import { Avatar } from './Avatar';

const activeBoxShadow = DEFAULT_THEME.shadows.sm(PALETTE.crimson[700]);

describe('Avatar', () => {
  afterEach(cleanup);

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLElement>();
    const { container } = render(
      <Avatar ref={ref}>
        <img alt="" />
      </Avatar>
    );

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders badge if provided', () => {
    const badge = '2';
    const { getByText } = render(
      <Avatar badge={badge}>
        <img alt="" />
      </Avatar>
    );

    const element = getByText(badge);

    expect(element).toHaveAttribute('aria-hidden');
  });

  it('applies active styling to available status if provided with badge', () => {
    const { container } = render(
      <Avatar status="available" badge="2">
        <img alt="" />
      </Avatar>
    );

    expect(container.firstChild).toHaveStyleRule('box-shadow', activeBoxShadow);
  });

  it('applies active styling to away status if provided with badge', () => {
    const { container } = render(
      <Avatar status="away" badge="2">
        <img alt="" />
      </Avatar>
    );

    expect(container.firstChild).toHaveStyleRule('box-shadow', activeBoxShadow);
  });

  it('renders text element if provided', () => {
    const { getByText } = render(
      <Avatar>
        <Avatar.Text>AG</Avatar.Text>
      </Avatar>
    );

    expect(getByText('AG')).toBeDefined();
  });

  describe('Accessibility', () => {
    it('renders with badge with default status label', () => {
      const { getByText } = render(
        <Avatar badge="2">
          <img alt="" />
        </Avatar>
      );

      const element = getByText('status: active. 2 notifications');

      expect(element).toBeInTheDocument();
    });

    it('renders with badge and with a provided status label', () => {
      const label = 'two notifications';
      const { getByText } = render(
        <Avatar badge="2" statusLabel={label}>
          <img alt="" />
        </Avatar>
      );

      const element = getByText(label);

      expect(element).toBeInTheDocument();
    });

    it('renders with status and applies default label for available status', () => {
      const { getByText } = render(
        <Avatar status="available">
          <img alt="" />
        </Avatar>
      );

      const element = getByText('status: available');

      expect(element).toBeInTheDocument();
    });

    it('renders with status and applies default label for away status', () => {
      const { getByText, container } = render(
        <Avatar status="away">
          <img alt="" />
        </Avatar>
      );

      const element = getByText('status: away');
      const statusIndicatorSVG = container.querySelector('svg');

      expect(element).toBeInTheDocument();
      expect(statusIndicatorSVG).toBeInTheDocument();
    });
  });

  describe('Invalid', () => {
    const consoleError = console.error;

    beforeEach(() => {
      console.error = jest.fn();
    });

    afterEach(() => {
      console.error = consoleError;
    });

    it('throws if rendered with no child', () => {
      expect(() => {
        render(<Avatar />);
      }).toThrow();
    });

    it('throws if rendered with more than one child', () => {
      expect(() => {
        render(
          <Avatar>
            <img alt="" />
            <img alt="" />
          </Avatar>
        );
      }).toThrow();
    });
  });
});
