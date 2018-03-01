import React from 'react';
import PropTypes from 'prop-types';
import url from 'url';
import styled from 'styled-components';
import { zdColorAlgae } from '@zendesk/garden-css-variables';
import TableOfContentsRenderer from 'react-styleguidist/lib/rsg-components/TableOfContents/TableOfContentsRenderer';

import { Button } from '../../../packages/buttons';
import packageJson from 'package.json';

const RTLContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  padding-right: 16px;
  padding-left: 16px;
`;

const Version = styled.div`
  text-align: center;
  color: ${zdColorAlgae};
`;

const TableOfContents = ({ children, ...other }) => {
  const query = url.parse(window.location.href).query;
  const isRtl = query && query.indexOf('isRtl') !== -1;

  return (
    <TableOfContentsRenderer {...other}>
      {children}
      <RTLContainer>
        <Button
          stretched
          size="small"
          onClick={() => {
            if (isRtl) {
              window.location.href = window.location.href.split('?')[0];
            } else {
              window.location.href = `${window.location.href}?isRtl`;
            }
          }}
        >
          {isRtl ? 'Disable RTL Locale' : 'Enable RTL Locale'}
        </Button>
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
