/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';
import { describe, expect, it } from 'vitest';

import type { IAccordionProps } from '../../types/elements';

import { render } from '../../test/render';
import { Accordion } from './Accordion';

const TEST_ID = 'accordion';
const HEADER_TEST_ID = 'header';
const LABEL_TEST_ID = 'label';
const PANEL_TEST_ID = 'panel';
const SECTION_TEST_ID = 'section';

const TestAccordion = ({ children, level = 1, ...other }: Partial<IAccordionProps>) => (
  <Accordion data-testid={TEST_ID} level={level} {...other}>
    <Accordion.Section data-testid={SECTION_TEST_ID}>
      <Accordion.Header data-testid={HEADER_TEST_ID}>
        <Accordion.Label data-testid={LABEL_TEST_ID}>Label</Accordion.Label>
      </Accordion.Header>
      <Accordion.Panel data-testid={PANEL_TEST_ID}>Panel</Accordion.Panel>
    </Accordion.Section>
    {children}
  </Accordion>
);

describe('Accordion', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByTestId } = render(<TestAccordion ref={ref} />);
    const element = getByTestId(TEST_ID);

    expect(element).toBe(ref.current);
  });

  it('has default expanded sections in an uncontrolled accordion', () => {
    const LABEL_2_TEST_ID = 'label-2';
    const { getByTestId } = render(
      <TestAccordion defaultExpandedSections={[1]}>
        <Accordion.Section>
          <Accordion.Header>
            <Accordion.Label data-testid={LABEL_2_TEST_ID} />
          </Accordion.Header>
        </Accordion.Section>
      </TestAccordion>
    );
    const collapsedElement = getByTestId(LABEL_TEST_ID);
    const expandedElement = getByTestId(LABEL_2_TEST_ID);

    expect(collapsedElement).toHaveAttribute('aria-expanded', 'false');
    expect(expandedElement).toHaveAttribute('aria-expanded', 'true');
  });
});
