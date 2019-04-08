/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';

import Table from './Table';

describe('Table', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Table />);

    expect(wrapper).toHaveClassName('c-table');
  });

  it('renders RTL styling if provided', () => {
    const wrapper = shallowWithTheme(<Table />, { rtl: true });

    expect(wrapper).toHaveClassName('is-rtl');
  });

  it('renders sizing correctly if provided', () => {
    const classes = {
      small: 'sm',
      large: 'lg'
    };

    ['small', 'large'].forEach(size => {
      const wrapper = shallow(<Table size={size} />);

      expect(wrapper).toHaveClassName(`c-table--${classes[size]}`);
    });
  });
});
