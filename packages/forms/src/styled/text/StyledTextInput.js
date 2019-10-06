/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import em from 'polished/lib/helpers/em';
import math from 'polished/lib/math/math';
import rgba from 'polished/lib/color/rgba';
import stripUnit from 'polished/lib/helpers/stripUnit';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import VALIDATION from '../../utils/validation';
import { StyledTextMediaFigure } from './StyledTextMediaFigure';
import { StyledHint } from '../common/StyledHint';
import { StyledLabel } from '../common/StyledLabel';
import { StyledMessage } from '../common/StyledMessage';

const isInvalid = validation => {
  return validation === VALIDATION.WARNING || validation === VALIDATION.ERROR;
};

const colorStyles = props => {
  const shade = 600;
  const placeholderColor = getColor('neutralHue', shade - 200, props.theme);
  let borderColor;
  let hoverBorderColor;
  let focusBorderColor;

  if (props.validation) {
    let hue;

    if (props.validation === VALIDATION.SUCCESS) {
      hue = 'successHue';
    } else if (props.validation === VALIDATION.WARNING) {
      hue = 'warningHue';
    } else if (props.validation === VALIDATION.ERROR) {
      hue = 'dangerHue';
    }

    borderColor = getColor(hue, shade, props.theme);
    hoverBorderColor = borderColor;
    focusBorderColor = borderColor;
  } else {
    borderColor = getColor('neutralHue', shade - 300, props.theme);
    hoverBorderColor = getColor('primaryHue', shade - 200, props.theme);
    focusBorderColor = getColor('primaryHue', shade, props.theme);
  }

  const boxShadow = `
    ${props.focusInset ? 'inset' : ''}
    ${props.theme.shadows.md(rgba(focusBorderColor, 0.35))}`;
  const disabledBackgroundColor = getColor('neutralHue', shade - 500, props.theme);
  const disabledBorderColor = getColor('neutralHue', shade - 400, props.theme);
  const disabledForegroundColor = getColor('neutralHue', shade - 200, props.theme);

  return css`
    border-color: ${borderColor};
    background-color: ${props.isBare ? 'transparent' : props.theme.colors.background};
    color: ${props.theme.colors.foreground};

    &::placeholder {
      color: ${placeholderColor};
    }

    &:hover {
      border-color: ${hoverBorderColor};
    }

    &:focus {
      border-color: ${focusBorderColor};
      box-shadow: ${!props.isBare && boxShadow};
    }

    &[disabled] {
      border-color: ${disabledBorderColor};
      background-color: ${!props.isBare && disabledBackgroundColor};
      color: ${disabledForegroundColor};
    }
  `;
};

const sizeStyles = props => {
  const fontSize = props.theme.fontSizes.md;
  let height;
  let paddingHorizontal;
  let paddingVertical;
  let browseFontSize;
  let swatchHeight;

  if (props.isSmall) {
    height = math(`${props.theme.space.base} * 8px`);
    paddingHorizontal = math(`${props.theme.space.base} * 3px`);
    paddingVertical = math(`${props.theme.space.base} * 1.5px`);
    browseFontSize = math(`${props.theme.fontSizes.sm} - 1`);
    swatchHeight = math(`${props.theme.space.base} * 6px`);
  } else {
    height = math(`${props.theme.space.base} * 10px`);
    paddingHorizontal = math(`${props.theme.space.base} * 4px`);
    paddingVertical = math(`${props.theme.space.base} * 2.5px`);
    browseFontSize = props.theme.fontSizes.sm;
    swatchHeight = math(`${props.theme.space.base} * 7px`);
  }

  const lineHeight = math(
    `${height} - (${paddingVertical} * 2) - (${props.theme.borderWidths.sm} * 2)`
  );
  const padding = props.isBare
    ? '0'
    : `${em(paddingVertical, fontSize)} ${em(paddingHorizontal, fontSize)}`;
  const swatchMarginVertical = math(`(${lineHeight} - ${swatchHeight}) / 2`);
  const swatchMarginHorizontal = math(
    `${paddingVertical} + ${swatchMarginVertical} - ${paddingHorizontal}`
  );
  const figureMarginFirst = `auto ${math(`${paddingHorizontal} * 3 / 4`)} auto 0`;
  const figureMarginLast = `auto 0 auto ${math(`${paddingHorizontal} * 3 / 4`)}`;

  return css`
    padding: ${padding};
    min-height: ${props.isBare ? '1em' : height};
    line-height: ${stripUnit(math(`${lineHeight} / ${fontSize}`))};
    font-size: ${fontSize};

    &::-ms-browse {
      font-size: ${browseFontSize};
    }

    &[type='date'],
    &[type='datetime-local'],
    &[type='file'],
    &[type='month'],
    &[type='time'],
    &[type='week'] {
      max-height: ${height};
    }

    &[type='file'] {
      line-height: 1; /* align file prompt text */
    }

    /* stylelint-disable-next-line at-rule-empty-line-before */
    @supports (-ms-ime-align: auto) {
      &[type='color'] {
        padding: ${props.isSmall ? '0 2px' : '1px 3px'}; /* correct color swatch size for Edge */
      }
    }

    &::-moz-color-swatch {
      margin-top: ${swatchMarginVertical};
      margin-left: ${swatchMarginHorizontal};
      width: calc(100% + ${math(`${swatchMarginHorizontal} * -2`)});
      height: ${swatchHeight};
    }

    &::-webkit-color-swatch {
      margin: ${swatchMarginVertical} ${swatchMarginHorizontal};
    }

    /* stylelint-disable */
    ${StyledLabel} + &,
    ${StyledHint} + &,
    & + ${StyledHint},
    & + ${StyledMessage} {
      margin-top: ${math(`${props.theme.space.base} * ${props.isSmall ? '1px' : '2px'}`)};
    }
    /* stylelint-enable */

    & ${StyledTextMediaFigure} {
      &:first-child {
        margin: ${props.theme.rtl ? figureMarginLast : figureMarginFirst};
      }

      &:last-child {
        margin: ${props.theme.rtl ? figureMarginFirst : figureMarginLast};
      }
    }
  `;
};

const COMPONENT_ID = 'forms.input';

export const StyledTextInput = styled.input.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-invalid': isInvalid(props.validation)
}))`
  appearance: none;
  /* prettier-ignore */
  transition:
    border-color .25s ease-in-out,
    box-shadow .1s ease-in-out,
    background-color .25s ease-in-out,
    color .25s ease-in-out;
  direction: ${props => props.theme.rtl && 'rtl'};
  outline: none;
  border: ${props => (props.isBare ? 'none' : props.theme.borders.sm)};
  border-radius: ${props => (props.isBare ? '0' : props.theme.borderRadii.md)};
  width: 100%; /* vs. display: block to limit mouse interaction area */
  box-sizing: border-box;
  vertical-align: middle; /* support inline label */
  font-family: inherit;

  &::-ms-browse {
    border-radius: ${props => props.theme.borderRadii.sm};
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none; /* remove clear button and password reveal in IE */
  }

  &::-moz-color-swatch {
    border: none;
    border-radius: ${props => props.theme.borderRadii.sm};
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: ${props => props.theme.borderRadii.sm};
  }

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-clear-button,
  &::-webkit-inner-spin-button,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button {
    display: none; /* remove non-standard browser features */
  }

  &::-webkit-datetime-edit {
    direction: ${props => props.theme.rtl && 'rtl'};
    line-height: 1;
  }

  &::placeholder {
    opacity: 1;
  }

  &:invalid {
    box-shadow: none; /* prevent FireFox validation styling */
  }

  &[type='file']::-ms-value {
    display: none; /* remove file entry in IE */
  }

  /* stylelint-disable-next-line */
  @media screen and (min--moz-device-pixel-ratio: 0) {
    &[type='number'] {
      appearance: textfield; /* remove number spinner in FireFox */
    }
  }

  ${props => sizeStyles(props)};

  &:focus {
    outline: none;
  }

  /* Color (default and validation) styling */
  ${props => colorStyles(props)};

  &[disabled] {
    cursor: default;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTextInput.propTypes = {
  isSmall: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR]),
  theme: PropTypes.object
};

StyledTextInput.defaultProps = {
  theme: DEFAULT_THEME
};
