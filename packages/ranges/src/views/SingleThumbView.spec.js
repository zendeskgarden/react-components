/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';

import SingleThumbView from './SingleThumbView';

describe('SingleThumbView', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<SingleThumbView />);

    expect(wrapper).toHaveClassName('c-range__input');
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<SingleThumbView />, { rtl: true });

    expect(wrapper).toHaveClassName('is-rtl');
  });

  it('renders disabled styling if provided', () => {
    const wrapper = shallow(<SingleThumbView disabled />);

    expect(wrapper).toHaveClassName('is-disabled');
  });

  it('renders focused styling if provided', () => {
    const wrapper = shallow(<SingleThumbView focused />);

    expect(wrapper).toHaveClassName('is-focused');
  });

  it('renders hovered styling if provided', () => {
    const wrapper = shallow(<SingleThumbView hovered />);

    expect(wrapper).toHaveClassName('is-hovered');
  });

  it('renders background-size correctly', () => {
    const wrapper = shallow(<SingleThumbView backgroundSize="95%" />);

    expect(wrapper).toHaveStyleRule('background-size', '95%', {
      modifier: '&&'
    });
  });
});
