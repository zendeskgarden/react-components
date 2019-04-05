/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import XL from './XL';

describe('XL', () => {
  const Example = props => <XL {...props}>Hello world</XL>;

  it('applies correct styling with RTL locale', () => {
    const wrapper = mountWithTheme(<Example />, { rtl: true });

    expect(wrapper.childAt(0)).toHaveStyleRule('direction', 'rtl');
  });
});
