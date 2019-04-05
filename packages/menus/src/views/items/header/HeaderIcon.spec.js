/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import HeaderIcon from './HeaderIcon';

describe('HeaderIcon', () => {
  it('renders default styling', () => {
    const wrapper = shallow(
      <HeaderIcon>
        <svg />
      </HeaderIcon>
    );

    expect(wrapper).toHaveClassName('c-menu__item--header__icon');
  });
});
