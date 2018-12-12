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
const SIZE = {
  SMALL: 'small',
  LARGE: 'large'
};

/* eslint-disable indent */
const retrieveSrollableStyling = props => {
  if (!props.scrollable) {
    return '';
  }

  return css`
    /* stylelint-disable */
    ${Body} {
      height: ${props.scrollable};
      overflow-y: scroll;
    }

    ${Head} {
      ${isRtl(props)
        ? `margin-left: ${SCROLLBAR_SIZE}px !important;`
        : `margin-right: ${SCROLLBAR_SIZE}px !important;`};
    }
    /* stylelint-enable */
  `;
};
/* eslint-enable indent */

const retrieveRowMinHeight = size => {
  if (size === SIZE.SMALL) {
    return '32px';
  }

  if (size === SIZE.LARGE) {
    return '64px';
  }

  return '40px';
};

/**
 * Accepts all `<div>` props
 */
const Table = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  role: 'grid',
  className: classNames(TableStyles['c-table'], {
    // Sizing
    [TableStyles['c-table--sm']]: props.size === SIZE.SMALL,
    [TableStyles['c-table--lg']]: props.size === SIZE.LARGE,

    // RTL
    [TableStyles['is-rtl']]: isRtl(props)
  })
}))`
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
