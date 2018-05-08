/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

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
