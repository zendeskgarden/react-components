/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, act, waitFor, waitForElementToBeRemoved } from 'garden-test-utils';
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
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', async () => {
    const ref = createRef<HTMLDivElement>();

    render(<ColorSwatchDialog colors={colors} ref={ref} />);

    await act(async () => {
      await user.click(screen.getByRole('button'));
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

  it('calls onDialogChange when the dialog state changes', async () => {
    const onDialogChange = jest.fn();
    const label = 'Choose your favorite color';

    render(
      <ColorSwatchDialog
        colors={colors}
        onDialogChange={onDialogChange}
        buttonProps={{ 'aria-label': label }}
      />
    );

    const trigger = screen.getByLabelText(label);

    await act(async () => {
      await user.click(trigger);
    });

    expect(onDialogChange).toHaveBeenCalledTimes(1);
    expect(onDialogChange).toHaveBeenCalledWith({ isOpen: true });

    await user.keyboard('{escape}');

    expect(onDialogChange).toHaveBeenCalledTimes(2);
    expect(onDialogChange).toHaveBeenCalledWith({ isOpen: false });
  });

  describe('uncontrolled', () => {
    it('renders the color swatch dialog with no color selection', async () => {
      render(
        <ColorSwatchDialog
          colors={colors}
          defaultRowIndex={-1}
          defaultColIndex={-1}
          defaultSelectedRowIndex={-1}
          defaultSelectedColIndex={-1}
        />
      );

      const trigger = screen.getByRole('button');

      expect(document.body).toHaveFocus();

      await act(async () => {
        await user.click(trigger);
      });

      await waitFor(() => {
        expect(screen.getByTestId('#d1e8df')).toHaveFocus();
      });
    });

    it('focuses on the first swatch button when the color dialog is opened', async () => {
      render(<ColorSwatchDialog colors={colors} />);

      const trigger = screen.getByRole('button');

      expect(document.body).toHaveFocus();

      await act(async () => {
        await user.click(trigger);
      });

      await waitFor(() => {
        expect(screen.getByTestId('#d1e8df')).toHaveFocus();
      });

      await user.type(screen.getByTestId('#d1e8df'), '{escape}');

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

      await act(async () => {
        await user.click(trigger);
      });

      await waitFor(() => {
        expect(screen.getByTestId('#228f67')).toHaveFocus();
      });

      await user.type(screen.getByTestId('#228f67'), '{escape}');

      expect(trigger).toHaveFocus();
    });

    it('focuses on the selected swatch button when the color dialog is opened with no color selection', async () => {
      render(
        <ColorSwatchDialog
          colors={colors}
          rowIndex={-1}
          colIndex={-1}
          defaultSelectedRowIndex={-1}
          defaultSelectedColIndex={-1}
        />
      );

      const trigger = screen.getByRole('button');

      expect(document.body).toHaveFocus();

      await act(async () => {
        await user.click(trigger);
      });

      await waitFor(() => {
        expect(screen.getByTestId('#d1e8df')).toHaveFocus();
      });
    });

    it('retains previously selected indices when dialog is opened again', async () => {
      render(<ColorSwatchDialog colors={colors} />);

      const trigger = screen.getByRole('button');

      await user.click(trigger);

      expect(screen.getByTestId('#d1e8df')).toHaveFocus();

      await user.keyboard('{arrowright}');

      expect(screen.getByTestId('#aecfc2')).toHaveFocus();

      await user.keyboard('{enter}');

      await user.keyboard('{escape}');

      expect(trigger).toHaveFocus();

      await waitForElementToBeRemoved(screen.getByRole('dialog'));

      await user.click(trigger);

      expect(screen.getByTestId('#aecfc2')).toHaveFocus();

      await user.keyboard('{arrowleft}');

      await waitFor(() => {
        expect(screen.getByTestId('#d1e8df')).toHaveFocus();
      });
    });

    it('moves focus correctly after dialog is opened with a selected color and a different focused color', async () => {
      render(<ColorSwatchDialog colors={colors} />);

      const trigger = screen.getByRole('button');

      await user.click(trigger);

      expect(screen.getByTestId('#d1e8df')).toHaveFocus();

      await user.keyboard('{arrowright}');

      expect(screen.getByTestId('#aecfc2')).toHaveFocus();

      await user.keyboard('{enter}');

      await user.keyboard('{arrowdown}');

      expect(screen.getByTestId('#228f67')).toHaveFocus();

      await user.keyboard('{escape}');

      await waitForElementToBeRemoved(screen.getByRole('dialog'));

      await user.keyboard('{enter}');

      await user.keyboard('{arrowleft}');

      await waitFor(() => {
        expect(screen.getByTestId('#d1e8df')).toHaveFocus();
      });
    });
  });

  describe('controlled', () => {
    it('renders the color swatch dialog with no color selection', async () => {
      render(
        <ColorSwatchDialog
          colors={colors}
          rowIndex={-1}
          colIndex={-1}
          selectedRowIndex={-1}
          selectedColIndex={-1}
        />
      );

      const trigger = screen.getByRole('button');

      expect(document.body).toHaveFocus();

      await act(async () => {
        await user.click(trigger);
      });

      await waitFor(() => {
        expect(screen.getByTestId('#d1e8df')).toHaveFocus();
      });
    });

    it('focuses on the selected swatch button when the color dialog is opened with no color selection', async () => {
      render(
        <ColorSwatchDialog
          colors={colors}
          rowIndex={-1}
          colIndex={-1}
          selectedRowIndex={-1}
          selectedColIndex={-1}
        />
      );

      const trigger = screen.getByRole('button');

      expect(document.body).toHaveFocus();

      await act(async () => {
        await user.click(trigger);
      });

      await waitFor(() => {
        expect(screen.getByTestId('#d1e8df')).toHaveFocus();
      });
    });

    it('focuses on the selected swatch button when the color dialog is opened', async () => {
      render(<ColorSwatchDialog colors={colors} selectedRowIndex={1} selectedColIndex={1} />);

      const trigger = screen.getByRole('button');

      expect(document.body).toHaveFocus();

      await act(async () => {
        await user.click(trigger);
      });

      await waitFor(() => {
        expect(screen.getByTestId('#228f67')).toHaveFocus();
      });

      await user.type(screen.getByTestId('#228f67'), '{escape}');

      expect(trigger).toHaveFocus();
    });

    it('opens a controlled color dialog', async () => {
      render(
        <ColorSwatchDialog
          colors={colors}
          rowIndex={-1}
          colIndex={-1}
          selectedRowIndex={-1}
          selectedColIndex={-1}
          isOpen
        />
      );

      await act(async () => {
        const dialog = await screen.queryByRole('dialog');

        expect(dialog).toBeInTheDocument();
      });
    });

    it('closes a controlled color dialog', () => {
      render(
        <ColorSwatchDialog
          colors={colors}
          rowIndex={-1}
          colIndex={-1}
          selectedRowIndex={-1}
          selectedColIndex={-1}
          isOpen={false}
        />
      );

      const dialog = screen.queryByRole('dialog');

      expect(dialog).toBeNull();
    });
  });
});
