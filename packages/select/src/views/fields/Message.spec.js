import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Message />);

    expect(wrapper).toMatchSnapshot();
  });
});
