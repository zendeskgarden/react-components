/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';
import NavItem from './NavItem';

describe('NavItem', () => {
  it('renders default styling', () => {
    const wrapper = mount(<NavItem />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders logo styling if provided', () => {
    const wrapper = mount(<NavItem logo />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders brandmark styling if provided', () => {
    const wrapper = mount(<NavItem brandmark />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('States', () => {
    it('renders current styling if provided', () => {
      const wrapper = mount(<NavItem current />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders focused styling if provided', () => {
      const wrapper = mount(<NavItem focused />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders hovered styling if provided', () => {
      const wrapper = mount(<NavItem hovered />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Products', () => {
    ['chat', 'connect', 'explore', 'guide', 'message', 'support', 'talk'].forEach(product => {
      it(`renders ${product} styling if provided`, () => {
        const wrapper = mount(<NavItem product={product} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
