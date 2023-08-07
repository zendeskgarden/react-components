"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[9361],{"./packages/buttons/demo/toggleButton.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,toggleButton:()=>toggleButton});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_storybook_client_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/client-api"),_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/buttons/src/elements/ToggleButton.tsx"),_README_md__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/buttons/README.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Packages/Buttons/ToggleButton",component:_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_5__.C}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"ToggleButton",args:{children:"Text"},argTypes:{disabled:{control:"boolean"},isPressed:{control:"radio",options:[!1,!0,"mixed"]}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=7149%3A39389"}},children:args=>{const updateArgs=(0,_storybook_client_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)()[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_5__.C,{...args,onClick:()=>updateArgs({isPressed:!args.isPressed})})}})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.UG,{children:_README_md__WEBPACK_IMPORTED_MODULE_6__})]})}const toggleButton=args=>{const updateArgs=(0,_storybook_client_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)()[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_5__.C,{...args,onClick:()=>updateArgs({isPressed:!args.isPressed})})};toggleButton.storyName="ToggleButton",toggleButton.argTypes={disabled:{control:"boolean"},isPressed:{control:"radio",options:[!1,!0,"mixed"]}},toggleButton.args={children:"Text"},toggleButton.parameters={storySource:{source:"args => {\n  const updateArgs = useArgs()[1];\n  const handleClick = () => updateArgs({\n    isPressed: args.isPressed ? false : true\n  });\n  return <ToggleButton {...args} onClick={handleClick} />;\n}"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=7149%3A39389"}};const componentMeta={title:"Packages/Buttons/ToggleButton",component:_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_5__.C,tags:["stories-mdx"],includeStories:["toggleButton"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./packages/buttons/README.md":module=>{module.exports="# @zendeskgarden/react-buttons [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-buttons)](https://www.npmjs.com/package/@zendeskgarden/react-buttons)\n\nThis package includes components relating to buttons in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-buttons\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n### Button\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Button } from '@zendeskgarden/react-buttons';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <>\n    <Button onClick={() => alert('clicked')}>Default</Button>\n    <Button isPrimary isDanger>\n      Primary danger button\n    </Button>\n  </>\n</ThemeProvider>;\n```\n\n### Media button\n\n```jsx\nimport React, { useState } from 'react';\nimport { Button } from '@zendeskgarden/react-buttons';\nimport StartIcon from '@zendeskgarden/icons/src/16/shield-stroke.svg';\nimport EndIcon from '@zendeskgarden/icons/src/16/chevron-down-stroke.svg';\n\nconst MediaButton = ({ children, ...props }) => {\n  const [isRotated, setRotated] = useState(false);\n\n  return (\n    <Button onClick={() => setRotated(!isRotated)} {...props}>\n      <Button.StartIcon>\n        <StartIcon />\n      </Button.StartIcon>\n      {children}\n      <Button.EndIcon isRotated={isRotated}>\n        <EndIcon />\n      </Button.EndIcon>\n    </Button>\n  );\n};\n```\n\n### Button group\n\n```jsx\nimport React, { useState } from 'react';\nimport { ButtonGroup, Button } from '@zendeskgarden/react-buttons';\n\nconst MyButtonGroup = ({ children, initialItem, ...props }) => {\n  const [selectedItem, setSelectedItem] = useState(initialItem);\n\n  return (\n    <ButtonGroup\n      selectedItem={selectedItem}\n      onSelect={selectedItem => setSelectedItem(selectedItem)}\n      {...props}\n    >\n      {children}\n    </ButtonGroup>\n  );\n};\n\n<MyButtonGroup initialKey=\"item-1\">\n  <Button key=\"item-1\">Item 1</Button>\n  <Button key=\"item-2\">Item 2</Button>\n  <Button key=\"item-3\">Item 3</Button>\n</MyButtonGroup>;\n```\n"}}]);