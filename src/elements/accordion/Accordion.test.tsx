/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { screen } from '@testing-library/react';
import { createRef } from 'react';

import { render } from '../../test/render';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByTestId } = render(<Accordion ref={ref} data-test-id="accordion" level={3} />);

    expect(getByTestId('accordion')).toBe(ref.current);
  });

  it('does not let props override the garden attributes', () => {
    const { getByTestId } = render(
      <Accordion
        level={3}
        data-test-id="accordion"
        data-garden-id="custom"
        data-garden-version="0.0.0"
      />
    );

    expect(getByTestId('accordion')).toHaveAttribute('data-garden-id', 'accordions.accordion');
    expect(getByTestId('accordion')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  it('has default expanded panels in an uncontrolled accordion', () => {
    render(
      <Accordion level={3} defaultExpandedSections={[1]}>
        <Accordion.Section>
          <Accordion.Header>
            <Accordion.Label>Turnip</Accordion.Label>
          </Accordion.Header>
          <Accordion.Panel>Turnip greens</Accordion.Panel>
        </Accordion.Section>
        <Accordion.Section>
          <Accordion.Header>
            <Accordion.Label>Corn</Accordion.Label>
          </Accordion.Header>
          <Accordion.Panel>Corn amaranth salsify</Accordion.Panel>
        </Accordion.Section>
      </Accordion>
    );

    expect(screen.getByText('Turnip')).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText('Corn')).toHaveAttribute('aria-expanded', 'true');
  });
});
