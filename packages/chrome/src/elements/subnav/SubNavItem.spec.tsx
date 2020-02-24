/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Chrome from '../Chrome';
import { SubNavItem } from './SubNavItem';

describe('SubNavItem', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(<SubNavItem ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders isCurrent styling', () => {
    const { container } = render(<SubNavItem isCurrent />);

    expect(container.firstChild).toHaveStyle(`
      cursor: default;
      opacity: 1;
    `);
  });

  it('renders dark hue styling', () => {
    const hue = 'red';
    const { container } = render(
      <Chrome hue={hue}>
        <SubNavItem isCurrent />
      </Chrome>
    );

    expect(container.firstChild!.firstChild).toHaveStyleRule(
      'background-color',
      'rgba(255,255,255,0.1)'
    );
  });

  it('renders light hue styling', () => {
    const hue = '#CECEF6';
    const { container } = render(
      <Chrome hue={hue}>
        <SubNavItem isCurrent />
      </Chrome>
    );

    expect(container.firstChild!.firstChild).toHaveStyleRule('background-color', 'rgba(0,0,0,0.1)');
  });
});
