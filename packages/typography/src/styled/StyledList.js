/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { DEFAULT_THEME, isRtl, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const listStyles = props => {
  const rtl = isRtl(props);

  return css`
    direction: ${rtl ? 'rtl' : 'ltr'};
    margin: 0;
    /* stylelint-disable-next-line property-no-unknown */
    margin-${rtl ? 'right' : 'left'}: 24px;
    padding: 0;
    list-style-position: outside;
    list-style-type: ${props.type};
  `;
};

const ORDERED_ID = 'typography.ordered_list';

const ORDERED_TYPE = {
  DECIMAL: 'decimal',
  DECIMAL_LEADING_ZERO: 'decimal-leading-zero',
  LOWER_ALPHA: 'lower-alpha',
  LOWER_ROMAN: 'lower-roman',
  UPPER_ALPHA: 'upper-alpha',
  UPPER_ROMAN: 'upper-roman'
};

export const StyledOrderedList = styled.ol.attrs({
  'data-garden-id': ORDERED_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => listStyles(props)};
  ${props => retrieveComponentStyles(ORDERED_ID, props)};
`;

StyledOrderedList.propTypes = {
  theme: PropTypes.object,
  type: PropTypes.oneOf([
    ORDERED_TYPE.DECIMAL,
    ORDERED_TYPE.DECIMAL_LEADING_ZERO,
    ORDERED_TYPE.LOWER_ALPHA,
    ORDERED_TYPE.UPPER_ALPHA,
    ORDERED_TYPE.LOWER_ROMAN,
    ORDERED_TYPE.UPPER_ROMAN
  ])
};

StyledOrderedList.defaultProps = {
  theme: DEFAULT_THEME
};

const UNORDERED_ID = 'typography.unordered_list';

const UNORDERED_TYPE = {
  CIRCLE: 'circle',
  DISC: 'disc',
  SQUARE: 'square'
};

export const StyledUnorderedList = styled.ul.attrs({
  'data-garden-id': UNORDERED_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => listStyles(props)};
  ${props => retrieveComponentStyles(UNORDERED_ID, props)};
`;

StyledUnorderedList.propTypes = {
  theme: PropTypes.object,
  type: PropTypes.oneOf([UNORDERED_TYPE.CIRCLE, UNORDERED_TYPE.DISC, UNORDERED_TYPE.SQUARE])
};

StyledUnorderedList.defaultProps = {
  theme: DEFAULT_THEME
};
