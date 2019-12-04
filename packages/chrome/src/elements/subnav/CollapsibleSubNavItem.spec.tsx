/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import { CollapsibleSubNavItem } from './CollapsibleSubNavItem';

describe('CollapsibleSubNavItem', () => {
  it('renders default styling', () => {
    const { container } = render(
      <CollapsibleSubNavItem header="Header">
        <p>Content</p>
      </CollapsibleSubNavItem>
    );

    expect(container.querySelector('[role="region"]')).toHaveClass('c-chrome__subnav__panel');
    expect(container.querySelector('[role="heading"]')!.firstChild).toHaveClass(
      'c-chrome__subnav__item--header'
    );
  });

  it('calls onChange with expanded state if header is clicked', () => {
    const onChangeSpy = jest.fn();
    const { queryByRole } = render(
      <CollapsibleSubNavItem header="Header" onChange={onChangeSpy}>
        <p>Content</p>
      </CollapsibleSubNavItem>
    );

    fireEvent.click(queryByRole('heading')!.firstChild as any);

    expect(onChangeSpy).toHaveBeenCalledWith(true);
  });

  it('toggles expansion if onChange callback is not provided', () => {
    const { queryByRole, container } = render(
      <CollapsibleSubNavItem header="Header">
        <p>Content</p>
      </CollapsibleSubNavItem>
    );

    expect(container.querySelector("[role='region']")).toHaveAttribute('aria-hidden', 'true');
    fireEvent.click(queryByRole('heading')!.firstChild as any);
    expect(container.querySelector("[role='region']")).toHaveAttribute('aria-hidden', 'false');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<CollapsibleSubNavItem header="Header" ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  describe('States', () => {
    it('renders expanded styling if provided', () => {
      const { queryByRole } = render(
        <CollapsibleSubNavItem header="Header" isExpanded>
          <p>Content</p>
        </CollapsibleSubNavItem>
      );

      expect(queryByRole('heading')!.firstChild).toHaveClass('is-expanded');
    });
  });

  it('applies maxHeight on expanded state change', () => {
    const { queryByRole, rerender } = render(
      <CollapsibleSubNavItem header="Header">
        <p>Content</p>
      </CollapsibleSubNavItem>
    );

    rerender(
      <CollapsibleSubNavItem header="Header" isExpanded>
        <p>Content</p>
      </CollapsibleSubNavItem>
    );

    expect(queryByRole('region')).toHaveStyle('max-height: 0px');
  });
});
