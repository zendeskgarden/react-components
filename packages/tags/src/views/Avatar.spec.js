import React from 'react';
import { mount } from 'enzyme';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('renders default styling correctly', () => {
    const wrapper = mount(
      <Avatar>
        <svg />
      </Avatar>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
