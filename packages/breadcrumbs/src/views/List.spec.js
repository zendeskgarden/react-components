/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';
import List from './List';

describe('List', () => {
  it('renders default styling correctly', () => {
    const wrapper = shallow(<List />);

    expect(wrapper).toHaveClassName('c-breadcrumb');
  });

  it('renders RTL styling correctly', () => {
    const wrapper = shallowWithTheme(<List />, { rtl: true });

    expect(wrapper).toHaveClassName('is-rtl');
  });
});
