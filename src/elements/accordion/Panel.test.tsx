/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { DARK_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import type { IAccordionProps } from '../../types/elements';
import { Accordion } from './Accordion';

const TRANSITION = 'padding 0.25s ease-in-out,grid-template-rows 0.25s ease-in-out';

const renderPanel = (props: Partial<IAccordionProps> = {}, theme?: typeof DEFAULT_THEME) =>
  render(
    <Accordion level={3} {...props}>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Label Button</Accordion.Label>
        </Accordion.Header>
        <Accordion.Panel>Panel content</Accordion.Panel>
      </Accordion.Section>
    </Accordion>,
    { theme }
  );

describe('Panel', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();

    const { getByRole } = render(
      <Accordion level={3}>
        <Accordion.Section>
          <Accordion.Panel ref={ref} />
        </Accordion.Section>
      </Accordion>
    );

    expect(getByRole('region')).toBe(ref.current);
  });

  it('does not let props override the garden attributes', () => {
    const { getByRole } = render(
      <Accordion level={3}>
        <Accordion.Section>
          <Accordion.Panel data-garden-id="custom" data-garden-version="0.0.0" />
        </Accordion.Section>
      </Accordion>
    );

    expect(getByRole('region')).toHaveAttribute('data-garden-id', 'accordions.panel');
    expect(getByRole('region')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  describe('Inert', () => {
    it('is inert while the section is collapsed', () => {
      const { getByRole } = renderPanel({ defaultExpandedSections: [] });

      expect(getByRole('region', { hidden: true })).toHaveAttribute('inert');
    });

    it('is not inert while the section is expanded', () => {
      const { getByRole } = renderPanel({ defaultExpandedSections: [0] });

      expect(getByRole('region')).not.toHaveAttribute('inert');
    });
  });

  describe('Styling', () => {
    const { base } = DEFAULT_THEME.space;

    it('renders collapsed styling', () => {
      const { getByRole } = renderPanel({ defaultExpandedSections: [] });
      const panel = getByRole('region', { hidden: true });

      expect(panel).toHaveStyleRule('grid-template-rows', '0fr');
      expect(panel).toHaveStyleRule('padding', `0px ${base * 5}px 0px`);
      expect(panel).toHaveStyleRule('border-bottom', DEFAULT_THEME.borders.sm);
    });

    it('renders expanded styling', () => {
      const { getByRole } = renderPanel({ defaultExpandedSections: [0] });

      expect(getByRole('region')).toHaveStyleRule('grid-template-rows', '1fr');
      expect(getByRole('region')).toHaveStyleRule(
        'padding',
        `${base * 2}px ${base * 5}px ${base * 8}px`
      );
    });

    it('renders compact expanded styling', () => {
      const { getByRole } = renderPanel({ isCompact: true, defaultExpandedSections: [0] });

      expect(getByRole('region')).toHaveStyleRule('grid-template-rows', '1fr');
      expect(getByRole('region')).toHaveStyleRule(
        'padding',
        `${base * 2}px ${base * 3}px ${base * 4}px`
      );
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders the border color in %s mode', (_, theme) => {
      const { getByRole } = renderPanel({}, theme);

      expect(getByRole('region')).toHaveStyleRule(
        'border-bottom-color',
        getColor({ theme, variable: 'border.default' })
      );
    });

    it('renders a transparent border if bare', () => {
      const { getByRole } = renderPanel({ isBare: true });

      expect(getByRole('region')).toHaveStyleRule('border-bottom', DEFAULT_THEME.borders.sm);
      expect(getByRole('region')).toHaveStyleRule('border-bottom-color', 'transparent');
    });

    it('animates by default', () => {
      const { getByRole } = renderPanel();

      expect(getByRole('region')).toHaveStyleRule('transition', TRANSITION);
    });

    it('does not animate if animation is disabled', () => {
      const { getByRole } = renderPanel({ isAnimated: false });

      expect(getByRole('region')).not.toHaveStyleRule('transition');
    });
  });
});
