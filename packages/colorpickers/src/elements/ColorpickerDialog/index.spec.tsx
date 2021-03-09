/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, createRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, screen, waitForElementToBeRemoved } from 'garden-test-utils';
import { ColorpickerDialog } from '.';
import { IColor } from '../../utils/types';

describe('ColorpickerDialog', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<ColorpickerDialog defaultColor="#17494D" ref={ref} data-test-id="colordialog" />);

    expect(screen.getByTestId('colordialog')).toBe(ref.current);
  });

  it('focuses on the hex input and trigger when the color dialog is opened and closed', () => {
    const Basic = () => <ColorpickerDialog defaultColor="rgba(23,73,77,1)" />;

    render(<Basic />);

    const trigger = screen.getByRole('button');

    expect(document.body).toHaveFocus();

    userEvent.click(trigger);
    const hexInput = screen.getByLabelText('Hex');

    expect(hexInput).toHaveFocus();

    userEvent.type(hexInput, '{esc}');
    expect(trigger).toHaveFocus();
  });

  it('updates the color dialog button preview color', async () => {
    const Basic = () => {
      const [color, setColor] = useState<string | IColor>('rgba(23,73,77,1)');

      return <ColorpickerDialog defaultColor={color} onClose={setColor} />;
    };

    render(<Basic />);

    const trigger = screen.getByRole('button');

    userEvent.click(trigger);

    const dialog = screen.getByRole('dialog');
    const hueSlider = screen.getByLabelText('Hue slider');
    const alphaSlider = screen.getByLabelText('Alpha slider');
    const hexInput = screen.getByLabelText('Hex');

    fireEvent.change(hueSlider, { target: { value: '349' } });
    fireEvent.change(alphaSlider, { target: { value: '.5' } });
    userEvent.type(hexInput, '{esc}');

    await waitForElementToBeRemoved(dialog);

    expect(screen.queryByLabelText('Hex')).toBeNull();
    expect(screen.queryByLabelText('Hue slider')).toBeNull();
    expect(screen.queryByLabelText('Alpha slider')).toBeNull();
  });
});
