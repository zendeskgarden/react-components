import React from 'react';
import { shallow } from 'enzyme';
import NextItem from './NextItem';

describe('NextItem', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<NextItem />);

    expect(wrapper).toMatchSnapshot();
  });
});
