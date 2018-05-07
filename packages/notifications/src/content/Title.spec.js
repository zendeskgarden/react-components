import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

describe('Title', () => {
  it('renders with title styling', () => {
    const wrapper = shallow(<Title />);

    expect(wrapper).toMatchSnapshot();
  });
});
