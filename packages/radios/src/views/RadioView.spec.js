/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';

import RadioView from './RadioView';

describe('RadioView', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<RadioView />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<RadioView />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });
});
