/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import { StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { Combobox, Field, Option } from '@zendeskgarden/react-dropdowns';
import { getColor } from '@zendeskgarden/react-theming';
import { Paragraph } from '@zendeskgarden/react-typography';

interface IArgs {
  listboxAppendToNode: boolean;
}

export const StyledContainer = styled.div`
  position: relative;
  border: ${p => p.theme.borders.sm};
  border-radius: ${p => p.theme.borderRadii.md};
  border-color: ${p => getColor({ theme: p.theme, variable: 'border.default' })};
  padding: ${p => p.theme.space.md};
  max-height: 300px;
  overflow: clip;
`;

export const ListboxStory: StoryFn<IArgs> = ({ listboxAppendToNode }) => {
  const portalNode = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={portalNode} />
      <StyledContainer>
        <Field>
          <Field.Label>Listbox portal pattern</Field.Label>
          <Combobox
            isAutocomplete
            isEditable={false}
            listboxAppendToNode={listboxAppendToNode ? portalNode.current || undefined : undefined}
            listboxMinHeight="fit-content"
          >
            <Option value="One" />
            <Option value="Two" />
            <Option value="Three" />
            <Option value="Four" />
            <Option value="Five" />
            <Option value="Six" />
            <Option value="Seven" />
            <Option value="Eight" />
            <Option value="Nine" />
          </Combobox>
        </Field>
        <Paragraph style={{ marginTop: 20 }}>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth
          water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato
          scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel
          kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn
          pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot
          carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell
          pepper artichoke.
        </Paragraph>
      </StyledContainer>
    </>
  );
};
