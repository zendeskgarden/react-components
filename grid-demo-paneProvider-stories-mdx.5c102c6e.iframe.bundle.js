"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[81],{"./packages/grid/demo/paneProvider.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,controlled:()=>controlled,default:()=>paneProvider_stories,uncontrolled:()=>uncontrolled});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),PaneProvider=__webpack_require__("./packages/grid/src/elements/pane/PaneProvider.tsx"),Pane=__webpack_require__("./packages/grid/src/elements/pane/Pane.tsx"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const StyledPanes=styled_components_browser_esm.Ay.div.withConfig({displayName:"PaneProviderStory__StyledPanes",componentId:"sc-f4gxju-0"})(["display:grid;direction:",";"],(props=>props.theme.rtl?"rtl":"ltr")),PaneProviderStory=_ref=>{let{totalPanesWidth,totalPanesHeight,columnValues,rowValues,defaultColumnValues,defaultRowValues,onChange,panes}=_ref;return(0,jsx_runtime.jsx)(PaneProvider.I,{totalPanesWidth,totalPanesHeight,columnValues,rowValues,defaultColumnValues,defaultRowValues,onChange,children:_ref2=>{let{getGridTemplateColumns,getGridTemplateRows}=_ref2;return(0,jsx_runtime.jsx)(StyledPanes,{style:{width:totalPanesWidth,height:totalPanesHeight,gridTemplateRows:getGridTemplateRows(),gridTemplateColumns:getGridTemplateColumns()},children:panes.map(((pane,index)=>(0,jsx_runtime.jsxs)(Pane.Z,{children:[(0,jsx_runtime.jsx)(Pane.Z.Content,{children:pane.content}),pane.splitters.map((splitter=>(0,jsx_runtime.jsx)(Pane.Z.Splitter,{...splitter,children:splitter.button&&(0,jsx_runtime.jsx)(Pane.Z.SplitterButton,{label:splitter.button.label,placement:splitter.button.placement})},splitter.layoutKey)))]},index)))})}})};PaneProviderStory.displayName="PaneProviderStory";var data=__webpack_require__("./packages/grid/demo/stories/data.ts"),README=__webpack_require__("./packages/grid/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Packages/Grid/PaneProvider",component:PaneProvider.I,subcomponents:{Pane:Pane.Z,"Pane.Content":Pane.Z.Content,"Pane.Splitter":Pane.Z.Splitter,"Pane.SplitterButton":Pane.Z.SplitterButton},args:{panes:data.s,totalPanesWidth:600,totalPanesHeight:600},argTypes:{panes:{name:"Pane[]",table:{category:"Story"}}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=8807%3A33252"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.uY,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"uncontrolled",children:"Uncontrolled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Uncontrolled",args:{defaultColumnValues:{"column-a":1,"column-b":1},defaultRowValues:{"row-1":1,"row-2":1}},argTypes:{columnValues:{control:!1},rowValues:{control:!1}},children:args=>(0,jsx_runtime.jsx)(PaneProviderStory,{...args})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"controlled",children:"Controlled"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Controlled",args:{columnValues:{"column-a":1,"column-b":1},rowValues:{"row-1":1,"row-2":1}},argTypes:{defaultColumnValues:{control:!1},defaultRowValues:{control:!1}},children:args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(PaneProviderStory,{...args,onChange:(rowValues,columnValues)=>updateArgs({rowValues,columnValues})})}})}),"\n",(0,jsx_runtime.jsx)(dist.oz,{children:README})]})}const uncontrolled=args=>(0,jsx_runtime.jsx)(PaneProviderStory,{...args});uncontrolled.storyName="Uncontrolled",uncontrolled.argTypes={columnValues:{control:!1},rowValues:{control:!1}},uncontrolled.args={defaultColumnValues:{"column-a":1,"column-b":1},defaultRowValues:{"row-1":1,"row-2":1}},uncontrolled.parameters={storySource:{source:"args => <PaneProviderStory {...args} />"}};const controlled=args=>{const updateArgs=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)()[1];return(0,jsx_runtime.jsx)(PaneProviderStory,{...args,onChange:(rowValues,columnValues)=>updateArgs({rowValues,columnValues})})};controlled.storyName="Controlled",controlled.argTypes={defaultColumnValues:{control:!1},defaultRowValues:{control:!1}},controlled.args={columnValues:{"column-a":1,"column-b":1},rowValues:{"row-1":1,"row-2":1}},controlled.parameters={storySource:{source:"args => {\n  const updateArgs = useArgs()[1];\n  const handleChange = (rowValues, columnValues) => updateArgs({\n    rowValues,\n    columnValues\n  });\n  return <PaneProviderStory {...args} onChange={handleChange} />;\n}"}};const componentMeta={title:"Packages/Grid/PaneProvider",parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=8807%3A33252"}},component:PaneProvider.I,subcomponents:{Pane:Pane.Z,"Pane.Content":Pane.Z.Content,"Pane.Splitter":Pane.Z.Splitter,"Pane.SplitterButton":Pane.Z.SplitterButton},args:{panes:data.s,totalPanesWidth:600,totalPanesHeight:600},argTypes:{panes:{name:"Pane[]",table:{category:"Story"}}},tags:["stories-mdx"],includeStories:["uncontrolled","controlled"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const paneProvider_stories=componentMeta,__namedExportsOrder=["uncontrolled","controlled"]},"./packages/grid/demo/stories/data.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>GRID_ROWS,s:()=>PANES});const GRID_ROWS=[{cols:[{children:"Col"}]},{cols:Array.from({length:12},((_,index)=>({children:index<9?`0${index+1}`:`${index+1}`,textAlign:"center"})))},{cols:Array(12).fill({children:"xl={1} lg={2} md={4} sm={6} xs={12}",textAlign:"center",xl:1,lg:2,md:4,sm:6,xs:12})},{cols:[{children:"size={4}",size:4,textAlign:"center"},{children:"size={4}",size:4,textAlign:"center"}]},{cols:[{children:"md={4}",md:3,textAlign:"center"},{children:"md={4} offsetMd={4}",md:3,offsetMd:6,textAlign:"center"}]}],PANES=[{content:"Almonds lime lingonberry seitan leek cilantro Southern Italian falafel bites salty strawberries crispy. Second course Malaysian hummus falafel bowl crunchy seaweed pinch of yum soup red grapes burritos mediterranean luxury bowl mushroom risotto mint hearty dark and stormy comforting pumpkin spice latte smoked tofu couscous. Vine tomatoes chai tea cookies double dark chocolate banana spiced peppermint blast peanut butter crunch enchiladas spicy dessert banana bread chickpea crust pizza Indian spiced lemon red lentil soup pine nuts cool springtime strawberry açai vegan walnut pesto tart lime mango crisp banh mi salad rolls overflowing berries basil. Maple orange tempeh samosa lychee green tea lime seeds coconut rice peppermint hearts of palm eating together fall red amazon pepper soy milk cinnamon toast pasta four-layer grenadillo shaved almonds. Plums mangos chia seeds strawberry spinach salad almond milk chai latte oranges street style Thai basil tacos miso dressing toasted hazelnuts fiery fruit blood orange smash hot Thai basil curry chocolate peanut butter dip.",splitters:[{layoutKey:"column-a",orientation:"end",min:0,max:2,"aria-label":"column-a splitter",button:{label:"toggle column-a"}}]},{content:"Farro platter peanut butter Italian pepperoncini edamame hummus sweet potato green onions winter picnic salad artichoke hearts cauliflower crunchy. Shiitake mushrooms shallots veggie burgers garlic sriracha noodles green grapes chocolate green pepper coconut sugar tomato and basil habanero golden figs cumin cilantro lime vinaigrette blackberries ultra creamy avocado pesto.",splitters:[{layoutKey:"row-1",orientation:"bottom",isFixed:!0,min:0,max:2,"aria-label":"row-1 splitter"}]},{content:"Ghost pepper hemp seeds lemongrass black beans peaches sparkling pomegranate punch avocado dressing drizzle spring candy cane winter avocado avocado basil pesto creamy cauliflower alfredo. Chocolate cookie thyme chili raspberries cool cucumbers zesty tofu pad thai portobello mushrooms red lentil curry a delicious meal vitamin glow crumbled lentils blueberry pops strawberry mango smoothie.",splitters:[{layoutKey:"row-2",orientation:"top",min:0,max:2,"aria-label":"row-2 splitter",button:{label:"toggle row-2"}}]},{content:"Green tea ginger carrot spiced juice sesame soba noodles coconut tahini drizzle butternut mix refreshing cucumber splash apple vinaigrette entree Bulgarian carrot pomegranate coriander cinnamon Sicilian pistachio pesto golden cayenne pepper kimchi scotch bonnet pepper chili pepper kale sweet potato black bean burrito roasted brussel sprouts Thai super chili cashew with edamame. Apricot fig arugula cashew salad basmati apples Caribbean red habanero lentils green bowl blueberries salted tabasco pepper almond milk crispy iceberg lettuce mediterranean vegetables ginger tofu miso turmeric glazed aubergine heat guacamole appetizer cranberry spritzer pineapple salsa.",splitters:[{layoutKey:"column-b",orientation:"start",isFixed:!0,min:0,max:2,"aria-label":"column-b splitter"}]}]},"./packages/grid/README.md":module=>{module.exports="# @zendeskgarden/react-grid [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-grid)](https://www.npmjs.com/package/@zendeskgarden/react-grid)\n\nThis package includes components relating to layout grids in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Grid\n\nThe `Grid` component is inspired by the Bootstrap flexbox\n[grid](https://getbootstrap.com/docs/4.3/layout/grid/). With Garden, all of\nthe features are dynamic (based on props) – including the number of grid\ncolumns and gutter width. The result is an incredibly powerful grid system\nthat will be immediately familiar to users of Bootstrap.\n\n## Pane\n\nThe `Pane.Splitter` component enables resizable-layouts between one or\nmore panes. `PaneProvider` and `Pane`\ncoordinate multiple `Pane.Splitter` components in a\n[CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) or\n[CSS Flex](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)\nlayout. The `PaneProvider` and `Pane.Splitter` components receive `fr` units as\nvalues for building responsive resizable layouts by default.\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-grid\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Grid, Row, Col } from '@zendeskgarden/react-grid';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Grid>\n    <Row>\n      <Col md={4}>1 of 3</Col>\n      <Col md={4}>2 of 3</Col>\n      <Col md={4}>3 of 3</Col>\n    </Row>\n    <Row>\n      <Col md={6}>1 of 2</Col>\n      <Col md={6}>2 of 2</Col>\n    </Row>\n  </Grid>\n</ThemeProvider>;\n```\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { PaneProvider, Pane } from '@zendeskgarden/react-grid';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <PaneProvider\n    totalPanesHeight={1000}\n    totalPanesWidth={1000}\n    defaultColumnValues={{ 'col-1': 1, 'col-2': 1 }}\n    defaultRowValues={{ 'row-1': 1, 'row-2': 1 }}\n  >\n    {({ getGridTemplateColumns, getGridTemplateRows }) => (\n      <div\n        style={{\n          display: 'grid',\n          width: '1000px',\n          height: '1000px',\n          gridTemplateRows: getGridTemplateRows(),\n          gridTemplateColumns: getGridTemplateColumns()\n        }}\n      >\n        <Pane>\n          <Pane.Content>Pane 1</Pane.Content>\n          <Pane.Splitter layoutKey=\"col-1\" min={0} max={2} orientation=\"end\" />\n        </Pane>\n        <Pane>\n          <Pane.Content>Pane 2</Pane.Content>\n          <Pane.Splitter layoutKey=\"row-1\" min={0} max={2} orientation=\"bottom\">\n            <Pane.SplitterButton label=\"toggle row-1\" />\n          </Pane.Splitter>\n        </Pane>\n        <Pane>\n          <Pane.Content>Pane 3</Pane.Content>\n          <Pane.Splitter layoutKey=\"row-2\" min={0} max={2} orientation=\"top\">\n            <Pane.SplitterButton label=\"toggle row-2\" placement=\"end\" />\n          </Pane.Splitter>\n        </Pane>\n        <Pane>\n          <Pane.Content>Pane 4</Pane.Content>\n          <Pane.Splitter layoutKey=\"col-2\" min={0} max={2} orientation=\"start\" />\n        </Pane>\n      </div>\n    )}\n  </PaneProvider>\n</ThemeProvider>;\n```\n\n> the `Pane` component uses [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)\n> which is not available in node.js or other server side environments (if testing with Jest) - please\n> make sure to polyfill as needed. Since the ref used internally is not created when server side rendering,\n> the ResizeObserver API will not be invoked and should not pose an issue when doing so.\n"}}]);