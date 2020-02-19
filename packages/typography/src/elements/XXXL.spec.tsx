/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { renderRtl } from 'garden-test-utils';
import XXXL from './XXXL';

describe('XXXL', () => {
  it('applies correct styling with RTL locale', () => {
    const { container } = renderRtl(<XXXL>Hello world</XXXL>);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
