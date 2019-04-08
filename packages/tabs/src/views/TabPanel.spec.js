/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import TabPanel from './TabPanel';

describe('TabPanel', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<TabPanel />);

    expect(wrapper).toHaveClassName('c-tab__panel');
  });
});
