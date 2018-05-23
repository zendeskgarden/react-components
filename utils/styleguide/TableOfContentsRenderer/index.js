/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TableOfContentsRenderer from 'react-styleguidist/lib/rsg-components/TableOfContents/TableOfContentsRenderer';

import { Button, Anchor } from '../../../packages/buttons';
import { ThemeProvider } from '../../../packages/theming';
import { Tooltip, Title } from '../../../packages/tooltips';

const RTLContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  padding-right: 16px;
  padding-left: 16px;

  & > div {
    width: 100%;
  }
`;

const TableOfContents = ({ children, ...other }) => {
  const isRtl = location.search.indexOf('isRtl') !== -1;

  return (
    <TableOfContentsRenderer {...other}>
      {children}
      <RTLContainer>
        <ThemeProvider>
          <Tooltip
            placement="end"
            popperModifiers={{
              preventOverflow: {
                boundariesElement: 'viewport'
              },
              hide: { enabled: false }
            }}
            appendToBody
            type="light"
            size="extra-large"
            trigger={
              <Button
                stretched
                size="small"
                onClick={() => {
                  if (isRtl) {
                    location.search = '';
                  } else {
                    location.search = '?isRtl';
                  }
                }}
              >
                {isRtl ? 'Disable RTL' : 'Enable RTL'}
              </Button>
            }
          >
            <Title>RTL in Garden</Title>
            <p>
              All Garden components are RTL locale aware when used with the {'<ThemeProvider />'}{' '}
              component.
            </p>
            <p>
              <Anchor href="../theming">View Garden Theming Package</Anchor>
            </p>
          </Tooltip>
        </ThemeProvider>
      </RTLContainer>
    </TableOfContentsRenderer>
  );
};

TableOfContents.propTypes = {
  children: PropTypes.any
};

TableOfContents.contextTypes = {
  isRtl: PropTypes.bool,
  setRtl: PropTypes.func
};

export default TableOfContents;
