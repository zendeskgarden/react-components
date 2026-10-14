/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Accordion } from '../Accordion';

describe('Section', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Accordion level={3}>
        <Accordion.Section data-test-id="section" ref={ref} />
      </Accordion>
    );

    expect(getByTestId('section')).toBe(ref.current);
  });
});
