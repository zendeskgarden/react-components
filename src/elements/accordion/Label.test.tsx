/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { fireEvent } from '@testing-library/react';
import { createRef } from 'react';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import type { IAccordionProps } from '../../types/elements';
import { Accordion } from './Accordion';

const renderLabel = (props: Partial<IAccordionProps> = {}, theme?: typeof DEFAULT_THEME) =>
  render(
    <Accordion level={3} {...props}>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Label Button</Accordion.Label>
        </Accordion.Header>
      </Accordion.Section>
    </Accordion>,
    { theme }
  );

describe('Label', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();

    const { getByRole } = render(
      <Accordion level={3}>
        <Accordion.Section>
          <Accordion.Header>
            <Accordion.Label ref={ref}>Label Button</Accordion.Label>
          </Accordion.Header>
        </Accordion.Section>
      </Accordion>
    );

    expect(getByRole('button')).toBe(ref.current);
  });

  it('uses a button with no default behavior', () => {
    const { getByRole } = renderLabel();

    expect(getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('does not let props override the garden attributes', () => {
    const { getByRole } = render(
      <Accordion level={3}>
        <Accordion.Section>
          <Accordion.Header>
            <Accordion.Label data-garden-id="custom" data-garden-version="0.0.0">
              Label Button
            </Accordion.Label>
          </Accordion.Header>
        </Accordion.Section>
      </Accordion>
    );

    expect(getByRole('button')).toHaveAttribute('data-garden-id', 'accordions.button');
    expect(getByRole('button')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  describe('Styling', () => {
    it('renders default styling', () => {
      const { getByRole } = renderLabel();

      expect(getByRole('button')).toHaveStyleRule('padding', `${DEFAULT_THEME.space.base * 5}px`);
      expect(getByRole('button')).toHaveStyleRule('text-align', 'left');
      expect(getByRole('button')).toHaveStyleRule(
        'color',
        getColor({ theme: DEFAULT_THEME, variable: 'foreground.default' })
      );
      expect(getByRole('button')).not.toHaveStyleRule('cursor');
    });

    it('renders compact styling', () => {
      const { getByRole } = renderLabel({ isCompact: true });

      expect(getByRole('button')).toHaveStyleRule(
        'padding',
        `${DEFAULT_THEME.space.base * 2}px ${DEFAULT_THEME.space.base * 3}px`
      );
    });

    it('renders RTL styling', () => {
      const { getByRole } = renderLabel({}, RTL_THEME);

      expect(getByRole('button')).toHaveStyleRule('text-align', 'right');
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders hover styling in %s mode', (_, theme) => {
      const { getByRole } = renderLabel({}, theme);
      const primary = getColor({ theme, variable: 'foreground.primary' });

      fireEvent.mouseOver(getByRole('heading'));

      expect(getByRole('button')).toHaveStyleRule('color', primary);
      expect(getByRole('button')).toHaveStyleRule('cursor', 'pointer', { modifier: '&:hover' });
      expect(getByRole('button')).toHaveStyleRule('color', primary, { modifier: '&:hover' });
    });

    it('does not show hover styling on an expanded section that cannot collapse', () => {
      const { getByRole } = renderLabel({
        isCollapsible: false,
        defaultExpandedSections: [0]
      });

      fireEvent.mouseOver(getByRole('heading'));

      expect(getByRole('button')).toHaveStyleRule(
        'color',
        getColor({ theme: DEFAULT_THEME, variable: 'foreground.default' })
      );
      expect(getByRole('button')).not.toHaveStyleRule('cursor', 'pointer', {
        modifier: '&:hover'
      });
    });

    it('stays foreground.default on hover in well mode', () => {
      const { getByRole } = renderLabel({ isWell: true });

      fireEvent.mouseOver(getByRole('heading'));

      expect(getByRole('button')).toHaveStyleRule(
        'color',
        getColor({ theme: DEFAULT_THEME, variable: 'foreground.default' })
      );
      expect(getByRole('button')).not.toHaveStyleRule(
        'color',
        getColor({ theme: DEFAULT_THEME, variable: 'foreground.primary' })
      );
    });

    it('renders well padding whatever the density', () => {
      const { getByRole } = renderLabel({ isWell: true, isCompact: true });

      expect(getByRole('button')).toHaveStyleRule('padding', DEFAULT_THEME.space.md);
    });
  });

  describe('Description', () => {
    const DESCRIPTION = '[data-garden-id="accordions.description"]';

    const renderWithDescription = (labelProps?: Record<string, string>) =>
      render(
        <Accordion level={3}>
          <Accordion.Section>
            <Accordion.Header>
              <Accordion.Label {...labelProps}>
                Ticket details
                <Accordion.Description>Last updated 2 hours ago</Accordion.Description>
              </Accordion.Label>
            </Accordion.Header>
          </Accordion.Section>
        </Accordion>
      );

    it('names the button with the label only and describes it with the description', () => {
      const { container, getByRole } = renderWithDescription();
      const button = getByRole('button', { name: 'Ticket details' });

      expect(button).toHaveAccessibleDescription('Last updated 2 hours ago');
      expect(button).toHaveAttribute('aria-describedby', container.querySelector(DESCRIPTION)!.id);
    });

    it('combines a consumer aria-describedby with the description id', () => {
      const { container, getByRole } = renderWithDescription({
        'aria-describedby': 'consumer-id'
      });

      expect(getByRole('button')).toHaveAttribute(
        'aria-describedby',
        `consumer-id ${container.querySelector(DESCRIPTION)!.id}`
      );
    });

    it('removes the attribute when the description unmounts', () => {
      const { getByRole, rerender } = renderWithDescription();

      expect(getByRole('button')).toHaveAttribute('aria-describedby');

      rerender(
        <Accordion level={3}>
          <Accordion.Section>
            <Accordion.Header>
              <Accordion.Label>Ticket details</Accordion.Label>
            </Accordion.Header>
          </Accordion.Section>
        </Accordion>
      );

      expect(getByRole('button')).not.toHaveAttribute('aria-describedby');
    });

    it('renders no aria-describedby without a description', () => {
      const { getByRole } = renderLabel();

      expect(getByRole('button')).not.toHaveAttribute('aria-describedby');
    });
  });
});
