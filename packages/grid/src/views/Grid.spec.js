/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';

import Grid from './Grid';

describe('Grid', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Grid />);

    expect(wrapper).toHaveClassName('container-fluid');
  });

  it('renders RTL styling if provided', () => {
    const wrapper = shallowWithTheme(<Grid />, { rtl: true });

    expect(wrapper).toHaveClassName('is-rtl');
  });

  it('disables fluid styling if provided', () => {
    const wrapper = shallow(<Grid fluid={false} />);

    expect(wrapper).toHaveClassName('container');
  });

  it('renders debug styling if provided', () => {
    const wrapper = shallow(<Grid debug />);

    expect(wrapper).toHaveClassName('is-debug');
  });
});
