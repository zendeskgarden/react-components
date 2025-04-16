/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { FC } from 'react';
import { StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { readableColor } from 'polished';
import { IGardenTheme, PALETTE, getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';

const StyledColorHex = styled.figcaption`
  margin-left: auto;
  font-size: ${p => p.theme.fontSizes.sm};
`;

const StyledColorPalette = styled.div`
  margin-top: ${p => p.theme.space.md};
  margin-bottom: ${p => p.theme.space.xl};
`;

const StyledColorSwatch = styled.figure<{ color: string }>`
  display: flex;
  align-items: center;
  margin: 0;
  background-color: ${p => p.color};
  padding: ${p => p.theme.space.sm};
  color: ${p =>
    readableColor(
      p.color,
      getColor({ theme: p.theme, variable: 'foreground.default' }),
      getColor({ theme: p.theme, variable: 'background.default' })
    )};
`;

const StyledColorTitle = styled.b`
  white-space: nowrap;
  font-size: ${p => p.theme.fontSizes.md};
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.md};
  }
`;

const StyledRow = styled(Grid.Row)`
  & + & {
    margin-top: ${p => p.theme.space.md};
  }
`;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;

  & > li:first-child ${StyledColorSwatch} {
    border-top-left-radius: ${p => p.theme.space.sm};
    border-top-right-radius: ${p => p.theme.space.sm};
  }

  & > li:last-child ${StyledColorSwatch} {
    border-bottom-left-radius: ${p => p.theme.space.sm};
    border-bottom-right-radius: ${p => p.theme.space.sm};
  }
`;

const Hue: FC<{ hue: string }> = ({ hue }) => {
  const colors = (PALETTE as any)[hue];

  return (
    <StyledList>
      {Object.keys(colors).map(shade => {
        const color = colors[shade as any];
        const title = `${hue}-${shade}`;

        return (
          <li key={shade}>
            <StyledColorSwatch color={color}>
              <StyledColorTitle>{title}</StyledColorTitle>
              <StyledColorHex>{color}</StyledColorHex>
            </StyledColorSwatch>
          </li>
        );
      })}
    </StyledList>
  );
};

interface IArgs {
  palette: IGardenTheme['palette'];
}

export const PaletteStory: StoryFn<IArgs> = ({ palette }) => {
  const hues = Object.keys(palette).filter(
    hue => hue !== 'black' && hue !== 'white' && hue !== 'product'
  );
  // Convert the given list of `hues` to column pairs
  const rows = hues.reduce((retVal: string[][], currentValue, index, array) => {
    if (index % 2 === 0) {
      const pair: string[] = array.slice(index, index + 2);

      retVal.push(pair);
    }

    return retVal;
  }, []);

  return (
    <StyledColorPalette>
      <Grid>
        {rows.map((row, index) => {
          const hue1 = row[0];
          const hue2 = row[1];

          return (
            <StyledRow key={index}>
              <Grid.Col sm>
                <Hue hue={hue1} />
              </Grid.Col>
              <StyledCol sm>{!!hue2 && <Hue hue={hue2} />}</StyledCol>
            </StyledRow>
          );
        })}
      </Grid>
    </StyledColorPalette>
  );
};
