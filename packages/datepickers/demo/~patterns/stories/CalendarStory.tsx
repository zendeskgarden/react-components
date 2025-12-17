/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import { StoryFn } from '@storybook/react-vite';
import styled from 'styled-components';
import { DatePicker } from '@zendeskgarden/react-datepickers';
import { Field, Input } from '@zendeskgarden/react-forms';
import { Paragraph } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';

interface IArgs {
  appendToNode: boolean;
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

export const CalendarStory: StoryFn<IArgs> = ({ appendToNode }) => {
  const portalNode = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={portalNode} />
      <StyledContainer>
        <Field>
          <Field.Label>Calendar portal pattern</Field.Label>
          <DatePicker appendToNode={appendToNode ? portalNode.current || undefined : undefined}>
            <Input />
          </DatePicker>
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
