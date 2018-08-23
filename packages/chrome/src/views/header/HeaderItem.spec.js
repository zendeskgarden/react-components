/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';

import HeaderItem from './HeaderItem';

describe('HeaderItem', () => {
  it('renders default styling', () => {
    const wrapper = mount(<HeaderItem />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders maxX styling if provided', () => {
    const wrapper = mount(<HeaderItem maxX />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders maxY styling if provided', () => {
    const wrapper = mount(<HeaderItem maxY />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders logo styling if provided', () => {
    const wrapper = mount(<HeaderItem logo />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders round styling if provided', () => {
    const wrapper = mount(<HeaderItem round />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('States', () => {
    it('renders active styling if provided', () => {
      const wrapper = mount(<HeaderItem active />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders focused styling if provided', () => {
      const wrapper = mount(<HeaderItem focused />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders hovered styling if provided', () => {
      const wrapper = mount(<HeaderItem hovered />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Products', () => {
    ['chat', 'connect', 'explore', 'guide', 'message', 'support', 'talk'].forEach(product => {
      it(`renders ${product} styling if provided`, () => {
        const wrapper = mount(<HeaderItem product={product} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
