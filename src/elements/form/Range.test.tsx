/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { userEvent } from '@testing-library/user-event';
import { createRef, useState } from 'react';
import { vi } from 'vitest';

import { render } from '../../test/render';
import { Field } from './Field';
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
    const ref = createRef<HTMLInputElement>();
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
        const [value, setValue] = useState(25);

        return (
          <>
            <Field>
              <Range min={0} max={100} value={value} data-test-id="range" />
            </Field>
            <button type="button" onClick={() => setValue(50)}>
              Set value to 50
            </button>
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

  it('does not let props override the garden attributes or the type', () => {
    const { getByTestId } = render(
      <Field>
        <Range
          data-test-id="range"
          data-garden-id="custom"
          data-garden-version="0.0.0"
          type="text"
        />
      </Field>
    );

    expect(getByTestId('range')).toHaveAttribute('data-garden-id', 'forms.range');
    expect(getByTestId('range')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    expect(getByTestId('range')).toHaveAttribute('type', 'range');
  });

  it('merges the lower-track size into the consumer style', () => {
    const { getByTestId } = render(
      <Field>
        <Range min={0} max={100} value={25} data-test-id="range" style={{ margin: '4px' }} />
      </Field>
    );
    const range = getByTestId('range') as HTMLInputElement;

    expect(range.style.margin).toBe('4px');
    expect(range.style.backgroundSize).toBe('25%');
  });

  it('renders no lower-track size without hasLowerTrack', () => {
    const { getByTestId } = render(
      <Field>
        <Range
          min={0}
          max={100}
          value={25}
          hasLowerTrack={false}
          data-test-id="range"
          style={{ margin: '4px' }}
        />
      </Field>
    );
    const range = getByTestId('range') as HTMLInputElement;

    expect(range.style.margin).toBe('4px');
    expect(range.style.backgroundSize).toBe('');
  });

  it('keeps the lower-track size over a consumer backgroundSize', () => {
    const { getByTestId } = render(
      <Field>
        <Range
          min={0}
          max={100}
          value={25}
          data-test-id="range"
          style={{ backgroundSize: '80%' }}
        />
      </Field>
    );

    expect(getByTestId('range').style.backgroundSize).toBe('25%');
  });

  it('keeps a consumer backgroundSize without hasLowerTrack', () => {
    const { getByTestId } = render(
      <Field>
        <Range
          min={0}
          max={100}
          value={25}
          hasLowerTrack={false}
          data-test-id="range"
          style={{ backgroundSize: 'auto' }}
        />
      </Field>
    );

    expect(getByTestId('range').style.backgroundSize).toBe('auto');
  });

  it('does not warn when a background shorthand updates next to the consumer backgroundSize', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const ShorthandExample = ({ color }: { color: string }) => (
      <Field>
        <Range
          hasLowerTrack={false}
          data-test-id="range"
          style={{ backgroundSize: 'auto', background: `${color} 0 0 / 100% 4px no-repeat` }}
        />
      </Field>
    );
    const { getByTestId, rerender } = render(<ShorthandExample color="red" />);

    rerender(<ShorthandExample color="blue" />);

    expect(getByTestId('range').style.backgroundSize).toBe('100% 4px');
    expect(error).not.toHaveBeenCalled();
    error.mockRestore();
  });
});
