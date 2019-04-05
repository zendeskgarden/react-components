/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';

describe('Avatar', () => {
  const defaultImage = <img src="test" alt="test" />;

  it('applies default styling correctly', () => {
    const wrapper = shallow(<Avatar>{defaultImage}</Avatar>);

    expect(wrapper).toHaveClassName('c-avatar');
  });

  it('applies system styling correctly if provided', () => {
    const wrapper = shallow(<Avatar system>{defaultImage}</Avatar>);

    expect(wrapper).toHaveClassName('c-avatar--system');
  });

  describe('Sizes', () => {
    ['extrasmall', 'small', 'large'].forEach(size => {
      it(`applies ${size} correctly if provided`, () => {
        const wrapper = shallow(<Avatar size={size}>{defaultImage}</Avatar>);
        const classes = {
          extrasmall: 'c-avatar--xs',
          small: 'c-avatar--sm',
          large: 'c-avatar--lg'
        };

        expect(wrapper).toHaveClassName(classes[size]);
      });
    });
  });

  describe('States', () => {
    it('applies disabled styling if provided', () => {
      const wrapper = shallow(<Avatar disabled>{defaultImage}</Avatar>);

      expect(wrapper).toHaveClassName('is-disabled');
    });

    it('applies borderless styling if provided', () => {
      const wrapper = shallow(<Avatar isBorderless>{defaultImage}</Avatar>);

      expect(wrapper).toHaveClassName('c-avatar--borderless');
    });
  });
});
