import React from 'react';
import { shallow } from 'enzyme';

import HeaderItemIcon from './HeaderItemIcon';

describe('HeaderItemIcon', () => {
  it('renders default styling', () => {
    const wrapper = shallow(
      <HeaderItemIcon>
        <svg>test</svg>
      </HeaderItemIcon>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
