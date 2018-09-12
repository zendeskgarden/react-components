/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';
import TableStyles from '@zendeskgarden/css-tables';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';

import { StyledRow } from './Row';
import Body from './Body';
import Head from './Head';

const COMPONENT_ID = 'tables.table';
const SCROLLBAR_SIZE = scrollbarSize();

const retrieveSrollableStyling = props => {
  if (!props.scrollable) {
    return '';
  }

  const headerStyling = isRtl(props)
    ? `margin-left: ${SCROLLBAR_SIZE}px !important;`
    : `margin-right: ${SCROLLBAR_SIZE}px !important;`;

  return css`
    /* stylelint-disable */
    ${Body} {
      height: ${props.scrollable} !important;
      overflow-y: scroll !important;
    }

    ${Head} {
      ${headerStyling};
    }
    /* stylelint-enable */
  `;
};

const retrieveRowMinHeight = size => {
  if (size === 'small') {
    return '32px';
  }

  if (size === 'large') {
    return '64px';
  }

  return '40px';
};

/**
 * Accepts all `<div>` props
 */
const Table = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  role: 'grid',
  className: props =>
    classNames(TableStyles['c-table'], {
      // Sizing
      [TableStyles['c-table--sm']]: props.size === 'small',
      [TableStyles['c-table--lg']]: props.size === 'large',

      // RTL
      [TableStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveSrollableStyling(props)};
  ${props => retrieveTheme(COMPONENT_ID, props)};

  ${/* sc-selector */ StyledRow} {
    min-height: ${({ size }) => retrieveRowMinHeight(size)};
  }
`;

Table.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  /** Height of the table body. Enables scrolling. */
  scrollable: PropTypes.string
};

/** @component */
export default Table;
