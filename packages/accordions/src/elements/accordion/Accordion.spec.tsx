/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(<Accordion ref={ref} data-test-id="accordion" level={3} />);

    expect(getByTestId('accordion')).toBe(ref.current);
  });
});
