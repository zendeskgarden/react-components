/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, createRef } from 'react';
import { render, renderRtl, fireEvent, screen } from 'garden-test-utils';
import { Colorpicker } from './index';
import userEvent from '@testing-library/user-event';
import { IColor } from '../../types';

describe('Colorpicker', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Colorpicker ref={ref} color="#17494D" data-test-id="colorpicker" />
    );

    expect(getByTestId('colorpicker')).toBe(ref.current);
  });

  it('focuses on the hex input when autofocus is on', () => {
    render(<Colorpicker color="#17494D" autofocus />);

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

    renderRtl(<Colorpicker defaultColor="#17494d" labels={labels} />);

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

  describe('Opaque layout', () => {
    it('hides alpha', () => {
      render(<Colorpicker isOpaque />);

      const findAlphaSlider = () => screen.getByLabelText('Alpha slider');
      const findAlphaInput = () => screen.getByLabelText('A');

      expect(findAlphaSlider).toThrow();
      expect(findAlphaInput).toThrow();
    });
  });

  describe('Uncontrolled usage', () => {
    it('updates the color picker when the hue slider is changed', () => {
      render(<Colorpicker defaultColor="#17494D" />);

      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(hexInput.value).toBe('#17494d');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');

      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;

      fireEvent.change(hueSlider, { target: { value: '349' } });

      expect(hexInput.value).toBe('#4d1721');
      expect(redInput.value).toBe('77');
      expect(greenInput.value).toBe('23');
      expect(blueInput.value).toBe('33');
    });

    it('updates the color picker when the alpha slider is changed', () => {
      render(<Colorpicker defaultColor="rgb(23, 73, 77)" />);
      const alphaSlider = screen.getByLabelText('Alpha slider') as HTMLInputElement;
      const alphaInput = screen.getByLabelText('A') as HTMLInputElement;

      fireEvent.change(alphaSlider, { target: { value: '0.5' } });

      expect(alphaInput.value).toBe('50');
    });

    it('updates the rgb/a inputs correctly when one is cleared and user types into another', async () => {
      render(<Colorpicker defaultColor="rgb(23, 73, 77)" />);
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(hueSlider.value).toBe('184.44444444444443');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      await user.clear(greenInput);
      expect(greenInput.value).toBe('');
      await user.type(redInput, '2');

      expect(greenInput.value).toBe('73');
      expect(hexInput.value).toBe('#e8494d');
    });

    it('resets the hex input to the last valid hex string', async () => {
      render(<Colorpicker defaultColor="rgb(23, 73, 77)" />);
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(hueSlider.value).toBe('184.44444444444443');
      expect(hexInput.value).toBe('#17494d');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      await user.clear(hexInput);
      await user.type(hexInput, 'b4!a55');
      await user.tab();

      expect(hueSlider.value).toBe('184.44444444444443');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );
    });

    it('updates the color picker when the hex input is changed', async () => {
      render(<Colorpicker defaultColor="rgb(23, 73, 77)" />);
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex');
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(hueSlider.value).toBe('184.44444444444443');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      await user.clear(hexInput);
      await user.type(hexInput, '#b4da55');

      expect(hueSlider.value).toBe('77.14285714285714');
      expect(redInput.value).toBe('180');
      expect(greenInput.value).toBe('218');
      expect(blueInput.value).toBe('85');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 14.509803921568633%; left: 61.00917431192659%;'
      );
    });

    it('updates the color picker when the R input is changed', async () => {
      render(<Colorpicker defaultColor="rgb(23, 73, 77)" />);
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;

      expect(hexInput.value).toBe('#17494d');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      await user.clear(redInput);
      await user.type(redInput, '255');

      expect(hueSlider.value).toBe('358.68131868131866');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 0%; left: 71.37254901960785%;');
    });

    it('updates the color picker when the G input is changed', async () => {
      render(<Colorpicker defaultColor="rgb(23, 73, 77)" />);
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;

      expect(hexInput.value).toBe('#17494d');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      await user.clear(greenInput);
      await user.type(greenInput, '255');

      expect(hueSlider.value).toBe('133.9655172413793');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 0%; left: 90.98039215686275%;');
    });

    it('updates the color picker when the B input is changed', async () => {
      render(<Colorpicker defaultColor="rgb(23, 73, 77)" />);
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(hexInput.value).toBe('#17494d');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      await user.clear(blueInput);
      await user.type(blueInput, '255');

      expect(hueSlider.value).toBe('227.06896551724137');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 0%; left: 90.98039215686275%;');
    });

    it('updates with correct alpha when the A input is changed', async () => {
      render(<Colorpicker defaultColor="rgba(23, 73, 77, 1)" />);

      const alphaSlider = screen.getByLabelText('Alpha slider') as HTMLInputElement;
      const alphaInput = screen.getByLabelText('A') as HTMLInputElement;

      expect(alphaSlider.value).toBe('1');
      expect(alphaInput.value).toBe('100');

      await user.clear(alphaInput);
      await user.type(alphaInput, '50');

      expect(alphaSlider.value).toBe('0.5');
      expect(alphaInput.value).toBe('50');
    });

    it('keeps current color when user changes RGB/A inputs to invalid values', async () => {
      render(<Colorpicker defaultColor="rgba(23, 73, 77, 50)" />);

      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;
      const alphaInput = screen.getByLabelText('A') as HTMLInputElement;

      await user.clear(redInput);
      await user.type(redInput, '299');
      expect(redInput.value).toBe('255');

      await user.clear(greenInput);
      await user.type(greenInput, '299');
      expect(greenInput.value).toBe('255');

      await user.clear(blueInput);
      await user.type(blueInput, '299');
      expect(blueInput.value).toBe('255');

      await user.clear(alphaInput);
      await user.type(alphaInput, '109');
      expect(alphaInput.value).toBe('100');
    });

    it('updates the color only if the hex input is a valid hex color', async () => {
      render(<Colorpicker defaultColor="#17494d" />);

      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;

      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      await user.clear(hexInput);
      await user.type(hexInput, '#b4'); // invalid hex

      expect(hueSlider.value).toBe('184.44444444444443');

      await user.type(hexInput, 'da55'); // now valid hex

      expect(hueSlider.value).toBe('77.14285714285714');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 14.509803921568633%; left: 61.00917431192659%;'
      );
    });
  });

  describe('Controlled usage', () => {
    it('updates the color picker when the hue slider is changed', () => {
      const Basic = () => {
        const [color, setColor] = useState<string | IColor>('#17494D');

        return <Colorpicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(hexInput.value).toBe('#17494d');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');

      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;

      fireEvent.change(hueSlider, { target: { value: '349' } });

      expect(hexInput.value).toBe('#4d1721');
      expect(redInput.value).toBe('77');
      expect(greenInput.value).toBe('23');
      expect(blueInput.value).toBe('33');
    });

    it('updates the color picker when the alpha slider is changed', () => {
      const Basic = () => {
        const [color, setColor] = useState<string | IColor>('rgb(23,73,77)');

        return <Colorpicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const alphaSlider = screen.getByLabelText('Alpha slider') as HTMLInputElement;
      const alphaInput = screen.getByLabelText('A') as HTMLInputElement;

      fireEvent.change(alphaSlider, { target: { value: '0.5' } });

      expect(alphaInput.value).toBe('50');
    });

    it('updates the rgb/a inputs correctly when one is cleared and user types into another', async () => {
      const Basic = () => {
        const [color, setColor] = useState<string | IColor>('rgb(23,73,77)');

        return <Colorpicker color={color} onChange={setColor} />;
      };

      render(<Basic />);
      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(hueSlider.value).toBe('184.44444444444443');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      await user.clear(greenInput);
      expect(greenInput.value).toBe('');
      await user.type(redInput, '2');

      expect(greenInput.value).toBe('73');
      expect(hexInput.value).toBe('#e8494d');
    });

    it('resets the hex input to the last valid hex string', async () => {
      const Basic = () => {
        const [color, setColor] = useState<string | IColor>('rgb(23,73,77)');

        return <Colorpicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(hueSlider.value).toBe('184.44444444444443');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      await user.clear(hexInput);
      await user.type(hexInput, 'b4a!a55');
      await user.tab();

      expect(hueSlider.value).toBe('184.44444444444443');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );
    });

    it('updates the color picker when the hex input is changed', async () => {
      const Basic = () => {
        const [color, setColor] = useState<string | IColor>('rgb(23,73,77)');

        return <Colorpicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex');
      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(hueSlider.value).toBe('184.44444444444443');
      expect(redInput.value).toBe('23');
      expect(greenInput.value).toBe('73');
      expect(blueInput.value).toBe('77');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      await user.clear(hexInput);
      await user.type(hexInput, '#b4da55');

      expect(hueSlider.value).toBe('77.14285714285714');
      expect(redInput.value).toBe('180');
      expect(greenInput.value).toBe('218');
      expect(blueInput.value).toBe('85');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 14.509803921568633%; left: 61.00917431192659%;'
      );
    });

    it('updates the color picker when the R input is changed', async () => {
      const Basic = () => {
        const [color, setColor] = useState<string | IColor>('rgb(23,73,77)');

        return <Colorpicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const redInput = screen.getByLabelText('R') as HTMLInputElement;

      expect(hexInput.value).toBe('#17494d');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      await user.clear(redInput);
      await user.type(redInput, '255');

      expect(hueSlider.value).toBe('358.68131868131866');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 0%; left: 71.37254901960785%;');
    });

    it('updates the color picker when the G input is changed', async () => {
      const Basic = () => {
        const [color, setColor] = useState<string | IColor>('rgb(23,73,77)');

        return <Colorpicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;

      expect(hexInput.value).toBe('#17494d');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      await user.clear(greenInput);
      await user.type(greenInput, '255');

      expect(hueSlider.value).toBe('133.9655172413793');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 0%; left: 90.98039215686275%;');
    });

    it('updates the color picker when the B input is changed', async () => {
      const Basic = () => {
        const [color, setColor] = useState<string | IColor>('rgb(23,73,77)');

        return <Colorpicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const colorWellThumb = screen.getByTestId('colorwell-thumb');
      const hueSlider = screen.getByLabelText('Hue slider') as HTMLInputElement;
      const hexInput = screen.getByLabelText('Hex') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;

      expect(hexInput.value).toBe('#17494d');
      expect(hueSlider.value).toBe('184.44444444444443');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 69.80392156862746%; left: 70.12987012987013%;'
      );

      await user.clear(blueInput);
      await user.type(blueInput, '255');

      expect(hueSlider.value).toBe('227.06896551724137');
      expect(colorWellThumb).toHaveAttribute('style', 'top: 0%; left: 90.98039215686275%;');
    });

    it('updates with correct alpha when the A input is changed', async () => {
      const Basic = () => {
        const [color, setColor] = useState<string | IColor>('rgba(23,73,77,1)');

        return <Colorpicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const alphaSlider = screen.getByLabelText('Alpha slider') as HTMLInputElement;
      const alphaInput = screen.getByLabelText('A') as HTMLInputElement;

      expect(alphaSlider.value).toBe('1');
      expect(alphaInput.value).toBe('100');

      await user.clear(alphaInput);
      await user.type(alphaInput, '50');

      expect(alphaSlider.value).toBe('0.5');
      expect(alphaInput.value).toBe('50');
    });

    it('keeps current color when user changes RGB/A inputs to invalid values', async () => {
      const Basic = () => {
        const [color, setColor] = useState<IColor>({
          hue: 0,
          saturation: 0,
          lightness: 0,
          hex: '#02494d',
          red: 23,
          green: 73,
          blue: 77,
          alpha: 50
        });

        return <Colorpicker color={color} onChange={setColor} />;
      };

      render(<Basic />);

      const redInput = screen.getByLabelText('R') as HTMLInputElement;
      const greenInput = screen.getByLabelText('G') as HTMLInputElement;
      const blueInput = screen.getByLabelText('B') as HTMLInputElement;
      const alphaInput = screen.getByLabelText('A') as HTMLInputElement;

      await user.clear(redInput);
      await user.type(redInput, '299');
      expect(redInput.value).toBe('255');

      await user.clear(greenInput);
      await user.type(greenInput, '299');
      expect(greenInput.value).toBe('255');

      await user.clear(blueInput);
      await user.type(blueInput, '299');
      expect(blueInput.value).toBe('255');

      await user.clear(alphaInput);
      await user.type(alphaInput, '109');
      expect(alphaInput.value).toBe('100');
    });

    it('updates the color only if the hex input is a valid hex color', async () => {
      const Basic = () => {
        const [color, setColor] = useState<string | IColor>('#17494d');

        return <Colorpicker color={color} onChange={setColor} />;
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

      await user.clear(hexInput);
      await user.type(hexInput, '#b4'); // invalid hex

      expect(hueSlider.value).toBe('184.44444444444443');

      await user.type(hexInput, 'da55'); // now valid hex

      expect(hueSlider.value).toBe('77.14285714285714');
      expect(colorWellThumb).toHaveAttribute(
        'style',
        'top: 14.509803921568633%; left: 61.00917431192659%;'
      );
    });

    it('sets color picker text inputs when color prop is manually controlled', async () => {
      const Basic = () => {
        const [color, setColor] = useState<string | IColor>('#17494d');

        return (
          <>
            <Colorpicker color={color} onChange={setColor} />
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

      await user.click(screen.getByText('Change #b4da55'));

      expect(hexInput.value).toBe('#b4da55');
      expect(redInput.value).toBe('180');
      expect(greenInput.value).toBe('218');
      expect(blueInput.value).toBe('85');
      expect(alphaInput.value).toBe('100');

      await user.click(screen.getByText('Change rgba(0, 0, 0, .50)'));

      expect(hexInput.value).toBe('#000');
      expect(redInput.value).toBe('0');
      expect(greenInput.value).toBe('0');
      expect(blueInput.value).toBe('0');
      expect(alphaInput.value).toBe('50');

      await user.click(screen.getByText('Change rgb(85, 211, 218)'));

      expect(hexInput.value).toBe('#55d3da');
      expect(redInput.value).toBe('85');
      expect(greenInput.value).toBe('211');
      expect(blueInput.value).toBe('218');
      expect(alphaInput.value).toBe('100');

      await user.click(screen.getByText('Change #b!da5!'));

      expect(hexInput.value).toBe('#55d3da');
      expect(redInput.value).toBe('85');
      expect(greenInput.value).toBe('211');
      expect(blueInput.value).toBe('218');
      expect(alphaInput.value).toBe('100');
    });
  });
});
