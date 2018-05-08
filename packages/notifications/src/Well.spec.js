/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';
import Well from './Well';

describe('Well', () => {
  it('renders default well styling', () => {
    const wrapper = shallow(<Well />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders with RTL styling if applied', () => {
    const wrapper = shallowWithTheme(<Well />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders recessed styling correctly', () => {
    const wrapper = shallow(<Well recessed />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders floating styling correctly', () => {
    const wrapper = shallow(<Well floating />);

    expect(wrapper).toMatchSnapshot();
  });
});
