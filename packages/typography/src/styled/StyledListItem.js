/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { DEFAULT_THEME, isRtl, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledFont } from './StyledFont';

const SPACE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const listItemContentStyles = props => {
  let padding;

  switch (props.space) {
    case SPACE.SMALL:
      padding = '0';
      break;
    case SPACE.LARGE:
      padding = '4px 0';
      break;
    case SPACE.MEDIUM:
    default:
      padding = '2px 0';
      break;
  }

  return css`
    padding: ${padding};
  `;
};

const ORDERED_ID = 'typography.ordered_list_item';

export const StyledOrderedListItem = styled.li.attrs({
  'data-garden-id': ORDERED_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable */
  margin-${props => (isRtl(props) ? 'right' : 'left')}: -4px;
  padding-${props => (isRtl(props) ? 'right' : 'left')}: 4px;
  /* stylelint-enable */

  ${props => retrieveComponentStyles(ORDERED_ID, props)};
`;

StyledOrderedListItem.propTypes = {
  theme: PropTypes.object
};

StyledOrderedListItem.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledOrderedListItemContent = styled(StyledFont)`
  ${props => listItemContentStyles(props)};
`;

StyledOrderedListItemContent.propTypes = {
  space: PropTypes.oneOf([SPACE.SMALL, SPACE.MEDIUM, SPACE.LARGE])
};

StyledOrderedListItemContent.defaultProps = {
  space: SPACE.MEDIUM
};

const UNORDERED_ID = 'typography.unordered_list_item';

export const StyledUnorderedListItem = styled.li.attrs({
  'data-garden-id': UNORDERED_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveComponentStyles(UNORDERED_ID, props)};
`;

StyledUnorderedListItem.propTypes = {
  theme: PropTypes.object
};

StyledUnorderedListItem.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledUnorderedListItemContent = styled(StyledFont)`
  ${props => listItemContentStyles(props)};
`;

StyledUnorderedListItemContent.propTypes = {
  space: PropTypes.oneOf([SPACE.SMALL, SPACE.MEDIUM, SPACE.LARGE])
};

StyledUnorderedListItemContent.defaultProps = {
  space: SPACE.MEDIUM
};
