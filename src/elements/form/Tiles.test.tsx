/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { userEvent } from '@testing-library/user-event';
import { createRef } from 'react';
import { vi } from 'vitest';

import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { Tiles } from './Tiles';

describe('Tiles', () => {
  const user = userEvent.setup();

  it('renders the disabled fill, border and text, also when checked', () => {
    const { getByText } = render(
      <Tiles name="example" value="item-1">
        <Tiles.Tile value="item-1" disabled>
          <Tiles.Label>Item 1</Tiles.Label>
        </Tiles.Tile>
      </Tiles>
    );
    const tile = getByText('Item 1').closest('label')!;
    const modifier = "&[aria-disabled='true']";

    expect(tile).toHaveStyleRule(
      'background-color',
      getColor({ theme: DEFAULT_THEME, variable: 'background.disabled' }),
      { modifier }
    );
    expect(tile).toHaveStyleRule(
      'border-color',
      getColor({ theme: DEFAULT_THEME, variable: 'border.disabled' }),
      { modifier }
    );
    expect(tile).toHaveStyleRule(
      'color',
      getColor({ theme: DEFAULT_THEME, variable: 'foreground.disabled' }),
      { modifier }
    );
  });

  it('does not apply the checked hover and active fills when disabled', () => {
    const { getByText } = render(
      <Tiles name="example" value="item-1">
        <Tiles.Tile value="item-1" disabled>
          <Tiles.Label>Item 1</Tiles.Label>
        </Tiles.Tile>
      </Tiles>
    );
    const tile = getByText('Item 1').closest('label')!;
    const checkedHoverBackgroundColor = getColor({
      theme: DEFAULT_THEME,
      hue: 'neutralHue',
      light: { shade: 800 }
    });
    const checkedActiveBackgroundColor = getColor({
      theme: DEFAULT_THEME,
      hue: 'neutralHue',
      light: { shade: 700 }
    });
    const disabledBackgroundColor = getColor({
      theme: DEFAULT_THEME,
      variable: 'background.disabled'
    });

    expect(tile).not.toHaveStyleRule('background-color', checkedHoverBackgroundColor, {
      modifier: '&:hover:has(:checked)'
    });
    expect(tile).not.toHaveStyleRule('background-color', checkedActiveBackgroundColor, {
      modifier: '&:active:has(:checked)'
    });
    expect(tile).not.toHaveStyleRule('background-color', disabledBackgroundColor, {
      modifier: "&[aria-disabled='true']:not(:has(:checked))"
    });
  });

  it('renders the checked fill, hover and active colors when enabled', () => {
    const { getByText } = render(
      <Tiles name="example" value="item-1">
        <Tiles.Tile value="item-1">
          <Tiles.Label>Item 1</Tiles.Label>
        </Tiles.Tile>
      </Tiles>
    );
    const tile = getByText('Item 1').closest('label')!;

    expect(tile).toHaveStyleRule(
      'background-color',
      getColor({ theme: DEFAULT_THEME, variable: 'foreground.default' }),
      { modifier: '&:has(:checked)' }
    );
    expect(tile).toHaveStyleRule('border-color', 'transparent', { modifier: '&:has(:checked)' });
    expect(tile).toHaveStyleRule(
      'color',
      getColor({ theme: DEFAULT_THEME, variable: 'foreground.onEmphasis' }),
      { modifier: '&:has(:checked)' }
    );
    expect(tile).toHaveStyleRule(
      'background-color',
      getColor({ theme: DEFAULT_THEME, hue: 'neutralHue', light: { shade: 800 } }),
      { modifier: "&:hover:has(:checked):not([aria-disabled='true'])" }
    );
    expect(tile).toHaveStyleRule(
      'background-color',
      getColor({ theme: DEFAULT_THEME, hue: 'neutralHue', light: { shade: 700 } }),
      { modifier: "&:active:has(:checked):not([aria-disabled='true'])" }
    );
  });

  it('applies ref to the wrapping element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Tiles name="example" ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('applies correct role', () => {
    const { container } = render(<Tiles name="example" />);

    expect(container.firstChild).toHaveAttribute('role', 'radiogroup');
  });

  it('calls onChange with correct value', async () => {
    const onChangeSpy = vi.fn();

    const { getByText } = render(
      <Tiles name="example" onChange={e => onChangeSpy(e.target.value)}>
        <Tiles.Tile value="item-1">
          <Tiles.Label>Item 1</Tiles.Label>
        </Tiles.Tile>
        <Tiles.Tile value="item-2">
          <Tiles.Label>Item 2</Tiles.Label>
        </Tiles.Tile>
      </Tiles>
    );

    await user.click(getByText('Item 2'));

    expect(onChangeSpy).toHaveBeenCalledWith('item-2');
  });

  describe('Tiles.Tile', () => {
    it('applies ref to the wrapping element', () => {
      const ref = createRef<HTMLLabelElement>();
      const { getByTestId } = render(
        <Tiles name="example">
          <Tiles.Tile ref={ref} data-test-id="tile" />
        </Tiles>
      );

      expect(getByTestId('tile')).toBe(ref.current);
    });

    it('applies correct a11y values when disabled', () => {
      const { getByTestId, getByLabelText } = render(
        <Tiles name="example">
          <Tiles.Tile data-test-id="tile" disabled>
            <Tiles.Label>label</Tiles.Label>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByTestId('tile')).toHaveAttribute('aria-disabled', 'true');
      expect(getByLabelText('label')).toBeDisabled();
    });

    it('checks input when tile is controlled', () => {
      const { getByLabelText } = render(
        <Tiles name="example" value="item-1">
          <Tiles.Tile disabled value="item-1">
            <Tiles.Label>label</Tiles.Label>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByLabelText('label')).toBeChecked();
    });

    it('checks input when tile is uncontrolled', async () => {
      const { getByLabelText, getByText } = render(
        <Tiles name="example">
          <Tiles.Tile value="item-1">
            <Tiles.Label>label</Tiles.Label>
          </Tiles.Tile>
        </Tiles>
      );

      await user.click(getByText('label'));

      expect(getByLabelText('label')).toBeChecked();
    });

    it('applies RTL styling', () => {
      const { getByTestId } = render(
        <Tiles name="example">
          <Tiles.Tile data-test-id="tile" />
        </Tiles>,
        {
          theme: RTL_THEME
        }
      );

      expect(getByTestId('tile')).toHaveStyleRule('direction', 'rtl');
    });
  });

  describe('Tiles.Icon', () => {
    it('applies ref to the wrapping element', () => {
      const ref = createRef<HTMLSpanElement>();
      const { getByTestId } = render(
        <Tiles name="example">
          <Tiles.Tile>
            <Tiles.Icon data-test-id="icon" ref={ref}>
              <svg />
            </Tiles.Icon>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByTestId('icon')).toBe(ref.current);
    });

    it('applies isVertical styling', () => {
      const { getByTestId } = render(
        <Tiles name="example" isCentered={false}>
          <Tiles.Tile>
            <Tiles.Icon data-test-id="icon">
              <svg />
            </Tiles.Icon>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByTestId('icon')).toHaveStyleRule('position', 'absolute');
    });

    it('applies RTL styling', () => {
      const { getByTestId } = render(
        <Tiles name="example" isCentered={false}>
          <Tiles.Tile>
            <Tiles.Icon data-test-id="icon">
              <svg />
            </Tiles.Icon>
          </Tiles.Tile>
        </Tiles>,
        {
          theme: RTL_THEME
        }
      );

      expect(getByTestId('icon')).toHaveStyleRule('right', '20px');
    });
  });

  describe('Tiles.Label', () => {
    it('applies ref to the wrapping element', () => {
      const ref = createRef<HTMLSpanElement>();
      const { getByText } = render(
        <Tiles name="example">
          <Tiles.Tile>
            <Tiles.Label ref={ref}>label</Tiles.Label>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByText('label')).toBe(ref.current);
    });

    it('applies title attribute with the current text content', () => {
      const { getByText } = render(
        <Tiles name="example">
          <Tiles.Tile>
            <Tiles.Label>label</Tiles.Label>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByText('label')).toHaveAttribute('title', 'label');
    });

    it('applies isVertical styling', () => {
      const { getByText } = render(
        <Tiles name="example" isCentered={false}>
          <Tiles.Tile>
            <Tiles.Label>label</Tiles.Label>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByText('label')).toHaveStyle(`
        margin-top: 0;
        margin-left: 52px;
      `);
    });

    it('applies RTL styling', () => {
      const { getByText } = render(
        <Tiles name="example" isCentered={false}>
          <Tiles.Tile>
            <Tiles.Label>label</Tiles.Label>
          </Tiles.Tile>
        </Tiles>,
        {
          theme: RTL_THEME
        }
      );

      expect(getByText('label')).toHaveStyleRule('margin-right', '52px');
    });
  });

  describe('Tiles.Description', () => {
    it('applies ref to the wrapping element', () => {
      const ref = createRef<HTMLSpanElement>();
      const { getByText } = render(
        <Tiles name="example">
          <Tiles.Tile>
            <Tiles.Description ref={ref}>description</Tiles.Description>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByText('description')).toBe(ref.current);
    });

    it('applies isVertical styling', () => {
      const { getByText } = render(
        <Tiles name="example" isCentered={false}>
          <Tiles.Tile>
            <Tiles.Description>description</Tiles.Description>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByText('description')).toHaveStyleRule('margin-left', '52px');
      expect(getByText('description')).toHaveStyleRule('margin-top', '4px');
    });

    it('spaces a centered description 8px from the label', () => {
      const { getByText } = render(
        <Tiles name="example" isCentered>
          <Tiles.Tile>
            <Tiles.Description>description</Tiles.Description>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByText('description')).toHaveStyleRule('margin-top', '8px');
    });

    it('applies RTL styling', () => {
      const { getByText } = render(
        <Tiles name="example" isCentered={false}>
          <Tiles.Tile>
            <Tiles.Description>description</Tiles.Description>
          </Tiles.Tile>
        </Tiles>,
        {
          theme: RTL_THEME
        }
      );

      expect(getByText('description')).toHaveStyleRule('margin-right', '52px');
    });
  });
});
