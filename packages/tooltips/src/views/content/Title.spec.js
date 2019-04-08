/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

describe('Title', () => {
  it('renders default styling correctly', () => {
    const wrapper = shallow(<Title />);

    expect(wrapper).toHaveClassName('c-tooltip__title');
  });
});
