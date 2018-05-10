/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';

import Range from './Range';
import SingleThumbView from '../views/SingleThumbView';

describe('Range', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Range min={0} max={100} value={25} />);
  });

  describe('BackgroundSize', () => {
    it('applies backgroundSize equivalent to the input value', () => {
      expect(wrapper.find(SingleThumbView)).toHaveProp('backgroundSize', '25%');
    });

    it('defaults to max of 100 if max is less than min', () => {
      wrapper = mount(<Range min={0} max={-25} value={25} />);
      expect(wrapper.find(SingleThumbView)).toHaveProp('backgroundSize', '25%');
    });

    it('updates backgroundSize after onChange event', () => {
      wrapper.simulate('change', { target: { value: 85 } });
      expect(wrapper.find(SingleThumbView)).toHaveProp('backgroundSize', '85%');
    });
  });

  describe('onFocus()', () => {
    it('it applies focus visualization to Range', () => {
      wrapper.simulate('focus');
      expect(wrapper.find(SingleThumbView)).toHaveProp('focused', true);
    });
  });

  describe('onBlur()', () => {
    it('it removes focus visualization of Range', () => {
      wrapper.simulate('focus');
      wrapper.simulate('blur');
      expect(wrapper.find(SingleThumbView)).toHaveProp('focused', false);
    });
  });
});
