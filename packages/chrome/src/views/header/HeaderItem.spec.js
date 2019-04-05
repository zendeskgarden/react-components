/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import { StyledHeaderItem } from './HeaderItem';

describe('HeaderItem', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<StyledHeaderItem />);

    expect(wrapper).toHaveClassName('c-chrome__body__header__item');
  });

  it('renders maxX styling if provided', () => {
    const wrapper = shallow(<StyledHeaderItem maxX />);

    expect(wrapper).toHaveClassName('c-chrome__body__header__item--max-x');
  });

  it('renders maxY styling if provided', () => {
    const wrapper = shallow(<StyledHeaderItem maxY />);

    expect(wrapper).toHaveClassName('c-chrome__body__header__item--max-y');
  });

  it('renders logo styling if provided', () => {
    const wrapper = shallow(<StyledHeaderItem logo />);

    expect(wrapper).toHaveClassName('c-chrome__body__header__item--logo');
  });

  it('renders round styling if provided', () => {
    const wrapper = shallow(<StyledHeaderItem round />);

    expect(wrapper).toHaveClassName('c-chrome__body__header__item--round');
  });

  describe('States', () => {
    it('renders active styling if provided', () => {
      const wrapper = shallow(<StyledHeaderItem active />);

      expect(wrapper).toHaveClassName('is-active');
    });

    it('renders focused styling if provided', () => {
      const wrapper = shallow(<StyledHeaderItem focused />);

      expect(wrapper).toHaveClassName('is-focused');
    });

    it('renders hovered styling if provided', () => {
      const wrapper = shallow(<StyledHeaderItem hovered />);

      expect(wrapper).toHaveClassName('is-hovered');
    });
  });

  describe('Products', () => {
    ['chat', 'connect', 'explore', 'guide', 'message', 'support', 'talk'].forEach(product => {
      it(`renders ${product} styling if provided`, () => {
        const wrapper = shallow(<StyledHeaderItem product={product} />);

        expect(wrapper).toHaveClassName(`c-chrome__body__header__item--logo--${product}`);
      });
    });
  });
});
