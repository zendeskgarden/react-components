/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

describe('Item', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Item />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders active styling', () => {
    const wrapper = shallow(<Item active />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders focused styling', () => {
    const wrapper = shallow(<Item focused />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders hovered styling', () => {
    const wrapper = shallow(<Item hovered />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled styling', () => {
    const wrapper = shallow(<Item disabled />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders checked styling', () => {
    const wrapper = shallow(<Item checked />);

    expect(wrapper).toMatchSnapshot();
  });
});
