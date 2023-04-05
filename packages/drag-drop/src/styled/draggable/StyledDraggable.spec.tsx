/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { rgba } from 'polished';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { render, fireEvent } from 'garden-test-utils';
import { StyledDraggable, getDragShadow, getFocusShadow } from './StyledDraggable';

const GARDEN_FOCUS_VISIBLE = '&[data-garden-focus-visible]';

describe('StyledDraggable', () => {
  const user = userEvent.setup();

  it('renders the expected element', () => {
    const { container } = render(<StyledDraggable />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  describe('cursor', () => {
    it('applies grab cursor by default', () => {
      const { container } = render(<StyledDraggable />);

      expect(container.firstChild).toHaveStyle('cursor: grab');
    });

    it('applies grabbing cursor when grabbed', () => {
      const { container } = render(<StyledDraggable isGrabbed />);

      expect(container.firstChild).toHaveStyle('cursor: grabbing');
    });

    it('applies not-allowed cursor when disabled', () => {
      const { container } = render(<StyledDraggable isDisabled />);

      expect(container.firstChild).toHaveStyle('cursor: not-allowed');
    });

    it('applies default cursor when placeholder', () => {
      const { container } = render(<StyledDraggable isPlaceholder />);

      expect(container.firstChild).toHaveStyle('cursor: default');
    });
  });

  describe('states', () => {
    it('applies correct styles when grabbed', () => {
      const { container } = render(<StyledDraggable isGrabbed />);

      expect(container.firstChild).toHaveStyle(
        `background-color: ${DEFAULT_THEME.colors.background}`
      );
      expect(container.firstChild).toHaveStyle(`box-shadow: ${getDragShadow(DEFAULT_THEME)}`);
    });

    it('applies correct styles on hover', async () => {
      // background (primaryHue, 600, 0.08)
      const { queryByText } = render(<StyledDraggable>draggable</StyledDraggable>);
      const draggable = queryByText('draggable') as HTMLElement;

      await user.hover(draggable);

      expect(draggable).toHaveStyleRule(
        'background-color',
        getColor('primaryHue', 600, DEFAULT_THEME, 0.08),
        { modifier: ':hover' }
      );
    });

    it('applies correct styles on hover when grabbed', async () => {
      const { queryByText } = render(<StyledDraggable isGrabbed>draggable</StyledDraggable>);
      const draggable = queryByText('draggable') as HTMLElement;

      await user.hover(draggable);

      expect(draggable).toHaveStyle(`background-color: ${DEFAULT_THEME.colors.background}`);
    });

    it('applies correct styles when focused', () => {
      const { queryByText } = render(<StyledDraggable tabIndex={-1}>draggable</StyledDraggable>);
      const draggable = queryByText('draggable') as HTMLElement;
      const baseColor = rgba(getColor('primaryHue', 600, DEFAULT_THEME) as string, 0.35);

      fireEvent.focus(draggable);

      expect(draggable).toHaveStyleRule(
        'box-shadow',
        getFocusShadow(false, baseColor, DEFAULT_THEME),
        { modifier: GARDEN_FOCUS_VISIBLE }
      );
    });

    it('applies correct styles when focused and grabbed', () => {
      // box-shadow (drag & focus)
      const { queryByText } = render(
        <StyledDraggable tabIndex={-1} isGrabbed>
          draggable
        </StyledDraggable>
      );
      const draggable = queryByText('draggable') as HTMLElement;
      const baseColor = rgba(getColor('primaryHue', 600, DEFAULT_THEME) as string, 0.35);

      fireEvent.focus(draggable);

      expect(draggable).toHaveStyleRule(
        'box-shadow',
        `${getFocusShadow(false, baseColor, DEFAULT_THEME)},${getDragShadow(DEFAULT_THEME)}`,
        { modifier: GARDEN_FOCUS_VISIBLE }
      );
    });

    it('applies correct styles when disabled', () => {
      const { container } = render(<StyledDraggable isDisabled />);

      expect(container.firstChild).toHaveStyle(
        `background-color: ${getColor('neutralHue', 200, DEFAULT_THEME)}`
      );
      expect(container.firstChild).toHaveStyleRule(
        'color',
        getColor('neutralHue', 400, DEFAULT_THEME),
        { modifier: '> *' }
      );
    });

    it('applies correct styles as placeholder', () => {
      const { container } = render(<StyledDraggable isPlaceholder />);

      expect(container.firstChild).toHaveStyle(
        `background-color: ${getColor('neutralHue', 200, DEFAULT_THEME)}`
      );
      expect(container.firstChild).toHaveStyleRule('visibility', 'hidden', { modifier: '> *' });
    });
  });
});
