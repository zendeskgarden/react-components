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
