/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Component } from 'react';
import { Table, Head, Row, HeaderRow, HeaderCell, Body, Cell } from '../../../packages/tables/src';

export default class CIDTable extends Component {
  groupIds = data => {
    const cids = data.split(',');

    return cids.reduce((acc, item) => {
      const [group] = item.trim().split('.');

      if (acc[group]) {
        acc[group].push(item);
      } else {
        acc[group] = [item];
      }

      return acc;
    }, {});
  };

  render() {
    const groups = this.groupIds(COMPONENT_IDS);

    return (
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell width="20%">Component</HeaderCell>
            <HeaderCell width="80%">COMPONENT_IDs</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          {Object.entries(groups).map(([componentName, ids]) => (
            <Row key={componentName}>
              <Cell width="20%">{componentName.trim()}</Cell>
              <Cell width="80%">{ids.map(s => s.trim()).join(', ')}</Cell>
            </Row>
          ))}
        </Body>
      </Table>
    );
  }
}
