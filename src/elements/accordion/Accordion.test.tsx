/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { userEvent } from '@testing-library/user-event';
import { ComponentPropsWithRef, createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { render } from '../../test/render';
import type { IAccordionProps } from '../../types/elements';
import { Accordion } from './Accordion';

const TEST_ID = 'accordion';
const HEADER_TEST_ID = 'header';
const LABEL_TEST_ID = 'label';
const PANEL_TEST_ID = 'panel';
const SECTION_TEST_ID = 'section';

interface ITestAccordionProps extends Partial<IAccordionProps> {
  headerProps?: ComponentPropsWithRef<'div'>;
  labelProps?: ComponentPropsWithRef<'button'>;
  panelProps?: ComponentPropsWithRef<'section'>;
  sectionProps?: ComponentPropsWithRef<'div'>;
}

const TestAccordion = ({
  children,
  headerProps,
  labelProps,
  level = 1,
  panelProps,
  sectionProps,
  ...other
}: ITestAccordionProps) => (
  <Accordion data-testid={TEST_ID} level={level} {...other}>
    <Accordion.Section data-testid={SECTION_TEST_ID} {...sectionProps}>
      <Accordion.Header data-testid={HEADER_TEST_ID} {...headerProps}>
        <Accordion.Label data-testid={LABEL_TEST_ID} {...labelProps}>
          {labelProps?.children || 'Label'}
        </Accordion.Label>
      </Accordion.Header>
      <Accordion.Panel data-testid={PANEL_TEST_ID} {...panelProps}>
        {panelProps?.children || 'Panel'}
      </Accordion.Panel>
    </Accordion.Section>
    {children}
  </Accordion>
);

describe('Accordion', () => {
  it('passes refs to underlying DOM elements', () => {
    const accordionRef = createRef<HTMLDivElement>();
    const headerRef = createRef<HTMLDivElement>();
    const labelRef = createRef<HTMLButtonElement>();
    const panelRef = createRef<HTMLElement>();
    const sectionRef = createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <TestAccordion
        ref={accordionRef}
        headerProps={{ ref: headerRef }}
        labelProps={{ ref: labelRef }}
        panelProps={{ ref: panelRef }}
        sectionProps={{ ref: sectionRef }}
      />
    );
    const accordionElement = getByTestId(TEST_ID);
    const headerElement = getByTestId(HEADER_TEST_ID);
    const labelElement = getByTestId(LABEL_TEST_ID);
    const panelElement = getByTestId(PANEL_TEST_ID);
    const sectionElement = getByTestId(SECTION_TEST_ID);

    expect(accordionElement).toBe(accordionRef.current);
    expect(sectionElement).toBe(sectionRef.current);
    expect(headerElement).toBe(headerRef.current);
    expect(labelElement).toBe(labelRef.current);
    expect(panelElement).toBe(panelRef.current);
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

  it('composes header event handlers', async () => {
    const handleClick = vi.fn();
    const handleMouseOver = vi.fn();
    const handleMouseOut = vi.fn();
    const { getByTestId } = render(
      <TestAccordion
        headerProps={{
          onClick: handleClick,
          onMouseOver: handleMouseOver,
          onMouseOut: handleMouseOut
        }}
      />
    );
    const element = getByTestId(HEADER_TEST_ID);

    await userEvent.hover(element);
    element.click();
    await userEvent.unhover(element);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleMouseOver).toHaveBeenCalledTimes(1);
    expect(handleMouseOut).toHaveBeenCalledTimes(1);
  });

  it('renders the label as a button with no default behavior', () => {
    const { getByTestId } = render(<TestAccordion />);
    const element = getByTestId(LABEL_TEST_ID);

    expect(element).toHaveAttribute('type', 'button');
  });
});
