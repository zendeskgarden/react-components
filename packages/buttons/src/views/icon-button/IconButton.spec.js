import React from 'react';
import { mount } from 'enzyme';
import IconButton from './IconButton';

describe('IconButton', () => {
  it('renders pill and muted styling by default', () => {
    const wrapper = mount(<IconButton />);

    expect(wrapper).toMatchSnapshot();
  });
});
