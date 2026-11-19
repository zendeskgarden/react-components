/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { ReactNode, createRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import { vi } from 'vitest';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { Toggle } from '../form/Toggle';
import { Accordion } from './Accordion';

const ACTIONS = '[data-garden-id="accordions.actions"]';
const HEADER_ROW = '[data-garden-id="accordions.header_row"]';
const ROTATE_ICON = '[data-garden-id="accordions.rotate_icon"]';

const StyledActionsWrapper = styled(Accordion.Actions)``;

const renderActions = (headerChildren?: ReactNode, isWell = false, onChange?: () => void) =>
  render(
    <Accordion level={3} isWell={isWell} defaultExpandedSections={[]} onChange={onChange}>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Ticket details</Accordion.Label>
          {headerChildren}
        </Accordion.Header>
        <Accordion.Panel>Panel content</Accordion.Panel>
      </Accordion.Section>
    </Accordion>
  );

describe('Actions', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = renderActions(
      <Accordion.Actions ref={ref}>
        <button type="button">Edit</button>
      </Accordion.Actions>
    );

    expect(container.querySelector(ACTIONS)).toBe(ref.current);
  });

  it('does not let props override the garden attributes', () => {
    const { container } = renderActions(
      <Accordion.Actions data-garden-id="custom" data-garden-version="0.0.0">
        <button type="button">Edit</button>
      </Accordion.Actions>
    );
    const actions = container.querySelector(ACTIONS);

    expect(actions).toHaveAttribute('data-garden-id', 'accordions.actions');
    expect(actions).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  it.each([['without'], ['with']] as const)(
    'runs actions without toggling, %s isWell',
    async mode => {
      const onChange = vi.fn();
      const action = vi.fn();
      const { getByRole } = renderActions(
        <Accordion.Actions>
          <button type="button" onClick={action}>
            Edit
          </button>
        </Accordion.Actions>,
        mode === 'with',
        onChange
      );
      const edit = getByRole('button', { name: 'Edit' });

      await user.click(edit);

      edit.focus();
      await user.keyboard('{Enter}');
      await user.keyboard('[Space]');

      expect(action).toHaveBeenCalledTimes(3);
      expect(onChange).not.toHaveBeenCalled();
      expect(getByRole('button', { name: 'Ticket details' })).toHaveAttribute(
        'aria-expanded',
        'false'
      );
    }
  );

  it('does not toggle from a menu an action portalled elsewhere on the page', async () => {
    const onChange = vi.fn();
    const action = vi.fn();
    const { getByRole } = renderActions(
      <Accordion.Actions>
        <button type="button" onClick={action}>
          Edit
        </button>
        {createPortal(
          <button type="button" onClick={action}>
            Menu action
          </button>,
          document.body
        )}
      </Accordion.Actions>,
      true,
      onChange
    );

    await user.click(getByRole('button', { name: 'Menu action' }));

    expect(action).toHaveBeenCalledTimes(1);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('toggles exactly once from the label, the chevron or empty header space', async () => {
    const onChange = vi.fn();
    const { container, getByRole } = render(
      <Accordion level={3} isWell defaultExpandedSections={[]} onChange={onChange}>
        <Accordion.Section>
          <Accordion.Header>
            <Accordion.Label>Ticket details</Accordion.Label>
            <Accordion.Actions>
              <button type="button">Edit</button>
            </Accordion.Actions>
          </Accordion.Header>
          <Accordion.Panel>Panel content</Accordion.Panel>
        </Accordion.Section>
      </Accordion>
    );

    await user.click(getByRole('button', { name: 'Ticket details' }));

    expect(onChange).toHaveBeenCalledTimes(1);

    await user.click(container.querySelector(ROTATE_ICON)!);

    expect(onChange).toHaveBeenCalledTimes(2);

    await user.click(container.querySelector(HEADER_ROW)!);

    expect(onChange).toHaveBeenCalledTimes(3);
  });

  it('does not apply the header hover styling while hovering an action', () => {
    const { container } = renderActions(
      <Accordion.Actions>
        <button type="button">Edit</button>
      </Accordion.Actions>,
      true
    );
    const row = container.querySelector(HEADER_ROW)!;
    const icon = container.querySelector(ROTATE_ICON)!;
    const hoverBackground = getColor({
      theme: DEFAULT_THEME,
      hue: 'neutralHue',
      light: { shade: 700 },
      dark: { hue: 'white' },
      transparency: DEFAULT_THEME.opacity[100]
    });

    fireEvent.mouseOver(row);

    expect(icon).toHaveStyleRule('background-color', hoverBackground);

    fireEvent.mouseOver(container.querySelector(`${ACTIONS} > button`)!);

    expect(icon).toHaveStyleRule('background-color', 'transparent');
  });

  describe('does not cancel or stop events', () => {
    it('lets a Garden Toggle inside actions change state', async () => {
      const onChange = vi.fn();
      const { getByRole } = renderActions(
        <Accordion.Actions>
          <Toggle aria-label="Notifications" />
        </Accordion.Actions>,
        true,
        onChange
      );
      const toggle = getByRole('switch', { name: 'Notifications' });

      await user.click(toggle);

      expect(toggle).toBeChecked();
      expect(onChange).not.toHaveBeenCalled();
    });

    it('lets a link inside actions keep its default behavior', async () => {
      let defaultPrevented;
      const onChange = vi.fn();
      const { getByRole } = renderActions(
        <Accordion.Actions>
          <a href="#details">Details</a>
        </Accordion.Actions>,
        true,
        onChange
      );
      const link = getByRole('link', { name: 'Details' });

      link.addEventListener('click', event => {
        defaultPrevented = event.defaultPrevented;
      });

      await user.click(link);

      expect(defaultPrevented).toBe(false);
      expect(onChange).not.toHaveBeenCalled();
    });

    it('lets a submit button inside actions submit an enclosing form', async () => {
      const onSubmit = vi.fn(event => event.preventDefault());
      const onChange = vi.fn();
      const { getByRole } = render(
        <form onSubmit={onSubmit}>
          <Accordion level={3} isWell defaultExpandedSections={[]} onChange={onChange}>
            <Accordion.Section>
              <Accordion.Header>
                <Accordion.Label>Ticket details</Accordion.Label>
                <Accordion.Actions>
                  <button type="submit">Save</button>
                </Accordion.Actions>
              </Accordion.Header>
              <Accordion.Panel>Panel content</Accordion.Panel>
            </Accordion.Section>
          </Accordion>
        </form>
      );

      await user.click(getByRole('button', { name: 'Save' }));

      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onChange).not.toHaveBeenCalled();
    });

    it('lets document click listeners receive clicks from inside actions', async () => {
      const onDocumentClick = vi.fn();
      const { getByRole } = renderActions(
        <Accordion.Actions>
          <button type="button">Edit</button>
        </Accordion.Actions>,
        true
      );

      document.addEventListener('click', onDocumentClick);

      await user.click(getByRole('button', { name: 'Edit' }));

      expect(onDocumentClick).toHaveBeenCalled();
    });
  });

  describe('detection', () => {
    const action = vi.fn();

    const expectMovedOut = (container: HTMLElement) => {
      const row = container.querySelector(HEADER_ROW);
      const heading = container.querySelector('[data-garden-id="accordions.header"]');

      expect(row).not.toBeNull();
      expect(heading!.querySelector(ACTIONS)).toBeNull();
      expect(row!.querySelector(`:scope > ${ACTIONS}`)).not.toBeNull();
    };

    it('finds actions as a direct child', () => {
      const { container } = renderActions(
        <Accordion.Actions>
          <button type="button" onClick={action}>
            Edit
          </button>
        </Accordion.Actions>
      );

      expectMovedOut(container);
    });

    it('finds actions inside a fragment, without key warnings', () => {
      const spy = vi.spyOn(console, 'error');
      const { container } = renderActions(
        <>
          <span>Extra</span>
          <Accordion.Actions>
            <button type="button" onClick={action}>
              Edit
            </button>
          </Accordion.Actions>
          <span>More</span>
        </>
      );

      expectMovedOut(container);

      const keyWarnings = spy.mock.calls.filter(args =>
        String(args[0]).includes('unique "key" prop')
      );

      expect(keyWarnings).toHaveLength(0);
      spy.mockRestore();
    });

    it('finds actions wrapped with styled()', () => {
      const { container } = renderActions(
        <StyledActionsWrapper>
          <button type="button" onClick={action}>
            Edit
          </button>
        </StyledActionsWrapper>
      );

      expectMovedOut(container);
    });

    it('finds conditional actions', () => {
      const Conditional = ({ canEdit }: { canEdit: boolean }) => (
        <Accordion level={3} defaultExpandedSections={[]}>
          <Accordion.Section>
            <Accordion.Header>
              <Accordion.Label>Ticket details</Accordion.Label>
              {!!canEdit && (
                <Accordion.Actions>
                  <button type="button" onClick={action}>
                    Edit
                  </button>
                </Accordion.Actions>
              )}
            </Accordion.Header>
            <Accordion.Panel>Panel content</Accordion.Panel>
          </Accordion.Section>
        </Accordion>
      );
      const { container, rerender } = render(<Conditional canEdit />);

      expectMovedOut(container);

      rerender(<Conditional canEdit={false} />);

      expect(container.querySelector(HEADER_ROW)).toBeNull();
      expect(container.querySelector(ACTIONS)).toBeNull();
    });
  });

  /* mirrors the NODE_ENV save/restore pattern in TabList.test.tsx */
  describe('fallback inside a consumer component', () => {
    const environment = process.env.NODE_ENV;
    const consoleWarning = console.warn;

    beforeEach(() => {
      process.env.NODE_ENV = 'development';
      console.warn = vi.fn();
    });

    afterEach(() => {
      process.env.NODE_ENV = environment;
      console.warn = consoleWarning;
    });

    const MyActions = () => (
      <Accordion.Actions>
        <button type="button">Edit</button>
      </Accordion.Actions>
    );

    it('stays in the heading, still does not toggle and warns once in development', async () => {
      const onChange = vi.fn();
      const spy = vi.spyOn(console, 'warn');
      const { getByRole } = renderActions(<MyActions />, false, onChange);
      const heading = getByRole('heading');

      expect(heading.querySelector(ACTIONS)).not.toBeNull();

      await user.click(getByRole('button', { name: 'Edit' }));

      expect(onChange).not.toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy.mock.calls[0]![0]).toStrictEqual(expect.stringContaining('<Accordion.Actions>'));
    });

    it('does not warn when actions are a direct child of the header', () => {
      const spy = vi.spyOn(console, 'warn');

      renderActions(
        <Accordion.Actions>
          <button type="button">Edit</button>
        </Accordion.Actions>
      );

      expect(spy).not.toHaveBeenCalled();
    });
  });

  it('keeps focus on the label when actions mount and unmount in well mode', async () => {
    const FocusFixture = () => {
      const [expandedSections, setExpandedSections] = useState<number[]>([]);

      return (
        <Accordion
          level={3}
          isWell
          expandedSections={expandedSections}
          onChange={value => setExpandedSections(expandedSections.includes(value) ? [] : [value])}
        >
          <Accordion.Section>
            <Accordion.Header>
              <Accordion.Label>Ticket details</Accordion.Label>
              {expandedSections.includes(0) && (
                <Accordion.Actions>
                  <button type="button">Edit</button>
                </Accordion.Actions>
              )}
            </Accordion.Header>
            <Accordion.Panel>Panel content</Accordion.Panel>
          </Accordion.Section>
        </Accordion>
      );
    };
    const { getByRole } = render(<FocusFixture />);
    const label = getByRole('button', { name: 'Ticket details' });

    label.focus();
    await user.keyboard('{Enter}');

    expect(label).toHaveAttribute('aria-expanded', 'true');
    expect(label).toHaveFocus();

    await user.keyboard('{Enter}');

    expect(label).toHaveAttribute('aria-expanded', 'false');
    expect(label).toHaveFocus();
  });
});
