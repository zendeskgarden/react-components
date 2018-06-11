/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';

import TextGroup from './TextGroup';

describe('TextGroup', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<TextGroup />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<TextGroup />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders inline styling if provided', () => {
    const wrapper = shallow(<TextGroup inline />);

    expect(wrapper).toMatchSnapshot();
  });
});
