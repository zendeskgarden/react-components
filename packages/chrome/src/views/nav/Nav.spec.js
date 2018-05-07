import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Nav />);

    expect(wrapper).toMatchSnapshot();
  });
});
