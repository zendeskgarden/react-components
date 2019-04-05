/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import Tab from './Tab';

describe('Tab', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Tab />);

    expect(wrapper).toHaveClassName('c-tab__list__item');
  });

  it('renders hovered styling', () => {
    const wrapper = shallow(<Tab hovered />);

    expect(wrapper).toHaveClassName('is-hovered');
  });

  it('renders focused styling', () => {
    const wrapper = shallow(<Tab focused />);

    expect(wrapper).toHaveClassName('is-focused');
  });

  it('renders active styling', () => {
    const wrapper = shallow(<Tab active />);

    expect(wrapper).toHaveClassName('is-active');
  });

  it('renders disabled styling', () => {
    const wrapper = shallow(<Tab disabled />);

    expect(wrapper).toHaveClassName('is-disabled');
  });

  it('renders selected styling', () => {
    const wrapper = shallow(<Tab selected />);

    expect(wrapper).toHaveClassName('is-selected');
  });
});
