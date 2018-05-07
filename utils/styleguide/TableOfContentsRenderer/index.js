import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { zdColorAlgae } from '@zendesk/garden-css-variables';
import TableOfContentsRenderer from 'react-styleguidist/lib/rsg-components/TableOfContents/TableOfContentsRenderer';

import { Button, Anchor } from '../../../packages/buttons';
import { ThemeProvider } from '../../../packages/theming';
import packageJson from 'package.json';
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

const Version = styled.div`
  text-align: center;
  color: ${zdColorAlgae};
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
      <Version title="Current version">v{packageJson.version}</Version>
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
