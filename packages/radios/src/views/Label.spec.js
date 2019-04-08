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

    expect(wrapper).toHaveClassName('c-chk__label');
    expect(wrapper).toHaveClassName('c-chk__label--radio');
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<Label />, { rtl: true });

    expect(wrapper).toHaveClassName('is-rtl');
  });

  it('renders regular styling if provided', () => {
    const wrapper = shallow(<Label regular />);

    expect(wrapper).toHaveClassName('c-chk__label--regular');
  });

  it('renders checked styling if provided', () => {
    const wrapper = shallow(<Label checked />);

    expect(wrapper).toHaveClassName('is-checked');
  });

  it('renders hovered styling if provided', () => {
    const wrapper = shallow(<Label hovered />);

    expect(wrapper).toHaveClassName('is-hovered');
  });

  it('renders focused styling if provided', () => {
    const wrapper = shallow(<Label focused />);

    expect(wrapper).toHaveClassName('is-focused');
  });

  it('renders disabled styling if provided', () => {
    const wrapper = shallow(<Label disabled />);

    expect(wrapper).toHaveClassName('is-disabled');
  });
});
