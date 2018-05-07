import React from 'react';
import { shallow } from 'enzyme';
import HeaderItem from './HeaderItem';

describe('HeaderItem', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<HeaderItem />);

    expect(wrapper).toMatchSnapshot();
  });
});
