/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import useSplitterContext from './useSplitterContext';

describe('usePaneContext', () => {
  it('has stubbed methods', () => {
    let splitterContext: any;

    render(
      React.createElement(() => {
        splitterContext = useSplitterContext();

        return null;
      })
    );

    expect(splitterContext.setColumnValue()).toBeUndefined();
    expect(splitterContext.setRowValue()).toBeUndefined();
    expect(splitterContext.getLayoutValue()).toBe(0);
  });
});
