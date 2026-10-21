/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { userEvent } from '@testing-library/user-event';
import { createRef } from 'react';
import { css } from 'styled-components';
import { vi } from 'vitest';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { StyledTile } from '../../views/form/StyledTile';
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
    expect(tile).toHaveStyleRule('box-shadow', 'none', { modifier });
  });

  it('does not apply the checked hover and active borders when disabled', () => {
    const { getByText } = render(
      <Tiles name="example" value="item-1">
        <Tiles.Tile value="item-1" disabled>
          <Tiles.Label>Item 1</Tiles.Label>
        </Tiles.Tile>
      </Tiles>
    );
    const tile = getByText('Item 1').closest('label')!;
    const hoverBorderColor = getColor({
      theme: DEFAULT_THEME,
      hue: 'neutralHue',
      light: { shade: 500 }
    });

    expect(tile).not.toHaveStyleRule('border-color', hoverBorderColor, {
      modifier: '&:hover:has(:checked)'
    });
  });

  describe('selected', () => {
    const renderTile = (theme?: Parameters<typeof render>[1]) =>
      render(
        <Tiles name="example" value="item-1">
          <Tiles.Tile value="item-1">
            <Tiles.Label>Item 1</Tiles.Label>
          </Tiles.Tile>
        </Tiles>,
        theme
      );

    it('renders no fill and keeps the text color', () => {
      const { getByText } = renderTile();
      const tile = getByText('Item 1').closest('label')!;

      expect(tile).not.toHaveStyleRule('background-color', expect.anything(), {
        modifier: '&:has(:checked)'
      });
      expect(tile).not.toHaveStyleRule('color', expect.anything(), {
        modifier: '&:has(:checked)'
      });
    });

    it('renders a 1px border plus a 1px inset shadow', () => {
      const { getByText } = renderTile();
      const tile = getByText('Item 1').closest('label')!;
      const color = getColor({ theme: DEFAULT_THEME, hue: 'neutralHue', light: { shade: 700 } });

      expect(tile).toHaveStyleRule('border-color', color, { modifier: '&:has(:checked)' });
      expect(tile).toHaveStyleRule('box-shadow', `inset 0 0 0 1px ${color}`, {
        modifier: '&:has(:checked)'
      });
    });

    it('renders the hover and active borders without overriding the tint', () => {
      const { getByText } = renderTile();
      const tile = getByText('Item 1').closest('label')!;
      const color = getColor({ theme: DEFAULT_THEME, hue: 'neutralHue', light: { shade: 500 } });

      [
        "&:hover:has(:checked):not([aria-disabled='true'])",
        "&:active:has(:checked):not([aria-disabled='true'])"
      ].forEach(modifier => {
        expect(tile).toHaveStyleRule('border-color', color, { modifier });
        expect(tile).toHaveStyleRule('box-shadow', `inset 0 0 0 1px ${color}`, { modifier });
        expect(tile).not.toHaveStyleRule('background-color', expect.anything(), { modifier });
      });
    });

    it('keeps the inset shadow under the focus ring', () => {
      const { getByText } = renderTile();
      const tile = getByText('Item 1').closest('label')!;
      const color = getColor({ theme: DEFAULT_THEME, hue: 'neutralHue', light: { shade: 700 } });

      expect(tile).toHaveStyleRule(
        'box-shadow',
        expect.stringContaining(`inset 0 0 0 1px ${color}`),
        { modifier: "&:has(:checked):has(:focus-visible):not([aria-disabled='true'])" }
      );
      expect(tile).toHaveStyleRule(
        'border-color',
        getColor({ theme: DEFAULT_THEME, variable: 'border.primaryEmphasis' }),
        { modifier: "&:has(:checked):has(:focus-visible):not([aria-disabled='true'])" }
      );
    });

    it('renders the dark theme borders', () => {
      const { getByText } = renderTile({ theme: DARK_THEME });
      const tile = getByText('Item 1').closest('label')!;

      expect(tile).toHaveStyleRule(
        'border-color',
        getColor({ theme: DARK_THEME, hue: 'neutralHue', dark: { shade: 400 } }),
        { modifier: '&:has(:checked)' }
      );
      expect(tile).toHaveStyleRule(
        'border-color',
        getColor({ theme: DARK_THEME, hue: 'neutralHue', dark: { shade: 600 } }),
        { modifier: '&:hover' }
      );
    });
  });

  it('renders grey hover and active borders with the primary tint', () => {
    const { getByText } = render(
      <Tiles name="example">
        <Tiles.Tile value="item-1">
          <Tiles.Label>Item 1</Tiles.Label>
        </Tiles.Tile>
      </Tiles>
    );
    const tile = getByText('Item 1').closest('label')!;

    expect(tile).toHaveStyleRule(
      'border-color',
      getColor({ theme: DEFAULT_THEME, hue: 'neutralHue', light: { shade: 500 } }),
      { modifier: '&:hover' }
    );
    expect(tile).toHaveStyleRule(
      'border-color',
      getColor({ theme: DEFAULT_THEME, hue: 'neutralHue', light: { shade: 600 } }),
      { modifier: '&:active' }
    );
  });

  it.each([
    ['light', DEFAULT_THEME, { light: { shade: 700 } }],
    ['dark', DARK_THEME, { dark: { shade: 500 } }]
  ])('renders the %s primary tint on hover and active, also when selected', (_, theme, shade) => {
    const { getByText } = render(
      <Tiles name="example" value="item-1">
        <Tiles.Tile value="item-1">
          <Tiles.Label>Item 1</Tiles.Label>
        </Tiles.Tile>
      </Tiles>,
      { theme }
    );
    const tile = getByText('Item 1').closest('label')!;
    const options = { theme, hue: 'primaryHue', ...shade };

    expect(tile).toHaveStyleRule(
      'background-color',
      getColor({ theme, variable: 'background.default' })
    );
    expect(tile).toHaveStyleRule(
      'background-color',
      getColor({ ...options, transparency: theme.opacity[100] }),
      { modifier: '&:hover' }
    );
    expect(tile).toHaveStyleRule(
      'background-color',
      getColor({ ...options, transparency: theme.opacity[200] }),
      { modifier: '&:active' }
    );
    expect(tile).not.toHaveStyleRule('background-color', expect.anything(), {
      modifier: '&:has(:checked)'
    });
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

    it('lays out a centered tile as a flex column', () => {
      const { getByTestId } = render(
        <Tiles name="example" isCentered>
          <Tiles.Tile data-test-id="tile" />
        </Tiles>
      );

      expect(getByTestId('tile')).toHaveStyleRule('display', 'flex');
      expect(getByTestId('tile')).toHaveStyleRule('flex-direction', 'column');
      expect(getByTestId('tile')).toHaveStyleRule('gap', '8px');
    });

    it('lays out a start-aligned tile as a grid', () => {
      const { getByTestId } = render(
        <Tiles name="example" isCentered={false}>
          <Tiles.Tile data-test-id="tile" />
        </Tiles>
      );

      expect(getByTestId('tile')).toHaveStyleRule('display', 'grid');
      expect(getByTestId('tile')).toHaveStyleRule('grid-template-columns', 'auto 1fr');
    });
  });

  describe('Tiles.Tile check icon', () => {
    const renderTile = (props = {}, options = {}) =>
      render(
        <Tiles name="example" value="item-1">
          <Tiles.Tile value="item-1" data-test-id="tile" {...props}>
            <Tiles.Label>Item 1</Tiles.Label>
          </Tiles.Tile>
        </Tiles>,
        options
      );

    it('renders a hidden check icon with its component id', () => {
      const { getByTestId } = renderTile();
      const check = getByTestId('tile').querySelector('[data-garden-id="forms.tile_check"]')!;

      expect(check).toHaveAttribute('aria-hidden', 'true');
      expect(check).toHaveAttribute('data-garden-version');
    });

    it('is transparent until the tile is checked', () => {
      const { getByTestId } = renderTile();
      const check = getByTestId('tile').querySelector('[data-garden-id="forms.tile_check"]')!;

      expect(check).toHaveStyleRule('opacity', '0');
      expect(check).toHaveStyleRule('opacity', '1', {
        modifier: css`
          ${StyledTile}:has(:checked) &&
        ` as any
      });
    });

    it('uses the default foreground color, and the disabled one when disabled', () => {
      const { getByTestId } = renderTile({ disabled: true });
      const check = getByTestId('tile').querySelector('[data-garden-id="forms.tile_check"]')!;

      expect(check).toHaveStyleRule(
        'color',
        getColor({ theme: DEFAULT_THEME, variable: 'foreground.default' })
      );
      expect(check).toHaveStyleRule(
        'color',
        getColor({ theme: DEFAULT_THEME, variable: 'foreground.disabled' }),
        {
          modifier: css`
            ${StyledTile}[aria-disabled='true'] &&
          ` as any
        }
      );
    });

    it('is placed in the opposite corner in RTL', () => {
      const { getByTestId } = renderTile({}, { theme: RTL_THEME });
      const check = getByTestId('tile').querySelector('[data-garden-id="forms.tile_check"]')!;

      expect(check).toHaveStyleRule('left', '8px');
      expect(check).not.toHaveStyleRule('right', '8px');
    });

    it('is placed 8px from the top and end of the tile', () => {
      const { getByTestId } = renderTile();
      const check = getByTestId('tile').querySelector('[data-garden-id="forms.tile_check"]')!;

      expect(check).toHaveStyleRule('top', '8px');
      expect(check).toHaveStyleRule('right', '8px');
      expect(check).toHaveStyleRule('width', '20px');
      expect(check).toHaveStyleRule('height', '20px');
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

    it('renders a 28px icon in the first grid column when start-aligned', () => {
      const { getByTestId } = render(
        <Tiles name="example" isCentered={false}>
          <Tiles.Tile>
            <Tiles.Icon data-test-id="icon">
              <svg />
            </Tiles.Icon>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByTestId('icon')).toHaveStyleRule('grid-column', '1');
      expect(getByTestId('icon')).toHaveStyleRule('grid-row', '1 / span 2');
      expect(getByTestId('icon')).toHaveStyleRule('width', '28px', { modifier: '& > *' });
      expect(getByTestId('icon')).toHaveStyleRule('height', '28px', { modifier: '& > *' });
      expect(getByTestId('icon')).not.toHaveStyleRule('position', 'absolute');
    });

    it('renders a 32px icon when centered', () => {
      const { getByTestId } = render(
        <Tiles name="example" isCentered>
          <Tiles.Tile>
            <Tiles.Icon data-test-id="icon">
              <svg />
            </Tiles.Icon>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByTestId('icon')).toHaveStyleRule('width', '32px', { modifier: '& > *' });
      expect(getByTestId('icon')).not.toHaveStyleRule('grid-column', '1');
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

      expect(getByTestId('icon')).toHaveStyleRule('margin-left', '20px');
      expect(getByTestId('icon')).not.toHaveStyleRule('margin-right', '20px');
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

    it('pads the end and uses the second grid column when start-aligned', () => {
      const { getByText } = render(
        <Tiles name="example" isCentered={false}>
          <Tiles.Tile>
            <Tiles.Label>label</Tiles.Label>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByText('label')).toHaveStyleRule('padding-right', '12px');
      expect(getByText('label')).toHaveStyleRule('grid-column', '2');
      expect(getByText('label')).not.toHaveStyleRule('padding-left', '12px');
      expect(getByText('label')).not.toHaveStyleRule('margin-left', '52px');
    });

    it('pads both sides when centered', () => {
      const { getByText } = render(
        <Tiles name="example" isCentered>
          <Tiles.Tile>
            <Tiles.Label>label</Tiles.Label>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByText('label')).toHaveStyleRule('padding-right', '12px');
      expect(getByText('label')).toHaveStyleRule('padding-left', '12px');
      expect(getByText('label')).not.toHaveStyleRule('margin-top', '8px');
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

      expect(getByText('label')).toHaveStyleRule('padding-left', '12px');
      expect(getByText('label')).not.toHaveStyleRule('padding-right', '12px');
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

    it('uses the second grid column and 4px margin when start-aligned', () => {
      const { getByText } = render(
        <Tiles name="example" isCentered={false}>
          <Tiles.Tile>
            <Tiles.Description>description</Tiles.Description>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByText('description')).toHaveStyleRule('grid-column', '2');
      expect(getByText('description')).toHaveStyleRule('margin-top', '4px');
      expect(getByText('description')).not.toHaveStyleRule('margin-left', '52px');
    });

    it('leaves spacing to the tile gap when centered', () => {
      const { getByText } = render(
        <Tiles name="example" isCentered>
          <Tiles.Tile>
            <Tiles.Description>description</Tiles.Description>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByText('description')).not.toHaveStyleRule('margin-top', '8px');
      expect(getByText('description')).not.toHaveStyleRule('grid-column', '2');
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

      expect(getByText('description')).toHaveStyleRule('grid-column', '2');
      expect(getByText('description')).not.toHaveStyleRule('margin-right', '52px');
    });
  });
});
