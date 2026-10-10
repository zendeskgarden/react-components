/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IconButton } from '@zendeskgarden/react-buttons';
import { Item, Menu } from '@zendeskgarden/react-dropdowns';
import { Grid } from '@zendeskgarden/react-grid';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { Avatar, IStatusIndicatorProps, StatusIndicator } from '../../../../src/index';

const StyledIconButton = styled(IconButton)`
  overflow: visible;
`;

interface IArgs {
  isCompact: boolean;
  type?: IStatusIndicatorProps['type'];
}

export const StatusMenuStory = ({ isCompact, type }: IArgs) => {
  const [selectedType, setSelectedType] = useState<IStatusIndicatorProps['type']>(type);

  const onChange = useCallback(({ value }: { value?: string }) => {
    value && setSelectedType(value as IStatusIndicatorProps['type']);
  }, []);

  return (
    <Grid>
      <Grid.Row style={{ height: 'calc(100vh - 80px)' }}>
        <Grid.Col textAlign="center" alignSelf="center">
          <Menu
            /* eslint-disable-next-line react/no-unstable-nested-components */
            button={props => (
              <StyledIconButton {...props} aria-label="Select status">
                <Avatar status={selectedType} size={isCompact ? 'small' : 'medium'}>
                  <img alt="Example User" src="images/avatars/chrome.png" />
                </Avatar>
              </StyledIconButton>
            )}
            onChange={onChange}
            isCompact={isCompact}
          >
            <Item value="offline">
              <StatusIndicator aria-label={null} isCompact={isCompact} type="offline">
                Offline
              </StatusIndicator>
            </Item>
            <Item value="available">
              <StatusIndicator aria-label={null} isCompact={isCompact} type="available">
                Online
              </StatusIndicator>
            </Item>
            <Item value="transfers">
              <StatusIndicator aria-label={null} isCompact={isCompact} type="transfers">
                Transfers only
              </StatusIndicator>
            </Item>
            <Item value="away">
              <StatusIndicator aria-label={null} isCompact={isCompact} type="away">
                Away
              </StatusIndicator>
            </Item>
          </Menu>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};
