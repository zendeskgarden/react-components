"use strict";(self.webpackChunk_zendeskgarden_react_components=self.webpackChunk_zendeskgarden_react_components||[]).push([[9968],{"./packages/drag-drop/demo/draggable-list.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>draggable_list_stories,draggableList:()=>draggableList});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),DraggableList=__webpack_require__("./packages/drag-drop/src/elements/draggable-list/DraggableList.tsx"),Draggable=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./packages/drag-drop/src/elements/draggable/Draggable.tsx")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DraggableListStory=_ref=>{let{items,indicatorIndex,"aria-label":ariaLabel,...args}=_ref;return(0,jsx_runtime.jsxs)(DraggableList.X,{...args,children:[0===indicatorIndex&&(0,jsx_runtime.jsx)(DraggableList.X.DropIndicator,{"aria-label":ariaLabel}),items.map(((item,idx)=>{const endIdx=items.length-1;return(0,jsx_runtime.jsxs)(react.Fragment,{children:["number"==typeof indicatorIndex&&indicatorIndex>=1&&indicatorIndex<=endIdx&&indicatorIndex===idx&&(0,jsx_runtime.jsx)(DraggableList.X.DropIndicator,{"aria-label":ariaLabel}),(0,jsx_runtime.jsx)(DraggableList.X.Item,{children:(0,jsx_runtime.jsxs)(Draggable._,{children:[(0,jsx_runtime.jsx)(Draggable._.Grip,{}),(0,jsx_runtime.jsx)(Draggable._.Content,{children:item})]})})]},item)})),indicatorIndex===items.length&&(0,jsx_runtime.jsx)(DraggableList.X.DropIndicator,{"aria-label":ariaLabel})]})};DraggableListStory.displayName="DraggableListStory";const LIST_ITEMS=["Turnip","Corn","Celery","Grape"];var README=__webpack_require__("./packages/drag-drop/README.md");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Packages/Drag-Drop/DraggableList",component:DraggableList.X,subcomponents:{"DraggableList.DropIndicator":DraggableList.X.DropIndicator,"DraggableList.Item":DraggableList.X.Item}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"DraggableList",args:{items:LIST_ITEMS,"aria-label":"Label"},argTypes:{items:{name:"DraggableList.Item[]",table:{category:"Story"}},indicatorIndex:{name:"DraggableList.DropIndicator",control:{type:"number"},table:{category:"Story"}},"aria-label":{table:{category:"DraggableList.DropIndicator"}}},parameters:{design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=14015-52393"}},children:args=>(0,jsx_runtime.jsx)(DraggableListStory,{...args})})}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README})]})}const draggableList=args=>(0,jsx_runtime.jsx)(DraggableListStory,{...args});draggableList.storyName="DraggableList",draggableList.argTypes={items:{name:"DraggableList.Item[]",table:{category:"Story"}},indicatorIndex:{name:"DraggableList.DropIndicator",control:{type:"number"},table:{category:"Story"}},"aria-label":{table:{category:"DraggableList.DropIndicator"}}},draggableList.args={items:LIST_ITEMS,"aria-label":"Label"},draggableList.parameters={storySource:{source:"args => <DraggableListStory {...args} />"},design:{allowFullscreen:!0,type:"figma",url:"https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=14015-52393"}};const componentMeta={title:"Packages/Drag-Drop/DraggableList",component:DraggableList.X,subcomponents:{"DraggableList.DropIndicator":DraggableList.X.DropIndicator,"DraggableList.Item":DraggableList.X.Item},tags:["stories-mdx"],includeStories:["draggableList"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const draggable_list_stories=componentMeta,__namedExportsOrder=["draggableList"]},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./node_modules/@zendeskgarden/svg-icons/src/12/grip.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _g,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgGrip(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,focusable:"false",viewBox:"0 0 12 12","aria-hidden":"true"},props),_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{fill:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{width:2,height:2,x:3,y:1,rx:.5,ry:.5}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{width:2,height:2,x:7,y:1,rx:.5,ry:.5}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{width:2,height:2,x:3,y:5,rx:.5,ry:.5}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{width:2,height:2,x:7,y:5,rx:.5,ry:.5}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{width:2,height:2,x:3,y:9,rx:.5,ry:.5}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{width:2,height:2,x:7,y:9,rx:.5,ry:.5}))))}},"./packages/drag-drop/README.md":module=>{module.exports="# @zendeskgarden/react-drag-drop [![npm version][npm version badge]][npm version link]\n\n[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/react-drag-drop\n[npm version link]: https://www.npmjs.com/package/@zendeskgarden/react-drag-drop\n\nThis package includes components related to drag and drop in the\n[Garden Design System](https://zendeskgarden.github.io/).\n\n## Installation\n\n```sh\nnpm install @zendeskgarden/react-drag-drop\n\n# Peer Dependencies - Also Required\nnpm install react react-dom styled-components @zendeskgarden/react-theming\n```\n\n## Usage\n\n```jsx\nimport { ThemeProvider } from '@zendeskgarden/react-theming';\nimport { Draggable, DraggableList, Dropzone } from '@zendeskgarden/react-drag-drop';\n\n/**\n * Place a `ThemeProvider` at the root of your React application\n */\n<ThemeProvider>\n  <DraggableList>\n    <DraggableList.Item>\n      <Draggable>\n        <Draggable.Grip />\n        <Draggable.Content>Petunia</Draggable.Content>\n      </Draggable>\n    </DraggableList.Item>\n  </DraggableList>\n\n  <Dropzone>\n    <Dropzone.Message>Drag items here</Dropzone.Message>\n  </Dropzone>\n</ThemeProvider>;\n```\n"}}]);