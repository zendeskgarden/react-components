/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';

import Row from './Row';

// eslint-disable-next-line
const ExampleWrapper = ({ children }) => (
  <table>
    <tbody>{children}</tbody>
  </table>
);

describe('Row', () => {
  it('applies default styling by default', () => {
    const wrapper = mount(
      <ExampleWrapper>
        <Row />
      </ExampleWrapper>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('applies hovered styling if provided', () => {
    const wrapper = mount(
      <ExampleWrapper>
        <Row hovered />
      </ExampleWrapper>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('applies selected styling if provided', () => {
    const wrapper = mount(
      <ExampleWrapper>
        <Row selected />
      </ExampleWrapper>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('applies focused styling if provided', () => {
    const wrapper = mount(
      <ExampleWrapper>
        <Row focused />
      </ExampleWrapper>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('applies group styling if provided', () => {
    const wrapper = mount(
      <ExampleWrapper>
        <Row group />
      </ExampleWrapper>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('applies header styling if provided', () => {
    const wrapper = mount(
      <ExampleWrapper>
        <Row header />
      </ExampleWrapper>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('applies striped styling if provided', () => {
    const wrapper = mount(
      <ExampleWrapper>
        <Row striped />
      </ExampleWrapper>
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('onFocus', () => {
    it('applies focused state', () => {
      const wrapper = mount(
        <ExampleWrapper>
          <Row />
        </ExampleWrapper>
      );

      wrapper.find('tr').simulate('focus');
      expect(wrapper.find('tr').parent()).toHaveProp('focused', true);
    });
  });

  describe('onBlur', () => {
    it('removes focused state', () => {
      const wrapper = mount(
        <ExampleWrapper>
          <Row />
        </ExampleWrapper>
      );

      wrapper.find('tr').simulate('focus');
      wrapper.find('tr').simulate('blur');
      expect(wrapper.find('tr').parent()).toHaveProp('focused', false);
    });
  });
});
