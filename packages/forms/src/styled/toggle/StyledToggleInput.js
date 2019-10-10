/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledCheckInput } from '../checkboxes/StyledCheckInput';
import { StyledCheckLabel } from '../checkboxes/StyledCheckLabel';

const COMPONENT_ID = 'forms.checkbox';

const markSvg = props => {
  const size = props.theme.iconSizes.md;
  const color = props.theme.colors.background;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      <circle cx="8" cy="8" r="7" fill="${color}"/>
    </svg>
  `;
};

const colorStyles = props => {
  const SHADE = 600;

  const backgroundColor = getColor('neutralHue', SHADE - 100, props.theme);
  const backgroundImage = encodeURIComponent(markSvg(props));
  const activeBackgroundColor = getColor('neutralHue', SHADE, props.theme);

  return css`
    /* stylelint-disable selector-type-no-unknown */
    & ~ ${StyledCheckLabel}::before {
      background-color: ${backgroundColor};
    }

    & ~ ${StyledCheckLabel}::before,
    &:checked ~ ${StyledCheckLabel}::before {
      background-image: url('data:image/svg+xml;charset=utf-8,${backgroundImage}');
    }

    & ~ ${StyledCheckLabel}:active::before {
      background-color: ${activeBackgroundColor};
    }
    /* stylelint-enable selector-type-no-unknown */
  `;
};

const sizeStyles = props => {
  const backgroundPosition = props.theme.rtl ? '90%' : '10%';
  const checkedBackgroundPosition = props.theme.rtl ? '10%' : '90%';
  const backgroundSize = props.theme.fontSizes.md;
  const height = math(`${props.theme.space.base} * 5px`);
  const width = math(`${props.theme.space.base} * 10px`);

  return css`
    /* stylelint-disable-next-line selector-type-no-unknown */
    & ~ ${StyledCheckLabel}::before {
      background-position: ${backgroundPosition};
      background-size: ${backgroundSize};
      width: ${width};
      height: ${height};
    }

    /* stylelint-disable-next-line selector-type-no-unknown */
    &:checked ~ ${StyledCheckLabel}::before {
      background-position: ${checkedBackgroundPosition};
    }
  `;
};

export const StyledToggleInput = styled(StyledCheckInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable-next-line selector-type-no-unknown */
  & ~ ${StyledCheckLabel}::before {
    top: 0;
    /* prettier-ignore */
    transition:
      box-shadow .1s ease-in-out,
      background-color .15s ease-in-out,
      background-position .15s ease-in-out,
      color .25s ease-in-out;
    border: none;
    border-radius: 100px;
  }

  ${props => sizeStyles(props)};

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
