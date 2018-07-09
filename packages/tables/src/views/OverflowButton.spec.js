/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import OverflowButton from './OverflowButton';

describe('OverflowButton', () => {
  it('applies default styling by default', () => {
    const wrapper = mount(<OverflowButton />);

    expect(wrapper).toMatchSnapshot();
  });

  it('applies hovered styling if provided', () => {
    const wrapper = mount(<OverflowButton hovered />);

    expect(wrapper).toMatchSnapshot();
  });

  it('applies active styling if provided', () => {
    const wrapper = mount(<OverflowButton active />);

    expect(wrapper).toMatchSnapshot();
  });

  it('applies focused styling if provided', () => {
    const wrapper = mount(<OverflowButton focused />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('onFocus', () => {
    it('applies focused state', () => {
      const wrapper = shallow(<OverflowButton />);

      wrapper.simulate('focus');
      expect(wrapper).toHaveProp('focused', true);
    });
  });

  describe('onBlur', () => {
    it('removes focused state', () => {
      const wrapper = shallow(<OverflowButton />);

      wrapper.simulate('focus');
      wrapper.simulate('blur');
      expect(wrapper).toHaveProp('focused', false);
    });
  });
});
