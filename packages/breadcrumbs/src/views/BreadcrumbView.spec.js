/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';
import BreadcrumbView from './BreadcrumbView';

describe('BreadcrumbView', () => {
  it('renders default styling correctly', () => {
    const wrapper = shallow(<BreadcrumbView />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders RTL styling correctly', () => {
    const wrapper = shallowWithTheme(<BreadcrumbView />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });
});
