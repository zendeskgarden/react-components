/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from '@zendeskgarden/react-testing';
import LG from './LG';

describe('LG', () => {
  it('applies monospace styling if provided', () => {
    const wrapper = shallow(<LG monospace />);

    expect(wrapper).toHaveStyleRule('font-family', expect.stringContaining('monospace'));
  });

  it('applies correct styling with RTL locale', () => {
    const wrapper = shallowWithTheme(<LG />, { rtl: true });

    expect(wrapper).toHaveStyleRule('direction', 'rtl');
  });
});
