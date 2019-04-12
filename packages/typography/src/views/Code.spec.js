/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import {
  zdColorGreen200,
  zdColorGrey200,
  zdColorRed200,
  zdColorYellow200,
  zdFontSizeSmMonospace,
  zdFontSizeMdMonospace,
  zdFontSizeLgMonospace
} from '@zendeskgarden/css-variables';
import Code from './Code';

describe('Code', () => {
  it('applies correct styling with RTL locale', () => {
    const wrapper = mountWithTheme(<Code />, { rtl: true });

    expect(wrapper).toHaveStyleRule('direction', 'rtl');
  });

  it('applies monospace font styling', () => {
    const wrapper = mount(<Code />);

    expect(wrapper).toHaveStyleRule('font-family', expect.stringContaining('monospace'));
  });

  describe('size', () => {
    it('renders small styling if provided', () => {
      const wrapper = mount(<Code size="small" />);

      expect(wrapper).toHaveStyleRule('font-size', zdFontSizeSmMonospace);
    });

    it('renders medium styling if provided', () => {
      const wrapper = mount(<Code size="medium" />);

      expect(wrapper).toHaveStyleRule('font-size', zdFontSizeMdMonospace);
    });

    it('renders large styling if provided', () => {
      const wrapper = mount(<Code size="large" />);

      expect(wrapper).toHaveStyleRule('font-size', zdFontSizeLgMonospace);
    });
  });

  describe('visual types', () => {
    it('renders grey styling if provided', () => {
      const wrapper = mount(<Code type="grey" />);

      expect(wrapper).toHaveStyleRule('background-color', zdColorGrey200);
    });

    it('renders green styling if provided', () => {
      const wrapper = mount(<Code type="green" />);

      expect(wrapper).toHaveStyleRule('background-color', zdColorGreen200);
    });

    it('renders red styling if provided', () => {
      const wrapper = mount(<Code type="red" />);

      expect(wrapper).toHaveStyleRule('background-color', zdColorRed200);
    });

    it('renders yellow styling if provided', () => {
      const wrapper = mount(<Code type="yellow" />);

      expect(wrapper).toHaveStyleRule('background-color', zdColorYellow200);
    });
  });
});
