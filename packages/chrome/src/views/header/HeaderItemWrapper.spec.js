/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import HeaderItemWrapper from './HeaderItemWrapper';

describe('HeaderItemWrapper', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<HeaderItemWrapper />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders maxX styling if provided', () => {
    const wrapper = shallow(<HeaderItemWrapper maxX />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders maxY styling if provided', () => {
    const wrapper = shallow(<HeaderItemWrapper maxY />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders round styling if provided', () => {
    const wrapper = shallow(<HeaderItemWrapper round />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('States', () => {
    it('renders active styling if provided', () => {
      const wrapper = shallow(<HeaderItemWrapper active />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders focused styling if provided', () => {
      const wrapper = shallow(<HeaderItemWrapper focused />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders hovered styling if provided', () => {
      const wrapper = shallow(<HeaderItemWrapper hovered />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Products', () => {
    ['chat', 'connect', 'explore', 'guide', 'message', 'support', 'talk'].forEach(product => {
      it(`renders ${product} styling if provided`, () => {
        const wrapper = shallow(<HeaderItemWrapper product={product} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
