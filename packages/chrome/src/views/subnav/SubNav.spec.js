import React from 'react';
import { shallow } from 'enzyme';

import SubNav from './SubNav';

describe('SubNav', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<SubNav />);

    expect(wrapper).toMatchSnapshot();
  });
});
