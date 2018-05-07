import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

describe('Item', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Item />);

    expect(wrapper).toMatchSnapshot();
  });
});
