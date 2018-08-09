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

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling', () => {
    const wrapper = mountWithTheme(<Textarea />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders small styling if provided', () => {
    const wrapper = mount(<Textarea small />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders bare styling if provided', () => {
    const wrapper = mount(<Textarea bare />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled styling if provided', () => {
    const wrapper = mount(<Textarea disabled />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders focused styling if provided', () => {
    const wrapper = mount(<Textarea focused />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders hovered styling if provided', () => {
    const wrapper = mount(<Textarea hovered />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders resizable styling if provided', () => {
    const wrapper = mount(<Textarea resizable />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('validation', () => {
    ['success', 'warning', 'error', 'none'].forEach(validation => {
      it(`renders ${validation} styling if provided`, () => {
        const wrapper = mount(<Textarea validation={validation} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
