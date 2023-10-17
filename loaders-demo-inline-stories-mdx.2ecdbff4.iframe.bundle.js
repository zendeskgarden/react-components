"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[965],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/loaders/demo/inline.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>inline_stories,inline:()=>inline});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useText=__webpack_require__("./packages/theming/src/utils/useText.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./packages/theming/src/elements/theme/index.ts"),retrieveComponentStyles=__webpack_require__("./packages/theming/src/utils/retrieveComponentStyles.ts");const PULSE_ANIMATION=(0,styled_components_browser_esm.F4)(["0%,100%{opacity:.2;}50%{opacity:.8;}"]),StyledCircle=styled_components_browser_esm.ZP.circle.attrs({fill:"currentColor",cy:2,r:2}).withConfig({displayName:"StyledInline__StyledCircle",componentId:"sc-fxsb9l-0"})([""]);StyledCircle.defaultProps={theme:theme.Z};const StyledInline=styled_components_browser_esm.ZP.svg.attrs((props=>({"data-garden-id":"loaders.inline","data-garden-version":"storybook",viewBox:"0 0 16 4",width:props.size,height:.25*props.size}))).withConfig({displayName:"StyledInline",componentId:"sc-fxsb9l-1"})(["color:",";","{opacity:0.2;&:nth-child(1){animation:"," 1s infinite;animation-delay:",";}&:nth-child(2){animation:"," 1s infinite;animation-delay:0.2s;}&:nth-child(3){animation:"," 1s infinite;animation-delay:",";}}",""],(props=>props.color),StyledCircle,PULSE_ANIMATION,(props=>props.theme.rtl?"unset":"0.4s"),PULSE_ANIMATION,PULSE_ANIMATION,(props=>props.theme.rtl?"0.4s":"unset"),(props=>(0,retrieveComponentStyles.Z)("loaders.inline",props)));StyledInline.defaultProps={theme:theme.Z};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Inline=(0,react.forwardRef)(((_ref,ref)=>{let{size,color,...other}=_ref;const ariaLabel=(0,useText.X)(Inline,other,"aria-label","loading");return(0,jsx_runtime.jsxs)(StyledInline,{ref,size,color,"aria-label":ariaLabel,role:"img",...other,children:[(0,jsx_runtime.jsx)(StyledCircle,{cx:"14"}),(0,jsx_runtime.jsx)(StyledCircle,{cx:"8"}),(0,jsx_runtime.jsx)(StyledCircle,{cx:"2"})]})}));Inline.displayName="Inline",Inline.propTypes={size:prop_types_default().number,color:prop_types_default().string},Inline.defaultProps={size:16,color:"inherit"};try{Inline.displayName="Inline",Inline.__docgenInfo={description:"",displayName:"Inline",props:{size:{defaultValue:{value:"16"},description:"Sets the width in pixels and scales the loader proportionally",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:{value:"inherit"},description:"Sets the fill color. Inherits the parent's `color` by default.",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/loaders/src/elements/Inline.tsx#Inline"]={docgenInfo:Inline.__docgenInfo,name:"Inline",path:"packages/loaders/src/elements/Inline.tsx#Inline"})}catch(__react_docgen_typescript_loader_error){}var README=__webpack_require__("./packages/loaders/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Loaders/Inline",component:Inline}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Inline",argTypes:{color:{control:"color"}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=175%3A188"}},children:args=>(0,jsx_runtime.jsx)(Inline,{...args})})}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README})]})}const inline=args=>(0,jsx_runtime.jsx)(Inline,{...args});inline.storyName="Inline",inline.argTypes={color:{control:"color"}},inline.parameters={storySource:{source:"args => <Inline {...args} />"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=175%3A188"}};const componentMeta={title:"Packages/Loaders/Inline",component:Inline,tags:["stories-mdx"],includeStories:["inline"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const inline_stories=componentMeta},"./packages/theming/src/utils/retrieveComponentStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function retrieveComponentStyles(componentId,props){const components=props.theme&&props.theme.components;if(!components)return;const componentStyles=components[componentId];return"function"==typeof componentStyles?componentStyles(props):componentStyles}__webpack_require__.d(__webpack_exports__,{Z:()=>retrieveComponentStyles})},"./packages/theming/src/utils/useText.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>useText});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useText=function(component,props,name,text){let condition=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];const value=condition?props[name]:void 0;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(condition){if("children"===name)throw new Error("Error: `children` is not a valid `useText` prop.");if(null===value||""===value)throw new Error(component.displayName?`Error: you must provide a valid \`${name}\` text value for <${component.displayName}>.`:`Error: you must provide a valid \`${name}\` text value.`);if(void 0===value)return text}return value}),[component.displayName,value,name,text,condition])}},"./packages/loaders/README.md":module=>{module.exports="# @zendeskgarden/react-loaders [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-loaders)](https://www.npmjs.com/package/@zendeskgarden/react-loaders)\n\nThis package includes components relating to loaders in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-loaders\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n### Dots\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Dots } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Dots />;\n</ThemeProvider>;\n```\n\n### Inline\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Inline } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Inline />\n</ThemeProvider>;\n```\n\n### Progress\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Progress } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Progress value={40} />\n</ThemeProvider>;\n```\n\n### Skeleton\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Skeleton } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Skeleton />;\n</ThemeProvider>;\n```\n\n### Spinner\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Spinner } from '@zendeskgarden/react-loaders';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <Spinner />;\n</ThemeProvider>;\n```\n"}}]);