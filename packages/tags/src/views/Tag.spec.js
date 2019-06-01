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

    expect(wrapper).toHaveClassName('c-tag');
  });

  it('renders RTL styling if provided', () => {
    const wrapper = shallowWithTheme(<Tag />, { rtl: true });

    expect(wrapper).toHaveClassName('is-rtl');
  });

  it('renders pill styling if provided', () => {
    const wrapper = shallow(<Tag pill />);

    expect(wrapper).toHaveClassName('c-tag--pill');
  });

  it('renders round styling if provided', () => {
    const wrapper = shallow(<Tag round />);

    expect(wrapper).toHaveClassName('c-tag--round');
  });

  describe('size', () => {
    it('renders small styling if provided', () => {
      const wrapper = shallow(<Tag size="small" />);

      expect(wrapper).toHaveClassName('c-tag--sm');
    });

    it('renders large styling if provided', () => {
      const wrapper = shallow(<Tag size="large" />);

      expect(wrapper).toHaveClassName('c-tag--lg');
    });
  });

  describe('state', () => {
    it('renders focused styling if provided', () => {
      const wrapper = shallow(<Tag focused />);

      expect(wrapper).toHaveClassName('is-focused');
    });

    it('renders hovered styling if provided', () => {
      const wrapper = shallow(<Tag hovered />);

      expect(wrapper).toHaveClassName('is-hovered');
    });
  });

  describe('visual types', () => {
    it('renders grey styling if provided', () => {
      const wrapper = shallow(<Tag type="grey" />);

      expect(wrapper).toHaveClassName('c-tag--grey');
    });

    it('renders blue styling if provided', () => {
      const wrapper = shallow(<Tag type="blue" />);

      expect(wrapper).toHaveClassName('c-tag--blue');
    });

    it('renders kale styling if provided', () => {
      const wrapper = shallow(<Tag type="kale" />);

      expect(wrapper).toHaveClassName('c-tag--kale');
    });

    it('renders red styling if provided', () => {
      const wrapper = shallow(<Tag type="red" />);

      expect(wrapper).toHaveClassName('c-tag--red');
    });

    it('renders green styling if provided', () => {
      const wrapper = shallow(<Tag type="green" />);

      expect(wrapper).toHaveClassName('c-tag--green');
    });

    it('renders yellow styling if provided', () => {
      const wrapper = shallow(<Tag type="yellow" />);

      expect(wrapper).toHaveClassName('c-tag--yellow');
    });

    it('renders fuschia styling if provided', () => {
      const wrapper = shallow(<Tag type="fuschia" />);

      expect(wrapper).toHaveClassName('c-tag--fuschia');
    });

    it('renders pink styling if provided', () => {
      const wrapper = shallow(<Tag type="pink" />);

      expect(wrapper).toHaveClassName('c-tag--pink');
    });

    it('renders crimson styling if provided', () => {
      const wrapper = shallow(<Tag type="crimson" />);

      expect(wrapper).toHaveClassName('c-tag--crimson');
    });

    it('renders orange styling if provided', () => {
      const wrapper = shallow(<Tag type="orange" />);

      expect(wrapper).toHaveClassName('c-tag--orange');
    });

    it('renders lemon styling if provided', () => {
      const wrapper = shallow(<Tag type="lemon" />);

      expect(wrapper).toHaveClassName('c-tag--lemon');
    });

    it('renders lime styling if provided', () => {
      const wrapper = shallow(<Tag type="lime" />);

      expect(wrapper).toHaveClassName('c-tag--lime');
    });

    it('renders mint styling if provided', () => {
      const wrapper = shallow(<Tag type="mint" />);

      expect(wrapper).toHaveClassName('c-tag--mint');
    });

    it('renders teal styling if provided', () => {
      const wrapper = shallow(<Tag type="teal" />);

      expect(wrapper).toHaveClassName('c-tag--teal');
    });

    it('renders azure styling if provided', () => {
      const wrapper = shallow(<Tag type="azure" />);

      expect(wrapper).toHaveClassName('c-tag--azure');
    });

    it('renders royal styling if provided', () => {
      const wrapper = shallow(<Tag type="royal" />);

      expect(wrapper).toHaveClassName('c-tag--royal');
    });

    it('renders purple styling if provided', () => {
      const wrapper = shallow(<Tag type="purple" />);

      expect(wrapper).toHaveClassName('c-tag--purple');
    });
  });
});
