import React from 'react';
import { shallow } from 'enzyme';
import PreviousItem from './PreviousItem';

describe('PreviousItem', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<PreviousItem />);

    expect(wrapper).toMatchSnapshot();
  });
});
