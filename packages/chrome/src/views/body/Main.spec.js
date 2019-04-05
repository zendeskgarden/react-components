/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

describe('Main', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper).toHaveClassName('c-chrome__body__content__main');
  });
});
