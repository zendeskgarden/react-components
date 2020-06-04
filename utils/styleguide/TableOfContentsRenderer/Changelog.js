/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Modal, Header, Body, Close } from '../../../packages/modals/src';

const ChangelogModal = styled(Modal)`
  max-width: calc(100% - 48px);
`;

const ChangelogBody = styled(Body)`
  max-height: 500px;
  overflow: auto;
`;

const Changelog = ({ onClose, name, htmlContent }) => {
  return (
    <ChangelogModal large backdropProps={{ style: { overflow: 'hidden' } }} onClose={onClose}>
      <Header>{name}</Header>
      {/* eslint-disable-next-line @typescript-eslint/naming-convention */}
      <ChangelogBody dangerouslySetInnerHTML={{ __html: htmlContent }} className="markdown-body" />
      <Close onClick={onClose} />
    </ChangelogModal>
  );
};

Changelog.propTypes = {
  onClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  htmlContent: PropTypes.string.isRequired
};

export default Changelog;
