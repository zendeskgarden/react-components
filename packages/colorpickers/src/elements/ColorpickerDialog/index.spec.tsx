/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, createRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, screen, waitForElementToBeRemoved, act } from 'garden-test-utils';
import { ColorpickerDialog } from '.';
import { IColor } from '../../types';

describe('ColorpickerDialog', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', async () => {
    const ref = createRef<HTMLDivElement>();

    render(<ColorpickerDialog defaultColor="#17494D" ref={ref} data-test-id="colordialog" />);

    await act(async () => {
      await user.click(screen.getByRole('button'));
    });

    expect(screen.getByTestId('colordialog')).toBe(ref.current);
  });

  it('calls onDialogChange when the dialog state changes', async () => {
    const onDialogChange = jest.fn();
    const label = 'Choose your favorite color';

    render(
      <ColorpickerDialog
        defaultColor="#17494D"
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

  it('applies buttonProps to the button element', () => {
    render(
      <ColorpickerDialog
        defaultColor="rgba(23,73,77,1)"
        buttonProps={{
          'aria-label': 'Choose your favorite color'
        }}
      />
    );

    const button = screen.getByRole('button');

    expect(button).toBe(screen.getByLabelText('Choose your favorite color'));
  });

  it('focuses on the hex input and trigger when the color dialog is opened and closed', async () => {
    const Basic = () => <ColorpickerDialog defaultColor="rgba(23,73,77,1)" />;

    render(<Basic />);

    const trigger = screen.getByRole('button');

    expect(document.body).toHaveFocus();

    await user.click(trigger);
    const hexInput = screen.getByLabelText('Hex');

    expect(hexInput).toHaveFocus();

    await user.type(hexInput, '{escape}');
    expect(trigger).toHaveFocus();
  });

  it('updates the color dialog button preview color', async () => {
    const Basic = () => {
      const [color, setColor] = useState<string | IColor>('rgba(23,73,77,1)');

      return <ColorpickerDialog defaultColor={color} onClose={setColor} />;
    };

    render(<Basic />);

    const trigger = screen.getByRole('button');

    await user.click(trigger);

    const dialog = screen.getByRole('dialog');
    const hueSlider = screen.getByLabelText('Hue slider');
    const alphaSlider = screen.getByLabelText('Alpha slider');
    const hexInput = screen.getByLabelText('Hex');

    fireEvent.change(hueSlider, { target: { value: '349' } });
    fireEvent.change(alphaSlider, { target: { value: '.5' } });
    await user.type(hexInput, '{escape}');

    await waitForElementToBeRemoved(dialog);

    expect(screen.queryByLabelText('Hex')).toBeNull();
    expect(screen.queryByLabelText('Hue slider')).toBeNull();
    expect(screen.queryByLabelText('Alpha slider')).toBeNull();
  });

  it('opens a controlled color dialog', async () => {
    render(<ColorpickerDialog color="rgba(23,73,77,1)" isOpen />);

    await act(async () => {
      const dialog = await screen.queryByRole('dialog');

      expect(dialog).toBeInTheDocument();
    });
  });

  it('closes a controlled color dialog', () => {
    render(<ColorpickerDialog color="rgba(23,73,77,1)" isOpen={false} />);

    const dialog = screen.queryByRole('dialog');

    expect(dialog).toBeNull();
  });
});
