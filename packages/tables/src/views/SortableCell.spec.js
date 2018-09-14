/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';

import SortableCell from './SortableCell';

describe('SortableCell', () => {
  it('applies default styling', () => {
    const wrapper = mount(<SortableCell />);

    expect(wrapper).toMatchSnapshot();
  });

  it('applies focused styling if provided', () => {
    const wrapper = mount(<SortableCell focused />);

    expect(wrapper).toMatchSnapshot();
  });

  it('applies active styling if provided', () => {
    const wrapper = mount(<SortableCell active />);

    expect(wrapper).toMatchSnapshot();
  });

  it('applies minimum styling if provided', () => {
    const wrapper = mount(<SortableCell minimum />);

    expect(wrapper).toMatchSnapshot();
  });

  it('applies truncated styling if provided', () => {
    const wrapper = mount(<SortableCell truncate />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('sorting', () => {
    it('applies ascending props when applied', () => {
      const wrapper = mount(<SortableCell sort="asc" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('applies descending props when applied', () => {
      const wrapper = mount(<SortableCell sort="desc" />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
