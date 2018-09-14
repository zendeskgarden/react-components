/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';

import Row, { StyledRow } from './Row';

describe('Row', () => {
  it('applies default styling by default', () => {
    const wrapper = mount(<Row />);

    expect(wrapper).toMatchSnapshot();
  });

  it('applies hovered styling if provided', () => {
    const wrapper = mount(<Row hovered />);

    expect(wrapper).toMatchSnapshot();
  });

  it('applies selected styling if provided', () => {
    const wrapper = mount(<Row selected />);

    expect(wrapper).toMatchSnapshot();
  });

  it('applies focused styling if provided', () => {
    const wrapper = mount(<Row focused />);

    expect(wrapper).toMatchSnapshot();
  });

  it('applies striped styling if provided', () => {
    const wrapper = mount(<Row striped />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('onFocus', () => {
    it('applies focused state', () => {
      const wrapper = mount(<Row />);

      wrapper.find(StyledRow).simulate('focus');
      expect(wrapper.find(StyledRow)).toHaveProp('focused', true);
    });
  });

  describe('onBlur', () => {
    it('removes focused state', () => {
      const wrapper = mount(<Row />);

      wrapper.find(StyledRow).simulate('focus');
      wrapper.find(StyledRow).simulate('blur');
      expect(wrapper.find(StyledRow)).toHaveProp('focused', false);
    });
  });
});
