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
import { Field, Toggle, Label } from '../../../packages/forms/src';
import ChangelogModal from './Changelog';
import Spacer from './Spacer';
import PACKAGE_JSON from 'package.json';
import CHANGELOG from '../../../CHANGELOG.md';

const TableOfContentsChildrenWrapper = styled.div`
  a:hover {
    text-decoration: underline;
  }

  a:focus {
    outline: none;
    text-decoration: underline;
  }
`;

const RTLContainer = styled.div`
  margin-top: 16px;
  padding-right: 16px;
  padding-left: 16px;
`;

const BadgeContainer = styled.div`
  margin-top: 8px;
`;

const ChangelogButton = styled(Button)`
  /* stylelint-disable */
  margin-top: 8px !important;
  font-size: 15px;
  /* stylelint-enable */
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

  render() {
    const isRtl = location.search.indexOf('isRtl') !== -1;
    const githubPackageUrl = `https://github.com/zendeskgarden/react-components/tree/master/packages/${BASE_PATH_NAME}`;
    const { children, ...other } = this.props;
    const { isChangelogModalOpen } = this.state;

    return (
      <div role="navigation">
        <TableOfContentsRenderer {...other}>
          <TableOfContentsChildrenWrapper>{children}</TableOfContentsChildrenWrapper>
          <ThemeProvider>
            <RTLContainer>
              <ChangelogButton link onClick={() => this.setState({ isChangelogModalOpen: true })}>
                View Changelog
              </ChangelogButton>
              {isChangelogModalOpen && (
                <ChangelogModal
                  onClose={() => this.setState({ isChangelogModalOpen: false })}
                  name={PACKAGE_JSON.name}
                  htmlContent={CHANGELOG}
                />
              )}
              <BadgeContainer>
                <a href={githubPackageUrl}>
                  <img alt="View package on GitHub" src="images/github.svg" />
                </a>
              </BadgeContainer>
              <Spacer height="20px" />
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
                  <div style={{ marginBottom: 20 }}>
                    <Field>
                      <Toggle
                        checked={isRtl}
                        onChange={() => {
                          if (isRtl) {
                            location.search = '';
                          } else {
                            location.search = '?isRtl';
                          }
                        }}
                      >
                        <Label>RTL Locale</Label>
                      </Toggle>
                    </Field>
                  </div>
                }
              >
                <Title>RTL in Garden</Title>
                <p>
                  All Garden components are RTL locale aware when used with the{' '}
                  {'<ThemeProvider />'} component.
                </p>
                <p>
                  <Anchor href="../theming">View Garden Theming Package</Anchor>
                </p>
              </Tooltip>
            </RTLContainer>
          </ThemeProvider>
        </TableOfContentsRenderer>
      </div>
    );
  }
}

export default TableOfContents;
