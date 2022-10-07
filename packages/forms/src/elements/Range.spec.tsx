/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import { Field } from './common/Field';
import { Range } from './Range';

describe('Range', () => {
  const user = userEvent.setup();

  const BasicExample = () => (
    <Field>
      <Range min={0} max={100} value={25} data-test-id="range" />
    </Field>
  );

  it('is rendered as an input of type range', () => {
    const { getByTestId } = render(<BasicExample />);
    const range = getByTestId('range');

    expect(range.nodeName).toBe('INPUT');
    expect(range).toHaveAttribute('type', 'range');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { getByTestId } = render(
      <Field>
        <Range data-test-id="range" ref={ref} />
      </Field>
    );

    expect(getByTestId('range')).toBe(ref.current);
  });

  describe('BackgroundSize', () => {
    it('applies backgroundSize equivalent to the input value', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('range').style.backgroundSize).toBe('25%');
    });

    it('applies correct backgroundSize for a controlled component', async () => {
      const ControlledExample = () => {
        const [value, setValue] = React.useState(25);

        return (
          <>
            <Field>
              <Range min={0} max={100} value={value} data-test-id="range" />
            </Field>
            <button onClick={() => setValue(50)}>Set value to 50</button>
          </>
        );
      };
      const { getByTestId, getByRole } = render(<ControlledExample />);

      expect(getByTestId('range').style.backgroundSize).toBe('25%');
      const button = getByRole('button');

      await user.click(button);
      expect(getByTestId('range').style.backgroundSize).toBe('50%');
    });
  });
});
