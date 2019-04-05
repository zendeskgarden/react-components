/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';

import CollapsibleSubNavItem, {
  StyledSubNavItemHeader,
  StyledSubNavPanel
} from './CollapsibleSubNavItem';

describe('CollapsibleSubNavItem', () => {
  it('renders default styling', () => {
    const wrapper = mount(
      <CollapsibleSubNavItem label="Header">
        <p>Content</p>
      </CollapsibleSubNavItem>
    );

    expect(wrapper.find(StyledSubNavPanel).childAt(0)).toHaveClassName('c-chrome__subnav__panel');
    expect(wrapper.find(StyledSubNavItemHeader).childAt(0)).toHaveClassName(
      'c-chrome__subnav__item--header'
    );
  });

  describe('States', () => {
    it('renders expanded styling if provided', () => {
      const wrapper = mount(
        <CollapsibleSubNavItem label="Header" expanded>
          <p>Content</p>
        </CollapsibleSubNavItem>
      );

      expect(wrapper.find(StyledSubNavItemHeader).childAt(0)).toHaveClassName('is-expanded');
    });
  });
});
