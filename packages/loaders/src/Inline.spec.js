/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import Inline from './Inline';
import { mountWithTheme } from '@zendeskgarden/react-testing';

describe('Inline Loader', () => {
  it('displays correct styling by default', () => {
    expect(mountWithTheme(<Inline />)).toMatchSnapshot();
  });

  it('displays correct styling in RTL mode', () => {
    expect(mountWithTheme(<Inline />, { rtl: true })).toMatchSnapshot();
  });

  it('customizes size when provided', () => {
    expect(mountWithTheme(<Inline size={32} />)).toMatchSnapshot();
  });

  it('customizes color when provided', () => {
    expect(mountWithTheme(<Inline color="red" />)).toMatchSnapshot();
  });
});
