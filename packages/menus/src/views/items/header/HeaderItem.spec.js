/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import HeaderItem from './HeaderItem';

describe('HeaderItem', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<HeaderItem />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders icon styling if provided', () => {
    const wrapper = shallow(
      <HeaderItem containsIcon>
        <svg />
      </HeaderItem>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
