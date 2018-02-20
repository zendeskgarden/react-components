import React from 'react';
import { shallow } from 'enzyme';

import TabList from './TabList';

describe('TabList', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<TabList />);

    expect(wrapper).toMatchSnapshot();
  });
});
