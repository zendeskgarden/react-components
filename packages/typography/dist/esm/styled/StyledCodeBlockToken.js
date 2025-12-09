/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledCodeBlock } from './StyledCodeBlock.js';

const COMPONENT_ID = 'typography.codeblock_token';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const colors = {
    boolean: getColor({
      theme,
      dark: {
        hue: 'azure',
        shade: 600
      },
      light: {
        hue: 'royal',
        shade: 700
      }
    }),
    builtin: getColor({
      theme,
      hue: 'teal',
      dark: {
        shade: 600
      },
      light: {
        shade: 700
      }
    }),
    comment: getColor({
      theme,
      dark: {
        hue: 'mint',
        shade: 600
      },
      light: {
        hue: 'lime',
        shade: 700
      }
    }),
    constant: getColor({
      theme,
      dark: {
        hue: 'blue',
        shade: 600
      },
      light: {
        hue: 'azure',
        shade: 700
      }
    }),
    coord: getColor({
      theme,
      hue: 'blue',
      dark: {
        shade: 200
      },
      light: {
        shade: 800
      }
    }),
    deleted: getColor({
      theme,
      hue: 'red',
      dark: {
        shade: 200
      },
      light: {
        shade: 800
      }
    }),
    diff: getColor({
      theme,
      hue: 'yellow',
      dark: {
        shade: 200
      },
      light: {
        shade: 800
      }
    }),
    function: getColor({
      theme,
      dark: {
        hue: 'yellow',
        shade: 300
      },
      light: {
        hue: 'orange',
        shade: 700
      }
    }),
    inserted: getColor({
      theme,
      hue: 'green',
      dark: {
        shade: 200
      },
      light: {
        shade: 800
      }
    }),
    keyword: getColor({
      theme,
      hue: 'fuschia',
      dark: {
        shade: 600
      },
      light: {
        shade: 700
      }
    }),
    name: getColor({
      theme,
      dark: {
        hue: 'blue',
        shade: 400
      },
      light: {
        hue: 'crimson',
        shade: 700
      }
    }),
    number: getColor({
      theme,
      hue: 'green',
      dark: {
        shade: 400
      },
      light: {
        shade: 700
      }
    }),
    punctuation: getColor({
      theme,
      dark: {
        hue: 'grey',
        shade: 700
      },
      light: {
        hue: 'red',
        shade: 900
      }
    }),
    regex: getColor({
      theme,
      hue: 'red',
      shade: 600
    }),
    value: getColor({
      theme,
      dark: {
        hue: 'crimson',
        shade: 600
      },
      light: {
        hue: 'red',
        shade: 800
      }
    })
  };
  return css(["&.builtin,&.class-name,&.tag:not(.punctuation):not(.attr-name):not(.attr-value):not(.script){color:", ";}&.doctype,&.prolog,&.tag.punctuation:not(.attr-value):not(.script):not(.spread){color:", ";}&.attribute.value,&.attr-value,&.atrule,&.cdata,&.string,&.url.content{color:", ";}&.constant,&.interpolation-punctuation{color:", ";}&.attr-name,&.attr-value.spread,&.environment,&.interpolation,&.parameter,&.property,&.property-access,&.variable{color:", ";}&.parameter.punctuation,&.attr-name + .attr-value.punctuation{color:inherit;}&.regex{color:", ";}&.boolean,&.bold:not(.diff),&.entity,&.important,&.tag:not(.punctuation):not(.attr-name):not(.attr-value):not(.script):not(.class-name){color:", ";}&.number,&.unit{color:", ";}&.assign-left,&.function,&.selector:not(.attribute){color:", ";}&.atrule.rule,&.keyword{color:", ";}&.blockquote,&.comment,&.shebang{color:", ";}", ".language-css &&.plain{color:", ";}", ".language-diff &&.coord{color:", ";}", ".language-diff &&.deleted{color:", ";}", ".language-diff &&.diff{color:", ";}", ".language-diff &&.inserted{color:", ";}"], colors.builtin, colors.punctuation, colors.value, colors.constant, colors.name, colors.regex, colors.boolean, colors.number, colors.function, colors.keyword, colors.comment, StyledCodeBlock, colors.value, StyledCodeBlock, colors.coord, StyledCodeBlock, colors.deleted, StyledCodeBlock, colors.diff, StyledCodeBlock, colors.inserted);
};
const StyledCodeBlockToken = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCodeBlockToken",
  componentId: "sc-1hkshdq-0"
})(["display:inline-block;&.bold:not(.diff){font-weight:", ";}&.coord{padding-left:0.75em;}&.italic{font-style:italic;}&.prefix{width:2em;text-align:center;}", ";", ";"], props => props.theme.fontWeights.semibold, colorStyles, componentStyles);

export { StyledCodeBlockToken };
