/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Tiles } from '@zendeskgarden/react-forms';
import ChevronIcon from '@zendeskgarden/svg-icons/src/16/chevron-box-stroke.svg';
import CheckboxDoubleIcon from '@zendeskgarden/svg-icons/src/16/check-box-double-stroke.svg';
import TextIcon from '@zendeskgarden/svg-icons/src/16/text-stroke.svg';
import MultilineIcon from '@zendeskgarden/svg-icons/src/16/multiline-stroke.svg';
import CheckIcon from '@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg';
import NumberIcon from '@zendeskgarden/svg-icons/src/16/number-stroke.svg';
import DecimalIcon from '@zendeskgarden/svg-icons/src/16/decimal-stroke.svg';
import CalendarIcon from '@zendeskgarden/svg-icons/src/16/calendar-stroke.svg';
import CreditCardIcon from '@zendeskgarden/svg-icons/src/16/credit-card-stroke.svg';
import AsteriskIcon from '@zendeskgarden/svg-icons/src/16/asterisk-stroke.svg';

export default {
  title: 'Components/Forms/Tiles',
  component: Tiles.Tile,
  subcomponents: {
    'Tiles.Tile': Tiles.Tile,
    'Tiles.Label': Tiles.Label,
    'Tiles.Description': Tiles.Description,
    'Tiles.Icon': Tiles.Icon
  }
} as Meta;

const items = [
  { value: 'dropdown', label: 'Dropdown', icon: <ChevronIcon /> },
  { value: 'multiselect', label: 'Multiselect', icon: <CheckboxDoubleIcon /> },
  { value: 'text', label: 'Text', icon: <TextIcon /> },
  { value: 'multiline', label: 'Multiline', icon: <MultilineIcon /> },
  { value: 'checkbox', label: 'Checkbox', icon: <CheckIcon /> },
  { value: 'numeric', label: 'Numeric', icon: <NumberIcon /> },
  { value: 'decimal', label: 'Decimal', icon: <DecimalIcon /> },
  { value: 'date', label: 'Date', icon: <CalendarIcon /> },
  { value: 'credit-card', label: 'Credit card', icon: <CreditCardIcon /> },
  { value: 'wildcard', label: 'Wildcard', icon: <AsteriskIcon /> }
];

const StyledCol = styled(Col)`
  margin-top: ${p => p.theme.space.xxs};
  margin-bottom: ${p => p.theme.space.xxs};
`;

export const Default: Story<{ isCentered: boolean; disabled: boolean }> = ({
  disabled,
  isCentered
}) => {
  return (
    <Grid>
      <Row>
        <Col lg={8} offsetLg={2}>
          <Tiles name="example" aria-label="Example radio group selection" isCentered={isCentered}>
            <Grid>
              <Row>
                {items.map(item =>
                  isCentered ? (
                    <StyledCol key={item.value} lg={3} md={4} xs={6}>
                      <Tiles.Tile value={item.value} disabled={disabled}>
                        <Tiles.Icon>{item.icon}</Tiles.Icon>
                        <Tiles.Label>{item.label}</Tiles.Label>
                      </Tiles.Tile>
                    </StyledCol>
                  ) : (
                    <StyledCol key={item.value} sm={12}>
                      <Tiles.Tile value={item.value} disabled={disabled}>
                        <Tiles.Icon>{item.icon}</Tiles.Icon>
                        <Tiles.Label>{item.label}</Tiles.Label>
                        <Tiles.Description>
                          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
                          onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                        </Tiles.Description>
                      </Tiles.Tile>
                    </StyledCol>
                  )
                )}
              </Row>
            </Grid>
          </Tiles>
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  isCentered: true,
  disabled: false
};

Default.argTypes = {
  isCentered: {
    name: 'Centered'
  },
  disabled: {
    name: 'Disabled'
  },
  value: {
    table: {
      disable: true
    }
  }
};

Default.parameters = {
  docs: {
    description: {
      component: `
The \`Tiles\` component is implemented using the
[W3C Radio Group pattern](https://www.w3.org/TR/wai-aria-practices/#radiobutton).
Each \`Tile\` may be treated as an individual radio input.

### Components

- \`Tiles.Tile\` Accepts all \`div\` attributes and the following props:
  - [\`value\`] The value of the \`input\`
  - [\`disabled\`] Whether the \`Tile\` is disabled
- \`Tiles.Icon\` Accepts all \`span\` attributes
- \`Tiles.Label\` Accepts all \`span\` attributes
- \`Tiles.Description\` Accepts all \`span\` attributes

### Layout

The \`Tiles\` component provides no layout or responsive styling. For a responsive layout
we use our [@zendeskgarden/react-grid package](https://garden.zendesk.com/components/grid)
in the examples below.
      `
    }
  }
};
