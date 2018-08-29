/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Original implementation is based off of the logic shown in
 * https://github.com/styleguidist/react-styleguidist/blob/46156bb932121df5a176852d0fcdfd43cad83ef3/src/rsg-components/Table/TableRenderer.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Table, Head, Row, HeaderCell, Body, Cell } from '../../../packages/tables/src';

const AutoTable = styled(Table)`
  && {
    table-layout: auto;
  }
`;

const TableRenderer = ({ columns, rows, getRowKey }) => {
  return (
    <AutoTable size="small">
      <Head>
        <Row header>
          {columns.map(({ caption }) => (
            <HeaderCell key={caption} scope="col">
              {caption}
            </HeaderCell>
          ))}
        </Row>
      </Head>
      <Body>
        {rows.map(row => (
          <Row key={getRowKey(row)}>
            {columns.map(({ render }, index) => (
              <Cell key={index}>{render(row) || <span>-</span>}</Cell>
            ))}
          </Row>
        ))}
      </Body>
    </AutoTable>
  );
};

TableRenderer.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRowKey: PropTypes.func.isRequired
};

export default TableRenderer;
