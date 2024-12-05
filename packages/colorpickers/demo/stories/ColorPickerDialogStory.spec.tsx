/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { ColorPickerDialogStory } from './ColorPickerDialogStory';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<ColorPickerDialogStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('ColorpickerDialogStory Component', () => {
  it('renders default ColorpickerDialogStory', () => {
    renderAndMatchSnapshot({});
  });

  it('renders ColorpickerDialogStory with a default color (string)', () => {
    renderAndMatchSnapshot({ defaultColor: '#ff0000' });
  });

  it('renders ColorpickerDialogStory with a default color (IColor object)', () => {
    renderAndMatchSnapshot({
      defaultColor: {
        hex: '#ff0000',
        hue: 0,
        saturation: 100,
        lightness: 50,
        red: 255,
        green: 0,
        blue: 0,
        alpha: 1
      }
    });
  });

  it('renders ColorpickerDialogStory with a controlled color (string)', () => {
    renderAndMatchSnapshot({ color: '#00ff00' });
  });

  it('renders ColorpickerDialogStory with a controlled color (IColor object)', () => {
    renderAndMatchSnapshot({
      color: {
        hex: '#00ff00',
        hue: 120,
        saturation: 100,
        lightness: 50,
        red: 0,
        green: 255,
        blue: 0,
        alpha: 1
      }
    });
  });

  it('renders ColorpickerDialogStory with opaque color (isOpaque)', () => {
    renderAndMatchSnapshot({ isOpaque: true });
  });

  it('renders ColorpickerDialogStory with custom labels', () => {
    renderAndMatchSnapshot({
      labels: {
        hueSlider: 'Hue',
        alphaSlider: 'Alpha',
        hex: 'Hex',
        red: 'Red',
        green: 'Green',
        blue: 'Blue',
        alpha: 'Alpha'
      }
    });
  });

  it('renders ColorpickerDialogStory with a custom placement', () => {
    renderAndMatchSnapshot({ placement: 'top' });
  });

  it('renders ColorpickerDialogStory with a zIndex', () => {
    renderAndMatchSnapshot({ zIndex: 1000 });
  });

  it('renders ColorpickerDialogStory with an arrow (hasArrow)', () => {
    renderAndMatchSnapshot({ hasArrow: true });
  });

  it('renders ColorpickerDialogStory with animation (isAnimated)', () => {
    renderAndMatchSnapshot({ isAnimated: true });
  });

  it('renders ColorpickerDialogStory with the dialog open (isOpen)', () => {
    renderAndMatchSnapshot({ isOpen: true });
  });

  it('renders ColorpickerDialogStory with focus inset (focusInset)', () => {
    renderAndMatchSnapshot({ focusInset: true });
  });

  it('renders ColorpickerDialogStory with custom button props', () => {
    renderAndMatchSnapshot({ buttonProps: { 'aria-label': 'Custom button' } });
  });

  it('renders ColorpickerDialogStory with a label', () => {
    renderAndMatchSnapshot({ label: 'Pick a color' });
  });

  it('renders ColorpickerDialogStory with a hidden label', () => {
    renderAndMatchSnapshot({ label: 'Pick a color', isLabelHidden: true });
  });

  it('renders ColorpickerDialogStory with a custom button label', () => {
    renderAndMatchSnapshot({ buttonLabel: 'Choose Color' });
  });

  it('renders ColorpickerDialogStory with a disabled state', () => {
    renderAndMatchSnapshot({ disabled: true });
  });

  it('renders ColorpickerDialogStory with a read-only state', () => {
    renderAndMatchSnapshot({ readOnly: true });
  });

  it('renders ColorpickerDialogStory with a label and hidden label', () => {
    renderAndMatchSnapshot({ label: 'Pick a color', isLabelHidden: true });
  });

  it('renders ColorpickerDialogStory with a label and custom button label', () => {
    renderAndMatchSnapshot({ label: 'Pick a color', buttonLabel: 'Choose Color' });
  });

  it('renders ColorpickerDialogStory with a label, hidden label, and custom button label', () => {
    renderAndMatchSnapshot({
      label: 'Pick a color',
      isLabelHidden: true,
      buttonLabel: 'Choose Color'
    });
  });

  it('renders ColorpickerDialogStory with a label, custom button label, and custom placement', () => {
    renderAndMatchSnapshot({
      label: 'Pick a color',
      buttonLabel: 'Choose Color',
      placement: 'top'
    });
  });

  it('renders ColorpickerDialogStory with a label, hidden label, custom button label, and custom placement', () => {
    renderAndMatchSnapshot({
      label: 'Pick a color',
      isLabelHidden: true,
      buttonLabel: 'Choose Color',
      placement: 'top'
    });
  });

  it('renders ColorpickerDialogStory with a label, custom button label, and disabled state', () => {
    renderAndMatchSnapshot({
      label: 'Pick a color',
      buttonLabel: 'Choose Color',
      disabled: true
    });
  });

  it('renders ColorpickerDialogStory with a label, custom button label, and read-only state', () => {
    renderAndMatchSnapshot({
      label: 'Pick a color',
      buttonLabel: 'Choose Color',
      readOnly: true
    });
  });

  it('renders ColorpickerDialogStory with a label, hidden label, custom button label, and disabled state', () => {
    renderAndMatchSnapshot({
      label: 'Pick a color',
      isLabelHidden: true,
      buttonLabel: 'Choose Color',
      disabled: true
    });
  });

  it('renders ColorpickerDialogStory with a label, hidden label, custom button label, and read-only state', () => {
    renderAndMatchSnapshot({
      label: 'Pick a color',
      isLabelHidden: true,
      buttonLabel: 'Choose Color',
      readOnly: true
    });
  });

  it('renders ColorpickerDialogStory with a label, custom button label, custom placement, and disabled state', () => {
    renderAndMatchSnapshot({
      label: 'Pick a color',
      buttonLabel: 'Choose Color',
      placement: 'top',
      disabled: true
    });
  });

  it('renders ColorpickerDialogStory with a label, custom button label, custom placement, and read-only state', () => {
    renderAndMatchSnapshot({
      label: 'Pick a color',
      buttonLabel: 'Choose Color',
      placement: 'top',
      readOnly: true
    });
  });

  it('renders ColorpickerDialogStory with a label, hidden label, custom button label, custom placement, and disabled state', () => {
    renderAndMatchSnapshot({
      label: 'Pick a color',
      isLabelHidden: true,
      buttonLabel: 'Choose Color',
      placement: 'top',
      disabled: true
    });
  });

  it('renders ColorpickerDialogStory with a label, hidden label, custom button label, custom placement, and read-only state', () => {
    renderAndMatchSnapshot({
      label: 'Pick a color',
      isLabelHidden: true,
      buttonLabel: 'Choose Color',
      placement: 'top',
      readOnly: true
    });
  });
});
