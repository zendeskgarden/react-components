<code class="u-display-block u-fg-grey-600 u-font-family-monospace u-fs-md u-mb-sm">import { palette } from '@zendeskgarden/react-theming'</code>

The Garden palette contains **product** and **UI** colors along with `white`
and `black`. UI colors are used to style interface elements. Primary colors
are used to style interface structure, actionable items, and validation.
Secondary colors are used to support the primary UI via status, infographics,
and illustrations. Careful consideration for color contrast and accessibility
is wrapped into the palette.

### Primary

Primary colors are available across the following 6 hues.

- Grey
- Blue
- Red
- Yellow
- Green
- Kale

Each hue has 8 shades, from light to dark. Shades are numbered `100` (extra
light) through `800` (extra dark), similar to the manner font weight is
numbered in CSS. The primary hues and shades form the majority basis of
Garden's component UI. For example, many components – buttons, form inputs,
tabs, etc. – are based on `blue[600]`. Validation states are represented
across `green`, `yellow`, and `red` hues.

Except for `yellow` (which is notoriously challenging to make both beautiful
and accessible), all `600`, `700`, and `800` shades exceed the WCAG AA
contrast of 4.5:1 against white or `100` backgrounds. Furthermore, the `800`
shades are AAA accessible in that they achieve contrasts over 7:1 against
white or `100` backgrounds. Only the `700` and `800` shades of yellow meet
similar WCAG contrast standards.

### Secondary

The remaining secondary hues are offered in bright shades of `400` (light)
and `600` (dark). Corresponding muted shades are keyed as `M400` and `M600`.

Except for `lemon` and `lime`, all `400` shades in the secondary palette meet
a minimum contrast of 3:1, which passes WCAG contrast requirements for icons
on white or `100` backgrounds. Except for `lemon`, all `600` secondary shades
meet a minimum contrast ratio of 4.5:1 and pass WCAG requirements for text on
white or `100` backgrounds.

```jsx
const { palette } = require('@zendeskgarden/react-theming/src');
const { LG } = require('@zendeskgarden/react-typography/src');

const Swatch = styled.div`
  max-width: 92px;
  box-shadow: ${props => props.theme.shadows.lg('8px', '12px')};
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
