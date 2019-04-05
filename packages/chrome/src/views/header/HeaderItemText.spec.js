/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import HeaderItemText from './HeaderItemText';

describe('HeaderItemText', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<HeaderItemText />);

    expect(wrapper).toHaveClassName('c-chrome__body__header__item__text');
  });

  it('renders clipped styling if provided', () => {
    const wrapper = shallow(<HeaderItemText clipped />);

    expect(wrapper).toHaveClassName('is-clipped');
  });
});
