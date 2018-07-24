/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Argument from 'react-styleguidist/lib/rsg-components/Argument/ArgumentRenderer';
import { zdFontSizeEpsilon, zdFontWeightSemibold } from '@zendeskgarden/css-variables';

const ArgumentsContainer = styled.div`
  margin-bottom: 8px;
  font-size: inherit;
`;

const Heading = styled.div`
  margin-bottom: 4px;
  font-size: ${zdFontSizeEpsilon};
  font-weight: ${zdFontWeightSemibold};
`;

const ArgumentsRenderer = ({ args, heading }) => (
  <ArgumentsContainer>
    {heading && <Heading>Arguments</Heading>}
    {args.map(arg => <Argument key={arg.name} {...arg} />)}
  </ArgumentsContainer>
);

ArgumentsRenderer.propTypes = {
  args: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.object,
      description: PropTypes.string
    })
  ).isRequired,
  heading: PropTypes.bool
};

export default ArgumentsRenderer;
