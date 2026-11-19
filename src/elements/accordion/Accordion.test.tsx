/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { createRef, useState } from 'react';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { Accordion } from './Accordion';

const SECTION = '[data-garden-id="accordions.section"]';

/* A function, not a component: `Children.toArray` in `Accordion` must see
 * each section as a direct child. */
const wellSections = () => [
  <Accordion.Section key={0}>
    <Accordion.Header>
      <Accordion.Label>Turnip</Accordion.Label>
    </Accordion.Header>
    <Accordion.Panel>Turnip greens</Accordion.Panel>
  </Accordion.Section>,
  <Accordion.Section key={1}>
    <Accordion.Header>
      <Accordion.Label>Corn</Accordion.Label>
    </Accordion.Header>
    <Accordion.Panel>Corn amaranth salsify</Accordion.Panel>
  </Accordion.Section>
];

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

  describe('Well', () => {
    const user = userEvent.setup();

    it('does not forward isWell to the DOM', () => {
      const { getByTestId } = render(
        <Accordion level={3} isWell data-test-id="accordion">
          {wellSections()}
        </Accordion>
      );

      expect(getByTestId('accordion')).not.toHaveAttribute('isWell');
    });

    it('separates well sections with a built-in 40px gap', () => {
      const { getByTestId } = render(
        <Accordion level={3} isWell data-test-id="accordion">
          {wellSections()}
        </Accordion>
      );
      const accordion = getByTestId('accordion');

      expect(accordion).toHaveStyleRule('display', 'flex');
      expect(accordion).toHaveStyleRule('flex-direction', 'column');
      expect(accordion).toHaveStyleRule('gap', DEFAULT_THEME.space.xl);
    });

    it('renders no flex gap without isWell', () => {
      const { getByTestId } = render(
        <Accordion level={3} data-test-id="accordion">
          {wellSections()}
        </Accordion>
      );
      const accordion = getByTestId('accordion');

      expect(accordion).not.toHaveStyleRule('display');
      expect(accordion).not.toHaveStyleRule('gap');
    });

    it('toggles sections independently with isMultiExpandable', async () => {
      render(
        <Accordion level={3} isWell isMultiExpandable defaultExpandedSections={[]}>
          {wellSections()}
        </Accordion>
      );
      const turnip = screen.getByRole('button', { name: 'Turnip' });
      const corn = screen.getByRole('button', { name: 'Corn' });

      await user.click(turnip);

      expect(turnip).toHaveAttribute('aria-expanded', 'true');
      expect(corn).toHaveAttribute('aria-expanded', 'false');

      await user.click(corn);

      expect(turnip).toHaveAttribute('aria-expanded', 'true');
      expect(corn).toHaveAttribute('aria-expanded', 'true');

      await user.click(turnip);

      expect(turnip).toHaveAttribute('aria-expanded', 'false');
      expect(corn).toHaveAttribute('aria-expanded', 'true');
    });

    it('still honors the deprecated isExpandable prop', async () => {
      render(
        <Accordion level={3} isWell isExpandable defaultExpandedSections={[]}>
          {wellSections()}
        </Accordion>
      );
      const turnip = screen.getByRole('button', { name: 'Turnip' });
      const corn = screen.getByRole('button', { name: 'Corn' });

      await user.click(turnip);
      await user.click(corn);

      expect(turnip).toHaveAttribute('aria-expanded', 'true');
      expect(corn).toHaveAttribute('aria-expanded', 'true');
    });

    it('supports controlled expandedSections with onChange', async () => {
      const Fixture = () => {
        const [expandedSections, setExpandedSections] = useState<number[]>([0]);
        const handleChange = (value: number) =>
          setExpandedSections(
            expandedSections.includes(value)
              ? expandedSections.filter(section => section !== value)
              : [...expandedSections, value]
          );

        return (
          <Accordion
            level={3}
            isWell
            isMultiExpandable
            expandedSections={expandedSections}
            onChange={handleChange}
          >
            {wellSections()}
          </Accordion>
        );
      };

      render(<Fixture />);
      const turnip = screen.getByRole('button', { name: 'Turnip' });
      const corn = screen.getByRole('button', { name: 'Corn' });

      expect(turnip).toHaveAttribute('aria-expanded', 'true');

      await user.click(corn);

      expect(turnip).toHaveAttribute('aria-expanded', 'true');
      expect(corn).toHaveAttribute('aria-expanded', 'true');

      await user.click(turnip);

      expect(turnip).toHaveAttribute('aria-expanded', 'false');
      expect(corn).toHaveAttribute('aria-expanded', 'true');
    });

    it('keeps panel child state across collapse, mounted and inert', async () => {
      render(
        <Accordion level={3} isWell defaultExpandedSections={[0]}>
          <Accordion.Section>
            <Accordion.Header>
              <Accordion.Label>Turnip</Accordion.Label>
            </Accordion.Header>
            <Accordion.Panel>
              <input aria-label="Note" defaultValue="keep me" />
            </Accordion.Panel>
          </Accordion.Section>
        </Accordion>
      );
      const turnip = screen.getByRole('button', { name: 'Turnip' });
      const input = screen.getByRole('textbox', { name: 'Note' });

      await user.click(turnip);

      expect(screen.getByRole('region', { hidden: true })).toHaveAttribute('inert');
      expect(input).toBeInTheDocument();

      await user.click(turnip);

      expect(input).toHaveValue('keep me');
      expect(screen.getByRole('region')).not.toHaveAttribute('inert');
    });

    it('does not change outer section styles from a nested accordion', () => {
      const { container } = render(
        <Accordion level={3} isWell>
          <Accordion.Section>
            <Accordion.Header>
              <Accordion.Label>Turnip</Accordion.Label>
            </Accordion.Header>
            <Accordion.Panel>
              <Accordion level={4}>
                <Accordion.Section>
                  <Accordion.Header>
                    <Accordion.Label>Corn</Accordion.Label>
                  </Accordion.Header>
                  <Accordion.Panel>Corn amaranth salsify</Accordion.Panel>
                </Accordion.Section>
              </Accordion>
            </Accordion.Panel>
          </Accordion.Section>
        </Accordion>
      );
      const [outerSection, innerSection] = Array.from(container.querySelectorAll(SECTION));

      expect(outerSection).toHaveStyleRule('border', DEFAULT_THEME.borders.sm);
      expect(innerSection).not.toHaveStyleRule('border');
      expect(innerSection).not.toHaveStyleRule('background-color');
    });

    it('renders in dark mode', () => {
      const { container } = render(
        <Accordion level={3} isWell>
          {wellSections()}
        </Accordion>,
        { theme: DARK_THEME }
      );

      expect(container.querySelector(SECTION)).toHaveStyleRule('border', DEFAULT_THEME.borders.sm);
    });

    it('renders in RTL', () => {
      const { container } = render(
        <Accordion level={3} isWell>
          {wellSections()}
        </Accordion>,
        { theme: RTL_THEME }
      );

      expect(container.querySelector(SECTION)).toHaveStyleRule('direction', 'rtl');
    });
  });
});
