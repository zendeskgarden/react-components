/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import CollapsibleSubNavItem from './CollapsibleSubNavItem';

describe('CollapsibleSubNavItem', () => {
  it('renders default styling', () => {
    const { container } = render(
      <CollapsibleSubNavItem label="Header">
        <p>Content</p>
      </CollapsibleSubNavItem>
    );

    expect(container.querySelector('[role="region"]')).toHaveClass('c-chrome__subnav__panel');
    expect(container.querySelector('[role="heading"]').firstChild).toHaveClass(
      'c-chrome__subnav__item--header'
    );
  });

  it('calls onChange with expanded state if header is clicked', () => {
    const onChangeSpy = jest.fn();
    const { queryByRole } = render(
      <CollapsibleSubNavItem label="Header" onChange={onChangeSpy}>
        <p>Content</p>
      </CollapsibleSubNavItem>
    );

    fireEvent.click(queryByRole('heading').firstChild);

    expect(onChangeSpy).toHaveBeenCalledWith(true);
  });

  describe('States', () => {
    it('renders expanded styling if provided', () => {
      const { queryByRole } = render(
        <CollapsibleSubNavItem label="Header" expanded>
          <p>Content</p>
        </CollapsibleSubNavItem>
      );

      expect(queryByRole('heading').firstChild).toHaveClass('is-expanded');
    });
  });

  it('applies maxHeight on expanded state change', () => {
    const { queryByRole, rerender } = render(
      <CollapsibleSubNavItem label="Header">
        <p>Content</p>
      </CollapsibleSubNavItem>
    );

    rerender(
      <CollapsibleSubNavItem label="Header" expanded>
        <p>Content</p>
      </CollapsibleSubNavItem>
    );

    expect(queryByRole('region')).toHaveStyle('max-height: 0px');
  });
});
