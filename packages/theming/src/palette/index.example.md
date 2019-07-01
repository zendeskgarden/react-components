This is the Garden palette.

```jsx
const { palette } = require('@zendeskgarden/react-theming/src');
const { LG } = require('@zendeskgarden/react-typography/src');

const Swatch = styled.div`
  max-width: 92px;
  box-shadow: 0 8px 12px 0 rgba(4, 68, 77, 0.15);
`;

const SwatchColor = styled.div`
  height: 80px;
  background-color: ${props => props.color};
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

<Grid>
  {Object.keys(palette).map(
    hue =>
      typeof palette[hue] === 'object' && (
        <div key={hue}>
          <Row>
            <Col>
              <LG>{hue.toUpperCase()}</LG>
            </Col>
          </Row>
          <Row>
            {Object.keys(palette[hue]).map(shade => (
              <Col key={shade} style={{ marginBottom: 16 }}>
                <Swatch title={`${hue}[${shade}]: ${palette[hue][shade]}`}>
                  <SwatchColor color={palette[hue][shade]} />
                  <SwatchInfo>
                    <SwatchName>{shade}</SwatchName>
                    <SwatchHex>{palette[hue][shade]}</SwatchHex>
                  </SwatchInfo>
                </Swatch>
              </Col>
            ))}
          </Row>
        </div>
      )
  )}
</Grid>;
```
