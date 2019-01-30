/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import Skeleton from './Skeleton';
import { mountWithTheme } from '@zendeskgarden/react-testing';

describe('Skeleton Loader', () => {
  it('displays correct styling by default', () => {
    expect(mountWithTheme(<Skeleton />)).toMatchSnapshot();
  });

  it('displays correct styling in RTL mode', () => {
    expect(mountWithTheme(<Skeleton />, { rtl: true })).toMatchSnapshot();
  });

  it('customizes width when provided', () => {
    expect(mountWithTheme(<Skeleton width="25px" />)).toMatchSnapshot();
  });

  it('customizes height when provided', () => {
    expect(mountWithTheme(<Skeleton height="25px" />)).toMatchSnapshot();
  });

  it('customizes style when provided', () => {
    expect(mountWithTheme(<Skeleton style={{ borderRadius: 25 }} />)).toMatchSnapshot();
  });

  it('customizes dark styling when provided', () => {
    expect(mountWithTheme(<Skeleton dark />)).toMatchSnapshot();
  });
});
