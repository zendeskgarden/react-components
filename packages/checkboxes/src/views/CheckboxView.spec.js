/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';

import CheckboxView from './CheckboxView';

describe('CheckboxView', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<CheckboxView />);

    expect(wrapper).toHaveClassName('c-chk');
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<CheckboxView />, { rtl: true });

    expect(wrapper).toHaveClassName('is-rtl');
  });
});
