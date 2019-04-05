/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

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

    expect(wrapper.childAt(0)).toHaveClassName('c-tag__avatar');
  });
});
