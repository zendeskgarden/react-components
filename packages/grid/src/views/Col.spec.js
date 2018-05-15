/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Col from './Col';

describe('Col', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Col />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('Sizing', () => {
    const sizes = [
      {
        size: 4
      },
      {
        sm: true
      },
      {
        xs: 6
      },
      {
        sm: 6
      },
      {
        md: 6
      },
      {
        lg: 6
      },
      {
        xl: 6
      }
    ];

    sizes.forEach(props => {
      const key = Object.keys(props)[0];

      it(`renders ${key} if provided`, () => {
        const wrapper = shallow(<Col {...props} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('Offsets', () => {
    ['offsetXs', 'offsetSm', 'offsetMd', 'offsetLg', 'offsetXl'].forEach(offset => {
      const props = {
        [offset]: 6
      };

      it(`renders ${offset} if provided`, () => {
        const wrapper = shallow(<Col {...props} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('Align Self', () => {
    ['start', 'center', 'end'].forEach(alignment => {
      it(`renders ${alignment} self alignment if provided`, () => {
        const wrapper = shallow(<Col alignSelf={alignment} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('Justify Content', () => {
    ['start', 'center', 'end', 'around', 'between'].forEach(justifyContent => {
      it(`renders ${justifyContent} justify content if provided`, () => {
        const wrapper = shallow(<Col justifyContent={justifyContent} />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('Order', () => {
    it('renders pseudo order if provided', () => {
      const wrapper = shallow(<Col order="first" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders string based order if provided', () => {
      const wrapper = shallow(<Col order="md-12" />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
