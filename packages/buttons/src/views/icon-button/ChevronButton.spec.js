/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';
import ChevronButton from './ChevronButton';
import Icon from './Icon';

describe('ChevronButton', () => {
  it('rotates icon if prop is provided', () => {
    const wrapper = mount(<ChevronButton rotated />);

    expect(wrapper.find(Icon).childAt(0)).toHaveClassName('is-rotated');
  });
});
