/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import OverflowButton, { StyledOverflowButton } from './OverflowButton';

describe('OverflowButton', () => {
  it('applies default styling by default', () => {
    const wrapper = shallow(<StyledOverflowButton />);

    expect(wrapper).toHaveClassName('c-table__row__cell__overflow');
  });

  it('applies hovered styling if provided', () => {
    const wrapper = shallow(<StyledOverflowButton hovered />);

    expect(wrapper).toHaveClassName('is-hovered');
  });

  it('applies active styling if provided', () => {
    const wrapper = shallow(<StyledOverflowButton active />);

    expect(wrapper).toHaveClassName('is-active');
  });

  it('applies focused styling if provided', () => {
    const wrapper = shallow(<StyledOverflowButton focused />);

    expect(wrapper).toHaveClassName('is-focused');
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
