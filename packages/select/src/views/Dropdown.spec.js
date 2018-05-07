import React from 'react';
import { mount } from 'enzyme';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  it('renders default styling', () => {
    const wrapper = mount(<Dropdown />);

    expect(wrapper).toMatchSnapshot();
  });
});
