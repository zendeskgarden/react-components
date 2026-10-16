/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { fireEvent, screen } from '@testing-library/react';
import { createRef } from 'react';
import { vi } from 'vitest';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { Checkbox } from './Checkbox';
import { Field } from './Field';
import { Fieldset } from './Fieldset';
import { Label } from './Label';
import { MediaInput } from './MediaInput';
import { Radio } from './Radio';
import { Toggle } from './Toggle';

describe('Label', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLLabelElement>();
    const { getByTestId } = render(
      <Field>
        <Label data-test-id="label" ref={ref}>
          Test
        </Label>
      </Field>
    );

    expect(getByTestId('label')).toBe(ref.current);
  });

  it('renders input label within a Field component', () => {
    const { getByTestId } = render(
      <Field>
        <Label data-test-id="label">Test</Label>
      </Field>
    );

    expect(getByTestId('label')).toHaveAttribute('data-garden-id', 'forms.input_label');
  });

  it('renders checkbox label if within a Checkbox component', () => {
    const { getByTestId } = render(
      <Field>
        <Checkbox>
          <Label data-test-id="label">Test</Label>
        </Checkbox>
      </Field>
    );

    expect(getByTestId('label')).toHaveAttribute('data-garden-id', 'forms.checkbox_label');
  });

  it('renders toggle label if within a Toggle component', () => {
    const { getByTestId } = render(
      <Field>
        <Toggle>
          <Label data-test-id="label">Test</Label>
        </Toggle>
      </Field>
    );

    expect(getByTestId('label')).toHaveAttribute('data-garden-id', 'forms.toggle_label');
  });

  it('renders radio label if within a Radio component', () => {
    const { getByTestId } = render(
      <Field>
        <Radio>
          <Label data-test-id="label">Test</Label>
        </Radio>
      </Field>
    );

    expect(getByTestId('label')).toHaveAttribute('data-garden-id', 'forms.radio_label');
  });

  it('renders regular label if within a Fieldset component', () => {
    render(
      <Fieldset>
        <Field>
          <Radio>
            <Label>Test</Label>
          </Radio>
        </Field>
      </Fieldset>
    );

    const label = screen.getByText('Test');

    expect(label).toHaveStyleRule('font-weight', DEFAULT_THEME.fontWeights.regular.toString());
  });

  it('does not let props override the garden attributes', () => {
    const { getByTestId } = render(
      <>
        <Field>
          <Label data-test-id="input-label" data-garden-id="custom" data-garden-version="0.0.0">
            Label
          </Label>
        </Field>
        <Field>
          <Radio>
            <Label data-test-id="radio-label" data-garden-id="custom" data-garden-version="0.0.0">
              Label
            </Label>
          </Radio>
        </Field>
      </>
    );

    expect(getByTestId('input-label')).toHaveAttribute('data-garden-id', 'forms.input_label');
    expect(getByTestId('input-label')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    expect(getByTestId('radio-label')).toHaveAttribute('data-garden-id', 'forms.radio_label');
    expect(getByTestId('radio-label')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  it('keeps a hidden radio, checkbox or toggle label in the layout', () => {
    const { getByTestId } = render(
      <>
        <Field>
          <Radio>
            <Label hidden data-test-id="radio-label">
              Label
            </Label>
          </Radio>
        </Field>
        <Field>
          <Checkbox>
            <Label hidden data-test-id="checkbox-label">
              Label
            </Label>
          </Checkbox>
        </Field>
        <Field>
          <Toggle>
            <Label hidden data-test-id="toggle-label">
              Label
            </Label>
          </Toggle>
        </Field>
        <Field>
          <Label hidden data-test-id="input-label">
            Label
          </Label>
        </Field>
      </>
    );

    ['radio-label', 'checkbox-label', 'toggle-label'].forEach(testId => {
      expect(getByTestId(testId)).toHaveStyleRule('display', 'inline-block', {
        modifier: '&[hidden]'
      });
    });
    expect(getByTestId('input-label')).toHaveStyleRule('display', 'inline', {
      modifier: '&[hidden]'
    });
  });

  describe('mouse events', () => {
    it('composes the consumer handlers', () => {
      const handlers = {
        onMouseDown: vi.fn(),
        onMouseUp: vi.fn(),
        onMouseEnter: vi.fn(),
        onMouseLeave: vi.fn()
      };
      const { getByTestId } = render(
        <Field>
          <Label data-test-id="label" {...handlers}>
            Label
          </Label>
        </Field>
      );
      const label = getByTestId('label');

      fireEvent.mouseDown(label);
      fireEvent.mouseUp(label);
      fireEvent.mouseEnter(label);
      fireEvent.mouseLeave(label);

      expect(handlers.onMouseDown).toHaveBeenCalledTimes(1);
      expect(handlers.onMouseUp).toHaveBeenCalledTimes(1);
      expect(handlers.onMouseEnter).toHaveBeenCalledTimes(1);
      expect(handlers.onMouseLeave).toHaveBeenCalledTimes(1);
    });

    it('hovers the media input of its field while the pointer is over the label', () => {
      const { getByTestId } = render(
        <Field>
          <Label data-test-id="label">Label</Label>
          <MediaInput data-test-id="input" />
        </Field>
      );
      const wrapper = getByTestId('input').parentElement!;
      const hoverColor = getColor({ theme: DEFAULT_THEME, variable: 'border.primaryEmphasis' });

      expect(wrapper).not.toHaveStyleRule('border-color', hoverColor);

      fireEvent.mouseEnter(getByTestId('label'));
      expect(wrapper).toHaveStyleRule('border-color', hoverColor);

      fireEvent.mouseLeave(getByTestId('label'));
      expect(wrapper).not.toHaveStyleRule('border-color', hoverColor);
    });
  });

  describe('checkbox label in Firefox', () => {
    /* eslint-disable-next-line n/no-unsupported-features/node-builtins */
    const userAgent = vi.spyOn(window.navigator, 'userAgent', 'get');

    afterEach(() => {
      userAgent.mockReset();
    });

    it('focuses the checkbox on a shift + click, as Firefox does not', () => {
      userAgent.mockReturnValue(
        'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0'
      );

      const onClick = vi.fn();
      const { getByTestId } = render(
        <Field>
          <Checkbox data-test-id="checkbox">
            <Label data-test-id="label" onClick={onClick}>
              Label
            </Label>
          </Checkbox>
        </Field>
      );

      fireEvent.click(getByTestId('label'), { shiftKey: true });

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(getByTestId('checkbox')).toHaveFocus();
    });

    it('leaves the focus alone in other browsers', () => {
      userAgent.mockReturnValue('Mozilla/5.0 (Macintosh) AppleWebKit/605.1.15 Safari/605.1.15');

      const { getByTestId } = render(
        <Field>
          <Checkbox data-test-id="checkbox">
            <Label data-test-id="label">Label</Label>
          </Checkbox>
        </Field>
      );

      fireEvent.click(getByTestId('label'), { shiftKey: true });

      expect(getByTestId('checkbox')).not.toHaveFocus();
    });
  });
});
