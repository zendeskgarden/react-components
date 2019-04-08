/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Nav />);

    expect(wrapper).toHaveClassName('c-chrome__nav');
  });

  it('renders expanded styling if provided', () => {
    const wrapper = shallow(<Nav expanded />);

    expect(wrapper).toHaveClassName('c-chrome__nav--expanded');
  });

  it('renders dark styling if provided', () => {
    const wrapper = shallow(<Nav dark />);

    expect(wrapper).toHaveClassName('c-chrome__nav--dark');
  });

  it('renders light styling if provided', () => {
    const wrapper = shallow(<Nav light />);

    expect(wrapper).toHaveClassName('c-chrome__nav--light');
  });
});
