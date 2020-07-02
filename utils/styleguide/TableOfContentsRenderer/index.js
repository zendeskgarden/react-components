/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import qs from 'qs';
import TableOfContentsRenderer from 'react-styleguidist/lib/rsg-components/TableOfContents/TableOfContentsRenderer';

import { Button, Anchor } from '../../../packages/buttons/src';
import { DEFAULT_THEME, ThemeProvider } from '../../../packages/theming/src';
import { Tooltip, Title, Paragraph } from '../../../packages/tooltips/src';
import { Code } from '../../../packages/typography/src';
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
    const parameters = qs.parse(location.search.slice(1), { strictNullHandling: true });
    const githubPackageUrl = `https://github.com/zendeskgarden/react-components/tree/main/packages/${BASE_PATH_NAME}`;
    const { children, ...other } = this.props;
    const { isChangelogModalOpen } = this.state;

    return (
      <div role="navigation">
        <TableOfContentsRenderer {...other}>
          <TableOfContentsChildrenWrapper>{children}</TableOfContentsChildrenWrapper>
          <ThemeProvider>
            <RTLContainer>
              <ChangelogButton isLink onClick={() => this.setState({ isChangelogModalOpen: true })}>
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
                appendToNode={document.body}
                type="light"
                size="extra-large"
                style={{ fontFamily: DEFAULT_THEME.fonts.system }}
                content={
                  <>
                    <Title>RTL in Garden</Title>
                    <Paragraph>
                      All Garden components are RTL locale aware when used with the{' '}
                      <Code>{'<ThemeProvider />'}</Code> component.
                    </Paragraph>
                    <Paragraph>
                      <Anchor href="../theming">View Garden Theming Package</Anchor>
                    </Paragraph>
                  </>
                }
              >
                <Field>
                  <Toggle
                    checked={'rtl' in parameters}
                    onChange={() => {
                      if ('rtl' in parameters) {
                        delete parameters.rtl;
                      } else {
                        parameters.rtl = null;
                      }

                      location.search = qs.stringify(parameters, { strictNullHandling: true });
                    }}
                  >
                    <Label>RTL Locale</Label>
                  </Toggle>
                </Field>
              </Tooltip>
              <Spacer height="20px" />
              <Tooltip
                placement="end"
                appendToNode={document.body}
                type="light"
                size="extra-large"
                style={{ fontFamily: DEFAULT_THEME.fonts.system }}
                content={
                  <>
                    <Title>Garden Bedrock</Title>
                    <Paragraph>
                      <Anchor href="https://zendeskgarden.github.io/css-components/bedrock">
                        View Garden Bedrock CSS
                      </Anchor>
                    </Paragraph>
                  </>
                }
              >
                <Field style={{ marginBottom: 20 }}>
                  <Toggle
                    checked={'bedrock' in parameters}
                    onChange={() => {
                      if ('bedrock' in parameters) {
                        delete parameters.bedrock;
                      } else {
                        parameters.bedrock = null;
                      }

                      location.search = qs.stringify(parameters, { strictNullHandling: true });
                    }}
                  >
                    <Label>Bedrock CSS</Label>
                  </Toggle>
                </Field>
              </Tooltip>
            </RTLContainer>
          </ThemeProvider>
        </TableOfContentsRenderer>
      </div>
    );
  }
}

export default TableOfContents;
