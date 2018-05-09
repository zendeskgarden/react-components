/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  it('renders default styling', () => {
    const wrapper = mount(<Dropdown />);

    expect(wrapper).toMatchSnapshot();
  });
});
