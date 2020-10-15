/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';
import { LG } from '@zendeskgarden/react-typography';
import { Avatar } from '@zendeskgarden/react-avatars';
import UserIcon from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';
import ZendeskIcon from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import { PALETTE } from '@zendeskgarden/react-theming';

const StyledTable = styled.table.attrs<Partial<IStoryProps>>(p => ({
  style: { backgroundColor: p.surfaceColor }
}))<Partial<IStoryProps>>`
  width: 100%;
  border-spacing: 0;
`;

const StyledAvatarTd = styled.td`
  padding: ${p => p.theme.space.lg} 0;
  text-align: center;
`;

interface IStoryProps {
  size: 'extraextrasmall' | 'extrasmall' | 'small' | 'medium' | 'large';
  status: 'none' | 'away' | 'available';
  badge: number;
  surfaceColor: string;
  backgroundColor: string;
  foregroundColor: string;
}

export const Default: Story<IStoryProps> = ({
  size,
  status,
  badge,
  surfaceColor,
  backgroundColor,
  foregroundColor
}) => {
  const computedBadge = useMemo(() => {
    if (badge === 0) {
      return undefined;
    }

    if (badge > 9) {
      return '9+';
    }

    return badge;
  }, [badge]);

  const computedStatus = useMemo(() => {
    if (status === 'none') {
      return undefined;
    }

    return status;
  }, [status]);

  return (
    <StyledTable surfaceColor={surfaceColor}>
      <tbody>
        <tr>
          <td></td>
          <th scope="col">
            <LG>Default</LG>
          </th>
          <th scope="col">
            <LG>System</LG>
          </th>
        </tr>
        <tr>
          <th scope="row">
            <LG>Icon</LG>
          </th>
          <StyledAvatarTd>
            <Avatar
              size={size}
              status={computedStatus}
              badge={computedBadge}
              surfaceColor={surfaceColor}
              backgroundColor={backgroundColor}
              foregroundColor={foregroundColor}
            >
              <UserIcon role="img" aria-label="Example SVG" />
            </Avatar>
          </StyledAvatarTd>
          <StyledAvatarTd>
            <Avatar
              size={size}
              status={computedStatus}
              badge={computedBadge}
              surfaceColor={surfaceColor}
              backgroundColor={backgroundColor}
              foregroundColor={foregroundColor}
              isSystem
            >
              <ZendeskIcon role="img" aria-label="Zendesk" />
            </Avatar>
          </StyledAvatarTd>
        </tr>
        <tr>
          <th scope="row">
            <LG>Image</LG>
          </th>
          <StyledAvatarTd>
            <Avatar
              size={size}
              status={computedStatus}
              badge={computedBadge}
              surfaceColor={surfaceColor}
            >
              <img alt="" src="images/avatar-3.png" />
            </Avatar>
          </StyledAvatarTd>
          <StyledAvatarTd>
            <Avatar
              size={size}
              status={computedStatus}
              badge={computedBadge}
              surfaceColor={surfaceColor}
              isSystem
            >
              <img alt="" src="images/system.png" />
            </Avatar>
          </StyledAvatarTd>
        </tr>
        <tr>
          <th scope="row">
            <LG>Text</LG>
          </th>
          <StyledAvatarTd>
            <Avatar
              size={size}
              status={computedStatus}
              badge={computedBadge}
              surfaceColor={surfaceColor}
              backgroundColor={backgroundColor}
              foregroundColor={foregroundColor}
            >
              <Avatar.Text>G</Avatar.Text>
            </Avatar>
          </StyledAvatarTd>
          <StyledAvatarTd>
            <Avatar
              size={size}
              status={computedStatus}
              badge={computedBadge}
              surfaceColor={surfaceColor}
              backgroundColor={backgroundColor}
              foregroundColor={foregroundColor}
              isSystem
            >
              <Avatar.Text>ZD</Avatar.Text>
            </Avatar>
          </StyledAvatarTd>
        </tr>
      </tbody>
    </StyledTable>
  );
};

Default.argTypes = {
  size: {
    name: 'Size',
    control: {
      type: 'select',
      options: ['extraextrasmall', 'extrasmall', 'small', 'medium', 'large']
    }
  },
  status: {
    name: 'Status',
    control: {
      type: 'inline-radio',
      options: ['none', 'away', 'available']
    }
  },
  badge: {
    name: 'Badge',
    control: { type: 'range', min: 0, max: 10, step: 1 }
  },
  surfaceColor: {
    name: 'Surface Color',
    control: { type: 'color' }
  },
  backgroundColor: { name: 'Background Color', control: { type: 'color' } },
  foregroundColor: {
    name: 'Foreground Color',
    control: { type: 'color' }
  }
};

Default.args = {
  size: 'medium',
  status: 'none',
  badge: 0,
  surfaceColor: PALETTE.white,
  backgroundColor: PALETTE.kale[800],
  foregroundColor: PALETTE.white
};

Default.parameters = {
  docs: {
    description: {
      component: `
  Along with a child \`img\`, avatars also support the display of a single
  child \`svg\` icon or \`Avatar.Text\` component. In both of the latter cases,
  the \`backgroundColor\` of the \`Avatar\` must be set to override the browser's
  "transparent" default. Optionally, a \`foregroundColor\` (default "white") prop
  may be set to alter the color of the child \`svg\` or \`Avatar.Text\`. Note
  that a \`surfaceColor\` (default "white") prop should be used on \`Avatar\`
  components to ensure internal status rings blend with current background
  color. The \`Avatar.Text\` content does not display for extra extra small
  sized avatars.

  ### Accessibility

  Ensure that all child images include an \`alt\` description. Similarly, ensure
  that all child SVGs include \`role="img"\` with an \`aria-label\` description. By
  default, the \`Avatar\` is rendered with \`aria-atomic="true"\` and
  \`aria-live="polite"\`. Whenever the \`badge\` prop changes, these ARIA settings
  result in VoiceOver reading out the image's \`alt\` (or SVG's \`aria-label\`)
  description followed by the badge count. You may need to override with an
  improved implementation for your use-case.
`
    }
  }
};
