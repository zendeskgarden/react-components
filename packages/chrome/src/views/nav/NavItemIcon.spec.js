import React from 'react';
import { shallow } from 'enzyme';

import NavItemIcon from './NavItemIcon';

describe('NavItemIcon', () => {
  it('renders default styling', () => {
    const wrapper = shallow(
      <NavItemIcon>
        <svg>test</svg>
      </NavItemIcon>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
