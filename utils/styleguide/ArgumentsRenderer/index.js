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
import { DEFAULT_THEME } from '../../../packages/theming/src';

const ArgumentsContainer = styled.div`
  margin-bottom: ${DEFAULT_THEME.space.xs};
  font-size: inherit;
`;

const Heading = styled.div`
  margin-bottom: ${DEFAULT_THEME.space.xxs};
  font-size: ${DEFAULT_THEME.fontSizes.md};
  font-weight: ${DEFAULT_THEME.fontWeights.semibold};
`;

const ArgumentsRenderer = ({ args, heading }) => (
  <ArgumentsContainer>
    {heading && <Heading>Arguments</Heading>}
    {args.map(arg => (
      <Argument key={arg.name} {...arg} />
    ))}
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
