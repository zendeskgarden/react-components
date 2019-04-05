/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import SubNavItemText from './SubNavItemText';

describe('SubNavItemText', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<SubNavItemText />);

    expect(wrapper).toHaveClassName('c-chrome__subnav__item__text');
  });

  it('renders wrap styling if provided', () => {
    const wrapper = shallow(<SubNavItemText wrap />);

    expect(wrapper).toHaveClassName('c-chrome__subnav__item__text--wrap');
  });
});
