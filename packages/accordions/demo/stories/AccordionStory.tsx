/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { MouseEventHandler } from 'react';
import { Story } from '@storybook/react';
import Icon1 from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';
import Icon2 from '@zendeskgarden/svg-icons/src/16/folder-open-stroke.svg';
import { Accordion, IAccordionProps } from '@zendeskgarden/react-accordions';
import { IconButton } from '@zendeskgarden/react-buttons';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { IAccordionSection } from './types';

interface IProps {
  isCompact: boolean;
}

const handleClick: MouseEventHandler<HTMLButtonElement> = event => event.preventDefault();

const IconButtons = ({ isCompact }: IProps) => (
  <>
    <Tooltip content="Settings">
      <IconButton
        focusInset={isCompact}
        size={isCompact ? 'small' : 'medium'}
        onClick={handleClick}
      >
        <Icon1 />
      </IconButton>
    </Tooltip>
    <Tooltip content="Folders">
      <IconButton
        focusInset={isCompact}
        size={isCompact ? 'small' : 'medium'}
        onClick={handleClick}
      >
        <Icon2 />
      </IconButton>
    </Tooltip>
  </>
);

interface IArgs extends IAccordionProps {
  hasIconButtons: boolean;
  sections: IAccordionSection[];
}

export const AccordionStory: Story<IArgs> = ({ sections, ...args }: IArgs) => (
  <Accordion {...args}>
    {sections.map((section, index) => (
      <Accordion.Section key={index}>
        <Accordion.Header>
          <Accordion.Label>{section.headerLabel}</Accordion.Label>
          {args.hasIconButtons ? <IconButtons isCompact={args.isCompact || false} /> : null}
        </Accordion.Header>
        <Accordion.Panel>{section.panel}</Accordion.Panel>
      </Accordion.Section>
    ))}
  </Accordion>
);
