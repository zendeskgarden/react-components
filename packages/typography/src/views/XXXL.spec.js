/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import XXXL from './XXXL';

describe('XXXL', () => {
  const Example = props => <XXXL {...props}>Hello world</XXXL>;

  it('applies correct styling by default', () => {
    const wrapper = mountWithTheme(<Example />);

    expect(wrapper).toMatchSnapshot();
  });

  it('applies correct styling with RTL locale', () => {
    const wrapper = mountWithTheme(<Example />, { rtl: true });

    expect(wrapper).toMatchSnapshot();
  });
});
