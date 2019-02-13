/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import Anchor from './Anchor';

describe('Anchor', () => {
  it('renders danger styling if provided', () => {
    const wrapper = mountWithTheme(<Anchor danger />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders external styling correctly if provided', () => {
    const wrapper = mountWithTheme(<Anchor external />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders external styling correctly if provided in RTL mode', () => {
    const wrapper = mountWithTheme(<Anchor external />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('Selection', () => {
    it('does not render focused styling if focused by mouse', () => {
      const wrapper = mountWithTheme(<Anchor data-test-id="anchor" />);

      wrapper.find('a[data-test-id="anchor"]').simulate('click');
      expect(wrapper.find('a[data-test-id="anchor"]')).not.toHaveClassName('is-focused');
    });

    it('renders focused styling if focused by keyboard', () => {
      const wrapper = mountWithTheme(<Anchor data-test-id="anchor" />);

      wrapper.find('a[data-test-id="anchor"]').simulate('focus');
      expect(wrapper.find('a[data-test-id="anchor"]')).toHaveClassName('is-focused');
    });
  });

  describe('States', () => {
    it('renders active styling if provided', () => {
      const wrapper = mountWithTheme(<Anchor active />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders disabled styling if provided', () => {
      const wrapper = mountWithTheme(<Anchor disabled />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders focused styling if provided', () => {
      const wrapper = mountWithTheme(<Anchor focused />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders hovered styling if provided', () => {
      const wrapper = mountWithTheme(<Anchor hovered />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
