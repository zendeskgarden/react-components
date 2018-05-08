/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';
import ButtonGroupView from './ButtonGroupView';

describe('ButtonGroupView', () => {
  it('renders correct styling', () => {
    const wrapper = shallow(<ButtonGroupView />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly styling when RTL', () => {
    const wrapper = shallowWithTheme(<ButtonGroupView />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });
});
