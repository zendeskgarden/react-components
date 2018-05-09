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
  const defaultImage = <img src="test" />;

  it('applies default styling correctly', () => {
    const wrapper = shallow(<Avatar>{defaultImage}</Avatar>);

    expect(wrapper).toMatchSnapshot();
  });

  it('applies system styling correclty if provided', () => {
    const wrapper = shallow(<Avatar system>{defaultImage}</Avatar>);

    expect(wrapper).toMatchSnapshot();
  });

  describe('Sizes', () => {
    ['small', 'large'].forEach(size => {
      it(`applies ${size} correctly if provided`, () => {
        const wrapper = shallow(<Avatar size={size}>{defaultImage}</Avatar>);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('States', () => {
    it('applies out disabled if provided', () => {
      const wrapper = shallow(<Avatar disabled>{defaultImage}</Avatar>);

      expect(wrapper).toMatchSnapshot();
    });

    it('applies borderless styling if provided', () => {
      const wrapper = shallow(<Avatar isBorderless>{defaultImage}</Avatar>);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
