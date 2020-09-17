/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { Skeleton, ISkeletonProps } from '@zendeskgarden/react-loaders';
import { XXXL, MD } from '@zendeskgarden/react-typography';
import { PALETTE } from '@zendeskgarden/react-theming';

export default {
  title: 'Components/Loaders/Skeleton',
  component: Skeleton
} as Meta;

const StyledExampleWrapper = styled.div<Partial<ISkeletonProps>>`
  background-color: ${props => (props.isLight ? PALETTE.kale[700] : PALETTE.white)};
  padding: 18px;
  max-width: 450px;
  color: ${props => (props.isLight ? PALETTE.white : PALETTE.black)};
`;

interface IDefaultStoryProps extends ISkeletonProps {
  isLoading: boolean;
}

export const Default: Story<IDefaultStoryProps> = ({ isLoading, height, isLight, width }) => {
  return (
    <StyledExampleWrapper isLight={isLight}>
      <XXXL>
        {isLoading ? (
          <Skeleton height={height} width={width} isLight={isLight} />
        ) : (
          'There. You see Lord Vader.'
        )}
      </XXXL>
      {isLoading && (
        <MD>
          <Skeleton height={height} width={width} isLight={isLight} />
          <Skeleton height={height} width={width} isLight={isLight} />
          <Skeleton height={height} width={width} isLight={isLight} />
        </MD>
      )}
      {!isLoading && (
        <MD>
          Continue with the operation. You may fire when ready. What? You&apos;re far too trusting.
          Dantooine is too remote to make an effective demonstration. But don&apos;t worry. We will
          deal with your Rebel friends soon enough. No! Commence primary ignition.
        </MD>
      )}
    </StyledExampleWrapper>
  );
};

Default.argTypes = {
  isLoading: {
    name: 'Show loaders'
  },
  isLight: {
    control: 'boolean'
  },
  height: {
    control: 'text'
  },
  width: {
    control: 'text'
  }
};

Default.args = {
  isLoading: true,
  isLight: false,
  height: '100%',
  width: '100%'
};
