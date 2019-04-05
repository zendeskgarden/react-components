/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount, shallow } from 'enzyme';

import Row, { StyledRow } from './Row';

describe('Row', () => {
  it('applies default styling by default', () => {
    const wrapper = shallow(<StyledRow />);

    expect(wrapper).toHaveClassName('c-table__row');
  });

  it('applies hovered styling if provided', () => {
    const wrapper = shallow(<StyledRow hovered />);

    expect(wrapper).toHaveClassName('is-hovered');
  });

  it('applies selected styling if provided', () => {
    const wrapper = shallow(<StyledRow selected />);

    expect(wrapper).toHaveClassName('is-selected');
  });

  it('applies focused styling if provided', () => {
    const wrapper = shallow(<StyledRow focused />);

    expect(wrapper).toHaveClassName('is-focused');
  });

  it('applies striped styling if provided', () => {
    const wrapper = shallow(<StyledRow striped />);

    expect(wrapper).toHaveClassName('c-table__row--stripe');
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
