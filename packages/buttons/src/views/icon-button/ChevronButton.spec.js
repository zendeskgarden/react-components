/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import ChevronButton from './ChevronButton';

describe('ChevronButton', () => {
  it('renders IconButton with correct default styling', () => {
    const wrapper = shallow(<ChevronButton />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders focus-inset styling if provided', () => {
    const wrapper = shallow(<ChevronButton focusInset />);

    expect(wrapper).toMatchSnapshot();
  });

  it('rotates icon if prop is provided', () => {
    const wrapper = shallow(<ChevronButton rotated />);

    expect(wrapper).toMatchSnapshot();
  });
});
