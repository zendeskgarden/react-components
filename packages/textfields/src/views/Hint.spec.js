/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';

import Hint from './Hint';

describe('Hint', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Hint />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<Hint />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders small styling if provided', () => {
    const wrapper = shallow(<Hint small />);

    expect(wrapper).toMatchSnapshot();
  });
});
