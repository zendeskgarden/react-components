/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, act, waitFor } from 'garden-test-utils';
import { ColorSwatchDialog } from './index';

const colors = [
  [
    { label: 'Green-200', value: '#d1e8df' },
    { label: 'Green-300', value: '#aecfc2' }
  ],
  [
    { label: 'Green-400', value: '#5eae91' },
    { label: 'Green-500', value: '#228f67' }
  ]
];

describe('ColorSwatchDialog', () => {
  it('passes ref to underlying DOM element', async () => {
    const ref = createRef<HTMLDivElement>();

    render(<ColorSwatchDialog colors={colors} ref={ref} />);

    act(() => {
      userEvent.click(screen.getByRole('button'));
    });

    await waitFor(() => {
      expect(ref.current).toBe(screen.getByRole('dialog'));
    });
  });

  it('applies buttonProps to the button element', () => {
    render(
      <ColorSwatchDialog
        colors={colors}
        buttonProps={{
          'aria-label': 'Choose your favorite color'
        }}
      />
    );

    const button = screen.getByRole('button');

    expect(button).toBe(screen.getByLabelText('Choose your favorite color'));
  });

  describe('uncontrolled', () => {
    it('focuses on the first swatch button when the color dialog is opened', async () => {
      render(<ColorSwatchDialog colors={colors} />);

      const trigger = screen.getByRole('button');

      expect(document.body).toHaveFocus();

      act(() => {
        userEvent.click(trigger);
      });

      await waitFor(() => {
        expect(screen.getByTestId('#d1e8df')).toHaveFocus();
      });

      userEvent.type(screen.getByTestId('#d1e8df'), '{esc}');

      expect(trigger).toHaveFocus();
    });

    it('focuses on the selected swatch button when the color dialog is opened', async () => {
      render(
        <ColorSwatchDialog
          colors={colors}
          defaultSelectedRowIndex={1}
          defaultSelectedColIndex={1}
        />
      );

      const trigger = screen.getByRole('button');

      expect(document.body).toHaveFocus();

      act(() => {
        userEvent.click(trigger);
      });

      await waitFor(() => {
        expect(screen.getByTestId('#228f67')).toHaveFocus();
      });

      userEvent.type(screen.getByTestId('#228f67'), '{esc}');

      expect(trigger).toHaveFocus();
    });
  });

  describe('controlled', () => {
    it('focuses on the selected swatch button when the color dialog is opened', async () => {
      render(<ColorSwatchDialog colors={colors} selectedRowIndex={1} selectedColIndex={1} />);

      const trigger = screen.getByRole('button');

      expect(document.body).toHaveFocus();

      act(() => {
        userEvent.click(trigger);
      });

      await waitFor(() => {
        expect(screen.getByTestId('#228f67')).toHaveFocus();
      });

      userEvent.type(screen.getByTestId('#228f67'), '{esc}');

      expect(trigger).toHaveFocus();
    });
  });
});
