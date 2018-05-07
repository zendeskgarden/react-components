import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

describe('Input', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper).toMatchSnapshot();
  });
});
