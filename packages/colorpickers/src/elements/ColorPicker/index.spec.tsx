/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createRef } from 'react';
import { render, renderRtl, fireEvent, screen } from 'garden-test-utils';
import { ColorPicker } from './index';
import { IColor } from '../../utils/types';
import userEvent from '@testing-library/user-event';

describe('ColorPicker', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <ColorPicker ref={ref} color="#17494D" data-test-id="colorpicker" />
    );

    expect(getByTestId('colorpicker')).toBe(ref.current);
  });

  it('focuses on the hex input when autofocus is on', () => {
    render(<ColorPicker color="#17494D" autofocus />);

    const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;

    expect(hexInput).toHaveFocus();
  });

  it('uses labels when provided', () => {
    const labels = {
      hueSlider: 'هوى المنزلق',
      alphaSlider: 'منزلق ألفا',
      hex: 'عرافة',
      red: 'أحمر',
      green: 'أخضر',
      blue: 'أزرق',
      alpha: 'ألفا'
    };

    renderRtl(<ColorPicker defaultColor="#17494d" labels={labels} />);

    const hueSlider = screen.getByLabelText(labels.hueSlider) as HTMLInputElement;
    const alphaSlider = screen.getByLabelText(labels.alphaSlider) as HTMLInputElement;
    const hexInput = screen.getByLabelText(labels.hex) as HTMLInputElement;
    const redInput = screen.getByLabelText(labels.red) as HTMLInputElement;
    const greenInput = screen.getByLabelText(labels.green) as HTMLInputElement;
    const blueInput = screen.getByLabelText(labels.blue) as HTMLInputElement;
    const alphaInput = screen.getByLabelText(labels.alpha) as HTMLInputElement;

    expect(hueSlider.value).toBe('184.44444444444443');
    expect(alphaSlider.value).toBe('1');
    expect(hexInput.value).toBe('#17494d');
    expect(redInput.value).toBe('23');
    expect(greenInput.value).toBe('73');
    expect(blueInput.value).toBe('77');
    expect(alphaInput.value).toBe('100');
  });

  describe('Uncontrolled usage', () => {
    it('updates the color picker when the hue slider is changed', () => {
      render(<ColorPicker defaultColor="#17494D" />);

      const previewBox = screen.getByTestId('preview-box');
      const colorwell = screen.getByTestId('colorwell');
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(184.44444444444443,100%,50%)');
      expect(hexInput.value).toBe('#17494d');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');

      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;

      fireEvent.change(hueSlider, { target: { value: '349' } });

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(77, 23, 33);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(349,100%,50%)');
      expect(hexInput.value).toBe('#4d1721');
      expect(redInput.value).toBe('77');
      expect(greenInput.value).toBe('23');
      expect(blueInput.value).toBe('33');
    });

    it('updates the color picker when the alpha slider is changed', () => {
      render(<ColorPicker defaultColor="rgb(23, 73, 77)" />);
      const previewBox = screen.getByTestId('preview-box');
      const alphaSlider = screen.getByLabelText('Alpha slider') as HTMLInputElement;
      const alphaInput = screen.getByLabelText('A') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');

      fireEvent.change(alphaSlider, { target: { value: '0.5' } });

      expect(previewBox).toHaveAttribute('style', 'background-color: rgba(23, 73, 77, 0.5);');
      expect(alphaInput.value).toBe('50');
    });

    it('updates the rgb/a inputs correctly when one is cleared and user types into another', () => {
      render(<ColorPicker defaultColor="rgb(23, 73, 77)" />);
      const previewBox = screen.getByTestId('preview-box');
      const colorwell = screen.getByTestId('colorwell');
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(184.44444444444443,100%,50%)');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      userEvent.clear(greenInput);
      expect(greenInput.value).toBe('');
      userEvent.type(redInput, '2');

      expect(greenInput.value).toBe('73');
      expect(hexInput.value).toBe('#e8494d');
    });

    it('updates the color picker when the input is changed to a valid hex without the number sign', () => {
      render(<ColorPicker defaultColor="rgb(23, 73, 77)" />);
      const previewBox = screen.getByTestId('preview-box');
      const colorwell = screen.getByTestId('colorwell');
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(184.44444444444443,100%,50%)');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      userEvent.clear(hexInput);
      userEvent.type(hexInput, 'b4da55');
      userEvent.tab();

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(180, 218, 85);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(77,100%,50%)');
      expect(hueSlider.value).toBe('77');
      expect(hexInput.value).toBe('#b4da55');
      expect(redInput.value).toBe('180');
      expect(greenInput.value).toBe('218');
      expect(blueInput.value).toBe('85');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 15%; left: 60.99999999999998%;');
    });

    it('updates the color picker when the hex input is changed', () => {
      render(<ColorPicker defaultColor="rgb(23, 73, 77)" />);
      const previewBox = screen.getByTestId('preview-box');
      const colorwell = screen.getByTestId('colorwell');
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex');
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(184.44444444444443,100%,50%)');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      userEvent.clear(hexInput);
      userEvent.type(hexInput, '#b4da55');

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(180, 218, 85);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(77,100%,50%)');
      expect(hueSlider.value).toBe('77');
      expect(redInput.value).toBe('180');
      expect(greenInput.value).toBe('218');
      expect(blueInput.value).toBe('85');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 15%; left: 60.99999999999998%;');
    });

    it('updates the color picker when the R input is changed', () => {
      render(<ColorPicker defaultColor="rgb(23, 73, 77)" />);
      const previewBox = screen.getByTestId('preview-box');
      const colorwell = screen.getByTestId('colorwell');
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(184.44444444444443,100%,50%)');
      expect(hexInput.value).toBe('#17494d');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      userEvent.clear(redInput);
      userEvent.type(redInput, '255');

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(255, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(359,100%,50%)');
      expect(hueSlider.value).toBe('359');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 0%; left: 71%;');
    });

    it('updates the color picker when the G input is changed', () => {
      render(<ColorPicker defaultColor="rgb(23, 73, 77)" />);
      const previewBox = screen.getByTestId('preview-box');
      const colorwell = screen.getByTestId('colorwell');
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(184.44444444444443,100%,50%)');
      expect(hexInput.value).toBe('#17494d');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      userEvent.clear(greenInput);
      userEvent.type(greenInput, '255');

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 255, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(134,100%,50%)');
      expect(hueSlider.value).toBe('134');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 0%; left: 91%;');
    });

    it('updates the color picker when the B input is changed', () => {
      render(<ColorPicker defaultColor="rgb(23, 73, 77)" />);
      const previewBox = screen.getByTestId('preview-box');
      const colorwell = screen.getByTestId('colorwell');
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(184.44444444444443,100%,50%)');
      expect(hexInput.value).toBe('#17494d');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      userEvent.clear(blueInput);
      userEvent.type(blueInput, '255');

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 255);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(227,100%,50%)');
      expect(hueSlider.value).toBe('227');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 0%; left: 91%;');
    });

    it('updates with correct alpha when the A input is changed', () => {
      render(<ColorPicker defaultColor="rgba(23, 73, 77, 1)" />);

      const previewBox = screen.getByTestId('preview-box');
      const alphaSlider = screen.getByLabelText('Alpha slider') as HTMLInputElement;
      const alphaInput = screen.getByLabelText('A') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(alphaSlider.value).toBe('1');
      expect(alphaInput.value).toBe('100');

      userEvent.clear(alphaInput);
      userEvent.type(alphaInput, '50');

      expect(previewBox).toHaveAttribute('style', 'background-color: rgba(23, 73, 77, 0.5);');
      expect(alphaSlider.value).toBe('0.5');
      expect(alphaInput.value).toBe('50');
    });

    it('keeps current color when user changes RGB/A inputs to invalid values', () => {
      render(<ColorPicker defaultColor="rgba(23, 73, 77, 50)" />);

      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;
      const alphaInput = screen.getByLabelText('A') as HTMLInputElement;

      userEvent.clear(redInput);
      userEvent.type(redInput, '299');
      expect(redInput.value).toBe('29');

      userEvent.clear(greenInput);
      userEvent.type(greenInput, '299');
      expect(greenInput.value).toBe('29');

      userEvent.clear(blueInput);
      userEvent.type(blueInput, '299');
      expect(blueInput.value).toBe('29');

      userEvent.clear(alphaInput);
      userEvent.type(alphaInput, '109');
      expect(alphaInput.value).toBe('10');
    });

    it('updates the color only if the hex input is a valid hex color', () => {
      render(<ColorPicker defaultColor="#17494d" />);

      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;

      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      userEvent.clear(hexInput);
      userEvent.type(hexInput, '#b4'); // invalid hex

      expect(hueSlider.value).toBe('184.44444444444443');

      userEvent.type(hexInput, 'da55'); // now valid hex

      expect(hueSlider.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 15%; left: 60.99999999999998%;');
    });
  });

  describe('Controlled usage', () => {
    it('updates the color picker when the hue slider is changed', () => {
      const Basic = () => {
        const [color, setColor] = React.useState<string | IColor>('#17494D');

        return <ColorPicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const previewBox = screen.getByTestId('preview-box');
      const colorwell = screen.getByTestId('colorwell');
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(184.44444444444443,100%,50%)');
      expect(hexInput.value).toBe('#17494d');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');

      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;

      fireEvent.change(hueSlider, { target: { value: '349' } });

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(77, 23, 33);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(349,100%,50%)');
      expect(hexInput.value).toBe('#4d1721');
      expect(redInput.value).toBe('77');
      expect(greenInput.value).toBe('23');
      expect(blueInput.value).toBe('33');
    });

    it('updates the color picker when the alpha slider is changed', () => {
      const Basic = () => {
        const [color, setColor] = React.useState<any>('rgb(23,73,77)');

        return <ColorPicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const previewBox = screen.getByTestId('preview-box');
      const alphaSlider = screen.getByLabelText('Alpha slider') as HTMLInputElement;
      const alphaInput = screen.getByLabelText('A') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');

      fireEvent.change(alphaSlider, { target: { value: '0.5' } });

      expect(previewBox).toHaveAttribute('style', 'background-color: rgba(23, 73, 77, 0.5);');
      expect(alphaInput.value).toBe('50');
    });

    it('updates the rgb/a inputs correctly when one is cleared and user types into another', () => {
      const Basic = () => {
        const [color, setColor] = React.useState<any>('rgb(23,73,77)');

        return <ColorPicker color={color} onChange={setColor} />;
      };

      render(<Basic />);
      const previewBox = screen.getByTestId('preview-box');
      const colorwell = screen.getByTestId('colorwell');
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(184.44444444444443,100%,50%)');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      userEvent.clear(greenInput);
      expect(greenInput.value).toBe('');
      userEvent.type(redInput, '2');

      expect(greenInput.value).toBe('73');
      expect(hexInput.value).toBe('#e8494d');
    });

    it('updates the color picker when the input is changed to a valid hex without the number sign', () => {
      const Basic = () => {
        const [color, setColor] = React.useState<any>('rgb(23,73,77)');

        return <ColorPicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const previewBox = screen.getByTestId('preview-box');
      const colorwell = screen.getByTestId('colorwell');
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(184.44444444444443,100%,50%)');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      userEvent.clear(hexInput);
      userEvent.type(hexInput, 'b4da55');
      userEvent.tab();

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(180, 218, 85);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(77,100%,50%)');
      expect(hueSlider.value).toBe('77');
      expect(hexInput.value).toBe('#b4da55');
      expect(redInput.value).toBe('180');
      expect(greenInput.value).toBe('218');
      expect(blueInput.value).toBe('85');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 14.509803921568633%; left: 61.00917431192659%;'
      );
    });

    it('updates the color picker when the hex input is changed', () => {
      const Basic = () => {
        const [color, setColor] = React.useState<any>('rgb(23,73,77)');

        return <ColorPicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const previewBox = screen.getByTestId('preview-box');
      const colorwell = screen.getByTestId('colorwell');
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex');
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(184.44444444444443,100%,50%)');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      userEvent.clear(hexInput);
      userEvent.type(hexInput, '#b4da55');

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(180, 218, 85);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(77,100%,50%)');
      expect(hueSlider.value).toBe('77');
      expect(redInput.value).toBe('180');
      expect(greenInput.value).toBe('218');
      expect(blueInput.value).toBe('85');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 14.509803921568633%; left: 61.00917431192659%;'
      );
    });

    it('updates the color picker when the R input is changed', () => {
      const Basic = () => {
        const [color, setColor] = React.useState<any>('rgb(23,73,77)');

        return <ColorPicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const previewBox = screen.getByTestId('preview-box');
      const colorwell = screen.getByTestId('colorwell');
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(184.44444444444443,100%,50%)');
      expect(hexInput.value).toBe('#17494d');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      userEvent.clear(redInput);
      userEvent.type(redInput, '255');

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(255, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(359,100%,50%)');
      expect(hueSlider.value).toBe('359');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 0%; left: 71.37254901960785%;');
    });

    it('updates the color picker when the G input is changed', () => {
      const Basic = () => {
        const [color, setColor] = React.useState<any>('rgb(23,73,77)');

        return <ColorPicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const previewBox = screen.getByTestId('preview-box');
      const colorwell = screen.getByTestId('colorwell');
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(184.44444444444443,100%,50%)');
      expect(hexInput.value).toBe('#17494d');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      userEvent.clear(greenInput);
      userEvent.type(greenInput, '255');

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 255, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(134,100%,50%)');
      expect(hueSlider.value).toBe('134');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 0%; left: 90.98039215686275%;');
    });

    it('updates the color picker when the B input is changed', () => {
      const Basic = () => {
        const [color, setColor] = React.useState<any>('rgb(23,73,77)');

        return <ColorPicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const previewBox = screen.getByTestId('preview-box');
      const colorwell = screen.getByTestId('colorwell');
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(184.44444444444443,100%,50%)');
      expect(hexInput.value).toBe('#17494d');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      userEvent.clear(blueInput);
      userEvent.type(blueInput, '255');

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 255);');
      expect(colorwell).toHaveStyleRule('background', 'hsl(227,100%,50%)');
      expect(hueSlider.value).toBe('227');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 0%; left: 90.98039215686275%;');
    });

    it('updates with correct alpha when the A input is changed', () => {
      const Basic = () => {
        const [color, setColor] = React.useState<any>({
          red: 23,
          green: 73,
          blue: 77,
          alpha: 100
        });

        return <ColorPicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const previewBox = screen.getByTestId('preview-box');
      const alphaSlider = screen.getByLabelText('Alpha slider') as HTMLInputElement;
      const alphaInput = screen.getByLabelText('A') as HTMLInputElement;

      expect(previewBox).toHaveAttribute('style', 'background-color: rgb(23, 73, 77);');
      expect(alphaSlider.value).toBe('1');
      expect(alphaInput.value).toBe('100');

      userEvent.clear(alphaInput);
      userEvent.type(alphaInput, '50');

      expect(previewBox).toHaveAttribute('style', 'background-color: rgba(23, 73, 77, 0.5);');
      expect(alphaSlider.value).toBe('0.5');
      expect(alphaInput.value).toBe('50');
    });

    it('keeps current color when user changes RGB/A inputs to invalid values', () => {
      const Basic = () => {
        const [color, setColor] = React.useState<any>({
          hue: 0,
          saturation: 0,
          lightness: 0,
          red: 23,
          green: 73,
          blue: 77,
          alpha: 50
        });

        return <ColorPicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;
      const alphaInput = screen.getByLabelText('A') as HTMLInputElement;

      userEvent.clear(redInput);
      userEvent.type(redInput, '299');
      expect(redInput.value).toBe('29');

      userEvent.clear(greenInput);
      userEvent.type(greenInput, '299');
      expect(greenInput.value).toBe('29');

      userEvent.clear(blueInput);
      userEvent.type(blueInput, '299');
      expect(blueInput.value).toBe('29');

      userEvent.clear(alphaInput);
      userEvent.type(alphaInput, '109');
      expect(alphaInput.value).toBe('10');
    });

    it('updates the color only if the hex input is a valid hex color', () => {
      const Basic = () => {
        const [color, setColor] = React.useState<any>('#17494d');

        return <ColorPicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;

      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      userEvent.clear(hexInput);
      userEvent.type(hexInput, '#b4'); // invalid hex

      expect(hueSlider.value).toBe('184.44444444444443');

      userEvent.type(hexInput, 'da55'); // now valid hex

      expect(hueSlider.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 14.509803921568633%; left: 61.00917431192659%;'
      );
    });

    it('sets color picker text inputs when color prop is manually controlled', () => {
      const Basic = () => {
        const [color, setColor] = React.useState<string | IColor>('#17494d');

        return (
          <>
            <ColorPicker color={color} onChange={setColor} />
            <button onClick={() => setColor('#b4da55')}>Change #b4da55</button>
            <button onClick={() => setColor('#b!da5!')}>Change #b!da5!</button>
            <button onClick={() => setColor('rgb(85, 211, 218)')}>Change rgb(85, 211, 218)</button>
            <button onClick={() => setColor('rgba(0, 0, 0, .50)')}>
              Change rgba(0, 0, 0, .50)
            </button>
          </>
        );
      };

      render(<Basic />);

      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;
      const alphaInput = screen.getByLabelText('A') as HTMLInputElement;

      expect(hexInput.value).toBe('#17494d');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(alphaInput.value).toBe('100');

      userEvent.click(screen.getByText('Change #b4da55'));

      expect(hexInput.value).toBe('#b4da55');
      expect(redInput.value).toBe('180');
      expect(greenInput.value).toBe('218');
      expect(blueInput.value).toBe('85');
      expect(alphaInput.value).toBe('100');

      userEvent.click(screen.getByText('Change rgba(0, 0, 0, .50)'));

      expect(hexInput.value).toBe('#000000');
      expect(redInput.value).toBe('0');
      expect(greenInput.value).toBe('0');
      expect(blueInput.value).toBe('0');
      expect(alphaInput.value).toBe('50');

      userEvent.click(screen.getByText('Change rgb(85, 211, 218)'));

      expect(hexInput.value).toBe('#55d3da');
      expect(redInput.value).toBe('85');
      expect(greenInput.value).toBe('211');
      expect(blueInput.value).toBe('218');
      expect(alphaInput.value).toBe('100');

      userEvent.click(screen.getByText('Change #b!da5!'));

      expect(hexInput.value).toBe('#ffffff');
      expect(redInput.value).toBe('255');
      expect(greenInput.value).toBe('255');
      expect(blueInput.value).toBe('255');
      expect(alphaInput.value).toBe('100');
    });
  });
});
