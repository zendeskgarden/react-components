/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

describe('Item', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Item />);

    expect(wrapper).toHaveClassName('c-breadcrumb__item');
  });

  it('renders current styling', () => {
    const wrapper = shallow(<Item current />);

    expect(wrapper).toHaveClassName('is-current');
  });
});
