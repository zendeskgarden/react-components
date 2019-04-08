/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';

import Hint from './Hint';

describe('Hint', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Hint />);

    expect(wrapper).toHaveClassName('c-chk__hint');
    expect(wrapper).toHaveClassName('c-chk__hint--toggle');
  });

  it('renders RTL styling', () => {
    const wrapper = shallowWithTheme(<Hint />, { rtl: true });

    expect(wrapper).toHaveClassName('is-rtl');
  });
});
