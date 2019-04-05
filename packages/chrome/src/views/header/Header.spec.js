/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toHaveClassName('c-chrome__body__header');
  });

  it('renders standalone styling if provided', () => {
    const wrapper = shallow(<Header standalone />);

    expect(wrapper).toHaveClassName('c-chrome__body__header--standalone');
  });
});
