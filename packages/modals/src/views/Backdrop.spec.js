/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';
import Backdrop from './Backdrop';

describe('Backdrop', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Backdrop />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<Backdrop />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders center styling if provided', () => {
    const wrapper = shallow(<Backdrop center />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders animation styling if provided', () => {
    const wrapper = shallow(<Backdrop animate />);

    expect(wrapper).toMatchSnapshot();
  });
});
