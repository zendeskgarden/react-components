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

const SECTION = '[data-garden-id="accordions.section"]';

const renderSection = (props: Partial<IAccordionProps> = {}, theme?: typeof DEFAULT_THEME) =>
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

  describe('Well', () => {
    it('passes ref to underlying DOM element', () => {
      const ref = createRef<HTMLDivElement>();
      const { container } = render(
        <Accordion level={3} isWell>
          <Accordion.Section ref={ref} />
        </Accordion>
      );

      expect(container.querySelector(SECTION)).toBe(ref.current);
    });

    it('renders well styling', () => {
      const { container } = renderSection({ isWell: true, defaultExpandedSections: [] });
      const section = container.querySelector(SECTION);

      expect(section).toHaveStyleRule('border', DEFAULT_THEME.borders.sm);
      expect(section).toHaveStyleRule(
        'border-color',
        getColor({ theme: DEFAULT_THEME, variable: 'border.default' })
      );
      expect(section).toHaveStyleRule('border-radius', DEFAULT_THEME.borderRadii.xl);
      expect(section).toHaveStyleRule('padding', '0');
      expect(section).toHaveAttribute('data-garden-id', 'accordions.section');
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders the collapsed and expanded backgrounds in %s mode', (_, theme) => {
      const { container } = renderSection({ isWell: true, defaultExpandedSections: [] }, theme);
      const section = container.querySelector(SECTION);

      expect(section).toHaveStyleRule(
        'background-color',
        getColor({ theme, variable: 'background.default' })
      );

      const expanded = renderSection(
        { isWell: true, defaultExpandedSections: [0] },
        theme
      ).container.querySelector(SECTION);

      expect(expanded).toHaveStyleRule(
        'background-color',
        getColor({ theme, variable: 'background.recessed' })
      );
    });

    it('animates the background by default', () => {
      const { container } = renderSection({ isWell: true });

      expect(container.querySelector(SECTION)).toHaveStyleRule(
        'transition',
        'background-color 0.25s ease-in-out'
      );
    });

    it('does not animate the background if animation is disabled', () => {
      const { container } = renderSection({ isWell: true, isAnimated: false });

      expect(container.querySelector(SECTION)).not.toHaveStyleRule('transition');
    });

    it('renders no border or background without isWell', () => {
      const { container } = renderSection();
      const section = container.querySelector(SECTION);

      expect(section).not.toHaveStyleRule('border');
      expect(section).not.toHaveStyleRule('background-color');
      expect(section).not.toHaveStyleRule('padding');
    });

    it('renders without an Accordion parent', () => {
      const { container } = render(<Accordion.Section />);

      expect(container.querySelector(SECTION)).not.toHaveStyleRule('border');
    });
  });
});
