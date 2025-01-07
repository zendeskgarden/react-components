/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import styled, { useTheme } from 'styled-components';
import { opacify } from 'color2k';
import { IGardenTheme, getCheckeredBackground, getColor } from '@zendeskgarden/react-theming';
import { Code, LG, MD, Span } from '@zendeskgarden/react-typography';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';
import { Tag } from '@zendeskgarden/react-tags';

const StyledDiv = styled.div.attrs<{ $background: string }>(p => ({
  style: { background: p.$background }
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 208px;
`;

interface IColorProps {
  dark?: object;
  hue?: string;
  light?: object;
  offset?: number;
  shade?: number;
  theme: IGardenTheme;
  transparency?: number;
  variable?: string;
}

const Color = ({ dark, hue, light, offset, shade, theme, transparency, variable }: IColorProps) => {
  let background;
  let tag;
  let generatedHue;

  try {
    const backgroundColor = getColor({
      dark,
      hue,
      light,
      offset,
      shade,
      theme,
      transparency,
      variable
    });

    background = getCheckeredBackground({
      theme,
      size: 26,
      overlay: backgroundColor
    });
    tag = (
      <Tag hue={getColor({ theme, variable: 'background.default' })} size="large">
        {backgroundColor}
      </Tag>
    );
    generatedHue = [...Array(12).keys()].reduce<Record<number, string>>((retVal, index) => {
      const _shade = (index + 1) * 100;

      retVal[_shade] = getColor({ theme, hue: opacify(backgroundColor, 1), shade: _shade });

      return retVal;
    }, {});

    /* eslint-disable-next-line no-console */
    console.log(generatedHue);
  } catch (error) {
    background = 'transparent';
    tag = (
      <Tag hue="dangerHue" size="large">
        {error instanceof Error ? error.message : String(error)}
      </Tag>
    );
  }

  return (
    <>
      <StyledDiv $background={background}>{tag}</StyledDiv>
      {!!generatedHue && (
        <>
          <LG style={{ marginTop: 20 }}>Generated hue</LG>
          <MD style={{ marginBottom: 12 }}>
            <Span hue="foreground.subtle">
              Not used when <Code>hue[shade]</Code> is defined by the theme{' '}
              <Anchor href="https://garden.zendesk.com/components/theme-object#palette" isExternal>
                palette
              </Anchor>
            </Span>
          </MD>
          <Grid gutters={false}>
            <Grid.Row wrap="nowrap">
              {Object.values(generatedHue).map((backgroundColor, index) => (
                <Grid.Col key={index}>
                  <StyledDiv $background={backgroundColor}>
                    <Tag
                      hue={getColor({ theme, variable: 'background.default' })}
                      style={{ position: 'absolute', transform: 'rotate(-90deg)' }}
                    >
                      {backgroundColor}
                    </Tag>
                  </StyledDiv>
                </Grid.Col>
              ))}
            </Grid.Row>
          </Grid>
        </>
      )}
    </>
  );
};

interface IArgs extends Omit<IColorProps, 'theme'> {
  theme: {
    colors: Omit<IGardenTheme['colors'], 'base'>;
    opacity: IGardenTheme['opacity'];
    palette: IGardenTheme['palette'];
  };
}

export const GetColorStory: StoryFn<IArgs> = ({
  dark,
  hue,
  light,
  offset,
  shade,
  theme: _theme,
  transparency,
  variable
}) => {
  const parentTheme = useTheme();
  const theme = {
    ...parentTheme,
    colors: { ..._theme.colors, base: parentTheme.colors.base },
    opacity: _theme.opacity,
    palette: _theme.palette
  };

  return (
    <Color
      dark={dark}
      hue={hue}
      light={light}
      offset={offset}
      shade={shade}
      theme={theme}
      transparency={transparency}
      variable={variable}
    />
  );
};
