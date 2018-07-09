/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';

import SortableCell from './SortableCell';

// eslint-disable-next-line
const ExampleWrapper = ({ children }) => (
  <table>
    <thead>
      <tr>{children}</tr>
    </thead>
  </table>
);

describe('SortableCell', () => {
  it('applies default styling', () => {
    const wrapper = mount(
      <ExampleWrapper>
        <SortableCell />
      </ExampleWrapper>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('applies focused styling if provided', () => {
    const wrapper = mount(
      <ExampleWrapper>
        <SortableCell focused />
      </ExampleWrapper>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('applies active styling if provided', () => {
    const wrapper = mount(
      <ExampleWrapper>
        <SortableCell active />
      </ExampleWrapper>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('applies minimum styling if provided', () => {
    const wrapper = mount(
      <ExampleWrapper>
        <SortableCell minimum />
      </ExampleWrapper>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('applies truncated styling if provided', () => {
    const wrapper = mount(
      <ExampleWrapper>
        <SortableCell truncate />
      </ExampleWrapper>
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('sorting', () => {
    it('applies ascending props when applied', () => {
      const wrapper = mount(
        <ExampleWrapper>
          <SortableCell sort="asc" />
        </ExampleWrapper>
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('applies descending props when applied', () => {
      const wrapper = mount(
        <ExampleWrapper>
          <SortableCell sort="desc" />
        </ExampleWrapper>
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
