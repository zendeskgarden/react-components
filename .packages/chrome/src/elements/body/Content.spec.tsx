/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Body } from './Body';
import { Content } from './Content';

describe('Content', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { queryByTestId } = render(
      <Body>
        <Content ref={ref} data-test-id="content" />
      </Body>
    );

    expect(queryByTestId('content')).toBe(ref.current);
  });
});
