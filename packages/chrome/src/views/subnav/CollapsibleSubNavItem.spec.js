/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';

import CollapsibleSubNavItem from './CollapsibleSubNavItem';

describe('CollapsibleSubNavItem', () => {
  it('renders default styling', () => {
    const wrapper = mount(
      <CollapsibleSubNavItem label="Header" headingLevel={1}>
        <p>Content</p>
      </CollapsibleSubNavItem>
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('States', () => {
    it('renders expanded styling if provided', () => {
      const wrapper = mount(
        <CollapsibleSubNavItem label="Header" expanded headingLevel={1}>
          <p>Content</p>
        </CollapsibleSubNavItem>
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('renders focused styling if provided', () => {
      const wrapper = mount(
        <CollapsibleSubNavItem label="Header" focused headingLevel={1}>
          <p>Content</p>
        </CollapsibleSubNavItem>
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('renders hovered styling if provided', () => {
      const wrapper = mount(
        <CollapsibleSubNavItem label="Header" hovered headingLevel={1}>
          <p>Content</p>
        </CollapsibleSubNavItem>
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
