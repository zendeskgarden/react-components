/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, cleanup } from 'garden-test-utils';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Avatar } from './Avatar';

const activeBoxShadow = DEFAULT_THEME.shadows.sm(getColor('crimson', 400)!);

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

    expect(getByText(badge)).not.toBeEmptyDOMElement();
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
