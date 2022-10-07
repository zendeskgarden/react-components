/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, renderRtl } from 'garden-test-utils';
import { Tiles } from './Tiles';

jest.useFakeTimers();

describe('Tiles', () => {
  const user = userEvent.setup({ delay: null });

  it('applies ref to the wrapping element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Tiles name="example" ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('applies correct role', () => {
    const { container } = render(<Tiles name="example" />);

    expect(container.firstChild).toHaveAttribute('role', 'radiogroup');
  });

  it('calls onChange with correct value', async () => {
    const onChangeSpy = jest.fn();

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
      const ref = React.createRef<HTMLLabelElement>();
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

    it('attempts to apply focus-visible styling on focus', async () => {
      const { getByTestId, getByLabelText } = render(
        <Tiles name="example" value="item-1">
          <Tiles.Tile data-test-id="tile" disabled value="item-1">
            <Tiles.Label>label</Tiles.Label>
          </Tiles.Tile>
        </Tiles>
      );

      await user.click(getByLabelText('label'));
      jest.runOnlyPendingTimers();

      expect(getByTestId('tile')).toHaveAttribute('data-test-is-focused', 'false');
    });

    it('removes focus styling on blur', () => {
      const { getByTestId, getByLabelText } = render(
        <Tiles name="example" value="item-1">
          <Tiles.Tile data-test-id="tile" disabled value="item-1">
            <Tiles.Label>label</Tiles.Label>
          </Tiles.Tile>
        </Tiles>
      );

      fireEvent.blur(getByLabelText('label'));

      expect(getByTestId('tile')).toHaveAttribute('data-test-is-focused', 'false');
    });

    it('applies RTL styling', () => {
      const { getByTestId } = renderRtl(
        <Tiles name="example">
          <Tiles.Tile data-test-id="tile" />
        </Tiles>
      );

      expect(getByTestId('tile')).toHaveStyleRule('direction', 'rtl');
    });
  });

  describe('Tiles.Icon', () => {
    it('applies ref to the wrapping element', () => {
      const ref = React.createRef<HTMLSpanElement>();
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
      const { getByTestId } = renderRtl(
        <Tiles name="example" isCentered={false}>
          <Tiles.Tile>
            <Tiles.Icon data-test-id="icon">
              <svg />
            </Tiles.Icon>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByTestId('icon')).toHaveStyleRule('right', '20px');
    });
  });

  describe('Tiles.Label', () => {
    it('applies ref to the wrapping element', () => {
      const ref = React.createRef<HTMLSpanElement>();
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
      const { getByText } = renderRtl(
        <Tiles name="example" isCentered={false}>
          <Tiles.Tile>
            <Tiles.Label>label</Tiles.Label>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByText('label')).toHaveStyleRule('margin-right', '52px');
    });
  });

  describe('Tiles.Description', () => {
    it('applies ref to the wrapping element', () => {
      const ref = React.createRef<HTMLSpanElement>();
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
    });

    it('applies RTL styling', () => {
      const { getByText } = renderRtl(
        <Tiles name="example" isCentered={false}>
          <Tiles.Tile>
            <Tiles.Description>description</Tiles.Description>
          </Tiles.Tile>
        </Tiles>
      );

      expect(getByText('description')).toHaveStyleRule('margin-right', '52px');
    });
  });
});
