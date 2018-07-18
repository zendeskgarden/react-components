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

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling if provided', () => {
    const wrapper = shallowWithTheme(<Table />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('applies scrollabe styling if provided', () => {
    const wrapper = shallow(<Table scrollable="200px" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders sizing correctly if provided', () => {
    ['small', 'large'].forEach(size => {
      const wrapper = shallow(<Table size={size} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
