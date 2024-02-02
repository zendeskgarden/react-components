"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[9361],{"./packages/buttons/demo/toggleButton.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,toggleButton:()=>toggleButton});__webpack_require__("./node_modules/react/index.js");var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_storybook_client_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/client-api"),_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/buttons/src/elements/ToggleButton.tsx"),_README_md__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/buttons/README.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Packages/Buttons/ToggleButton",component:_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_5__.C}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"ToggleButton",args:{children:"Text"},argTypes:{disabled:{control:"boolean"},isPressed:{control:"radio",options:[!1,!0,"mixed"]}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=7149%3A39389"}},children:args=>{const updateArgs=(0,_storybook_client_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)()[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_5__.C,{...args,onClick:()=>updateArgs({isPressed:!args.isPressed})})}})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.UG,{children:_README_md__WEBPACK_IMPORTED_MODULE_6__})]})}const toggleButton=args=>{const updateArgs=(0,_storybook_client_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)()[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_5__.C,{...args,onClick:()=>updateArgs({isPressed:!args.isPressed})})};toggleButton.storyName="ToggleButton",toggleButton.argTypes={disabled:{control:"boolean"},isPressed:{control:"radio",options:[!1,!0,"mixed"]}},toggleButton.args={children:"Text"},toggleButton.parameters={storySource:{source:"args => {\n  const updateArgs = useArgs()[1];\n  const handleClick = () => updateArgs({\n    isPressed: args.isPressed ? false : true\n  });\n  return <ToggleButton {...args} onClick={handleClick} />;\n}"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=7149%3A39389"}};const componentMeta={title:"Packages/Buttons/ToggleButton",component:_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_5__.C,tags:["stories-mdx"],includeStories:["toggleButton"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["toggleButton"]},"./packages/buttons/src/elements/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button_Button});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),dist=__webpack_require__("./node_modules/react-merge-refs/dist/index.mjs"),types=__webpack_require__("./packages/buttons/src/types/index.ts"),StyledButton=__webpack_require__("./packages/buttons/src/styled/StyledButton.ts"),useButtonGroupContext=__webpack_require__("./packages/buttons/src/utils/useButtonGroupContext.ts"),useSplitButtonContext=__webpack_require__("./packages/buttons/src/utils/useSplitButtonContext.ts"),StyledIcon=__webpack_require__("./packages/buttons/src/styled/StyledIcon.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StartIconComponent=props=>(0,jsx_runtime.jsx)(StyledIcon.x,{position:"start",...props});StartIconComponent.displayName="StartIconComponent",StartIconComponent.displayName="Button.StartIcon";const StartIcon=StartIconComponent;try{StartIcon.displayName="Button.StartIcon",StartIcon.__docgenInfo={description:"",displayName:"Button.StartIcon",props:{isRotated:{defaultValue:null,description:"Rotates icon 180 degrees",name:"isRotated",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/buttons/src/elements/components/StartIcon.tsx#Button.StartIcon"]={docgenInfo:Button.StartIcon.__docgenInfo,name:"Button.StartIcon",path:"packages/buttons/src/elements/components/StartIcon.tsx#Button.StartIcon"})}catch(__react_docgen_typescript_loader_error){}const EndIconComponent=props=>(0,jsx_runtime.jsx)(StyledIcon.x,{position:"end",...props});EndIconComponent.displayName="EndIconComponent",EndIconComponent.displayName="Button.EndIcon";const EndIcon=EndIconComponent;try{EndIcon.displayName="Button.EndIcon",EndIcon.__docgenInfo={description:"",displayName:"Button.EndIcon",props:{isRotated:{defaultValue:null,description:"Rotates icon 180 degrees",name:"isRotated",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/buttons/src/elements/components/EndIcon.tsx#Button.EndIcon"]={docgenInfo:Button.EndIcon.__docgenInfo,name:"Button.EndIcon",path:"packages/buttons/src/elements/components/EndIcon.tsx#Button.EndIcon"})}catch(__react_docgen_typescript_loader_error){}const ButtonComponent=(0,react.forwardRef)(((props,ref)=>{const buttonGroupContext=(0,useButtonGroupContext.M)(),splitButtonContext=(0,useSplitButtonContext.i)();let computedRef=ref,computedProps={...props,focusInset:props.focusInset||void 0!==buttonGroupContext||splitButtonContext};if(buttonGroupContext&&!props.disabled){if(!props.value)throw new Error('"value" prop must be provided to Button when used within a ButtonGroup');computedProps=buttonGroupContext.getButtonProps({isSelected:props.value===buttonGroupContext.selectedItem,...computedProps}),computedRef=(0,dist.l)([computedProps.ref,ref])}return(0,jsx_runtime.jsx)(StyledButton.S,{...computedProps,ref:computedRef})}));ButtonComponent.displayName="Button",ButtonComponent.propTypes={isNeutral:prop_types_default().bool,isPrimary:prop_types_default().bool,isDanger:prop_types_default().bool,isPill:prop_types_default().bool,isBasic:prop_types_default().bool,focusInset:prop_types_default().bool,isLink:prop_types_default().bool,isStretched:prop_types_default().bool,isSelected:prop_types_default().bool,size:prop_types_default().oneOf(types.N)},ButtonComponent.defaultProps={size:"medium"};const Button_Button=ButtonComponent;Button_Button.EndIcon=EndIcon,Button_Button.StartIcon=StartIcon;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{isDanger:{defaultValue:null,description:"Applies danger styling",name:"isDanger",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Specifies the button size",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"large"'}]}},isStretched:{defaultValue:null,description:"Stretches the button fill to its container width",name:"isStretched",required:!1,type:{name:"boolean"}},isNeutral:{defaultValue:null,description:"Applies neutral button styling",name:"isNeutral",required:!1,type:{name:"boolean"}},isPrimary:{defaultValue:null,description:"Applies primary button styling",name:"isPrimary",required:!1,type:{name:"boolean"}},isBasic:{defaultValue:null,description:"Applies basic button styling",name:"isBasic",required:!1,type:{name:"boolean"}},isLink:{defaultValue:null,description:"Applies link (anchor) button styling",name:"isLink",required:!1,type:{name:"boolean"}},isPill:{defaultValue:null,description:"Applies pill button styling",name:"isPill",required:!1,type:{name:"boolean"}},focusInset:{defaultValue:null,description:"Applies inset `box-shadow` styling on focus",name:"focusInset",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"@ignore prop used by `ButtonGroup`",name:"isSelected",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/buttons/src/elements/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"packages/buttons/src/elements/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./packages/buttons/src/elements/ToggleButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>ToggleButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/buttons/src/elements/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ToggleButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{isPressed,...otherProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.z,{"aria-pressed":isPressed,ref,...otherProps})}));ToggleButton.displayName="ToggleButton",ToggleButton.propTypes={..._Button__WEBPACK_IMPORTED_MODULE_2__.z.propTypes,isPressed:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf([!0,!1,"mixed"])},ToggleButton.defaultProps={size:"medium"};try{ToggleButton.displayName="ToggleButton",ToggleButton.__docgenInfo={description:"",displayName:"ToggleButton",props:{isPressed:{defaultValue:null,description:'Determines if the button is pressed. Use "mixed" to indicate that\nthe toggle controls other elements which do not share the same value.',name:"isPressed",required:!1,type:{name:'boolean | "mixed"'}},isDanger:{defaultValue:null,description:"Applies danger styling",name:"isDanger",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Specifies the button size",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"large"'}]}},isStretched:{defaultValue:null,description:"Stretches the button fill to its container width",name:"isStretched",required:!1,type:{name:"boolean"}},isNeutral:{defaultValue:null,description:"Applies neutral button styling",name:"isNeutral",required:!1,type:{name:"boolean"}},isPrimary:{defaultValue:null,description:"Applies primary button styling",name:"isPrimary",required:!1,type:{name:"boolean"}},isBasic:{defaultValue:null,description:"Applies basic button styling",name:"isBasic",required:!1,type:{name:"boolean"}},isLink:{defaultValue:null,description:"Applies link (anchor) button styling",name:"isLink",required:!1,type:{name:"boolean"}},isPill:{defaultValue:null,description:"Applies pill button styling",name:"isPill",required:!1,type:{name:"boolean"}},focusInset:{defaultValue:null,description:"Applies inset `box-shadow` styling on focus",name:"focusInset",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"@ignore prop used by `ButtonGroup`",name:"isSelected",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/buttons/src/elements/ToggleButton.tsx#ToggleButton"]={docgenInfo:ToggleButton.__docgenInfo,name:"ToggleButton",path:"packages/buttons/src/elements/ToggleButton.tsx#ToggleButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/buttons/src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SIZE});__webpack_require__("./node_modules/react/index.js");const SIZE=["small","medium","large"]},"./packages/buttons/src/utils/useButtonGroupContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>useButtonGroupContext,u:()=>ButtonGroupContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ButtonGroupContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useButtonGroupContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ButtonGroupContext)},"./packages/buttons/src/utils/useSplitButtonContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>SplitButtonContext,i:()=>useSplitButtonContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const SplitButtonContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useSplitButtonContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SplitButtonContext)},"./node_modules/react-merge-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function o(f){return r=>{f.forEach((n=>{"function"==typeof n?n(r):null!=n&&(n.current=r)}))}}__webpack_require__.d(__webpack_exports__,{l:()=>o})},"./packages/buttons/README.md":module=>{module.exports="# @zendeskgarden/react-buttons [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-buttons)](https://www.npmjs.com/package/@zendeskgarden/react-buttons)\n\nThis package includes components relating to buttons in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-buttons\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n### Button\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Button } from '@zendeskgarden/react-buttons';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <>\n    <Button onClick={() => alert('clicked')}>Default</Button>\n    <Button isPrimary isDanger>\n      Primary danger button\n    </Button>\n  </>\n</ThemeProvider>;\n```\n\n### Media button\n\n```jsx\nimport React, { useState } from 'react';\nimport { Button } from '@zendeskgarden/react-buttons';\nimport StartIcon from '@zendeskgarden/icons/src/16/shield-stroke.svg';\nimport EndIcon from '@zendeskgarden/icons/src/16/chevron-down-stroke.svg';\n\nconst MediaButton = ({ children, ...props }) => {\n  const [isRotated, setRotated] = useState(false);\n\n  return (\n    <Button onClick={() => setRotated(!isRotated)} {...props}>\n      <Button.StartIcon>\n        <StartIcon />\n      </Button.StartIcon>\n      {children}\n      <Button.EndIcon isRotated={isRotated}>\n        <EndIcon />\n      </Button.EndIcon>\n    </Button>\n  );\n};\n```\n\n### Button group\n\n```jsx\nimport React, { useState } from 'react';\nimport { ButtonGroup, Button } from '@zendeskgarden/react-buttons';\n\nconst MyButtonGroup = ({ children, initialItem, ...props }) => {\n  const [selectedItem, setSelectedItem] = useState(initialItem);\n\n  return (\n    <ButtonGroup\n      selectedItem={selectedItem}\n      onSelect={selectedItem => setSelectedItem(selectedItem)}\n      {...props}\n    >\n      {children}\n    </ButtonGroup>\n  );\n};\n\n<MyButtonGroup initialKey=\"item-1\">\n  <Button key=\"item-1\">Item 1</Button>\n  <Button key=\"item-2\">Item 2</Button>\n  <Button key=\"item-3\">Item 3</Button>\n</MyButtonGroup>;\n```\n"}}]);