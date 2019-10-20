/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledRadioInput } from '../radio/StyledRadioInput';
import { StyledCheckLabel } from './StyledCheckLabel';

const COMPONENT_ID = 'forms.checkbox';

const checkSvg = props => {
  const color = props.theme.colors.background;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
      <path
        fill="none"
        stroke="${color}"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 6l2 2 4-4"
      />
    </svg>
  `;
};

const dashSvg = props => {
  const color = props.theme.colors.background;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
      <path
        fill="none"
        stroke="${color}"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 6h6"
      />
    </svg>
  `;
};

const colorStyles = props => {
  const SHADE = 600;

  const backgroundImage = encodeURIComponent(checkSvg(props));
  const indeterminateBorderColor = getColor('primaryHue', SHADE, props.theme);
  const indeterminateBackgroundColor = indeterminateBorderColor;
  const indeterminateBackgroundImage = encodeURIComponent(dashSvg(props));
  const indeterminateActiveBorderColor = getColor('primaryHue', SHADE + 100, props.theme);
  const indeterminateActiveBackgroundColor = indeterminateActiveBorderColor;
  const indeterminateDisabledBackgroundColor = getColor('neutralHue', SHADE - 400, props.theme);

  return css`
    &:checked ~ ${StyledCheckLabel}::before {
      background-image: url('data:image/svg+xml;charset=utf-8,${backgroundImage}');
    }

    &:indeterminate ~ ${StyledCheckLabel}::before {
      border-color: ${indeterminateBorderColor};
      background-color: ${indeterminateBackgroundColor};
      background-image: url('data:image/svg+xml;charset=utf-8,${indeterminateBackgroundImage}');
    }

    /* stylelint-disable selector-max-specificity */
    &:enabled:indeterminate ~ ${StyledCheckLabel}:active::before {
      border-color: ${indeterminateActiveBorderColor};
      background-color: ${indeterminateActiveBackgroundColor};
    }

    &:disabled:indeterminate ~ ${StyledCheckLabel}::before {
      border-color: transparent;
      background-color: ${indeterminateDisabledBackgroundColor};
    }
    /* stylelint-enable selector-max-specificity */
  `;
};

export const StyledCheckInput = styled(StyledRadioInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'checkbox'
})`
  /* stylelint-disable-next-line */
  & ~ ${StyledCheckLabel}::before {
    border-radius: ${props => props.theme.borderRadii.md};
  }

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCheckInput.propTypes = {
  theme: PropTypes.object
};

StyledCheckInput.defaultProps = {
  theme: DEFAULT_THEME
};
