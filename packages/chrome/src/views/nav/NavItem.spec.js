/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { StyledNavItem } from './NavItem';

describe('NavItem', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<StyledNavItem />);

    expect(wrapper).toHaveClassName('c-chrome__nav__item');
  });

  it('renders logo styling if provided', () => {
    const wrapper = shallow(<StyledNavItem logo />);

    expect(wrapper).toHaveClassName('c-chrome__nav__item--logo');
  });

  it('renders brandmark styling if provided', () => {
    const wrapper = shallow(<StyledNavItem brandmark />);

    expect(wrapper).toHaveClassName('c-chrome__nav__item--brandmark');
  });

  describe('States', () => {
    it('renders current styling if provided', () => {
      const wrapper = shallow(<StyledNavItem current />);

      expect(wrapper).toHaveClassName('is-current');
    });

    it('renders focused styling if provided', () => {
      const wrapper = shallow(<StyledNavItem focused />);

      expect(wrapper).toHaveClassName('is-focused');
    });

    it('renders hovered styling if provided', () => {
      const wrapper = shallow(<StyledNavItem hovered />);

      expect(wrapper).toHaveClassName('is-hovered');
    });

    it('renders active styling if provided', () => {
      const wrapper = shallow(<StyledNavItem active />);

      expect(wrapper).toHaveClassName('is-active');
    });
  });

  describe('Products', () => {
    ['chat', 'connect', 'explore', 'guide', 'message', 'support', 'talk'].forEach(product => {
      it(`renders ${product} styling if provided`, () => {
        const wrapper = shallow(<StyledNavItem product={product} />);

        expect(wrapper).toHaveClassName(`c-chrome__nav__item--logo--${product}`);
      });
    });
  });
});
