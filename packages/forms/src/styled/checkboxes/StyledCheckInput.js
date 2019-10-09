/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import math from 'polished/lib/math/math';
import rgba from 'polished/lib/color/rgba';
import { getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledCheckLabel } from './StyledCheckLabel';

const COMPONENT_ID = 'forms.checkbox';

const getCheckmarkSvg = (indeterminate, props) => `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${props.theme.iconSizes.sm}"
    height="${props.theme.iconSizes.sm}"
  >
    <path
      fill="none"
      stroke="${props.theme.colors.background}"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="${props.indeterminate ? 'M3 6h6' : 'M3 6l2 2 4-4'}"
    />
  </svg>
`;

const colorStyles = props => {
  const SHADE = 600;

  const borderColor = getColor('neutralHue', SHADE - 300, props.theme);
  const hoverBorderColor = getColor('primaryHue', SHADE - 200, props.theme);
  const focusBorderColor = getColor('primaryHue', SHADE, props.theme);
  const activeBackgroundColor = getColor('primaryHue', SHADE - 400, props.theme);
  const boxShadow = props.theme.shadows.md(rgba(focusBorderColor, 0.35));
  const checkedBorderColor = focusBorderColor;
  const checkedBackgroundColor = checkedBorderColor;
  const checkedActiveBorderColor = getColor('primaryHue', SHADE + 100, props.theme);
  const checkedActiveBackgroundColor = checkedActiveBorderColor;
  const disabledBackgroundColor = getColor('neutralHue', SHADE - 400, props.theme);
  const checkedBackgroundImage = encodeURIComponent(
    getCheckmarkSvg(false /* indeterminate */, props)
  );
  const indeterminateBackgroundImage = encodeURIComponent(
    getCheckmarkSvg(false /* indeterminate */, props)
  );

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
      background-color: ${activeBackgroundColor};
    }

    &:checked ~ ${StyledCheckLabel}::before {
      background-image: url('data:image/svg+xml;charset=utf-8,${checkedBackgroundImage}');
    }

    &:indeterminate ~ ${StyledCheckLabel}::before {
      background-image: url('data:image/svg+xml;charset=utf-8,${indeterminateBackgroundImage}');
    }

    /* prettier-ignore */
    &:checked ~ ${StyledCheckLabel}::before,
    &:indeterminate ~ ${StyledCheckLabel}::before {
      border-color: ${checkedBorderColor};
      background-color: ${checkedBackgroundColor};
    }

    /* stylelint-disable-next-line selector-max-specificity */
    &:enabled:checked ~ ${StyledCheckLabel}:active::before,
    &:enabled:indeterminate ~ ${StyledCheckLabel}:active::before {
      border-color: ${checkedActiveBorderColor};
      background-color: ${checkedActiveBackgroundColor};
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
  'data-garden-version': PACKAGE_VERSION,
  type: 'checkbox'
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
    border-radius: ${props => props.theme.borderRadii.md};
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
