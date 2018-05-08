/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';

import SubNavItem from './SubNavItem';

describe('SubNavItem', () => {
  it('renders default styling', () => {
    const wrapper = mount(<SubNavItem />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('States', () => {
    it('renders current styling if provided', () => {
      const wrapper = mount(<SubNavItem current />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders focused styling if provided', () => {
      const wrapper = mount(<SubNavItem focused />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders hovered styling if provided', () => {
      const wrapper = mount(<SubNavItem hovered />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
