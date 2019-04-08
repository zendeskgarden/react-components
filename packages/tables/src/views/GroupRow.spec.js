/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import GroupRow from './GroupRow';

describe('GroupRow', () => {
  it('applies default styling by default', () => {
    const wrapper = shallow(<GroupRow />);

    expect(wrapper).toHaveClassName('c-table__row');
    expect(wrapper).toHaveClassName('c-table__row--group');
  });
});
