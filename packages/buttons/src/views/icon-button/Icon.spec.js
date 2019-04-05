/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

describe('Icon', () => {
  it('renders default styling correctly', () => {
    const wrapper = shallow(
      <Icon>
        <svg />
      </Icon>
    );

    expect(wrapper).toHaveClassName('c-btn__icon');
  });

  it('renders rotated styling if provided', () => {
    const wrapper = shallow(
      <Icon rotated>
        <svg />
      </Icon>
    );

    expect(wrapper).toHaveClassName('is-rotated');
  });
});
