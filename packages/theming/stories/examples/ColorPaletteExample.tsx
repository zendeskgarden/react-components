/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { ThemeProvider, getColor, PALETTE } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { LG } from '@zendeskgarden/react-typography';

const Swatch = styled.div`
  box-shadow: ${props =>
    props.theme.shadows.lg('8px', '12px', getColor('chromeHue', 600, props.theme, 0.15)!)};
  max-width: 92px;
`;

const SwatchColor = styled.div`
  background-color: ${props => props.color};
  height: 80px;
`;

const SwatchInfo = styled.div`
  padding: ${props => props.theme.space.xs};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const SwatchName = styled.div`
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const SwatchHex = styled.div`
  text-transform: uppercase;
  color: ${props => props.theme.colors.neutralHue[600]};
`;

const StyledGrid = styled(Grid)`
  color: ${p => p.theme.colors.foreground};
  font-family: ${p => p.theme.fonts.system};
  font-size: ${p => p.theme.fontSizes.md};
`;

export const ColorPaletteExample = () => (
  <ThemeProvider>
    <StyledGrid>
      {Object.keys(PALETTE).map(
        hue =>
          typeof (PALETTE as Record<string, any>)[hue] === 'object' && (
            <div key={hue}>
              <Row>
                <Col>
                  <LG>{hue.toUpperCase()}</LG>
                </Col>
              </Row>
              <Row>
                {Object.keys((PALETTE as Record<string, any>)[hue]).map(shade => (
                  <Col key={shade} style={{ marginBottom: 16 }}>
                    <Swatch
                      title={`${hue}[${shade}]: ${(PALETTE as Record<string, any>)[hue][shade]}`}
                    >
                      <SwatchColor color={(PALETTE as Record<string, any>)[hue][shade]} />
                      <SwatchInfo>
                        <SwatchName>{shade}</SwatchName>
                        <SwatchHex>{(PALETTE as Record<string, any>)[hue][shade]}</SwatchHex>
                      </SwatchInfo>
                    </Swatch>
                  </Col>
                ))}
              </Row>
            </div>
          )
      )}
    </StyledGrid>
  </ThemeProvider>
);
