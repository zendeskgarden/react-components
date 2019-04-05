/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';
import { mountWithTheme } from '@zendeskgarden/react-testing';

import Textarea from './Textarea';

describe('Textarea', () => {
  it('renders default styling', () => {
    const wrapper = mount(<Textarea />);

    expect(wrapper.childAt(0)).toHaveClassName('c-txt__input--area');
  });

  it('renders RTL styling', () => {
    const wrapper = mountWithTheme(<Textarea />, { rtl: true });

    expect(wrapper.childAt(0)).toHaveClassName('is-rtl');
  });

  it('renders resizable styling if provided', () => {
    const wrapper = mount(<Textarea resizable />);

    expect(wrapper.childAt(0)).toHaveClassName('is-resizable');
  });
});
