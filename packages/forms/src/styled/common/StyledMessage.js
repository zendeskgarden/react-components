/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import math from 'polished/lib/math/math';
import stripUnit from 'polished/lib/helpers/stripUnit';
import PropTypes from 'prop-types';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import VALIDATION from '../../utils/validation';
import { StyledMessageIcon } from './StyledMessageIcon';
import { StyledLabel } from './StyledLabel';

const validationStyles = props => {
  const rtl = props.theme.rtl;
  const padding = math(`${props.theme.space.base} * 2px + ${props.theme.iconSizes.md}`);
  let color;

  if (props.validation === VALIDATION.ERROR) {
    color = getColor('dangerHue', 600, props.theme);
  } else if (props.validation === VALIDATION.SUCCESS) {
    color = getColor('successHue', 600, props.theme);
  } else if (props.validation === VALIDATION.WARNING) {
    color = getColor('warningHue', 700, props.theme);
  } else {
    color = getColor('neutralHue', 700, props.theme);
  }

  return css`
    /* stylelint-disable-next-line property-no-unknown */
    padding-${rtl ? 'right' : 'left'}: ${props.validation && padding};
    color: ${color};
  `;
};

const COMPONENT_ID = 'forms.input_message';

export const StyledMessage = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  direction: ${props => props.theme.rtl && 'rtl'};
  display: inline-block;
  position: relative;
  vertical-align: middle; /* support message inline with input layout */
  line-height: ${props =>
    stripUnit(math(`${props.theme.iconSizes.md} / ${props.theme.fontSizes.sm}`))};
  font-size: ${props => props.theme.fontSizes.sm};

  ${props => validationStyles(props)};

  & ${StyledMessageIcon} {
    position: absolute;
    top: -1px;
    ${props => (props.theme.rtl ? 'right' : 'left')}: 0;
  }

  /* stylelint-disable-next-line */
  ${StyledLabel} + & {
    display: block;
    margin-top: ${props => math(`${props.theme.space.base} * 1px`)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMessage.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR]),
  theme: PropTypes.object
};

StyledMessage.defaultProps = {
  theme: DEFAULT_THEME
};
