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
    it('renders number size if provided', () => {
      const wrapper = shallow(<Col size={4} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders boolean size if provided', () => {
      const wrapper = shallow(<Col sm />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders xs size if provided', () => {
      const wrapper = shallow(<Col xs={6} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders sm size if provided', () => {
      const wrapper = shallow(<Col sm={6} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders md size if provided', () => {
      const wrapper = shallow(<Col md={6} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders lg size if provided', () => {
      const wrapper = shallow(<Col lg={6} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders xl size if provided', () => {
      const wrapper = shallow(<Col xl={6} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Offsets', () => {
    it('renders xs offset if provided', () => {
      const wrapper = shallow(<Col offsetXs={6} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders sm offset if provided', () => {
      const wrapper = shallow(<Col offsetSm={6} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders md offset if provided', () => {
      const wrapper = shallow(<Col offsetMd={6} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders lg offset if provided', () => {
      const wrapper = shallow(<Col offsetLg={6} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders xl offset if provided', () => {
      const wrapper = shallow(<Col offsetXl={6} />);

      expect(wrapper).toMatchSnapshot();
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
