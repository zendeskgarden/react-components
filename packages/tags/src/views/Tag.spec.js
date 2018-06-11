/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';

import Tag from './Tag';

describe('Tag', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Tag />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling if provided', () => {
    const wrapper = shallowWithTheme(<Tag />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders pill styling if provided', () => {
    const wrapper = shallow(<Tag pill />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('size', () => {
    it('renders small styling if provided', () => {
      const wrapper = shallow(<Tag size="small" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders large styling if provided', () => {
      const wrapper = shallow(<Tag size="large" />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('state', () => {
    it('renders focused styling if provided', () => {
      const wrapper = shallow(<Tag focused />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders hovered styling if provided', () => {
      const wrapper = shallow(<Tag hovered />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('visual types', () => {
    it('renders grey styling if provided', () => {
      const wrapper = shallow(<Tag type="grey" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders blue styling if provided', () => {
      const wrapper = shallow(<Tag type="blue" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders kale styling if provided', () => {
      const wrapper = shallow(<Tag type="kale" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders red styling if provided', () => {
      const wrapper = shallow(<Tag type="red" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders green styling if provided', () => {
      const wrapper = shallow(<Tag type="green" />);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders yellow styling if provided', () => {
      const wrapper = shallow(<Tag type="yellow" />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
