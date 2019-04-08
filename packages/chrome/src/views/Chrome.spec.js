/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';

import Chrome from './Chrome';

describe('Chrome', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Chrome />);

    expect(wrapper).toHaveClassName('c-chrome');
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<Chrome />, { rtl: true });

    expect(wrapper).toHaveClassName('is-rtl');
  });
});
