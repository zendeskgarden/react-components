import React from 'react';
import { mount } from 'enzyme';
import Icon from './Icon';

describe('Icon', () => {
  it('renders default styling correctly', () => {
    const wrapper = mount(
      <Icon>
        <svg />
      </Icon>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders rotated styling if provided', () => {
    const wrapper = mount(
      <Icon rotated>
        <svg />
      </Icon>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
