/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import {
  useEffect,
  useCallback,
  useReducer,
  forwardRef,
  useMemo,
  useRef,
  ChangeEvent
} from 'react';
import { useTheme } from 'styled-components';

import { Field } from '../../elements/form/Field';
import DEFAULT_THEME from '../../theming/elements/theme';
import { IColor, IColorPickerProps, IHSVColor } from '../../types/elements';
import {
  background as alphaBackground,
  StyledAlphaRange
} from '../../views/colorpicker/StyledAlphaRange';
import { StyledColorPicker } from '../../views/colorpicker/StyledColorPicker';
import { StyledHexField } from '../../views/colorpicker/StyledHexField';
import { StyledHueRange } from '../../views/colorpicker/StyledHueRange';
import { StyledInput } from '../../views/colorpicker/StyledInput';
import { StyledInputGroup } from '../../views/colorpicker/StyledInputGroup';
import { StyledLabel } from '../../views/colorpicker/StyledLabel';
import {
  background as previewBackground,
  StyledPreview
} from '../../views/colorpicker/StyledPreview';
import { StyledRGBAField } from '../../views/colorpicker/StyledRGBAField';
import { StyledSliderGroup } from '../../views/colorpicker/StyledSliderGroup';
import { StyledSliders } from '../../views/colorpicker/StyledSliders';
import { COMPONENT_IDS } from '../utils';
import { ColorWell } from './ColorWell';
import { areColorsEqual, convertStringToColor, getInitialState, reducer } from './reducer';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const ColorPicker = forwardRef<HTMLDivElement, IColorPickerProps>(
  ({ color, defaultColor = '#fff', isOpaque, labels = {}, autofocus, onChange, ...props }, ref) => {
    const theme = useTheme() || DEFAULT_THEME;
    const [state, dispatch] = useReducer(reducer, getInitialState(color || defaultColor));
    const previousComputedColorRef = useRef<IColor>(state.color);
    const previousStateColorRef = useRef<IColor>(state.color);

    const computedColor = useMemo(() => {
      let retVal = state.color;

      if (color) {
        if (typeof color === 'string') {
          const convertedColor = convertStringToColor(color);

          if (convertedColor) {
            retVal = convertedColor;
          }
        } else {
          retVal = color;
        }
      }

      if (isOpaque) {
        retVal.alpha = 100;
      }

      if (areColorsEqual(retVal, previousComputedColorRef.current)) {
        return previousComputedColorRef.current;
      }

      return retVal;
    }, [color, isOpaque, state.color]);

    useEffect(() => {
      if (
        !areColorsEqual(previousStateColorRef.current, state.color) &&
        !areColorsEqual(color, state.color)
      ) {
        onChange && onChange(state.color);
      }

      previousStateColorRef.current = state.color;
    }, [color, onChange, state.color]);

    if (previousComputedColorRef.current !== computedColor) {
      dispatch({ type: 'RESET_COLOR', payload: computedColor });

      previousComputedColorRef.current = computedColor;
    }

    const handleColorWellChange = useCallback((hsv: IHSVColor) => {
      dispatch({
        type: 'SATURATION_CHANGE',
        payload: hsv
      });
    }, []);

    const handleHueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'HUE_CHANGE', payload: e.target.value });
    }, []);

    const handleAlphaSliderChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'ALPHA_SLIDER_CHANGE', payload: e.target.value });
    }, []);

    const handleHexChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'HEX_CHANGE', payload: e.target.value });
    }, []);

    const handleRedChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'RED_CHANGE', payload: e.target.value });
    }, []);

    const handleGreenChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'GREEN_CHANGE', payload: e.target.value });
    }, []);

    const handleBlueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'BLUE_CHANGE', payload: e.target.value });
    }, []);

    const handleAlphaChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'ALPHA_CHANGE', payload: e.target.value });
    }, []);

    const handleBlur = useCallback(() => {
      dispatch({ type: 'RESET_COLOR', payload: computedColor });
    }, [computedColor]);

    return (
      <StyledColorPicker
        ref={ref}
        $isOpaque={isOpaque}
        {...props}
        data-garden-id={COMPONENT_IDS['colorpickers.colorpicker']}
        data-garden-version={PACKAGE_VERSION}
      >
        <ColorWell
          hue={computedColor.hue}
          saturation={computedColor.saturation}
          lightness={computedColor.lightness}
          onChange={handleColorWellChange}
        />
        <StyledSliderGroup
          data-garden-id={COMPONENT_IDS['colorpickers.colorpicker_slider_group']}
          data-garden-version={PACKAGE_VERSION}
        >
          <StyledPreview
            $red={computedColor.red}
            $green={computedColor.green}
            $blue={computedColor.blue}
            $alpha={computedColor.alpha}
            $isOpaque={isOpaque}
            style={{
              background: previewBackground({
                theme,
                $red: computedColor.red,
                $green: computedColor.green,
                $blue: computedColor.blue,
                $alpha: computedColor.alpha,
                $isOpaque: isOpaque
              })
            }}
            data-garden-id={COMPONENT_IDS['colorpickers.colorpicker_preview_box']}
            data-garden-version={PACKAGE_VERSION}
            data-test-id="preview-box"
          />
          <StyledSliders
            $isOpaque={isOpaque}
            data-garden-id={COMPONENT_IDS['colorpickers.colorpicker_sliders']}
            data-garden-version={PACKAGE_VERSION}
          >
            <Field>
              <Field.Label hidden>{labels.hueSlider || 'Hue slider'}</Field.Label>
              <StyledHueRange
                step={1}
                max={360}
                value={computedColor.hue}
                $isOpaque={isOpaque}
                onChange={handleHueChange}
                hasLowerTrack={false}
                data-garden-id={COMPONENT_IDS['colorpickers.colorpicker_hue']}
                data-garden-version={PACKAGE_VERSION}
              />
            </Field>
            {!isOpaque && (
              <Field>
                <Field.Label hidden>{labels.alphaSlider || 'Alpha slider'}</Field.Label>
                <StyledAlphaRange
                  max={1}
                  step={0.01}
                  value={computedColor.alpha / 100}
                  onChange={handleAlphaSliderChange}
                  $red={computedColor.red}
                  $green={computedColor.green}
                  $blue={computedColor.blue}
                  hasLowerTrack={false}
                  style={{
                    backgroundSize: 'auto',
                    background: alphaBackground({
                      theme,
                      $red: computedColor.red,
                      $green: computedColor.green,
                      $blue: computedColor.blue
                    })
                  }}
                  data-garden-id={COMPONENT_IDS['colorpickers.colorpicker_alpha']}
                  data-garden-version={PACKAGE_VERSION}
                />
              </Field>
            )}
          </StyledSliders>
        </StyledSliderGroup>
        <StyledInputGroup
          data-garden-id={COMPONENT_IDS['colorpickers.colorpicker_input_group']}
          data-garden-version={PACKAGE_VERSION}
        >
          <StyledHexField
            spellCheck={false}
            data-garden-id={COMPONENT_IDS['colorpickers.colorpicker_hex_field']}
            data-garden-version={PACKAGE_VERSION}
          >
            <StyledLabel isRegular data-garden-version={PACKAGE_VERSION}>
              {labels.hex || 'Hex'}
            </StyledLabel>
            <StyledInput
              isCompact
              maxLength={7}
              value={state.hexInput}
              /* eslint-disable jsx-a11y/no-autofocus */
              autoFocus={autofocus}
              spellCheck={false}
              onBlur={handleBlur}
              onChange={handleHexChange}
              focusInset={false}
              data-garden-version={PACKAGE_VERSION}
            />
          </StyledHexField>
          <StyledRGBAField
            data-garden-id={COMPONENT_IDS['colorpickers.colorpicker_rgb_field']}
            data-garden-version={PACKAGE_VERSION}
          >
            <StyledLabel isRegular data-garden-version={PACKAGE_VERSION}>
              {labels.red || 'R'}
            </StyledLabel>
            <StyledInput
              isCompact
              type="number"
              min="0"
              max="255"
              maxLength={3}
              value={state.redInput}
              onBlur={handleBlur}
              onChange={handleRedChange}
              focusInset={false}
              data-garden-version={PACKAGE_VERSION}
            />
          </StyledRGBAField>
          <StyledRGBAField
            data-garden-id={COMPONENT_IDS['colorpickers.colorpicker_rgb_field']}
            data-garden-version={PACKAGE_VERSION}
          >
            <StyledLabel isRegular data-garden-version={PACKAGE_VERSION}>
              {labels.green || 'G'}
            </StyledLabel>
            <StyledInput
              isCompact
              type="number"
              min="0"
              max="255"
              maxLength={3}
              value={state.greenInput}
              onBlur={handleBlur}
              onChange={handleGreenChange}
              focusInset={false}
              data-garden-version={PACKAGE_VERSION}
            />
          </StyledRGBAField>
          <StyledRGBAField
            data-garden-id={COMPONENT_IDS['colorpickers.colorpicker_rgb_field']}
            data-garden-version={PACKAGE_VERSION}
          >
            <StyledLabel isRegular data-garden-version={PACKAGE_VERSION}>
              {labels.blue || 'B'}
            </StyledLabel>
            <StyledInput
              isCompact
              type="number"
              min="0"
              max="255"
              maxLength={3}
              value={state.blueInput}
              onBlur={handleBlur}
              onChange={handleBlueChange}
              focusInset={false}
              data-garden-version={PACKAGE_VERSION}
            />
          </StyledRGBAField>
          {!isOpaque && (
            <StyledRGBAField
              data-garden-id={COMPONENT_IDS['colorpickers.colorpicker_rgb_field']}
              data-garden-version={PACKAGE_VERSION}
            >
              <StyledLabel isRegular data-garden-version={PACKAGE_VERSION}>
                {labels.alpha || 'A'}
              </StyledLabel>
              <StyledInput
                isCompact
                type="number"
                min="0"
                max="100"
                value={state.alphaInput}
                onBlur={handleBlur}
                onChange={handleAlphaChange}
                focusInset={false}
                data-garden-version={PACKAGE_VERSION}
              />
            </StyledRGBAField>
          )}
        </StyledInputGroup>
      </StyledColorPicker>
    );
  }
);

ColorPicker.displayName = 'ColorPicker';

ColorPicker.propTypes = {
  color: PropTypes.oneOfType<any>([PropTypes.object, PropTypes.string]),
  isOpaque: PropTypes.bool,
  onChange: PropTypes.func,
  labels: PropTypes.object,
  defaultColor: PropTypes.oneOfType<any>([PropTypes.object, PropTypes.string])
};
