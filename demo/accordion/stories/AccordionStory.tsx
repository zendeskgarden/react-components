/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import Icon2 from '@zendeskgarden/svg-icons/src/folder-open-stroke.svg';
import Icon1 from '@zendeskgarden/svg-icons/src/gear-stroke.svg';
import PencilIcon from '@zendeskgarden/svg-icons/src/pencil-stroke.svg';
import TrashIcon from '@zendeskgarden/svg-icons/src/trash-stroke.svg';
import { MouseEventHandler } from 'react';

import { Accordion, IAccordionProps, IconButton, Tooltip } from '../../../src/index';
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

/* `Accordion.Actions` never toggles the section: no `preventDefault` needed. */
const ActionButtons = () => (
  <Accordion.Actions>
    <Tooltip content="Edit">
      <IconButton aria-label="Edit" isBasic isPill onClick={() => undefined}>
        <PencilIcon />
      </IconButton>
    </Tooltip>
    <Tooltip content="Delete">
      <IconButton aria-label="Delete" isBasic isPill onClick={() => undefined}>
        <TrashIcon />
      </IconButton>
    </Tooltip>
  </Accordion.Actions>
);

interface IArgs extends IAccordionProps {
  hasActions: boolean;
  hasDescription: boolean;
  hasIconButtons: boolean;
  sections: IAccordionSection[];
}

export const AccordionStory = ({ sections, ...args }: IArgs) => (
  <Accordion {...args}>
    {sections.map((section, index) => (
      <Accordion.Section key={index}>
        <Accordion.Header>
          <Accordion.Label>
            {section.headerLabel}
            {!!args.hasDescription && !!section.description && (
              <Accordion.Description>{section.description}</Accordion.Description>
            )}
          </Accordion.Label>
          {!!args.hasActions && <ActionButtons />}
          {!!args.hasIconButtons && <IconButtons isCompact={args.isCompact || false} />}
        </Accordion.Header>
        <Accordion.Panel>{section.panel}</Accordion.Panel>
      </Accordion.Section>
    ))}
  </Accordion>
);
