/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import usePaneContext from './usePaneContext';

describe('usePaneContext', () => {
  it('has stubbed setId', () => {
    let paneContext: any;

    render(
      React.createElement(() => {
        paneContext = usePaneContext();

        return null;
      })
    );

    expect(paneContext.setId()).toBeUndefined();
  });
});
