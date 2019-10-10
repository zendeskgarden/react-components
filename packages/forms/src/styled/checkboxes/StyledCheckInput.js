/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import math from 'polished/lib/math/math';
import rgba from 'polished/lib/color/rgba';
import PropTypes from 'prop-types';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledCheckLabel } from './StyledCheckLabel';

const COMPONENT_ID = 'forms.checkbox';

const getCheckmarkSvg = props => {
  const size = props.theme.iconSizes.sm;
  const color = props.theme.colors.background;
  let child;

  if (props.type === 'radio') {
    child = `<circle cx="6" cy="6" r="2" fill="${color}"/>`;
  } else {
    child = `<path
      fill="none"
      stroke="${color}"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="${props.indeterminate ? 'M3 6h6' : 'M3 6l2 2 4-4'}"
    />`;
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      ${child}
    </svg>
  `;
};

const colorStyles = props => {
  const SHADE = 600;

  const borderColor = getColor('neutralHue', SHADE - 300, props.theme);
  const hoverBorderColor = getColor('primaryHue', SHADE - 200, props.theme);
  const focusBorderColor = getColor('primaryHue', SHADE, props.theme);
  const activeBackgroundColor = getColor('primaryHue', SHADE - 400, props.theme);
  const activeBorderColor = focusBorderColor;
  const boxShadow = props.theme.shadows.md(rgba(focusBorderColor, 0.35));
  const checkedBorderColor = focusBorderColor;
  const checkedBackgroundColor = checkedBorderColor;
  const checkedActiveBorderColor = getColor('primaryHue', SHADE + 100, props.theme);
  const checkedActiveBackgroundColor = checkedActiveBorderColor;
  const disabledBackgroundColor = getColor('neutralHue', SHADE - 400, props.theme);
  const backgroundImage = encodeURIComponent(getCheckmarkSvg(props));

  return css`
    /* stylelint-disable selector-type-no-unknown */
    & ~ ${StyledCheckLabel}::before {
      border-color: ${borderColor};
      background-color: ${props.theme.colors.background};
    }

    & ~ ${StyledCheckLabel}:hover::before {
      border-color: ${hoverBorderColor};
    }

    &:focus ~ ${StyledCheckLabel}::before {
      outline: none;
      border-color: ${focusBorderColor};
      box-shadow: ${boxShadow};
    }

    & ~ ${StyledCheckLabel}:active::before {
      border-color: ${activeBorderColor};
      background-color: ${activeBackgroundColor};
    }

    &:checked ~ ${StyledCheckLabel}::before {
      background-image: url('data:image/svg+xml;charset=utf-8,${backgroundImage}');
    }

    &:checked ~ ${StyledCheckLabel}::before {
      border-color: ${checkedBorderColor};
      background-color: ${checkedBackgroundColor};
    }

    /**
     * The ":indeterminate" pseudo-class targets:
     *  - <input type="checkbox" /> with the indeterminate property set to true
     *  - <input type="radio" /> when all with the same name are unchecked
     * The following ensures indeterminate styling is only applied to checkboxes.
     */

    &:indeterminate ~ ${StyledCheckLabel}::before {
      border-color: ${props.type === 'checkbox' && checkedBorderColor};
      background-color: ${props.type === 'checkbox' && checkedBackgroundColor};
    }

    /* stylelint-disable-next-line selector-max-specificity */
    &:enabled:checked ~ ${StyledCheckLabel}:active::before {
      border-color: ${checkedActiveBorderColor};
      background-color: ${checkedActiveBackgroundColor};
    }

    /* stylelint-disable-next-line selector-max-specificity */
    &:enabled:indeterminate ~ ${StyledCheckLabel}:active::before {
      border-color: ${props.type === 'checkbox' && checkedActiveBorderColor};
      background-color: ${props.type === 'checkbox' && checkedActiveBackgroundColor};
    }

    &[disabled] ~ ${StyledCheckLabel}::before {
      border-color: transparent;
      background-color: ${disabledBackgroundColor};
    }
    /* stylelint-enable selector-type-no-unknown */
  `;
};

const sizeStyles = props => {
  const lineHeight = math(`${props.theme.space.base} * 5px`); /* from StyledLabel */
  const size = math(`${props.theme.space.base} * 4px`);
  const top = math(`(${lineHeight} - ${size}) / 2`);

  return css`
    /* stylelint-disable-next-line selector-type-no-unknown */
    & ~ ${StyledCheckLabel}::before {
      top: ${top};
      background-size: ${props.theme.iconSizes.sm};
      width: ${size};
      height: ${size};
      box-sizing: border-box;
    }
  `;
};

export const StyledCheckInput = styled.input.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* hide <input type="checkbox"> but retain accessiblity */
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);

  /* stylelint-disable-next-line selector-type-no-unknown */
  & ~ ${StyledCheckLabel}::before {
    position: absolute;
    ${props => (props.theme.rtl ? 'right' : 'left')}: 0;
    /* prettier-ignore */
    transition:
      border-color .25s ease-in-out,
      box-shadow .1s ease-in-out,
      background-color .25s ease-in-out,
      background-image .25s ease-in-out,
      color .25s ease-in-out;
    border: ${props => props.theme.borders.sm};
    border-radius: ${props => (props.type === 'radio' ? '50%' : props.theme.borderRadii.md)};
    background-repeat: no-repeat;
    background-position: center;
    content: '';
  }

  ${props => sizeStyles(props)};

  /* stylelint-disable-next-line selector-type-no-unknown */
  & ~ ${StyledCheckLabel}:active::before {
    /* prettier-ignore */
    transition:
      border-color 0.1s ease-in-out,
      background-color 0.1s ease-in-out,
      background-image 0.1s ease-in-out,
      color 0.1s ease-in-out;
  }

  ${props => colorStyles(props)};

  &[disabled] ~ ${StyledCheckLabel} {
    cursor: default;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCheckInput.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio']),
  theme: PropTypes.object
};

StyledCheckInput.defaultProps = {
  type: 'checkbox',
  theme: DEFAULT_THEME
};
