/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import Cell from './Cell';

describe('Cell', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Cell />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders minimum styling if provided', () => {
    const wrapper = shallow(<Cell minimum />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders truncation styling if provided', () => {
    const wrapper = shallow(<Cell truncate />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders menu styling if provided', () => {
    const wrapper = shallow(<Cell menu />);

    expect(wrapper).toMatchSnapshot();
  });
});
