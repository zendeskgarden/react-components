/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import { Accordion } from './Accordion';

describe('Section', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Accordion level={3}>
        <Accordion.Section data-test-id="section" ref={ref} />
      </Accordion>
    );

    expect(getByTestId('section')).toBe(ref.current);
  });

  it('does not let props override the garden attributes', () => {
    const { getByTestId } = render(
      <Accordion level={3}>
        <Accordion.Section
          data-test-id="section"
          data-garden-id="custom"
          data-garden-version="0.0.0"
        />
      </Accordion>
    );

    expect(getByTestId('section')).toHaveAttribute('data-garden-id', 'accordions.section');
    expect(getByTestId('section')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });
});
