/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import TypingIndicator from './TypingIndicator';
import { mountWithTheme } from '@zendeskgarden/react-testing';

describe('TypingIndicator Loader', () => {
  it('displays correct styling by default', () => {
    expect(mountWithTheme(<TypingIndicator />)).toMatchSnapshot();
  });

  it('displays correct styling in RTL mode', () => {
    expect(mountWithTheme(<TypingIndicator />, { rtl: true })).toMatchSnapshot();
  });

  it('customizes size when provided', () => {
    expect(mountWithTheme(<TypingIndicator size={32} />)).toMatchSnapshot();
  });

  it('customizes color when provided', () => {
    expect(mountWithTheme(<TypingIndicator color="red" />)).toMatchSnapshot();
  });
});
