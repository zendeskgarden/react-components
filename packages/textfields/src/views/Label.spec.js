/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';

import Label from './Label';

describe('Label', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Label />);

    expect(wrapper).toHaveClassName('c-txt__label');
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<Label />, { rtl: true });

    expect(wrapper).toHaveClassName('is-rtl');
  });

  it('renders small styling if provided', () => {
    const wrapper = shallow(<Label small />);

    expect(wrapper).toHaveClassName('c-txt__label--sm');
  });

  it('renders regular styling if provided', () => {
    const wrapper = shallow(<Label regular />);

    expect(wrapper).toHaveClassName('c-txt__label--regular');
  });
});
