/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import { StyledSubNavItem } from './SubNavItem';

describe('SubNavItem', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<StyledSubNavItem />);

    expect(wrapper).toHaveClassName('c-chrome__subnav__item');
  });

  describe('States', () => {
    it('renders current styling if provided', () => {
      const wrapper = shallow(<StyledSubNavItem current />);

      expect(wrapper).toHaveClassName('is-current');
    });

    it('renders focused styling if provided', () => {
      const wrapper = shallow(<StyledSubNavItem focused />);

      expect(wrapper).toHaveClassName('is-focused');
    });

    it('renders hovered styling if provided', () => {
      const wrapper = shallow(<StyledSubNavItem hovered />);

      expect(wrapper).toHaveClassName('is-hovered');
    });
  });
});
