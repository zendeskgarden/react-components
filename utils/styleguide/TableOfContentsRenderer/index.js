/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TableOfContentsRenderer from 'react-styleguidist/lib/rsg-components/TableOfContents/TableOfContentsRenderer';

import { Button, Anchor } from '../../../packages/buttons/src';
import { ThemeProvider } from '../../../packages/theming/src';
import { Tooltip, Title } from '../../../packages/tooltips/src';
import { Modal, Header, Body, Close } from '../../../packages/modals/src';
import PACKAGE_JSON from 'package.json';
import CHANGELOG from 'CHANGELOG.md';

const RTLContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  padding-right: 16px;
  padding-left: 16px;

  & > div {
    width: 100%;
  }
`;

const BadgeContainer = styled.div`
  text-align: center;
`;

const ChangelogButton = styled(Button)`
  /* stylelint-disable */
  margin-top: 8px !important;
  /* stylelint-enable */
`;

const ChangelogModal = styled(Modal)`
  max-width: calc(100% - 48px);
`;

const ChangelogBody = styled(Body)`
  max-height: 500px;
  overflow: auto;
`;

class TableOfContents extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  static contextTypes = {
    isRtl: PropTypes.bool,
    setRtl: PropTypes.func
  };

  state = {
    isChangelogModalOpen: false
  };

  closeChangelogModal = () => {
    this.setState({ isChangelogModalOpen: false });
  };

  renderChangelogModal = () => {
    return (
      <ChangelogModal
        large
        onClose={this.closeChangelogModal}
        backdropProps={{ style: { overflow: 'hidden' } }}
      >
        <Header>{PACKAGE_JSON.name}</Header>
        <ChangelogBody dangerouslySetInnerHTML={{ __html: CHANGELOG }} className="markdown-body" />
        <Close onClick={this.closeChangelogModal} />
      </ChangelogModal>
    );
  };

  render() {
    const isRtl = location.search.indexOf('isRtl') !== -1;
    const githubPackageUrl = `https://github.com/zendeskgarden/react-components/tree/master/packages/${BASE_PATH_NAME}`;
    const { children, ...other } = this.props;
    const { isChangelogModalOpen } = this.state;

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
          <ChangelogButton
            stretched
            size="small"
            onClick={() => this.setState({ isChangelogModalOpen: true })}
          >
            View Changelog
          </ChangelogButton>
        </RTLContainer>
        {isChangelogModalOpen && this.renderChangelogModal()}
        <BadgeContainer>
          <a href={githubPackageUrl}>
            <img alt="View package on GitHub" src="images/github.svg" />
          </a>
        </BadgeContainer>
      </TableOfContentsRenderer>
    );
  }
}

export default TableOfContents;
