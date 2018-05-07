import React from 'react';
import { shallow } from 'enzyme';
import MediaBody from './MediaBody';

describe('MediaBody', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<MediaBody />);

    expect(wrapper).toMatchSnapshot();
  });
});
