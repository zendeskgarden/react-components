/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { createRef } from 'react';
import { vi } from 'vitest';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import type { IAccordionProps } from '../../types/elements';
import { Accordion } from './Accordion';

const ROTATE_ICON = '[data-garden-id="accordions.rotate_icon"]';

const renderHeader = (props: Partial<IAccordionProps> = {}, theme?: typeof DEFAULT_THEME) =>
  render(
    <Accordion level={3} {...props}>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Header Button</Accordion.Label>
        </Accordion.Header>
      </Accordion.Section>
    </Accordion>,
    { theme }
  );

describe('Header', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();

    const { getByRole } = render(
      <Accordion level={3}>
        <Accordion.Section>
          <Accordion.Header ref={ref}>
            <Accordion.Label>Header Button</Accordion.Label>
          </Accordion.Header>
        </Accordion.Section>
      </Accordion>
    );

    expect(getByRole('heading')).toBe(ref.current);
  });

  it('composes event handlers', async () => {
    const onClick = vi.fn();
    const onFocus = vi.fn();
    const onBlur = vi.fn();
    const onMouseOver = vi.fn();
    const onMouseOut = vi.fn();

    const { getByRole } = render(
      <Accordion level={3}>
        <Accordion.Section>
          <Accordion.Header
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
          >
            <Accordion.Label>Header Button</Accordion.Label>
          </Accordion.Header>
        </Accordion.Section>
      </Accordion>
    );

    const header = getByRole('heading');

    await user.click(header);
    await user.unhover(header);
    fireEvent.focus(header);
    fireEvent.blur(header);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(onMouseOver).toHaveBeenCalledTimes(1);
    expect(onMouseOut).toHaveBeenCalledTimes(1);
  });

  it('does not let props override the garden attributes', () => {
    const { getByRole } = render(
      <Accordion level={3}>
        <Accordion.Section>
          <Accordion.Header data-garden-id="custom" data-garden-version="0.0.0">
            <Accordion.Label>Header Button</Accordion.Label>
          </Accordion.Header>
        </Accordion.Section>
      </Accordion>
    );

    expect(getByRole('heading')).toHaveAttribute('data-garden-id', 'accordions.header');
    expect(getByRole('heading')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  describe('Styling', () => {
    it('renders a pointer cursor on hover when the section can collapse', () => {
      const { getByRole } = renderHeader();

      expect(getByRole('heading')).toHaveStyleRule('cursor', 'pointer', { modifier: '&:hover' });
    });

    it('does not render a pointer cursor on an expanded section that cannot collapse', () => {
      const { getByRole } = renderHeader({ isCollapsible: false, defaultExpandedSections: [0] });

      expect(getByRole('heading')).not.toHaveStyleRule('cursor', 'pointer', {
        modifier: '&:hover'
      });
    });
  });

  describe('Rotate icon', () => {
    const { base, md, xs } = DEFAULT_THEME.space;

    it('renders the 20px chevron glyph', () => {
      const { container } = renderHeader();
      const icon = container.querySelector(ROTATE_ICON);

      expect(icon).toHaveAttribute('viewBox', '0 0 20 20');
    });

    it('renders default styling', () => {
      const { container } = renderHeader({ defaultExpandedSections: [] });
      const icon = container.querySelector(ROTATE_ICON);

      expect(icon).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
      expect(icon).not.toHaveStyleRule('transform');
      expect(icon).toHaveStyleRule('box-sizing', 'content-box');
      expect(icon).toHaveStyleRule('padding', `${md} ${base * 4.5}px`);
      expect(icon).toHaveStyleRule(
        'color',
        getColor({ theme: DEFAULT_THEME, variable: 'foreground.subtle' })
      );
    });

    it('renders compact styling', () => {
      const { container } = renderHeader({ isCompact: true });

      expect(container.querySelector(ROTATE_ICON)).toHaveStyleRule(
        'padding',
        `${xs} ${base * 2.5}px`
      );
    });

    it.each([
      ['default', false],
      ['compact', true]
    ])('renders the chevron at theme.space.md in %s density', (_, isCompact) => {
      const { container } = renderHeader({ isCompact });
      const icon = container.querySelector(ROTATE_ICON);

      expect(md).not.toBe(DEFAULT_THEME.iconSizes.md);
      expect(icon).toHaveStyleRule('width', md);
      expect(icon).toHaveStyleRule('min-width', md);
      expect(icon).toHaveStyleRule('height', md);
    });

    it('is rotated while the section is expanded', () => {
      const { container } = renderHeader({ defaultExpandedSections: [0] });

      expect(container.querySelector(ROTATE_ICON)).toHaveStyleRule('transform', 'rotate(+180deg)');
    });

    it('is rotated in the opposite direction in RTL', () => {
      const { container } = renderHeader({ defaultExpandedSections: [0] }, RTL_THEME);

      expect(container.querySelector(ROTATE_ICON)).toHaveStyleRule('transform', 'rotate(-180deg)');
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders hover styling in %s mode', (_, theme) => {
      const { container } = renderHeader({ defaultExpandedSections: [] }, theme);
      const icon = container.querySelector(ROTATE_ICON)!;
      const primary = getColor({ theme, variable: 'foreground.primary' });

      fireEvent.mouseOver(icon);

      expect(icon).toHaveStyleRule('color', primary);
      expect(icon).toHaveStyleRule('color', primary, { modifier: '&:hover' });

      fireEvent.mouseOut(icon);

      expect(icon).toHaveStyleRule('color', getColor({ theme, variable: 'foreground.subtle' }));
    });

    it('does not render hover styling on an expanded section that cannot collapse', () => {
      const { container } = renderHeader({ isCollapsible: false, defaultExpandedSections: [0] });
      const icon = container.querySelector(ROTATE_ICON)!;

      fireEvent.mouseOver(icon);

      expect(icon).toHaveStyleRule(
        'color',
        getColor({ theme: DEFAULT_THEME, variable: 'foreground.subtle' })
      );
    });
  });
});
