/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import HeaderCell from './HeaderCell';

describe('HeaderCell', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<HeaderCell />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders minimum styling if provided', () => {
    const wrapper = shallow(<HeaderCell minimum />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders truncation styling if provided', () => {
    const wrapper = shallow(<HeaderCell truncate />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders menu styling if provided', () => {
    const wrapper = shallow(<HeaderCell menu />);

    expect(wrapper).toMatchSnapshot();
  });
});
