import React from 'react';
import { shallow } from 'enzyme';
import Body from './Body';

describe('Body', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Body />);

    expect(wrapper).toMatchSnapshot();
  });
});
